"use server"

import { revalidatePath } from "next/cache"
import type { LeaveRequest, ApiResponse } from "@/lib/types"
import { mockLeaveRequests, mockEmployees } from "@/lib/database"

// Get leave requests by employee
export async function getLeaveRequestsByEmployee(employeeId: string): Promise<ApiResponse<LeaveRequest[]>> {
  try {
    await new Promise((resolve) => setTimeout(resolve, 400))

    const employeeRequests = mockLeaveRequests.filter((request) => request.employeeId === employeeId)

    // Sort by submission date (newest first)
    employeeRequests.sort((a, b) => new Date(b.submittedDate).getTime() - new Date(a.submittedDate).getTime())

    return {
      success: true,
      data: employeeRequests,
      message: `تم جلب ${employeeRequests.length} طلب إجازة`,
    }
  } catch (error) {
    return {
      success: false,
      error: "حدث خطأ في جلب طلبات الإجازة",
    }
  }
}

// Get employee leave balance
export async function getLeaveBalance(employeeId: string): Promise<ApiResponse<any>> {
  try {
    await new Promise((resolve) => setTimeout(resolve, 300))

    const employee = mockEmployees.find((emp) => emp.id === employeeId)
    if (!employee) {
      return {
        success: false,
        error: "الموظف غير موجود",
      }
    }

    // Calculate used leave days from requests
    const approvedRequests = mockLeaveRequests.filter(
      (request) => request.employeeId === employeeId && request.status === "معتمد",
    )

    const usedAnnualLeave = approvedRequests
      .filter((req) => req.type === "إجازة سنوية")
      .reduce((total, req) => total + req.days, 0)

    const usedSickLeave = approvedRequests
      .filter((req) => req.type === "إجازة مرضية")
      .reduce((total, req) => total + req.days, 0)

    const usedEmergencyLeave = approvedRequests
      .filter((req) => req.type === "إجازة طارئة")
      .reduce((total, req) => total + req.days, 0)

    // Mock leave entitlements (in real app, this would come from employee contract/policy)
    const leaveBalance = {
      annualLeave: {
        total: 30,
        used: usedAnnualLeave,
        remaining: 30 - usedAnnualLeave,
      },
      sickLeave: {
        total: 15,
        used: usedSickLeave,
        remaining: 15 - usedSickLeave,
      },
      emergencyLeave: {
        total: 5,
        used: usedEmergencyLeave,
        remaining: 5 - usedEmergencyLeave,
      },
      maternityLeave: {
        total: 70, // 10 weeks
        used: 0,
        remaining: 70,
      },
      paternityLeave: {
        total: 3,
        used: 0,
        remaining: 3,
      },
    }

    return {
      success: true,
      data: leaveBalance,
      message: "تم جلب رصيد الإجازات بنجاح",
    }
  } catch (error) {
    return {
      success: false,
      error: "حدث خطأ في جلب رصيد الإجازات",
    }
  }
}

// Submit enhanced leave request
export async function submitEnhancedLeaveRequest(formData: FormData): Promise<ApiResponse<LeaveRequest>> {
  try {
    const employeeId = formData.get("employeeId") as string
    const employee = mockEmployees.find((emp) => emp.id === employeeId)

    if (!employee) {
      return {
        success: false,
        error: "الموظف غير موجود",
      }
    }

    const startDate = formData.get("startDate") as string
    const endDate = formData.get("endDate") as string
    const type = formData.get("type") as LeaveRequest["type"]
    const reason = formData.get("reason") as string
    const attachments = formData.getAll("attachments") as File[]
    const emergencyContact = formData.get("emergencyContact") as string
    const workHandover = formData.get("workHandover") as string

    // Validate dates
    const start = new Date(startDate)
    const end = new Date(endDate)
    const today = new Date()

    if (start < today) {
      return {
        success: false,
        error: "لا يمكن تقديم طلب إجازة لتاريخ سابق",
      }
    }

    if (end < start) {
      return {
        success: false,
        error: "تاريخ انتهاء الإجازة يجب أن يكون بعد تاريخ البداية",
      }
    }

    // Calculate working days (excluding weekends)
    let days = 0
    const currentDate = new Date(start)
    while (currentDate <= end) {
      const dayOfWeek = currentDate.getDay()
      if (dayOfWeek !== 5 && dayOfWeek !== 6) {
        // Not Friday or Saturday
        days++
      }
      currentDate.setDate(currentDate.getDate() + 1)
    }

    // Check leave balance
    const balanceResult = await getLeaveBalance(employeeId)
    if (!balanceResult.success) {
      return balanceResult as ApiResponse<LeaveRequest>
    }

    const balance = balanceResult.data
    let availableDays = 0

    switch (type) {
      case "إجازة سنوية":
        availableDays = balance.annualLeave.remaining
        break
      case "إجازة مرضية":
        availableDays = balance.sickLeave.remaining
        break
      case "إجازة طارئة":
        availableDays = balance.emergencyLeave.remaining
        break
      case "إجازة أمومة":
        availableDays = balance.maternityLeave.remaining
        break
      case "إجازة أبوة":
        availableDays = balance.paternityLeave.remaining
        break
      default:
        availableDays = days // For other types, assume available
    }

    if (days > availableDays && type !== "إجازة بدون راتب") {
      return {
        success: false,
        error: `رصيد الإجازة غير كافي. المتاح: ${availableDays} يوم، المطلوب: ${days} يوم`,
      }
    }

    const newRequest: LeaveRequest = {
      id: Date.now().toString(),
      employeeId,
      employeeName: employee.name,
      type,
      startDate,
      endDate,
      days,
      reason,
      status: "في الانتظار",
      submittedDate: new Date().toISOString().split("T")[0],
      emergencyContact,
      workHandover,
      attachments: attachments.map((file) => ({
        name: file.name,
        size: file.size,
        type: file.type,
        url: URL.createObjectURL(file), // In real app, upload to storage
      })),
    }

    await new Promise((resolve) => setTimeout(resolve, 1000))

    mockLeaveRequests.push(newRequest)

    revalidatePath("/self-service")
    revalidatePath("/employees")
    revalidatePath("/leave-requests")

    return {
      success: true,
      data: newRequest,
      message: "تم تقديم طلب الإجازة بنجاح",
    }
  } catch (error) {
    return {
      success: false,
      error: "حدث خطأ في تقديم طلب الإجازة",
    }
  }
}

