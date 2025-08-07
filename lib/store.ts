"use client"

import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"
import type { Employee, LeaveRequest, Course, Notification, UserPreferences } from "./types"

// Auth Store
interface AuthState {
  user: Employee | null
  token: string | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
  updateUser: (user: Partial<Employee>) => void
  setLoading: (loading: boolean) => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: false,

      login: async (email: string, password: string) => {
        set({ isLoading: true })
        try {
          // Simulate API call
          await new Promise((resolve) => setTimeout(resolve, 1000))

          // Mock authentication - in real app, call actual API
          if (email === "admin@company.com" && password === "password") {
            const mockUser: Employee = {
              id: "1",
              name: "أحمد محمد السعد",
              email: "admin@company.com",
              phone: "+966501234567",
              position: "مدير الموارد البشرية",
              department: "الموارد البشرية",
              salary: 18000,
              joinDate: "2020-01-15",
              status: "نشط",
              nationalId: "1234567890",
              birthDate: "1985-03-20",
              address: "الرياض، المملكة العربية السعودية",
              emergencyContact: {
                name: "فاطمة السعد",
                phone: "+966501234568",
                relationship: "زوجة",
              },
              bankAccount: {
                iban: "SA1234567890123456789012",
                bankName: "البنك الأهلي السعودي",
              },
              performanceScore: 4.8,
              skills: ["إدارة الموارد البشرية", "القيادة", "التخطيط الاستراتيجي"],
              certifications: ["PHR", "SHRM-CP"],
              directReports: ["2", "3", "4"],
              workLocation: "مكتب",
              contractType: "دوام كامل",
              createdAt: "2020-01-15T00:00:00Z",
              updatedAt: "2024-02-10T08:30:00Z",
            }

            set({
              user: mockUser,
              token: "mock-jwt-token",
              isAuthenticated: true,
              isLoading: false,
            })
            return true
          }

          set({ isLoading: false })
          return false
        } catch (error) {
          set({ isLoading: false })
          return false
        }
      },

      logout: () => {
        set({
          user: null,
          token: null,
          isAuthenticated: false,
        })
      },

      updateUser: (userData: Partial<Employee>) => {
        const currentUser = get().user
        if (currentUser) {
          set({
            user: { ...currentUser, ...userData },
          })
        }
      },

      setLoading: (loading: boolean) => {
        set({ isLoading: loading })
      },
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
      }),
    },
  ),
)

// Employee Store
interface EmployeeState {
  employees: Employee[]
  selectedEmployee: Employee | null
  isLoading: boolean
  searchQuery: string
  filters: {
    department: string
    status: string
    position: string
  }
  setEmployees: (employees: Employee[]) => void
  addEmployee: (employee: Employee) => void
  updateEmployee: (id: string, employee: Partial<Employee>) => void
  deleteEmployee: (id: string) => void
  setSelectedEmployee: (employee: Employee | null) => void
  setLoading: (loading: boolean) => void
  setSearchQuery: (query: string) => void
  setFilters: (filters: Partial<EmployeeState["filters"]>) => void
  getFilteredEmployees: () => Employee[]
}

export const useEmployeeStore = create<EmployeeState>((set, get) => ({
  employees: [],
  selectedEmployee: null,
  isLoading: false,
  searchQuery: "",
  filters: {
    department: "",
    status: "",
    position: "",
  },

  setEmployees: (employees) => set({ employees }),

  addEmployee: (employee) => {
    set((state) => ({
      employees: [...state.employees, employee],
    }))
  },

  updateEmployee: (id, employeeData) => {
    set((state) => ({
      employees: state.employees.map((emp) => (emp.id === id ? { ...emp, ...employeeData } : emp)),
    }))
  },

  deleteEmployee: (id) => {
    set((state) => ({
      employees: state.employees.filter((emp) => emp.id !== id),
    }))
  },

  setSelectedEmployee: (employee) => set({ selectedEmployee: employee }),

  setLoading: (loading) => set({ isLoading: loading }),

  setSearchQuery: (query) => set({ searchQuery: query }),

  setFilters: (newFilters) => {
    set((state) => ({
      filters: { ...state.filters, ...newFilters },
    }))
  },

  getFilteredEmployees: () => {
    const { employees, searchQuery, filters } = get()

    return employees.filter((employee) => {
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase()
        const matchesSearch =
          employee.name.toLowerCase().includes(query) ||
          employee.email.toLowerCase().includes(query) ||
          employee.position.toLowerCase().includes(query) ||
          employee.department.toLowerCase().includes(query)

        if (!matchesSearch) return false
      }

      // Department filter
      if (filters.department && employee.department !== filters.department) {
        return false
      }

      // Status filter
      if (filters.status && employee.status !== filters.status) {
        return false
      }

      // Position filter
      if (filters.position && employee.position !== filters.position) {
        return false
      }

      return true
    })
  },
}))

