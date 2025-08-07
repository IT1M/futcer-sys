"use server"

import { revalidatePath } from "next/cache"
import type { Employee, ApiResponse } from "@/lib/types"
import { mockEmployees } from "@/lib/database"

// الحصول على جميع الموظفين
export async function getEmployees(): Promise<ApiResponse<Employee[]>> {
  try {
    // محاكاة تأخير الشبكة
    await new Promise((resolve) => setTimeout(resolve, 500))

    return {
      success: true,
      data: mockEmployees,
      message: "تم جلب بيانات الموظفين بنجاح",
    }
  } catch (error) {
    return {
      success: false,
      error: "حدث خطأ في جلب بيانات الموظفين",
    }
  }
}

// البحث عن الموظفين
export async function searchEmployees(searchTerm: string): Promise<ApiResponse<Employee[]>> {
  try {
    await new Promise((resolve) => setTimeout(resolve, 300))

    const filteredEmployees = mockEmployees.filter(
      (employee) =>
        employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.position.toLowerCase().includes(searchTerm.toLowerCase()),
    )

    return {
      success: true,
      data: filteredEmployees,
      message: `تم العثور على ${filteredEmployees.length} موظف`,
    }
  } catch (error) {
    return {
      success: false,
      error: "حدث خطأ في البحث",
    }
  }
}

// إضافة موظف جديد
export async function addEmployee(formData: FormData): Promise<ApiResponse<Employee>> {
  try {
    const employeeData = {
      id: Date.now().toString(),
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      position: formData.get("position") as string,
      department: formData.get("department") as string,
      joinDate: formData.get("joinDate") as string,
      status: "نشط" as const,
      salary: Number.parseInt(formData.get("salary") as string) || 0,
      performanceScore: 0,
      location: formData.get("location") as string,
    }

    // التحقق من صحة البيانات
    if (!employeeData.name || !employeeData.email || !employeeData.department) {
      return {
        success: false,
        error: "يرجى ملء جميع الحقول المطلوبة",
      }
    }

    // محاكاة إضافة الموظف لقاعدة البيانات
    await new Promise((resolve) => setTimeout(resolve, 1000))

    mockEmployees.push(employeeData)

    // إعادة تحديث الصفحة
    revalidatePath("/employees")

    return {
      success: true,
      data: employeeData,
      message: "تم إضافة الموظف بنجاح",
    }
  } catch (error) {
    return {
      success: false,
      error: "حدث خطأ في إضافة الموظف",
    }
  }
}

// تحديث بيانات موظف
export async function updateEmployee(employeeId: string, formData: FormData): Promise<ApiResponse<Employee>> {
  try {
    const employeeIndex = mockEmployees.findIndex((emp) => emp.id === employeeId)

    if (employeeIndex === -1) {
      return {
        success: false,
        error: "الموظف غير موجود",
      }
    }

    const updatedData = {
      ...mockEmployees[employeeIndex],
      name: (formData.get("name") as string) || mockEmployees[employeeIndex].name,
      email: (formData.get("email") as string) || mockEmployees[employeeIndex].email,
      phone: (formData.get("phone") as string) || mockEmployees[employeeIndex].phone,
      position: (formData.get("position") as string) || mockEmployees[employeeIndex].position,
      department: (formData.get("department") as string) || mockEmployees[employeeIndex].department,
      salary: Number.parseInt(formData.get("salary") as string) || mockEmployees[employeeIndex].salary,
      location: (formData.get("location") as string) || mockEmployees[employeeIndex].location,
    }

    await new Promise((resolve) => setTimeout(resolve, 800))

    mockEmployees[employeeIndex] = updatedData

    revalidatePath("/employees")

    return {
      success: true,
      data: updatedData,
      message: "تم تحديث بيانات الموظف بنجاح",
    }
  } catch (error) {
    return {
      success: false,
      error: "حدث خطأ في تحديث بيانات الموظف",
    }
  }
}

// حذف موظف
export async function deleteEmployee(employeeId: string): Promise<ApiResponse<void>> {
  try {
    const employeeIndex = mockEmployees.findIndex((emp) => emp.id === employeeId)

    if (employeeIndex === -1) {
      return {
        success: false,
        error: "الموظف غير موجود",
      }
    }

    await new Promise((resolve) => setTimeout(resolve, 500))

    mockEmployees.splice(employeeIndex, 1)

    revalidatePath("/employees")

    return {
      success: true,
      message: "تم حذف الموظف بنجاح",
    }
  } catch (error) {
    return {
      success: false,
      error: "حدث خطأ في حذف الموظف",
    }
  }
}

// تصدير بيانات الموظفين
export async function exportEmployees(format: "excel" | "pdf" = "excel"): Promise<ApiResponse<string>> {
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // محاكاة إنشاء ملف التصدير
    const fileName = `employees_export_${new Date().toISOString().split("T")[0]}.${format === "excel" ? "xlsx" : "pdf"}`

    return {
      success: true,
      data: fileName,
      message: `تم تصدير بيانات ${mockEmployees.length} موظف بنجاح`,
    }
  } catch (error) {
    return {
      success: false,
      error: "حدث خطأ في تصدير البيانات",
    }
  }
}