// Get leave calendar data
export async function getLeaveCalendar(year: number, month?: number): Promise<ApiResponse<any[]>> {
  try {
    await new Promise((resolve) => setTimeout(resolve, 400))

    let filteredRequests = mockLeaveRequests.filter((request) => {
      const requestYear = new Date(request.startDate).getFullYear()
      if (requestYear !== year) return false

      if (month !== undefined) {
        const requestMonth = new Date(request.startDate).getMonth() + 1
        return requestMonth === month
      }

      return true
    })

    // Only show approved requests in calendar
    filteredRequests = filteredRequests.filter((request) => request.status === "معتمد")

    const calendarData = filteredRequests.map((request) => ({
      id: request.id,
      title: `${request.employeeName} - ${request.type}`,
      start: request.startDate,
      end: request.endDate,
      type: request.type,
      employeeName: request.employeeName,
      days: request.days,
      color: getLeaveTypeColor(request.type),
    }))

    return {
      success: true,
      data: calendarData,
      message: `تم جلب ${calendarData.length} إجازة للتقويم`,
    }
  } catch (error) {
    return {
      success: false,
      error: "حدث خطأ في جلب بيانات التقويم",
    }
  }
}

// Helper function to get color for leave types
function getLeaveTypeColor(type: string): string {
  const colors: Record<string, string> = {
    "إجازة سنوية": "#3b82f6", // blue
    "إجازة مرضية": "#ef4444", // red
    "إجازة طارئة": "#f59e0b", // amber
    "إجازة أمومة": "#ec4899", // pink
    "إجازة أبوة": "#8b5cf6", // purple
    "إجازة بدون راتب": "#6b7280", // gray
  }
  return colors[type] || "#6b7280"
}

// Get leave statistics
export async function getLeaveStatistics(filters?: {
  department?: string
  year?: number
  employeeId?: string
}): Promise<ApiResponse<any>> {
  try {
    await new Promise((resolve) => setTimeout(resolve, 500))

    let filteredRequests = [...mockLeaveRequests]

    // Apply filters
    if (filters?.department) {
      const departmentEmployees = mockEmployees
        .filter((emp) => emp.department === filters.department)
        .map((emp) => emp.id)
      filteredRequests = filteredRequests.filter((req) => departmentEmployees.includes(req.employeeId))
    }

    if (filters?.year) {
      filteredRequests = filteredRequests.filter((req) => {
        const requestYear = new Date(req.startDate).getFullYear()
        return requestYear === filters.year
      })
    }

    if (filters?.employeeId) {
      filteredRequests = filteredRequests.filter((req) => req.employeeId === filters.employeeId)
    }

    // Calculate statistics
    const totalRequests = filteredRequests.length
    const approvedRequests = filteredRequests.filter((req) => req.status === "معتمد").length
    const pendingRequests = filteredRequests.filter((req) => req.status === "في الانتظار").length
    const rejectedRequests = filteredRequests.filter((req) => req.status === "مرفوض").length

    const totalDays = filteredRequests
      .filter((req) => req.status === "معتمد")
      .reduce((total, req) => total + req.days, 0)

    const averageDays = approvedRequests > 0 ? Math.round(totalDays / approvedRequests) : 0

    // Group by type
    const byType = filteredRequests.reduce(
      (acc, req) => {
        if (!acc[req.type]) {
          acc[req.type] = { count: 0, days: 0 }
        }
        acc[req.type].count++
        if (req.status === "معتمد") {
          acc[req.type].days += req.days
        }
        return acc
      },
      {} as Record<string, { count: number; days: number }>,
    )

    // Monthly distribution
    const monthlyData = Array.from({ length: 12 }, (_, i) => {
      const month = i + 1
      const monthRequests = filteredRequests.filter((req) => {
        const requestMonth = new Date(req.startDate).getMonth() + 1
        return requestMonth === month
      })
      return {
        month,
        requests: monthRequests.length,
        days: monthRequests.filter((req) => req.status === "معتمد").reduce((total, req) => total + req.days, 0),
      }
    })

    const statistics = {
      summary: {
        totalRequests,
        approvedRequests,
        pendingRequests,
        rejectedRequests,
        totalDays,
        averageDays,
        approvalRate: totalRequests > 0 ? Math.round((approvedRequests / totalRequests) * 100) : 0,
      },
      byType,
      monthlyData,
    }

    return {
      success: true,
      data: statistics,
      message: "تم جلب إحصائيات الإجازات بنجاح",
    }
  } catch (error) {
    return {
      success: false,
      error: "حدث خطأ في جلب الإحصائيات",
    }
  }
}
