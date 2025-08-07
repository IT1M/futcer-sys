import type { ApiResponse } from "./types"

// Base API configuration
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "/api"
const API_TIMEOUT = 30000 // 30 seconds

// API Error class
export class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
    public code?: string,
    public details?: any,
  ) {
    super(message)
    this.name = "ApiError"
  }
}

// Request configuration interface
interface RequestConfig {
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH"
  headers?: Record<string, string>
  body?: any
  timeout?: number
  cache?: RequestCache
}

// Generic API request function
async function apiRequest<T>(endpoint: string, config: RequestConfig = {}): Promise<ApiResponse<T>> {
  const { method = "GET", headers = {}, body, timeout = API_TIMEOUT, cache = "no-cache" } = config

  const url = `${API_BASE_URL}${endpoint}`

  // Default headers
  const defaultHeaders: Record<string, string> = {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Accept-Language": "ar-SA,ar;q=0.9,en;q=0.8",
  }

  // Get auth token from localStorage or cookies
  const token = typeof window !== "undefined" ? localStorage.getItem("auth_token") : null
  if (token) {
    defaultHeaders.Authorization = `Bearer ${token}`
  }

  const requestHeaders = { ...defaultHeaders, ...headers }

  // Create AbortController for timeout
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), timeout)

  try {
    const response = await fetch(url, {
      method,
      headers: requestHeaders,
      body: body ? JSON.stringify(body) : undefined,
      signal: controller.signal,
      cache,
    })

    clearTimeout(timeoutId)

    // Handle non-JSON responses
    const contentType = response.headers.get("content-type")
    if (!contentType?.includes("application/json")) {
      if (!response.ok) {
        throw new ApiError(`HTTP ${response.status}: ${response.statusText}`, response.status)
      }
      return {
        success: true,
        data: null as T,
        message: "تم بنجاح",
      }
    }

    const data = await response.json()

    if (!response.ok) {
      throw new ApiError(
        data.message || data.error || `HTTP ${response.status}`,
        response.status,
        data.code,
        data.details,
      )
    }

    return data
  } catch (error) {
    clearTimeout(timeoutId)

    if (error instanceof ApiError) {
      throw error
    }

    if (error instanceof Error) {
      if (error.name === "AbortError") {
        throw new ApiError("انتهت مهلة الطلب", 408)
      }
      throw new ApiError(error.message, 0)
    }

    throw new ApiError("حدث خطأ غير متوقع", 0)
  }
}

// Employee API functions
export const employeeApi = {
  // Get all employees
  getAll: (params?: {
    page?: number
    limit?: number
    search?: string
    department?: string
    status?: string
  }) => apiRequest<any[]>(`/employees?${apiUtils.buildQueryString(params || {})}`),

  // Get employee by ID
  getById: (id: string) => apiRequest<any>(`/employees/${id}`),

  // Create new employee
  create: (data: any) =>
    apiRequest<any>("/employees", {
      method: "POST",
      body: data,
    }),

  // Update employee
  update: (id: string, data: any) =>
    apiRequest<any>(`/employees/${id}`, {
      method: "PUT",
      body: data,
    }),

  // Delete employee
  delete: (id: string) =>
    apiRequest<null>(`/employees/${id}`, {
      method: "DELETE",
    }),

  // Update employee status
  updateStatus: (id: string, status: string) =>
    apiRequest<any>(`/employees/${id}/status`, {
      method: "PATCH",
      body: { status },
    }),

  // Get employee performance
  getPerformance: (id: string) => apiRequest<any>(`/employees/${id}/performance`),

  // Upload employee avatar
  uploadAvatar: (id: string, file: File) => {
    const formData = new FormData()
    formData.append("avatar", file)

    return fetch(`${API_BASE_URL}/employees/${id}/avatar`, {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      },
    }).then((res) => res.json())
  },
}

