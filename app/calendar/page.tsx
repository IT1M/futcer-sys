import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, Plus, Clock, MapPin, Users, Info, ChevronLeft, ChevronRight } from "lucide-react"

export default function CalendarPage() {
  const events = [
    {
      id: 1,
      title: "اجتماع مجلس الإدارة",
      date: "2024-02-10",
      time: "10:00 ص - 11:00 ص",
      location: "غرفة الاجتماعات الرئيسية",
      attendees: ["أحمد محمد", "فاطمة علي"],
      type: "اجتماع",
      priority: "عالي",
    },
    {
      id: 2,
      title: "تدريب السلامة المهنية",
      date: "2024-02-10",
      time: "02:00 م - 04:00 م",
      location: "قاعة التدريب A",
      attendees: ["جميع الموظفين الجدد"],
      type: "تدريب",
      priority: "متوسط",
    },
    {
      id: 3,
      title: "مراجعة الأداء الربعي",
      date: "2024-02-12",
      time: "09:00 ص - 01:00 م",
      location: "مكتب مدير الموارد البشرية",
      attendees: ["أحمد محمد", "مدير الموارد البشرية"],
      type: "أداء",
      priority: "عالي",
    },
    {
      id: 4,
      title: "ورشة عمل بناء الفريق",
      date: "2024-02-15",
      time: "09:00 ص - 05:00 م",
      location: "منتجع الواحة",
      attendees: ["قسم التسويق"],
      type: "ورشة عمل",
      priority: "عادي",
    },
  ]

  const today = new Date("2024-02-10") // Mock today's date for demonstration

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 rtl" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">التقويم والأحداث</h1>
          <Button>
            <Plus className="h-4 w-4 ml-2" />
            حدث جديد
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Calendar View Placeholder */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center">
                <CalendarIcon className="h-5 w-5 ml-2" />
                التقويم الشهري
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-96 bg-muted rounded-lg flex items-center justify-center text-gray-400">
                {/* This would be a full calendar component */}
                <CalendarIcon className="h-24 w-24" />
                <span className="sr-only">تقويم شهري</span>
              </div>
              <div className="flex justify-between items-center mt-4">
                <Button variant="outline">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <span className="font-semibold">فبراير 2024</span>
                <Button variant="outline">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Events */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Info className="h-5 w-5 ml-2" />
                الأحداث القادمة
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {events
                .filter((event) => new Date(event.date) >= today)
                .map((event) => (
                  <div key={event.id} className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-semibold text-lg">{event.title}</h3>
                      <Badge variant={event.priority === "عالي" ? "destructive" : "secondary"}>{event.priority}</Badge>
                    </div>
                    <p className="text-sm text-gray-600 flex items-center mb-1">
                      <CalendarIcon className="h-4 w-4 ml-2 text-gray-500" />
                      {new Date(event.date).toLocaleDateString("ar-SA")}
                    </p>
                    <p className="text-sm text-gray-600 flex items-center mb-1">
                      <Clock className="h-4 w-4 ml-2 text-gray-500" />
                      {event.time}
                    </p>
                    <p className="text-sm text-gray-600 flex items-center mb-1">
                      <MapPin className="h-4 w-4 ml-2 text-gray-500" />
                      {event.location}
                    </p>
                    <p className="text-sm text-gray-600 flex items-center">
                      <Users className="h-4 w-4 ml-2 text-gray-500" />
                      {event.attendees.join(", ")}
                    </p>
                  </div>
                ))}
              {events.filter((event) => new Date(event.date) >= today).length === 0 && (
                <div className="text-center text-gray-500 py-4">لا توجد أحداث قادمة.</div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
