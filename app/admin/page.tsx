import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Users, Shield, Activity, Plus, Trash2, Edit, Lock, CheckCircle, XCircle, Database, Info } from "lucide-react"

export default function AdminDashboard() {
  const systemStats = {
    totalUsers: 1500,
    activeUsers: 1200,
    roles: 5,
    permissions: 25,
    storageUsed: 75, // in GB
    totalStorage: 100, // in GB
    uptime: "99.9%",
    lastBackup: "2024-01-25 23:00",
  }

  const recentActivities = [
    { id: 1, user: "أحمد محمد", action: "تعديل صلاحيات المستخدم 'سارة'", time: "منذ 10 دقائق", status: "success" },
    { id: 2, user: "النظام", action: "نسخ احتياطي تلقائي لقاعدة البيانات", time: "منذ ساعة", status: "info" },
    { id: 3, user: "فاطمة علي", action: "محاولة تسجيل دخول فاشلة", time: "منذ 3 ساعات", status: "error" },
    { id: 4, user: "مدير النظام", action: "إضافة مستخدم جديد 'خالد'", time: "أمس", status: "success" },
  ]

  const userRoles = [
    { id: 1, name: "مدير النظام", users: 2, description: "وصول كامل للنظام" },
    { id: 2, name: "مدير الموارد البشرية", users: 5, description: "إدارة شاملة للموارد البشرية" },
    { id: 3, name: "موظف", users: 1400, description: "وصول لبوابة الخدمة الذاتية" },
    { id: 4, name: "مدير قسم", users: 90, description: "إدارة الموظفين في قسمه" },
    { id: 5, name: "محاسب", users: 3, description: "إدارة الرواتب والمعاملات المالية" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 rtl" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">لوحة تحكم المدير</h1>

        {/* System Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">إجمالي المستخدمين</p>
                <p className="text-3xl font-bold text-gray-900">{systemStats.totalUsers}</p>
              </div>
              <Users className="h-8 w-8 text-blue-600" />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">الأدوار المتاحة</p>
                <p className="text-3xl font-bold text-gray-900">{systemStats.roles}</p>
              </div>
              <Shield className="h-8 w-8 text-green-600" />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">مساحة التخزين المستخدمة</p>
                <p className="text-3xl font-bold text-gray-900">{systemStats.storageUsed}GB</p>
                <Progress value={(systemStats.storageUsed / systemStats.totalStorage) * 100} className="mt-2" />
              </div>
              <Database className="h-8 w-8 text-purple-600" />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">وقت التشغيل</p>
                <p className="text-3xl font-bold text-gray-900">{systemStats.uptime}</p>
              </div>
              <Activity className="h-8 w-8 text-amber-600" />
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activities */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center">
                  <Activity className="h-5 w-5 ml-2" />
                  الأنشطة الأخيرة
                </span>
                <Button variant="outline" size="sm">
                  عرض الكل
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      {activity.status === "success" && <CheckCircle className="h-5 w-5 text-green-500" />}
                      {activity.status === "error" && <XCircle className="h-5 w-5 text-red-500" />}
                      {activity.status === "info" && <Info className="h-5 w-5 text-blue-500" />}
                      <div>
                        <p className="font-medium text-sm">{activity.action}</p>
                        <p className="text-xs text-gray-600">
                          {activity.user} - {activity.time}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* User Roles Management */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center">
                  <Lock className="h-5 w-5 ml-2" />
                  إدارة أدوار المستخدمين
                </span>
                <Button size="sm">
                  <Plus className="h-4 w-4 ml-2" />
                  دور جديد
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {userRoles.map((role) => (
                  <div key={role.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium text-sm">
                        {role.name} ({role.users})
                      </p>
                      <p className="text-xs text-gray-600">{role.description}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
