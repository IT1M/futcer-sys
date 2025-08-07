"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import {
  Bell,
  CheckCheck,
  X,
  Calendar,
  User,
  GraduationCap,
  TrendingUp,
  AlertTriangle,
  Info,
  CheckCircle,
} from "lucide-react"
import { useNotificationStore } from "@/lib/store"
import { formatDistanceToNow } from "date-fns"
import { ar } from "date-fns/locale"

export function NotificationCenter() {
  const { notifications, unreadCount, markAsRead, markAllAsRead, removeNotification } = useNotificationStore()

  const [filter, setFilter] = useState<string>("all")

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "leave":
        return Calendar
      case "employee":
        return User
      case "training":
        return GraduationCap
      case "performance":
        return TrendingUp
      case "warning":
        return AlertTriangle
      case "success":
        return CheckCircle
      default:
        return Info
    }
  }

  const getNotificationColor = (type: string, priority: string) => {
    if (priority === "عاجل") return "red"
    if (priority === "عالي") return "orange"

    switch (type) {
      case "leave":
        return "blue"
      case "employee":
        return "green"
      case "training":
        return "purple"
      case "performance":
        return "indigo"
      case "warning":
        return "red"
      case "success":
        return "green"
      default:
        return "gray"
    }
  }

  const filteredNotifications = notifications.filter((notification) => {
    if (filter === "unread") return !notification.read
    if (filter === "urgent") return notification.priority === "عاجل"
    return true
  })

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5" />
            الإشعارات
            {unreadCount > 0 && (
              <Badge variant="destructive" className="text-xs">
                {unreadCount}
              </Badge>
            )}
          </CardTitle>
          <div className="flex gap-2">
            <Button variant="ghost" size="sm" onClick={markAllAsRead} disabled={unreadCount === 0}>
              <CheckCheck className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 mt-4">
          {[
            { key: "all", label: "الكل" },
            { key: "unread", label: "غير مقروءة" },
            { key: "urgent", label: "عاجل" },
          ].map((tab) => (
            <Button
              key={tab.key}
              variant={filter === tab.key ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(tab.key)}
              className="text-xs"
            >
              {tab.label}
            </Button>
          ))}
        </div>
      </CardHeader>

      <CardContent className="p-0">
        <ScrollArea className="h-96">
          {filteredNotifications.length === 0 ? (
            <div className="p-6 text-center text-gray-500">
              <Bell className="h-12 w-12 mx-auto mb-4 text-gray-300" />
              <p>لا توجد إشعارات</p>
            </div>
          ) : (
            <div className="space-y-1">
              {filteredNotifications.map((notification, index) => {
                const Icon = getNotificationIcon(notification.type)
                const color = getNotificationColor(notification.type, notification.priority)

                return (
                  <div key={notification.id}>
                    <div
                      className={`p-4 hover:bg-gray-50 cursor-pointer transition-colors ${
                        !notification.read ? "bg-blue-50 border-r-4 border-blue-500" : ""
                      }`}
                      onClick={() => !notification.read && markAsRead(notification.id)}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`p-2 rounded-lg bg-${color}-100 flex-shrink-0`}>
                          <Icon className={`h-4 w-4 text-${color}-600`} />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="text-sm font-medium truncate">{notification.title}</h4>
                            <div className="flex items-center gap-2 flex-shrink-0">
                              {notification.priority === "عاجل" && (
                                <Badge variant="destructive" className="text-xs">
                                  عاجل
                                </Badge>
                              )}
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  removeNotification(notification.id)
                                }}
                                className="h-6 w-6 p-0"
                              >
                                <X className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>

                          <p className="text-sm text-gray-600 mb-2">{notification.message}</p>

                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500">
                              {formatDistanceToNow(new Date(notification.createdAt), {
                                addSuffix: true,
                                locale: ar,
                              })}
                            </span>

                            {notification.actionUrl && (
                              <Button variant="outline" size="sm" className="text-xs bg-transparent">
                                {notification.actionText || "عرض"}
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    {index < filteredNotifications.length - 1 && <Separator />}
                  </div>
                )
              })}
            </div>
          )}
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