// Leave Request API functions
export const leaveApi = {
  // Get all leave requests
  getAll: (params?: {
    page?: number
    limit?: number
    employeeId?: string
    status?: string
    type?: string
    startDate?: string
    endDate?: string
  }) => apiRequest<any[]>(`/leaves?${apiUtils.buildQueryString(params || {})}`),

  // Get leave request by ID
  getById: (id: string) => apiRequest<any>(`/leaves/${id}`),

  // Create leave request
  create: (data: any) =>
    apiRequest<any>("/leaves", {
      method: "POST",
      body: data,
    }),

  // Update leave request
  update: (id: string, data: any) =>
    apiRequest<any>(`/leaves/${id}`, {
      method: "PUT",
      body: data,
    }),

  // Approve/Reject leave request
  updateStatus: (id: string, status: string, reason?: string) =>
    apiRequest<any>(`/leaves/${id}/status`, {
      method: "PATCH",
      body: { status, reason },
    }),

  // Delete leave request
  delete: (id: string) =>
    apiRequest<null>(`/leaves/${id}`, {
      method: "DELETE",
    }),

  // Get employee leave balance
  getBalance: (employeeId: string) => apiRequest<any>(`/employees/${employeeId}/leave-balance`),

  // Get leave calendar
  getCalendar: (year: number, month?: number) =>
    apiRequest<any[]>(`/leaves/calendar/${year}${month ? `/${month}` : ""}`),
}

// Course API functions
export const courseApi = {
  // Get all courses
  getAll: (params?: {
    page?: number
    limit?: number
    search?: string
    category?: string
    level?: string
    status?: string
  }) => apiRequest<any[]>(`/courses?${apiUtils.buildQueryString(params || {})}`),

  // Get course by ID
  getById: (id: string) => apiRequest<any>(`/courses/${id}`),

  // Create course
  create: (data: any) =>
    apiRequest<any>("/courses", {
      method: "POST",
      body: data,
    }),

  // Update course
  update: (id: string, data: any) =>
    apiRequest<any>(`/courses/${id}`, {
      method: "PUT",
      body: data,
    }),

  // Delete course
  delete: (id: string) =>
    apiRequest<null>(`/courses/${id}`, {
      method: "DELETE",
    }),

  // Enroll in course
  enroll: (courseId: string, employeeId: string) =>
    apiRequest<any>(`/courses/${courseId}/enroll`, {
      method: "POST",
      body: { employeeId },
    }),

  // Unenroll from course
  unenroll: (courseId: string, employeeId: string) =>
    apiRequest<null>(`/courses/${courseId}/unenroll`, {
      method: "DELETE",
      body: { employeeId },
    }),

  // Get course enrollments
  getEnrollments: (courseId: string) => apiRequest<any[]>(`/courses/${courseId}/enrollments`),

  // Update course progress
  updateProgress: (courseId: string, employeeId: string, progress: number) =>
    apiRequest<any>(`/courses/${courseId}/progress`, {
      method: "PATCH",
      body: { employeeId, progress },
    }),
}

// Performance API functions
export const performanceApi = {
  // Get all performance reviews
  getAll: (params?: {
    page?: number
    limit?: number
    employeeId?: string
    reviewerId?: string
    period?: string
    status?: string
  }) => apiRequest<any[]>(`/performance?${apiUtils.buildQueryString(params || {})}`),

  // Get performance review by ID
  getById: (id: string) => apiRequest<any>(`/performance/${id}`),

  // Create performance review
  create: (data: any) =>
    apiRequest<any>("/performance", {
      method: "POST",
      body: data,
    }),

  // Update performance review
  update: (id: string, data: any) =>
    apiRequest<any>(`/performance/${id}`, {
      method: "PUT",
      body: data,
    }),

  // Delete performance review
  delete: (id: string) =>
    apiRequest<null>(`/performance/${id}`, {
      method: "DELETE",
    }),

  // Get employee performance history
  getHistory: (employeeId: string) => apiRequest<any[]>(`/employees/${employeeId}/performance-history`),

  // Get performance analytics
  getAnalytics: (params?: {
    department?: string
    period?: string
    startDate?: string
    endDate?: string
  }) => apiRequest<any>(`/performance/analytics?${apiUtils.buildQueryString(params || {})}`),
}

// Payroll API functions
export const payrollApi = {
  // Get all payroll records
  getAll: (params?: {
    page?: number
    limit?: number
    employeeId?: string
    month?: number
    year?: number
    status?: string
  }) => apiRequest<any[]>(`/payroll?${apiUtils.buildQueryString(params || {})}`),

  // Get payroll record by ID
  getById: (id: string) => apiRequest<any>(`/payroll/${id}`),

  // Create payroll record
  create: (data: any) =>
    apiRequest<any>("/payroll", {
      method: "POST",
      body: data,
    }),

  // Update payroll record
  update: (id: string, data: any) =>
    apiRequest<any>(`/payroll/${id}`, {
      method: "PUT",
      body: data,
    }),

  // Delete payroll record
  delete: (id: string) =>
    apiRequest<null>(`/payroll/${id}`, {
      method: "DELETE",
    }),

  // Process payroll
  process: (month: number, year: number, employeeIds?: string[]) =>
    apiRequest<any>("/payroll/process", {
      method: "POST",
      body: { month, year, employeeIds },
    }),

  // Generate payslip
  generatePayslip: (id: string) =>
    apiRequest<Blob>(`/payroll/${id}/payslip`, {
      headers: { Accept: "application/pdf" },
    }),
}