// Leave Request Store
interface LeaveState {
  leaveRequests: LeaveRequest[]
  selectedRequest: LeaveRequest | null
  isLoading: boolean
  filters: {
    status: string
    type: string
    employeeId: string
  }
  setLeaveRequests: (requests: LeaveRequest[]) => void
  addLeaveRequest: (request: LeaveRequest) => void
  updateLeaveRequest: (id: string, request: Partial<LeaveRequest>) => void
  deleteLeaveRequest: (id: string) => void
  setSelectedRequest: (request: LeaveRequest | null) => void
  setLoading: (loading: boolean) => void
  setFilters: (filters: Partial<LeaveState["filters"]>) => void
  getFilteredRequests: () => LeaveRequest[]
}

export const useLeaveStore = create<LeaveState>((set, get) => ({
  leaveRequests: [],
  selectedRequest: null,
  isLoading: false,
  filters: {
    status: "",
    type: "",
    employeeId: "",
  },

  setLeaveRequests: (requests) => set({ leaveRequests: requests }),

  addLeaveRequest: (request) => {
    set((state) => ({
      leaveRequests: [...state.leaveRequests, request],
    }))
  },

  updateLeaveRequest: (id, requestData) => {
    set((state) => ({
      leaveRequests: state.leaveRequests.map((req) => (req.id === id ? { ...req, ...requestData } : req)),
    }))
  },

  deleteLeaveRequest: (id) => {
    set((state) => ({
      leaveRequests: state.leaveRequests.filter((req) => req.id !== id),
    }))
  },

  setSelectedRequest: (request) => set({ selectedRequest: request }),

  setLoading: (loading) => set({ isLoading: loading }),

  setFilters: (newFilters) => {
    set((state) => ({
      filters: { ...state.filters, ...newFilters },
    }))
  },

  getFilteredRequests: () => {
    const { leaveRequests, filters } = get()

    return leaveRequests.filter((request) => {
      // Status filter
      if (filters.status && request.status !== filters.status) {
        return false
      }

      // Type filter
      if (filters.type && request.type !== filters.type) {
        return false
      }

      // Employee filter
      if (filters.employeeId && request.employeeId !== filters.employeeId) {
        return false
      }

      return true
    })
  },
}))

// Course Store
interface CourseState {
  courses: Course[]
  selectedCourse: Course | null
  isLoading: boolean
  filters: {
    category: string
    level: string
    status: string
  }
  setCourses: (courses: Course[]) => void
  addCourse: (course: Course) => void
  updateCourse: (id: string, course: Partial<Course>) => void
  deleteCourse: (id: string) => void
  setSelectedCourse: (course: Course | null) => void
  setLoading: (loading: boolean) => void
  setFilters: (filters: Partial<CourseState["filters"]>) => void
  getFilteredCourses: () => Course[]
}

export const useCourseStore = create<CourseState>((set, get) => ({
  courses: [],
  selectedCourse: null,
  isLoading: false,
  filters: {
    category: "",
    level: "",
    status: "",
  },

  setCourses: (courses) => set({ courses }),

  addCourse: (course) => {
    set((state) => ({
      courses: [...state.courses, course],
    }))
  },

  updateCourse: (id, courseData) => {
    set((state) => ({
      courses: state.courses.map((course) => (course.id === id ? { ...course, ...courseData } : course)),
    }))
  },

  deleteCourse: (id) => {
    set((state) => ({
      courses: state.courses.filter((course) => course.id !== id),
    }))
  },

  setSelectedCourse: (course) => set({ selectedCourse: course }),

  setLoading: (loading) => set({ isLoading: loading }),

  setFilters: (newFilters) => {
    set((state) => ({
      filters: { ...state.filters, ...newFilters },
    }))
  },

  getFilteredCourses: () => {
    const { courses, filters } = get()

    return courses.filter((course) => {
      // Category filter
      if (filters.category && course.category !== filters.category) {
        return false
      }

      // Level filter
      if (filters.level && course.level !== filters.level) {
        return false
      }

      // Status filter
      if (filters.status && course.status !== filters.status) {
        return false
      }

      return true
    })
  },
}))

