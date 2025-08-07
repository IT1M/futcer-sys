"use client"

import { useState, useEffect, useTransition } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "@/components/ui/use-toast"
import { Bell, CheckCircle, XCircle, Info, Settings, Trash2, Loader2 } from "lucide-react"

// استيراد Server Actions
import {
  getNotifications,
  markNotificationAsRead,
  deleteNotification,
  markAllNotificationsAsRead,
} from "@/actions/notification-actions"
import type { Notification } from "@/lib/types"

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isPending, startTransition] = useTransition()

  // تحميل الإشعارات عند تحميل الصفحة
  useEffect(() => {
    loadNotifications()
  }, [])

  const loadNotifications = async () => {
    setIsLoading(true)
    try {
      // في التطبيق الحقيقي، سنحصل على userId من جلسة المستخدم
      const userId = "1" // مؤقت
      const result = await getNotifications(userId)

      if (result.success && result.data) {
        setNotifications(result.data)
      } else {
        toast({
          title: "خطأ",
          description: result.error || "حدث خطأ في تحميل الإشعارات",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "خطأ",
        description: "حدث خطأ غير متوقع",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleMarkAsRead = async (notificationId: string) => {
    startTransition(async () => {
      const result = await markNotificationAsRead(notificationId)
      if (result.success) {
        // تحديث الحالة محلياً
        setNotifications((prev) => prev.map((n) => (n.id === notificationId ? { ...n, read: true } : n)))
        toast({
          title: "تم بنجاح",
          description: result.message,
        })
      } else {
        toast({
          title: "خطأ",
          description: result.error,
          variant: "destructive",
        })
      }
    })
  }

  const handleDeleteNotification = async (notificationId: string) => {
    startTransition(async () => {
      const result = await deleteNotification(notificationId)
      if (result.success) {
        // إزالة الإشعار من القائمة محلياً
        setNotifications((prev) => prev.filter((n) => n.id !== notificationId))
        toast({
          title: "تم الحذف",
          description: result.message,
        })
      } else {
        toast({
          title: "خطأ",
          description: result.error,
          variant: "destructive",
        })
      }
    })
  }

  const handleMarkAllAsRead = async () => {
    startTransition(async () => {
      const userId = "1" // مؤقت
      const result = await markAllNotificationsAsRead(userId)
      if (result.success) {
        // تحديث جميع الإشعارات كمقروءة محلياً
        setNotifications((prev) => prev.map((n) => ({ ...n, read: true })))
        toast({
          title: "تم بنجاح",
          description: result.message,
        })
      } else {
        toast({
          title: "خطأ",
          description: result.error,
          variant: "destructive",
        })
      }
    })
  }

  const getIcon = (type: string) => {
    switch (type) {
      case "success":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "error":
        return <XCircle className="h-5 w-5 text-red-500" />
      case "warning":
        return <Info className="h-5 w-5 text-amber-500" />
      default:
        return <Bell className="h-5 w-5 text-blue-500" />
    }
  }

  const unreadCount = notifications.filter((n) => !n.read).length

  if (isLoading) {
    return (
      <div
        className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 rtl flex items-center justify-center"
        dir="rtl"
      >
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
          <p className="text-gray-600">جاري تحميل الإشعارات...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 rtl" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">الإشعارات</h1>
          <div className="flex gap-2">
            {unreadCount > 0 && (
              <Button variant="outline" onClick={handleMarkAllAsRead} disabled={isPending}>
                {isPending ? (
                  <Loader2 className="h-4 w-4 ml-2 animate-spin" />
                ) : (
                  <CheckCircle className="h-4 w-4 ml-2" />
                )}
                وضع علامة مقروء على الكل
              </Button>
            )}
            <Button variant="outline">
              <Settings className="h-4 w-4 ml-2" />
              إعدادات الإشعارات
            </Button>
          </div>
        </div>

        <Tabs defaultValue="all" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-5">
            <TabsTrigger value="all">الكل ({notifications.length})</TabsTrigger>
            <TabsTrigger value="unread">غير مقروء ({unreadCount})</TabsTrigger>
            <TabsTrigger value="general">عام</TabsTrigger>
            <TabsTrigger value="payroll">الرواتب</TabsTrigger>
            <TabsTrigger value="training">التدريب</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            {notifications.length > 0 ? (
              notifications.map((notification) => (
                <Card
                  key={notification.id}
                  className={`hover:shadow-lg transition-shadow ${notification.read ? "opacity-70" : ""}`}
                >
                  <CardContent className="p-4 flex items-start gap-4">
                    <div className="pt-1">{getIcon(notification.type)}</div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <h3 className="font-semibold text-lg">{notification.title}</h3>
                        <Badge variant="secondary">{notification.category}</Badge>
                      </div>
                      <p className="text-gray-700 text-sm mb-2">{notification.message}</p>
                      <p className="text-gray-500 text-xs">{notification.time}</p>
                    </div>
                    <div className="flex gap-2">
                      {!notification.read && (
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleMarkAsRead(notification.id)}
                          title="وضع علامة كمقروء"
                          disabled={isPending}
                        >
                          {isPending ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                          ) : (
                            <CheckCircle className="h-4 w-4" />
                          )}
                        </Button>
                      )}
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDeleteNotification(notification.id)}
                        title="حذف"
                        disabled={isPending}
                      >
                        {isPending ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          <Trash2 className="h-4 w-4 text-red-500" />
                        )}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="text-center text-gray-500 py-8">
                <Bell className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                <h3 className="text-lg font-medium text-gray-900 mb-1">لا توجد إشعارات</h3>
                <p className="text-gray-500">لا توجد إشعارات حالياً.</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="unread" className="space-y-4">
            {notifications
              .filter((n) => !n.read)
              .map((notification) => (
                <Card key={notification.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 flex items-start gap-4">
                    <div className="pt-1">{getIcon(notification.type)}</div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <h3 className="font-semibold text-lg">{notification.title}</h3>
                        <Badge variant="secondary">{notification.category}</Badge>
                      </div>
                      <p className="text-gray-700 text-sm mb-2">{notification.message}</p>
                      <p className="text-gray-500 text-xs">{notification.time}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleMarkAsRead(notification.id)}
                        title="وضع علامة كمقروء"
                        disabled={isPending}
                      >
                        {isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : <CheckCircle className="h-4 w-4" />}
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDeleteNotification(notification.id)}
                        title="حذف"
                        disabled={isPending}
                      >
                        {isPending ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          <Trash2 className="h-4 w-4 text-red-500" />
                        )}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            {unreadCount === 0 && (
              <div className="text-center text-gray-500 py-8">
                <CheckCircle className="h-12 w-12 mx-auto mb-4 text-green-400" />
                <h3 className="text-lg font-medium text-gray-900 mb-1">لا توجد إشعارات غير مقروءة</h3>
                <p className="text-gray-500">تم قراءة جميع الإشعارات.</p>
              </div>
            )}
          </TabsContent>

          {/* Placeholder for other tabs */}
          <TabsContent value="general" className="text-center text-gray-500 py-8">
            <div className="space-y-4">
              {notifications
                .filter((n) => n.category === "عام")
                .map((notification) => (
                  <Card
                    key={notification.id}
                    className={`hover:shadow-lg transition-shadow ${notification.read ? "opacity-70" : ""}`}
                  >
                    <CardContent className="p-4 flex items-start gap-4">
                      <div className="pt-1">{getIcon(notification.type)}</div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <h3 className="font-semibold text-lg">{notification.title}</h3>
                          <Badge variant="secondary">{notification.category}</Badge>
                        </div>
                        <p className="text-gray-700 text-sm mb-2">{notification.message}</p>
                        <p className="text-gray-500 text-xs">{notification.time}</p>
                      </div>
                      <div className="flex gap-2">
                        {!notification.read && (
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleMarkAsRead(notification.id)}
                            disabled={isPending}
                          >
                            <CheckCircle className="h-4 w-4" />
                          </Button>
                        )}
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleDeleteNotification(notification.id)}
                          disabled={isPending}
                        >
                          <Trash2 className="h-4 w-4 text-red-500" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              {notifications.filter((n) => n.category === "عام").length === 0 && <p>لا توجد إشعارات عامة حالياً.</p>}
            </div>
          </TabsContent>

          <TabsContent value="payroll" className="text-center text-gray-500 py-8">
            <div className="space-y-4">
              {notifications
                .filter((n) => n.category === "الرواتب")
                .map((notification) => (
                  <Card
                    key={notification.id}
                    className={`hover:shadow-lg transition-shadow ${notification.read ? "opacity-70" : ""}`}
                  >
                    <CardContent className="p-4 flex items-start gap-4">
                      <div className="pt-1">{getIcon(notification.type)}</div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <h3 className="font-semibold text-lg">{notification.title}</h3>
                          <Badge variant="secondary">{notification.category}</Badge>
                        </div>
                        <p className="text-gray-700 text-sm mb-2">{notification.message}</p>
                        <p className="text-gray-500 text-xs">{notification.time}</p>
                      </div>
                      <div className="flex gap-2">
                        {!notification.read && (
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleMarkAsRead(notification.id)}
                            disabled={isPending}
                          >
                            <CheckCircle className="h-4 w-4" />
                          </Button>
                        )}
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleDeleteNotification(notification.id)}
                          disabled={isPending}
                        >
                          <Trash2 className="h-4 w-4 text-red-500" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              {notifications.filter((n) => n.category === "الرواتب").length === 0 && (
                <p>لا توجد إشعارات رواتب حالياً.</p>
              )}
            </div>
          </TabsContent>

          <TabsContent value="training" className="text-center text-gray-500 py-8">
            <div className="space-y-4">
              {notifications
                .filter((n) => n.category === "التدريب")
                .map((notification) => (
                  <Card
                    key={notification.id}
                    className={`hover:shadow-lg transition-shadow ${notification.read ? "opacity-70" : ""}`}
                  >
                    <CardContent className="p-4 flex items-start gap-4">
                      <div className="pt-1">{getIcon(notification.type)}</div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <h3 className="font-semibold text-lg">{notification.title}</h3>
                          <Badge variant="secondary">{notification.category}</Badge>
                        </div>
                        <p className="text-gray-700 text-sm mb-2">{notification.message}</p>
                        <p className="text-gray-500 text-xs">{notification.time}</p>
                      </div>
                      <div className="flex gap-2">
                        {!notification.read && (
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleMarkAsRead(notification.id)}
                            disabled={isPending}
                          >
                            <CheckCircle className="h-4 w-4" />
                          </Button>
                        )}
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleDeleteNotification(notification.id)}
                          disabled={isPending}
                        >
                          <Trash2 className="h-4 w-4 text-red-500" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              {notifications.filter((n) => n.category === "التدريب").length === 0 && (
                <p>لا توجد إشعارات تدريب حالياً.</p>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
