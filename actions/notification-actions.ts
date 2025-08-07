"use server"

import { revalidatePath } from "next/cache"
import type { Notification, ApiResponse } from "@/lib/types"
import { mockNotifications } from "@/lib/database"

// الحصول على الإشعارات
export async function getNotifications(userId: string): Promise<ApiResponse<Notification[]>> {
  try {
    await new Promise((resolve) => setTimeout(resolve, 300))

    const userNotifications = mockNotifications.filter((notification) => notification.userId === userId)

    return {
      success: true,
      data: userNotifications,
      message: "تم جلب الإشعارات بنجاح",
    }
  } catch (error) {
    return {
      success: false,
      error: "حدث خطأ في جلب الإشعارات",
    }
  }
}

// وضع علامة مقروء على إشعار
export async function markNotificationAsRead(notificationId: string): Promise<ApiResponse<void>> {
  try {
    const notificationIndex = mockNotifications.findIndex((n) => n.id === notificationId)

    if (notificationIndex === -1) {
      return {
        success: false,
        error: "الإشعار غير موجود",
      }
    }

    await new Promise((resolve) => setTimeout(resolve, 200))

    mockNotifications[notificationIndex].read = true

    revalidatePath("/notifications")

    return {
      success: true,
      message: "تم وضع علامة مقروء على الإشعار",
    }
  } catch (error) {
    return {
      success: false,
      error: "حدث خطأ في تحديث الإشعار",
    }
  }
}

// حذف إشعار
export async function deleteNotification(notificationId: string): Promise<ApiResponse<void>> {
  try {
    const notificationIndex = mockNotifications.findIndex((n) => n.id === notificationId)

    if (notificationIndex === -1) {
      return {
        success: false,
        error: "الإشعار غير موجود",
      }
    }

    await new Promise((resolve) => setTimeout(resolve, 300))

    mockNotifications.splice(notificationIndex, 1)

    revalidatePath("/notifications")

    return {
      success: true,
      message: "تم حذف الإشعار بنجاح",
    }
  } catch (error) {
    return {
      success: false,
      error: "حدث خطأ في حذف الإشعار",
    }
  }
}

// إنشاء إشعار جديد
export async function createNotification(
  userId: string,
  type: Notification["type"],
  category: string,
  title: string,
  message: string,
): Promise<ApiResponse<Notification>> {
  try {
    const newNotification: Notification = {
      id: Date.now().toString(),
      type,
      category,
      title,
      message,
      time: "الآن",
      read: false,
      userId,
    }

    await new Promise((resolve) => setTimeout(resolve, 400))

    mockNotifications.push(newNotification)

    revalidatePath("/notifications")

    return {
      success: true,
      data: newNotification,
      message: "تم إنشاء الإشعار بنجاح",
    }
  } catch (error) {
    return {
      success: false,
      error: "حدث خطأ في إنشاء الإشعار",
    }
  }
}

// وضع علامة مقروء على جميع الإشعارات
export async function markAllNotificationsAsRead(userId: string): Promise<ApiResponse<void>> {
  try {
    await new Promise((resolve) => setTimeout(resolve, 500))

    mockNotifications.forEach((notification) => {
      if (notification.userId === userId) {
        notification.read = true
      }
    })

    revalidatePath("/notifications")

    return {
      success: true,
      message: "تم وضع علامة مقروء على جميع الإشعارات",
    }
  } catch (error) {
    return {
      success: false,
      error: "حدث خطأ في تحديث الإشعارات",
    }
  }
}