// Notification Store
interface NotificationState {
  notifications: Notification[]
  unreadCount: number
  isLoading: boolean
  setNotifications: (notifications: Notification[]) => void
  addNotification: (notification: Notification) => void
  markAsRead: (id: string) => void
  markAllAsRead: () => void
  removeNotification: (id: string) => void
  setLoading: (loading: boolean) => void
  getUnreadNotifications: () => Notification[]
}

export const useNotificationStore = create<NotificationState>()(
  persist(
    (set, get) => ({
      notifications: [],
      unreadCount: 0,
      isLoading: false,

      setNotifications: (notifications) => {
        const unreadCount = notifications.filter((n) => !n.read).length
        set({ notifications, unreadCount })
      },

      addNotification: (notification) => {
        set((state) => ({
          notifications: [notification, ...state.notifications],
          unreadCount: notification.read ? state.unreadCount : state.unreadCount + 1,
        }))
      },

      markAsRead: (id) => {
        set((state) => ({
          notifications: state.notifications.map((n) =>
            n.id === id ? { ...n, read: true, readAt: new Date().toISOString() } : n,
          ),
          unreadCount: Math.max(0, state.unreadCount - 1),
        }))
      },

      markAllAsRead: () => {
        set((state) => ({
          notifications: state.notifications.map((n) => ({
            ...n,
            read: true,
            readAt: n.readAt || new Date().toISOString(),
          })),
          unreadCount: 0,
        }))
      },

      removeNotification: (id) => {
        set((state) => {
          const notification = state.notifications.find((n) => n.id === id)
          const wasUnread = notification && !notification.read

          return {
            notifications: state.notifications.filter((n) => n.id !== id),
            unreadCount: wasUnread ? Math.max(0, state.unreadCount - 1) : state.unreadCount,
          }
        })
      },

      setLoading: (loading) => set({ isLoading: loading }),

      getUnreadNotifications: () => {
        return get().notifications.filter((n) => !n.read)
      },
    }),
    {
      name: "notification-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        notifications: state.notifications,
        unreadCount: state.unreadCount,
      }),
    },
  ),
)

// UI Store
interface UIState {
  sidebarCollapsed: boolean
  theme: "light" | "dark" | "system"
  language: "ar" | "en"
  loading: {
    global: boolean
    employees: boolean
    leaves: boolean
    courses: boolean
    performance: boolean
  }
  modals: {
    employeeForm: boolean
    leaveForm: boolean
    courseForm: boolean
    confirmDelete: boolean
  }
  setSidebarCollapsed: (collapsed: boolean) => void
  setTheme: (theme: "light" | "dark" | "system") => void
  setLanguage: (language: "ar" | "en") => void
  setLoading: (key: keyof UIState["loading"], loading: boolean) => void
  setModal: (key: keyof UIState["modals"], open: boolean) => void
  toggleSidebar: () => void
}

export const useUIStore = create<UIState>()(
  persist(
    (set, get) => ({
      sidebarCollapsed: false,
      theme: "light",
      language: "ar",
      loading: {
        global: false,
        employees: false,
        leaves: false,
        courses: false,
        performance: false,
      },
      modals: {
        employeeForm: false,
        leaveForm: false,
        courseForm: false,
        confirmDelete: false,
      },

      setSidebarCollapsed: (collapsed) => set({ sidebarCollapsed: collapsed }),

      setTheme: (theme) => set({ theme }),

      setLanguage: (language) => set({ language }),

      setLoading: (key, loading) => {
        set((state) => ({
          loading: { ...state.loading, [key]: loading },
        }))
      },

      setModal: (key, open) => {
        set((state) => ({
          modals: { ...state.modals, [key]: open },
        }))
      },

      toggleSidebar: () => {
        set((state) => ({
          sidebarCollapsed: !state.sidebarCollapsed,
        }))
      },
    }),
    {
      name: "ui-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        sidebarCollapsed: state.sidebarCollapsed,
        theme: state.theme,
        language: state.language,
      }),
    },
  ),
)

// User Preferences Store
interface PreferencesState {
  preferences: UserPreferences
  setPreferences: (preferences: Partial<UserPreferences>) => void
  updateNotificationPreferences: (notifications: Partial<UserPreferences["notifications"]>) => void
  updateDashboardPreferences: (dashboard: Partial<UserPreferences["dashboard"]>) => void
}

