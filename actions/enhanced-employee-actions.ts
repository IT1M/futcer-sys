"use server"

import { revalidatePath } from "next/cache"
import type { Employee, ApiResponse } from "@/lib/types"
import { mockEmployees } from "@/lib/database"

// Get employee by ID
export async function getEmployeeById(id: string): Promise<ApiResponse<Employee>> {
  try {
    await new Promise((resolve) => setTimeout(resolve, 300))

    const employee = mockEmployees.find((emp) => emp.id === id)

    if (!employee) {
      return {
        success: false,
        error: "الموظف غير موجود",
      }
    }

    return {
      success: true,
      data: employee,
      message: "تم جلب بيانات الموظف بنجاح",
    }
  } catch (error) {
    return {
      success: false,
      error: "حدث خطأ في جلب بيانات الموظف",
    }
  }
}

// Get all employees with enhanced filtering
export async function getEmployeesWithFilters(filters?: {
  department?: string
  status?: string
  position?: string
  search?: string
  page?: number
  limit?: number
}): Promise<ApiResponse<{ employees: Employee[]; total: number; page: number; totalPages: number }>> {
  try {
    await new Promise((resolve) => setTimeout(resolve, 400))

    let filteredEmployees = [...mockEmployees]

    // Apply filters
    if (filters?.department) {
      filteredEmployees = filteredEmployees.filter((emp) => emp.department === filters.department)
    }

    if (filters?.status) {
      filteredEmployees = filteredEmployees.filter((emp) => emp.status === filters.status)
    }

    if (filters?.position) {
      filteredEmployees = filteredEmployees.filter((emp) => emp.position.includes(filters.position))
    }

    if (filters?.search) {
      const searchTerm = filters.search.toLowerCase()
      filteredEmployees = filteredEmployees.filter(
        (emp) =>
          emp.name.toLowerCase().includes(searchTerm) ||
          emp.email.toLowerCase().includes(searchTerm) ||
          emp.phone.includes(searchTerm) ||
          emp.nationalId?.includes(searchTerm),
      )
    }

    // Pagination
    const page = filters?.page || 1
    const limit = filters?.limit || 10
    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit
    const paginatedEmployees = filteredEmployees.slice(startIndex, endIndex)

    return {
      success: true,
      data: {
        employees: paginatedEmployees,
        total: filteredEmployees.length,
        page,
        totalPages: Math.ceil(filteredEmployees.length / limit),
      },
      message: `تم جلب ${paginatedEmployees.length} موظف من أصل ${filteredEmployees.length}`,
    }
  } catch (error) {
    return {
      success: false,
      error: "حدث خطأ في جلب بيانات الموظفين",
    }
  }
}

// Get employee performance data
export async function getEmployeePerformance(employeeId: string): Promise<ApiResponse<any>> {
  try {
    await new Promise((resolve) => setTimeout(resolve, 500))

    const employee = mockEmployees.find((emp) => emp.id === employeeId)
    if (!employee) {
      return {
        success: false,
        error: "الموظف غير موجود",
      }
    }

    // Mock performance data
    const performanceData = {
      employeeId,
      currentScore: employee.performanceScore || 4.0,
      goals: [
        {
          id: "1",
          title: "تطوير المهارات التقنية",
          description: "تعلم تقنيات جديدة وتطبيقها في المشاريع",
          progress: 75,
          dueDate: "2024-06-30",
          status: "قيد التنفيذ",
          priority: "عالي",
        },
        {
          id: "2",
          title: "تحسين التواصل مع الفريق",
          description: "المشاركة الفعالة في اجتماعات الفريق",
          progress: 90,
          dueDate: "2024-05-15",
          status: "قيد التنفيذ",
          priority: "متوسط",
        },
      ],
      reviews: [
        {
          id: "1",
          period: "Q1 2024",
          score: 4.2,
          reviewDate: "2024-03-31",
          reviewer: "مدير القسم",
          comments: "أداء ممتاز مع تحسن ملحوظ في المهارات التقنية",
        },
        {
          id: "2",
          period: "Q4 2023",
          score: 3.8,
          reviewDate: "2023-12-31",
          reviewer: "مدير القسم",
          comments: "أداء جيد مع إمكانية للتحسن في إدارة الوقت",
        },
      ],
      competencies: [
        { name: "المهارات التقنية", score: 4.5, target: 4.0 },
        { name: "التواصل", score: 4.0, target: 4.2 },
        { name: "القيادة", score: 3.8, target: 4.0 },
        { name: "حل المشكلات", score: 4.3, target: 4.0 },
        { name: "العمل الجماعي", score: 4.1, target: 4.0 },
      ],
    }

    return {
      success: true,
      data: performanceData,
      message: "تم جلب بيانات الأداء بنجاح",
    }
  } catch (error) {
    return {
      success: false,
      error: "حدث خطأ في جلب بيانات الأداء",
    }
  }
}

// Update employee profile
export async function updateEmployeeProfile(
  employeeId: string,
  profileData: Partial<Employee>,
): Promise<ApiResponse<Employee>> {
  try {
    const employeeIndex = mockEmployees.findIndex((emp) => emp.id === employeeId)

    if (employeeIndex === -1) {
      return {
        success: false,
        error: "الموظف غير موجود",
      }
    }

    await new Promise((resolve) => setTimeout(resolve, 800))

    // Update employee data
    mockEmployees[employeeIndex] = {
      ...mockEmployees[employeeIndex],
      ...profileData,
      updatedAt: new Date().toISOString(),
    }

    revalidatePath("/profile")
    revalidatePath("/employees")

    return {
      success: true,
      data: mockEmployees[employeeIndex],
      message: "تم تحديث الملف الشخصي بنجاح",
    }
  } catch (error) {
    return {
      success: false,
      error: "حدث خطأ في تحديث الملف الشخصي",
    }
  }
}

// Get employee dashboard stats
export async function getEmployeeDashboardStats(employeeId: string): Promise<ApiResponse<any>> {
  try {
    await new Promise((resolve) => setTimeout(resolve, 400))

    const employee = mockEmployees.find((emp) => emp.id === employeeId)
    if (!employee) {
      return {
        success: false,
        error: "الموظف غير موجود",
      }
    }

    const stats = {
      yearsOfService: Math.floor(
        (new Date().getTime() - new Date(employee.joinDate).getTime()) / (1000 * 60 * 60 * 24 * 365),
      ),
      performanceScore: employee.performanceScore || 4.0,
      completedCourses: 8,
      pendingTasks: 3,
      upcomingDeadlines: 2,
      teamSize: employee.directReports?.length || 0,
    }

    return {
      success: true,
      data: stats,
      message: "تم جلب إحصائيات الموظف بنجاح",
    }
  } catch (error) {
    return {
      success: false,
      error: "حدث خطأ في جلب الإحصائيات",
    }
  }
}
