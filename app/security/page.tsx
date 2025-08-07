"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import {
  Shield,
  Key,
  Eye,
  Smartphone,
  Fingerprint,
  AlertTriangle,
  CheckCircle,
  Users,
  Activity,
  Globe,
  Server,
  Database,
  Wifi,
  Monitor,
  Camera,
  UserCheck,
  Settings,
  RefreshCw,
  Download,
  Search,
  Filter,
  Plus,
  Edit,
  MapPin,
  Calendar,
} from "lucide-react"

export default function SecurityPage() {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true)
  const [biometricEnabled, setBiometricEnabled] = useState(true)
  const [locationTracking, setLocationTracking] = useState(false)

  const securityStats = {
    totalUsers: 247,
    activeUsers: 198,
    securityIncidents: 3,
    blockedAttempts: 45,
    systemUptime: 99.8,
    lastSecurityScan: "2024-01-25",
  }

  const securityLogs = [
    {
      id: 1,
      type: "تسجيل دخول",
      user: "أحمد محمد السعد",
      action: "تسجيل دخول ناجح",
      ip: "192.168.1.100",
      location: "الرياض، السعودية",
      device: "Windows 11 - Chrome",
      timestamp: "2024-01-25 09:15:23",
      status: "نجح",
      riskLevel: "منخفض",
    },
    {
      id: 2,
      type: "محاولة اختراق",
      user: "غير معروف",
      action: "محاولة تسجيل دخول متعددة فاشلة",
      ip: "203.45.67.89",
      location: "غير محدد",
      device: "Linux - Firefox",
      timestamp: "2024-01-25 08:45:12",
      status: "محظور",
      riskLevel: "عالي",
    },
    {
      id: 3,
      type: "تغيير كلمة مرور",
      user: "فاطمة علي الأحمد",
      action: "تغيير كلمة المرور",
      ip: "192.168.1.105",
      location: "جدة، السعودية",
      device: "iPhone - Safari",
      timestamp: "2024-01-25 07:30:45",
      status: "نجح",
      riskLevel: "منخفض",
    },
    {
      id: 4,
      type: "وصول للبيانات",
      user: "محمد خالد العتيبي",
      action: "تحميل ملف سري",
      ip: "192.168.1.110",
      location: "الدمام، السعودية",
      device: "MacOS - Safari",
      timestamp: "2024-01-25 06:20:15",
      status: "نجح",
      riskLevel: "متوسط",
    },
  ]

  const userSessions = [
    {
      id: 1,
      user: "أحمد محمد السعد",
      device: "Windows 11 - Chrome",
      ip: "192.168.1.100",
      location: "الرياض",
      loginTime: "2024-01-25 09:15:23",
      lastActivity: "2024-01-25 11:30:45",
      status: "نشط",
    },
    {
      id: 2,
      user: "فاطمة علي الأحمد",
      device: "iPhone - Safari",
      ip: "192.168.1.105",
      location: "جدة",
      loginTime: "2024-01-25 08:00:12",
      lastActivity: "2024-01-25 11:25:30",
      status: "نشط",
    },
    {
      id: 3,
      user: "محمد خالد العتيبي",
      device: "MacOS - Safari",
      ip: "192.168.1.110",
      location: "الدمام",
      loginTime: "2024-01-25 07:45:30",
      lastActivity: "2024-01-25 10:15:20",
      status: "خامل",
    },
  ]

  const securityPolicies = [
    {
      id: 1,
      name: "سياسة كلمات المرور",
      description: "متطلبات كلمات المرور القوية",
      status: "مفعل",
      lastUpdated: "2024-01-15",
      compliance: 95,
    },
    {
      id: 2,
      name: "سياسة المصادقة الثنائية",
      description: "إجبارية المصادقة الثنائية لجميع المستخدمين",
      status: "مفعل",
      lastUpdated: "2024-01-10",
      compliance: 87,
    },
    {
      id: 3,
      name: "سياسة الوصول للبيانات",
      description: "تحديد صلاحيات الوصول حسب الدور",
      status: "مفعل",
      lastUpdated: "2024-01-20",
      compliance: 92,
    },
    {
      id: 4,
      name: "سياسة الأجهزة المحمولة",
      description: "أمان الأجهزة المحمولة والوصول عن بُعد",
      status: "قيد المراجعة",
      lastUpdated: "2024-01-05",
      compliance: 78,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 rtl" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">الأمان والحماية المتقدمة</h1>
          <p className="text-gray-600">نظام أمان شامل مع المصادقة البيومترية والمراقبة المتقدمة</p>
        </div>

        {/* Security Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mb-8">
          <Card>
            <CardContent className="p-4">
              <div className="text-center">
                <Users className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-blue-600">{securityStats.totalUsers}</p>
                <p className="text-xs text-gray-600">إجمالي المستخدمين</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="text-center">
                <Activity className="h-6 w-6 text-green-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-green-600">{securityStats.activeUsers}</p>
                <p className="text-xs text-gray-600">مستخدمين نشطين</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="text-center">
                <AlertTriangle className="h-6 w-6 text-red-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-red-600">{securityStats.securityIncidents}</p>
                <p className="text-xs text-gray-600">حوادث أمنية</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="text-center">
                <Shield className="h-6 w-6 text-amber-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-amber-600">{securityStats.blockedAttempts}</p>
                <p className="text-xs text-gray-600">محاولات محظورة</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="text-center">
                <Server className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-purple-600">{securityStats.systemUptime}%</p>
                <p className="text-xs text-gray-600">وقت تشغيل النظام</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="text-center">
                <CheckCircle className="h-6 w-6 text-indigo-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-indigo-600">آمن</p>
                <p className="text-xs text-gray-600">حالة النظام</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6">
            <TabsTrigger value="overview">نظرة عامة</TabsTrigger>
            <TabsTrigger value="authentication">المصادقة</TabsTrigger>
            <TabsTrigger value="monitoring">المراقبة</TabsTrigger>
            <TabsTrigger value="policies">السياسات</TabsTrigger>
            <TabsTrigger value="biometric">البيومترية</TabsTrigger>
            <TabsTrigger value="reports">التقارير</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Security Status */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="h-5 w-5 ml-2" />
                    حالة الأمان العامة
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 rounded-lg border-r-4 border-green-500">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-green-900">النظام آمن</h4>
                          <p className="text-green-700 text-sm">جميع الأنظمة تعمل بشكل طبيعي</p>
                        </div>
                        <CheckCircle className="h-8 w-8 text-green-600" />
                      </div>
                    </div>

                    <div className="p-4 bg-blue-50 rounded-lg border-r-4 border-blue-500">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-blue-900">آخر فحص أمني</h4>
                          <p className="text-blue-700 text-sm">
                            {new Date(securityStats.lastSecurityScan).toLocaleDateString("ar-SA")}
                          </p>
                        </div>
                        <Activity className="h-8 w-8 text-blue-600" />
                      </div>
                    </div>

                    <div className="p-4 bg-amber-50 rounded-lg border-r-4 border-amber-500">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-amber-900">تحديثات الأمان</h4>
                          <p className="text-amber-700 text-sm">3 تحديثات متاحة</p>
                        </div>
                        <RefreshCw className="h-8 w-8 text-amber-600" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Security Events */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Activity className="h-5 w-5 ml-2" />
                    الأحداث الأمنية الأخيرة
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {securityLogs.slice(0, 4).map((log) => (
                      <div
                        key={log.id}
                        className="flex items-start space-x-3 rtl:space-x-reverse p-3 border rounded-lg"
                      >
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <p className="text-sm font-medium">{log.action}</p>
                            <Badge
                              variant={
                                log.riskLevel === "عالي"
                                  ? "destructive"
                                  : log.riskLevel === "متوسط"
                                    ? "default"
                                    : "secondary"
                              }
                              className="text-xs"
                            >
                              {log.riskLevel}
                            </Badge>
                          </div>
                          <p className="text-xs text-gray-600">{log.user}</p>
                          <p className="text-xs text-gray-500">{log.timestamp}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* System Health */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Monitor className="h-5 w-5 ml-2" />
                  صحة النظام
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 border rounded-lg">
                    <Server className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <h4 className="font-semibold">الخوادم</h4>
                    <p className="text-2xl font-bold text-green-600">100%</p>
                    <p className="text-sm text-gray-600">متاحة</p>
                  </div>

                  <div className="text-center p-4 border rounded-lg">
                    <Database className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <h4 className="font-semibold">قواعد البيانات</h4>
                    <p className="text-2xl font-bold text-blue-600">99.8%</p>
                    <p className="text-sm text-gray-600">متاحة</p>
                  </div>

                  <div className="text-center p-4 border rounded-lg">
                    <Wifi className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <h4 className="font-semibold">الشبكة</h4>
                    <p className="text-2xl font-bold text-purple-600">98.5%</p>
                    <p className="text-sm text-gray-600">متاحة</p>
                  </div>

                  <div className="text-center p-4 border rounded-lg">
                    <Shield className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                    <h4 className="font-semibold">جدار الحماية</h4>
                    <p className="text-2xl font-bold text-amber-600">نشط</p>
                    <p className="text-sm text-gray-600">محمي</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="authentication" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Authentication Settings */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Key className="h-5 w-5 ml-2" />
                    إعدادات المصادقة
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">المصادقة الثنائية (2FA)</h4>
                        <p className="text-sm text-gray-600">تفعيل المصادقة الثنائية لجميع المستخدمين</p>
                      </div>
                      <Switch checked={twoFactorEnabled} onCheckedChange={setTwoFactorEnabled} />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">المصادقة البيومترية</h4>
                        <p className="text-sm text-gray-600">بصمة الإصبع والتعرف على الوجه</p>
                      </div>
                      <Switch checked={biometricEnabled} onCheckedChange={setBiometricEnabled} />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">تتبع الموقع</h4>
                        <p className="text-sm text-gray-600">تتبع موقع تسجيل الدخول</p>
                      </div>
                      <Switch checked={locationTracking} onCheckedChange={setLocationTracking} />
                    </div>

                    <div className="pt-4 border-t">
                      <h4 className="font-medium mb-3">متطلبات كلمة المرور</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span>8 أحرف على الأقل</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span>أحرف كبيرة وصغيرة</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span>أرقام ورموز خاصة</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span>تغيير كل 90 يوم</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Active Sessions */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="h-5 w-5 ml-2" />
                    الجلسات النشطة
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {userSessions.map((session) => (
                      <div key={session.id} className="p-4 border rounded-lg">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <Avatar className="h-8 w-8">
                              <AvatarFallback className="text-xs">
                                {session.user.split(" ")[0][0]}
                                {session.user.split(" ")[1][0]}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium text-sm">{session.user}</p>
                              <p className="text-xs text-gray-600">{session.device}</p>
                            </div>
                          </div>
                          <Badge variant={session.status === "نشط" ? "default" : "secondary"} className="text-xs">
                            {session.status}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-xs text-gray-600">
                          <div>
                            <span className="flex items-center gap-1">
                              <Globe className="h-3 w-3" />
                              {session.ip}
                            </span>
                          </div>
                          <div>
                            <span className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {session.location}
                            </span>
                          </div>
                          <div>
                            <span>تسجيل الدخول: {session.loginTime}</span>
                          </div>
                          <div>
                            <span>آخر نشاط: {session.lastActivity}</span>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="w-full mt-3 bg-transparent">
                          إنهاء الجلسة
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="monitoring" className="space-y-6">
            {/* Search and Filters */}
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input placeholder="البحث في سجلات الأمان..." className="pr-10" />
                    </div>
                  </div>
                  <Button variant="outline">
                    <Filter className="h-4 w-4 ml-2" />
                    فلترة
                  </Button>
                  <Button variant="outline">
                    <Download className="h-4 w-4 ml-2" />
                    تصدير السجلات
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Security Logs */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Activity className="h-5 w-5 ml-2" />
                  سجلات الأمان المفصلة
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {securityLogs.map((log) => (
                    <div key={log.id} className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-blue-100 rounded-lg">
                            {log.type === "تسجيل دخول" && <UserCheck className="h-4 w-4 text-blue-600" />}
                            {log.type === "محاولة اختراق" && <AlertTriangle className="h-4 w-4 text-red-600" />}
                            {log.type === "تغيير كلمة مرور" && <Key className="h-4 w-4 text-green-600" />}
                            {log.type === "وصول للبيانات" && <Database className="h-4 w-4 text-purple-600" />}
                          </div>
                          <div>
                            <h4 className="font-medium">{log.action}</h4>
                            <p className="text-sm text-gray-600">{log.user}</p>
                          </div>
                        </div>
                        <div className="text-left">
                          <Badge
                            variant={
                              log.status === "نجح" ? "default" : log.status === "محظور" ? "destructive" : "secondary"
                            }
                            className="mb-2"
                          >
                            {log.status}
                          </Badge>
                          <Badge
                            variant={
                              log.riskLevel === "عالي"
                                ? "destructive"
                                : log.riskLevel === "متوسط"
                                  ? "default"
                                  : "secondary"
                            }
                            className="text-xs"
                          >
                            {log.riskLevel}
                          </Badge>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                        <div>
                          <span className="flex items-center gap-1">
                            <Globe className="h-3 w-3" />
                            {log.ip}
                          </span>
                        </div>
                        <div>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {log.location}
                          </span>
                        </div>
                        <div>
                          <span className="flex items-center gap-1">
                            <Monitor className="h-3 w-3" />
                            {log.device}
                          </span>
                        </div>
                        <div>
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {log.timestamp}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="policies" className="space-y-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold">سياسات الأمان</h2>
                <p className="text-gray-600">إدارة وتطبيق سياسات الأمان في المؤسسة</p>
              </div>
              <Button>
                <Plus className="h-4 w-4 ml-2" />
                سياسة جديدة
              </Button>
            </div>

            <div className="space-y-4">
              {securityPolicies.map((policy) => (
                <Card key={policy.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="font-semibold text-lg">{policy.name}</h3>
                        <p className="text-gray-600 text-sm">{policy.description}</p>
                        <p className="text-xs text-gray-500 mt-1">
                          آخر تحديث: {new Date(policy.lastUpdated).toLocaleDateString("ar-SA")}
                        </p>
                      </div>
                      <div className="text-left">
                        <Badge variant={policy.status === "مفعل" ? "default" : "secondary"} className="mb-2">
                          {policy.status}
                        </Badge>
                        <div className="text-sm text-gray-600">
                          <span>الامتثال: {policy.compliance}%</span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <Progress value={policy.compliance} className="h-2" />
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 ml-1" />
                        عرض
                      </Button>
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4 ml-1" />
                        تعديل
                      </Button>
                      <Button variant="outline" size="sm">
                        <Settings className="h-4 w-4 ml-1" />
                        إعدادات
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="biometric" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Biometric Settings */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Fingerprint className="h-5 w-5 ml-2" />
                    إعدادات المصادقة البيومترية
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="p-4 bg-green-50 rounded-lg border-r-4 border-green-500">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-green-900">بصمة الإصبع</h4>
                          <p className="text-green-700 text-sm">156 مستخدم مسجل</p>
                        </div>
                        <Fingerprint className="h-8 w-8 text-green-600" />
                      </div>
                    </div>

                    <div className="p-4 bg-blue-50 rounded-lg border-r-4 border-blue-500">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-blue-900">التعرف على الوجه</h4>
                          <p className="text-blue-700 text-sm">89 مستخدم مسجل</p>
                        </div>
                        <Camera className="h-8 w-8 text-blue-600" />
                      </div>
                    </div>

                    <div className="p-4 bg-purple-50 rounded-lg border-r-4 border-purple-500">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-purple-900">التعرف على الصوت</h4>
                          <p className="text-purple-700 text-sm">23 مستخدم مسجل</p>
                        </div>
                        <Smartphone className="h-8 w-8 text-purple-600" />
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <h4 className="font-medium mb-3">إعدادات الأمان</h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">تشفير البيانات البيومترية</span>
                          <Badge variant="default">مفعل</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">التحقق المتعدد</span>
                          <Badge variant="default">مفعل</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">النسخ الاحتياطي المحلي</span>
                          <Badge variant="secondary">معطل</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Biometric Statistics */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Activity className="h-5 w-5 ml-2" />
                    إحصائيات المصادقة البيومترية
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-green-900">معدل النجاح</h4>
                      <p className="text-3xl font-bold text-green-600">98.7%</p>
                      <p className="text-sm text-green-700">للمصادقة البيومترية</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 border rounded-lg">
                        <Fingerprint className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                        <p className="text-lg font-bold">156</p>
                        <p className="text-xs text-gray-600">بصمة إصبع</p>
                      </div>
                      <div className="text-center p-3 border rounded-lg">
                        <Camera className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                        <p className="text-lg font-bold">89</p>
                        <p className="text-xs text-gray-600">تعرف على الوجه</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold">الاستخدام اليومي</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">بصمة الإصبع</span>
                          <div className="flex items-center gap-2">
                            <Progress value={85} className="w-20 h-2" />
                            <span className="text-sm">85%</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">التعرف على الوجه</span>
                          <div className="flex items-center gap-2">
                            <Progress value={65} className="w-20 h-2" />
                            <span className="text-sm">65%</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">التعرف على الصوت</span>
                          <div className="flex items-center gap-2">
                            <Progress value={25} className="w-20 h-2" />
                            <span className="text-sm">25%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Security Reports */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Download className="h-5 w-5 ml-2" />
                    تقارير الأمان
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      <Download className="h-4 w-4 ml-2" />
                      تقرير الأحداث الأمنية الشهري
                    </Button>
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      <Download className="h-4 w-4 ml-2" />
                      تقرير المصادقة والوصول
                    </Button>
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      <Download className="h-4 w-4 ml-2" />
                      تقرير الامتثال للسياسات
                    </Button>
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      <Download className="h-4 w-4 ml-2" />
                      تقرير المخاطر والتهديدات
                    </Button>
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      <Download className="h-4 w-4 ml-2" />
                      تقرير أداء النظام
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Compliance Dashboard */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle className="h-5 w-5 ml-2" />
                    لوحة الامتثال
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-green-900">ISO 27001</h4>
                      <div className="flex items-center justify-between mt-2">
                        <Progress value={95} className="flex-1 ml-3" />
                        <span className="text-green-600 font-bold">95%</span>
                      </div>
                    </div>

                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-900">GDPR</h4>
                      <div className="flex items-center justify-between mt-2">
                        <Progress value={88} className="flex-1 ml-3" />
                        <span className="text-blue-600 font-bold">88%</span>
                      </div>
                    </div>

                    <div className="p-4 bg-purple-50 rounded-lg">
                      <h4 className="font-semibold text-purple-900">SOC 2</h4>
                      <div className="flex items-center justify-between mt-2">
                        <Progress value={92} className="flex-1 ml-3" />
                        <span className="text-purple-600 font-bold">92%</span>
                      </div>
                    </div>

                    <div className="p-4 bg-amber-50 rounded-lg">
                      <h4 className="font-semibold text-amber-900">معايير الأمان السعودية</h4>
                      <div className="flex items-center justify-between mt-2">
                        <Progress value={97} className="flex-1 ml-3" />
                        <span className="text-amber-600 font-bold">97%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