// Notification API functions
export const notificationApi = {
  // Get all notifications
  getAll: (params?: {
    page?: number
    limit?: number
    read?: boolean
    type?: string
  }) => apiRequest<any[]>(`/notifications?${apiUtils.buildQueryString(params || {})}`),

  // Mark notification as read
  markAsRead: (id: string) =>
    apiRequest<any>(`/notifications/${id}/read`, {
      method: "PATCH",
    }),

  // Mark all notifications as read
  markAllAsRead: () =>
    apiRequest<any>("/notifications/read-all", {
      method: "PATCH",
    }),

  // Delete notification
  delete: (id: string) =>
    apiRequest<null>(`/notifications/${id}`, {
      method: "DELETE",
    }),

  // Get unread count
  getUnreadCount: () => apiRequest<{ count: number }>("/notifications/unread-count"),
}

// Dashboard API functions
export const dashboardApi = {
  // Get dashboard stats
  getStats: () => apiRequest<any>("/dashboard/stats"),

  // Get recent activities
  getActivities: (limit?: number) => apiRequest<any[]>(`/dashboard/activities${limit ? `?limit=${limit}` : ""}`),

  // Get department stats
  getDepartmentStats: () => apiRequest<any[]>("/dashboard/departments"),

  // Get performance overview
  getPerformanceOverview: () => apiRequest<any>("/dashboard/performance"),
}

// File upload API functions
export const fileApi = {
  // Upload file
  upload: (file: File, category?: string) => {
    const formData = new FormData()
    formData.append("file", file)
    if (category) formData.append("category", category)

    return fetch(`${API_BASE_URL}/files/upload`, {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      },
    }).then((res) => res.json())
  },

  // Delete file
  delete: (id: string) =>
    apiRequest<null>(`/files/${id}`, {
      method: "DELETE",
    }),

  // Get file info
  getInfo: (id: string) => apiRequest<any>(`/files/${id}`),
}

// Export API functions
export const exportApi = {
  // Export employees
  exportEmployees: (format: "excel" | "pdf" | "csv", filters?: any) =>
    fetch(`${API_BASE_URL}/export/employees?format=${format}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      },
      body: JSON.stringify(filters || {}),
    }).then((res) => res.blob()),

  // Export leave requests
  exportLeaves: (format: "excel" | "pdf" | "csv", filters?: any) =>
    fetch(`${API_BASE_URL}/export/leaves?format=${format}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      },
      body: JSON.stringify(filters || {}),
    }).then((res) => res.blob()),

  // Export payroll
  exportPayroll: (format: "excel" | "pdf" | "csv", filters?: any) =>
    fetch(`${API_BASE_URL}/export/payroll?format=${format}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
      },
      body: JSON.stringify(filters || {}),
    }).then((res) => res.blob()),
}

// Utility functions
export const apiUtils = {
  // Handle API errors
  handleError: (error: unknown): string => {
    if (error instanceof ApiError) {
      return error.message
    }
    if (error instanceof Error) {
      return error.message
    }
    return "حدث خطأ غير متوقع"
  },

  // Format API response for UI
  formatResponse: (response: ApiResponse<any>) => {
    return {
      data: response.data,
      success: response.success,
      message: response.message || (response.success ? "تم بنجاح" : "حدث خطأ"),
      error: response.error,
    }
  },

  // Build query string from params
  buildQueryString: (params: Record<string, any>): string => {
    const searchParams = new URLSearchParams()
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "") {
        searchParams.append(key, String(value))
      }
    })
    return searchParams.toString()
  },

  // Download file from blob
  downloadBlob: (blob: Blob, filename: string) => {
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    window.URL.revokeObjectURL(url)
    document.body.removeChild(a)
  },
}

// Default export
export default {
  employee: employeeApi,
  leave: leaveApi,
  course: courseApi,
  performance: performanceApi,
  payroll: payrollApi,
  notification: notificationApi,
  dashboard: dashboardApi,
  file: fileApi,
  export: exportApi,
  utils: apiUtils,
}