export const usePreferencesStore = create<PreferencesState>()(
  persist(
    (set, get) => ({
      preferences: {
        language: "ar",
        theme: "light",
        timezone: "Asia/Riyadh",
        dateFormat: "dd/MM/yyyy",
        currency: "SAR",
        notifications: {
          email: {
            enabled: true,
            frequency: "فوري",
            types: ["leave", "performance", "training"],
          },
          sms: {
            enabled: false,
            types: ["urgent"],
          },
          push: {
            enabled: true,
            types: ["leave", "training", "announcements"],
          },
          inApp: {
            enabled: true,
            types: ["all"],
          },
        },
        dashboard: {
          layout: "grid",
          widgets: ["stats", "activities", "leaves", "performance"],
        },
      },

      setPreferences: (newPreferences) => {
        set((state) => ({
          preferences: { ...state.preferences, ...newPreferences },
        }))
      },

      updateNotificationPreferences: (notifications) => {
        set((state) => ({
          preferences: {
            ...state.preferences,
            notifications: { ...state.preferences.notifications, ...notifications },
          },
        }))
      },

      updateDashboardPreferences: (dashboard) => {
        set((state) => ({
          preferences: {
            ...state.preferences,
            dashboard: { ...state.preferences.dashboard, ...dashboard },
          },
        }))
      },
    }),
    {
      name: "preferences-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
)

// Dashboard Store
interface DashboardState {
  stats: any
  activities: any[]
  isLoading: boolean
  lastUpdated: string | null
  setStats: (stats: any) => void
  setActivities: (activities: any[]) => void
  setLoading: (loading: boolean) => void
  refreshData: () => Promise<void>
}

export const useDashboardStore = create<DashboardState>((set, get) => ({
  stats: null,
  activities: [],
  isLoading: false,
  lastUpdated: null,

  setStats: (stats) => set({ stats, lastUpdated: new Date().toISOString() }),

  setActivities: (activities) => set({ activities }),

  setLoading: (loading) => set({ isLoading: loading }),

  refreshData: async () => {
    set({ isLoading: true })
    try {
      // Simulate API calls
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // In real app, fetch actual data from API
      const mockStats = {
        totalEmployees: 247,
        activeEmployees: 198,
        pendingLeaves: 12,
        completedTrainings: 156,
        averagePerformance: 4.3,
        monthlyGrowth: 5.2,
      }

      const mockActivities = [
        {
          id: "1",
          type: "employee",
          title: "موظف جديد",
          description: "تم إضافة موظف جديد إلى قسم التقنية",
          timestamp: new Date().toISOString(),
          userId: "1",
          userName: "أحمد السعد",
        },
      ]

      set({
        stats: mockStats,
        activities: mockActivities,
        isLoading: false,
        lastUpdated: new Date().toISOString(),
      })
    } catch (error) {
      set({ isLoading: false })
      console.error("Failed to refresh dashboard data:", error)
    }
  },
}))

// Export all stores

// Store utilities
export const storeUtils = {
  // Reset all stores
  resetAllStores: () => {
    useAuthStore.getState().logout()
    useEmployeeStore.setState({
      employees: [],
      selectedEmployee: null,
      searchQuery: "",
      filters: { department: "", status: "", position: "" },
    })
    useLeaveStore.setState({
      leaveRequests: [],
      selectedRequest: null,
      filters: { status: "", type: "", employeeId: "" },
    })
    useCourseStore.setState({
      courses: [],
      selectedCourse: null,
      filters: { category: "", level: "", status: "" },
    })
    useNotificationStore.setState({
      notifications: [],
      unreadCount: 0,
    })
  },

  // Get current user from auth store
  getCurrentUser: () => {
    return useAuthStore.getState().user
  },

  // Check if user is authenticated
  isAuthenticated: () => {
    return useAuthStore.getState().isAuthenticated
  },

  // Get user permissions (mock implementation)
  getUserPermissions: () => {
    const user = useAuthStore.getState().user
    if (!user) return []

    // Mock permissions based on user role/position
    const permissions = ["read:employees", "read:leaves", "read:courses"]

    if (user.position.includes("مدير")) {
      permissions.push("write:employees", "write:leaves", "approve:leaves")
    }

    if (user.department === "الموارد البشرية") {
      permissions.push("admin:system", "write:courses", "write:performance")
    }

    return permissions
  },

  // Check if user has specific permission
  hasPermission: (permission: string) => {
    const permissions = storeUtils.getUserPermissions()
    return permissions.includes(permission)
  },
}
