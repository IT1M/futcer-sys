"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { mockDashboardStats, mockEmployees, mockLeaveRequests, mockCourses } from "@/lib/database"
import {
  Users,
  UserCheck,
  Calendar,
  GraduationCap,
  TrendingUp,
  Clock,
  CheckCircle,
  XCircle,
  BarChart3,
  Activity,
  Search,
  Filter,
  Download,
  Plus,
  ArrowUp,
  ArrowDown,
  Target,
  Award,
  Briefcase,
} from "lucide-react"

export default function HomePage() {
  const router = useRouter()
  const [stats, setStats] = useState(mockDashboardStats)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedPeriod, setSelectedPeriod] = useState("هذا الشهر")

  // Calculate additional stats
  const totalLeaveRequests = mockLeaveRequests.length
  const approvedLeaves = mockLeaveRequests.filter((req) => req.status === "معتمد").length
  const pendingLeaves = mockLeaveRequests.filter((req) => req.status === "في الانتظار").length
  const rejectedLeaves = mockLeaveRequests.filter((req) => req.status === "مرفوض").length

  const activeCourses = mockCourses.filter((course) => course.status === "قيد التنفيذ").length
  const completedCourses = mockCourses.filter((course) => course.status === "مكتمل").length

  const handleQuickAction = (action: string) => {
    switch (action) {
      case "employees":
        router.push("/employees")
        break
      case "leaves":
        router.push("/self-service?tab=leave")
        break
      case "courses":
        router.push("/learning")
        break
      case "performance":
        router.push("/performance")
        break
      case "reports":
        router.push("/reports")
        break
      case "settings":
        router.push("/settings")
        break
      default:
        break
    }
  }

  const StatCard = ({ title, value, change, icon: Icon, color, onClick }: any) => (
    <Card className="cursor-pointer hover:shadow-lg transition-all duration-200" onClick={onClick}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-3xl font-bold">{value}</p>
            {change && (
              <div className="flex items-center mt-2">
                {change > 0 ? (
                  <ArrowUp className="h-4 w-4 text-green-600 ml-1" />
                ) : (
                  <ArrowDown className="h-4 w-4 text-red-600 ml-1" />
                )}
                <span className={`text-sm ${change > 0 ? "text-green-600" : "text-red-600"}`}>{Math.abs(change)}%</span>
                <span className="text-sm text-muted-foreground mr-2">من الشهر الماضي</span>
              </div>
            )}
          </div>
          <div className={`p-3 rounded-full ${color}`}>
            <Icon className="h-6 w-6 text-white" />
          </div>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 rtl" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">لوحة التحكم الرئيسية</h1>
              <p className="text-gray-600">مرحباً بك في نظام إدارة الموارد البشرية</p>
            </div>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <div className="relative">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="البحث..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pr-10 w-64"
                />
              </div>
              <Button variant="outline">
                <Filter className="h-4 w-4 ml-2" />
                تصفية
              </Button>
              <Button variant="outline">
                <Download className="h-4 w-4 ml-2" />
                تصدير
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="إجمالي الموظفين"
            value={stats.totalEmployees}
            change={5.2}
            icon={Users}
            color="bg-blue-600"
            onClick={() => handleQuickAction("employees")}
          />
          <StatCard
            title="الموظفون النشطون"
            value={stats.activeEmployees}
            change={2.1}
            icon={UserCheck}
            color="bg-green-600"
            onClick={() => handleQuickAction("employees")}
          />
          <StatCard
            title="طلبات الإجازة المعلقة"
            value={stats.pendingLeaves}
            change={-12.5}
            icon={Calendar}
            color="bg-yellow-600"
            onClick={() => handleQuickAction("leaves")}
          />
          <StatCard
            title="الدورات المكتملة"
            value={stats.completedTrainings}
            change={18.3}
            icon={GraduationCap}
            color="bg-purple-600"
            onClick={() => handleQuickAction("courses")}
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Recent Activities */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Activity className="h-5 w-5 ml-2" />
                الأنشطة الأخيرة
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {stats.recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-4 rtl:space-x-reverse">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        {activity.type === "employee" && <Users className="h-4 w-4 text-blue-600" />}
                        {activity.type === "leave" && <Calendar className="h-4 w-4 text-yellow-600" />}
                        {activity.type === "training" && <GraduationCap className="h-4 w-4 text-purple-600" />}
                        {activity.type === "performance" && <Target className="h-4 w-4 text-green-600" />}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                      <p className="text-sm text-gray-500">{activity.description}</p>
                      <p className="text-xs text-gray-400 mt-1">
                        {new Date(activity.timestamp).toLocaleDateString("ar-SA", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Button variant="outline" className="w-full bg-transparent">
                  عرض جميع الأنشطة
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Plus className="h-5 w-5 ml-2" />
                إجراءات سريعة
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full justify-start bg-transparent"
                  onClick={() => router.push("/employees?action=new")}
                >
                  <Users className="h-4 w-4 ml-2" />
                  إضافة موظف جديد
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start bg-transparent"
                  onClick={() => router.push("/self-service?action=new&type=leave")}
                >
                  <Calendar className="h-4 w-4 ml-2" />
                  طلب إجازة
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start bg-transparent"
                  onClick={() => router.push("/learning?action=new")}
                >
                  <GraduationCap className="h-4 w-4 ml-2" />
                  إضافة دورة تدريبية
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start bg-transparent"
                  onClick={() => router.push("/performance?action=new")}
                >
                  <Target className="h-4 w-4 ml-2" />
                  تقييم أداء
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start bg-transparent"
                  onClick={() => router.push("/reports")}
                >
                  <BarChart3 className="h-4 w-4 ml-2" />
                  إنشاء تقرير
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Department Stats and Leave Requests */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Department Statistics */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Briefcase className="h-5 w-5 ml-2" />
                إحصائيات الأقسام
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {stats.departmentStats.map((dept, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium">{dept.name}</h4>
                      <p className="text-sm text-gray-600">{dept.employeeCount} موظف</p>
                    </div>
                    <div className="text-left">
                      <div className="flex items-center gap-2">
                        <Award className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm font-medium">{dept.averagePerformance}</span>
                      </div>
                      <p className="text-xs text-gray-500">{dept.completedTrainings} دورة مكتملة</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Leave Requests Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="h-5 w-5 ml-2" />
                ملخص طلبات الإجازة
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 ml-2" />
                    <span className="font-medium">معتمدة</span>
                  </div>
                  <span className="text-2xl font-bold text-green-600">{approvedLeaves}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-yellow-600 ml-2" />
                    <span className="font-medium">في الانتظار</span>
                  </div>
                  <span className="text-2xl font-bold text-yellow-600">{pendingLeaves}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                  <div className="flex items-center">
                    <XCircle className="h-5 w-5 text-red-600 ml-2" />
                    <span className="font-medium">مرفوضة</span>
                  </div>
                  <span className="text-2xl font-bold text-red-600">{rejectedLeaves}</span>
                </div>
                <div className="mt-4">
                  <Button
                    variant="outline"
                    className="w-full bg-transparent"
                    onClick={() => handleQuickAction("leaves")}
                  >
                    عرض جميع الطلبات
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Performance Overview and Training Progress */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Performance Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="h-5 w-5 ml-2" />
                نظرة عامة على الأداء
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">متوسط الأداء العام</span>
                  <span className="text-2xl font-bold text-blue-600">{stats.averagePerformance}</span>
                </div>
                <Progress value={stats.averagePerformance * 20} className="h-3" />
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <p className="text-2xl font-bold text-green-600">85%</p>
                    <p className="text-sm text-gray-600">أداء ممتاز</p>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <p className="text-2xl font-bold text-blue-600">12%</p>
                    <p className="text-sm text-gray-600">يحتاج تحسين</p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="w-full bg-transparent"
                  onClick={() => handleQuickAction("performance")}
                >
                  عرض تفاصيل الأداء
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Training Progress */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <GraduationCap className="h-5 w-5 ml-2" />
                تقدم التدريب
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">الدورات النشطة</span>
                  <span className="text-2xl font-bold text-purple-600">{activeCourses}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">الدورات المكتملة</span>
                  <span className="text-2xl font-bold text-green-600">{completedCourses}</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>معدل الإكمال</span>
                    <span>78%</span>
                  </div>
                  <Progress value={78} className="h-2" />
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="text-center p-3 bg-purple-50 rounded-lg">
                    <p className="text-xl font-bold text-purple-600">156</p>
                    <p className="text-xs text-gray-600">شهادة مكتسبة</p>
                  </div>
                  <div className="text-center p-3 bg-orange-50 rounded-lg">
                    <p className="text-xl font-bold text-orange-600">24</p>
                    <p className="text-xs text-gray-600">ساعة تدريب</p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="w-full bg-transparent"
                  onClick={() => handleQuickAction("courses")}
                >
                  عرض جميع الدورات
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Employees */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="flex items-center">
                <Users className="h-5 w-5 ml-2" />
                الموظفون الجدد
              </span>
              <Button variant="outline" size="sm" onClick={() => handleQuickAction("employees")}>
                عرض الكل
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {mockEmployees.slice(0, 6).map((employee) => (
                <div
                  key={employee.id}
                  className="flex items-center space-x-4 rtl:space-x-reverse p-3 border rounded-lg"
                >
                  <Avatar>
                    <AvatarImage src={employee.avatar || "/placeholder.svg"} />
                    <AvatarFallback>
                      {employee.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">{employee.name}</p>
                    <p className="text-sm text-gray-500 truncate">{employee.position}</p>
                    <p className="text-xs text-gray-400">{employee.department}</p>
                  </div>
                  <Badge
                    variant={
                      employee.status === "نشط"
                        ? "default"
                        : employee.status === "في إجازة"
                          ? "secondary"
                          : "destructive"
                    }
                  >
                    {employee.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
