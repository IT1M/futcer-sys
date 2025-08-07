"use server"

import { revalidatePath } from "next/cache"
import type { Course, ApiResponse } from "@/lib/types"
import { mockCourses } from "@/lib/database"

// الحصول على جميع الدورات
export async function getCourses(): Promise<ApiResponse<Course[]>> {
  try {
    await new Promise((resolve) => setTimeout(resolve, 400))

    return {
      success: true,
      data: mockCourses,
      message: "تم جلب الدورات بنجاح",
    }
  } catch (error) {
    return {
      success: false,
      error: "حدث خطأ في جلب الدورات",
    }
  }
}

// التسجيل في دورة
export async function enrollInCourse(courseId: string, userId: string): Promise<ApiResponse<Course>> {
  try {
    const courseIndex = mockCourses.findIndex((course) => course.id === courseId)

    if (courseIndex === -1) {
      return {
        success: false,
        error: "الدورة غير موجودة",
      }
    }

    await new Promise((resolve) => setTimeout(resolve, 800))

    mockCourses[courseIndex].enrolled += 1

    revalidatePath("/learning")

    return {
      success: true,
      data: mockCourses[courseIndex],
      message: "تم التسجيل في الدورة بنجاح",
    }
  } catch (error) {
    return {
      success: false,
      error: "حدث خطأ في التسجيل في الدورة",
    }
  }
}

// تحديث تقدم الدورة
export async function updateCourseProgress(
  courseId: string,
  userId: string,
  progress: number,
): Promise<ApiResponse<Course>> {
  try {
    const courseIndex = mockCourses.findIndex((course) => course.id === courseId)

    if (courseIndex === -1) {
      return {
        success: false,
        error: "الدورة غير موجودة",
      }
    }

    await new Promise((resolve) => setTimeout(resolve, 500))

    mockCourses[courseIndex].progress = Math.min(100, Math.max(0, progress))

    revalidatePath("/learning")

    return {
      success: true,
      data: mockCourses[courseIndex],
      message: "تم تحديث التقدم بنجاح",
    }
  } catch (error) {
    return {
      success: false,
      error: "حدث خطأ في تحديث التقدم",
    }
  }
}

// البحث في الدورات
export async function searchCourses(searchTerm: string): Promise<ApiResponse<Course[]>> {
  try {
    await new Promise((resolve) => setTimeout(resolve, 300))

    const filteredCourses = mockCourses.filter(
      (course) =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchTerm.toLowerCase()),
    )

    return {
      success: true,
      data: filteredCourses,
      message: `تم العثور على ${filteredCourses.length} دورة`,
    }
  } catch (error) {
    return {
      success: false,
      error: "حدث خطأ في البحث",
    }
  }
}
