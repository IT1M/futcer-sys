"use server"

import { revalidatePath } from "next/cache"
import type { LeaveRequest, ApiResponse } from "@/lib/types"
import { mockLeaveRequests, mockEmployees } from "@/lib/database"

// الحصول على جميع طلبات الإجازة
export async function getLeaveRequests(): Promise<ApiResponse<LeaveRequest[]>> {
  try {
    await new Promise((resolve) => setTimeout(resolve, 400))

    return {
      success: true,
      data: mockLeaveRequests,
      message: "تم جلب طلبات الإجازة بنجاح",
    }
  } catch (error) {
    return {
      success: false,
      error: "حدث خطأ في جلب طلبات الإجازة",
    }
  }
}

// تقديم طلب إجازة جديد
export async function submitLeaveRequest(formData: FormData): Promise<ApiResponse<LeaveRequest>> {
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

    // حساب عدد الأيام
    const start = new Date(startDate)
    const end = new Date(endDate)
    const days = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1

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
    }

    await new Promise((resolve) => setTimeout(resolve, 1000))

    mockLeaveRequests.push(newRequest)

    revalidatePath("/self-service")
    revalidatePath("/employees")

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

// الموافقة على طلب إجازة
export async function approveLeaveRequest(requestId: string, approverId: string): Promise<ApiResponse<LeaveRequest>> {
  try {
    const requestIndex = mockLeaveRequests.findIndex((req) => req.id === requestId)
    const approver = mockEmployees.find((emp) => emp.id === approverId)

    if (requestIndex === -1) {
      return {
        success: false,
        error: "طلب الإجازة غير موجود",
      }
    }

    if (!approver) {
      return {
        success: false,
        error: "المعتمد غير موجود",
      }
    }

    await new Promise((resolve) => setTimeout(resolve, 800))

    mockLeaveRequests[requestIndex] = {
      ...mockLeaveRequests[requestIndex],
      status: "معتمد",
      approvedBy: approver.name,
      approvedDate: new Date().toISOString().split("T")[0],
    }

    revalidatePath("/self-service")
    revalidatePath("/employees")

    return {
      success: true,
      data: mockLeaveRequests[requestIndex],
      message: "تم اعتماد طلب الإجازة بنجاح",
    }
  } catch (error) {
    return {
      success: false,
      error: "حدث خطأ في اعتماد طلب الإجازة",
    }
  }
}

// رفض طلب إجازة
export async function rejectLeaveRequest(
  requestId: string,
  approverId: string,
  reason?: string,
): Promise<ApiResponse<LeaveRequest>> {
  try {
    const requestIndex = mockLeaveRequests.findIndex((req) => req.id === requestId)
    const approver = mockEmployees.find((emp) => emp.id === approverId)

    if (requestIndex === -1) {
      return {
        success: false,
        error: "طلب الإجازة غير موجود",
      }
    }

    if (!approver) {
      return {
        success: false,
        error: "المعتمد غير موجود",
      }
    }

    await new Promise((resolve) => setTimeout(resolve, 600))

    mockLeaveRequests[requestIndex] = {
      ...mockLeaveRequests[requestIndex],
      status: "مرفوض",
      approvedBy: approver.name,
      approvedDate: new Date().toISOString().split("T")[0],
    }

    revalidatePath("/self-service")
    revalidatePath("/employees")

    return {
      success: true,
      data: mockLeaveRequests[requestIndex],
      message: "تم رفض طلب الإجازة",
    }
  } catch (error) {
    return {
      success: false,
      error: "حدث خطأ في رفض طلب الإجازة",
    }
  }
}
