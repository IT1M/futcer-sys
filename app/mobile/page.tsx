"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import {
  Smartphone,
  Tablet,
  Download,
  QrCode,
  Bell,
  Settings,
  Users,
  Activity,
  Calendar,
  FileText,
  Battery,
  Fingerprint,
  Shield,
  Globe,
  RefreshCw,
  Eye,
  Edit,
  Trash2,
  Plus,
  Clock,
  CheckCircle,
  AlertCircle,
  Star,
  TrendingUp,
} from "lucide-react"

export default function MobilePage() {
  const [selectedPlatform, setSelectedPlatform] = useState("all")

  const mobileStats = {
    totalUsers: 247,
    activeUsers: 198,
    iosUsers: 145,
    androidUsers: 102,
    appRating: 4.8,
    downloadCount: 2847,
  }

  const mobileFeatures = [
    {
      id: 1,
      name: "تسجيل الحضور والانصراف",
      description: "تسجيل الحضور باستخدام الموقع الجغرافي والبيومترية",
      icon: Clock,
      usage: 95,
      status: "متاح",
      platform: "iOS/Android",
    },
    {
      id: 2,
      name: "طلب الإجازات",
      description: "تقديم وتتبع طلبات الإجازات المختلفة",
      icon: Calendar,
      usage: 87,
      status: "متاح",
      platform: "iOS/Android",
    },
    {
      id: 3,
      name: "كشف الراتب",
      description: "عرض وتحميل كشوف الراتب الشهرية",
      icon: FileText,
      usage: 92,
      status: "متاح",
      platform: "iOS/Android",
    },
    {
      id: 4,
      name: "الإشعارات الفورية",
      description: "تلقي إشعارات فورية للمهام والتحديثات",
      icon: Bell,
      usage: 78,
      status: "متاح",
      platform: "iOS/Android",
    },
    {
      id: 5,
      name: "التوقيع الرقمي",
      description: "توقيع الوثائق رقمياً من الهاتف",
      icon: Fingerprint,
      usage: 65,
      status: "قيد التطوير",
      platform: "iOS",
    },
    {
      id: 6,
      name: "الدردشة المؤسسية",
      description: "التواصل الآمن مع الزملاء والإدارة",
      icon: Users,
      usage: 73,
      status: "متاح",
      platform: "iOS/Android",
    },
  ]

  const deviceStats = [
    {
      platform: "iOS",
      users: 145,
      percentage: 58.7,
      version: "17.2",
      rating: 4.9,
      color: "bg-blue-500",
    },
    {
      platform: "Android",
      users: 102,
      percentage: 41.3,
      version: "14.0",
      rating: 4.7,
      color: "bg-green-500",
    },
  ]

  const appVersions = [
    {
      version: "2.1.0",
      platform: "iOS",
      releaseDate: "2024-01-20",
      downloads: 1245,
      features: ["تحسينات الأداء", "إصلاح الأخطاء", "واجهة محدثة"],
      status: "حالي",
    },
    {
      version: "2.0.8",
      platform: "Android",
      releaseDate: "2024-01-18",
      downloads: 987,
      features: ["دعم Android 14", "تحسين البطارية", "أمان محسن"],
      status: "حالي",
    },
    {
      version: "2.0.5",
      platform: "iOS",
      releaseDate: "2024-01-10",
      downloads: 456,
      features: ["إصلاحات أمنية", "تحسين الاستقرار"],
      status: "قديم",
    },
  ]

  const userFeedback = [
    {
      id: 1,
      user: "أحمد محمد السعد",
      rating: 5,
      comment: "تطبيق ممتاز وسهل الاستخدام. تسجيل الحضور أصبح أسرع بكثير.",
      date: "2024-01-25",
      platform: "iOS",
      version: "2.1.0",
    },
    {
      id: 2,
      user: "فاطمة علي الأحمد",
      rating: 4,
      comment: "التطبيق جيد لكن أتمنى إضافة المزيد من الميزات للتقارير.",
      date: "2024-01-23",
      platform: "Android",
      version: "2.0.8",
    },
    {
      id: 3,
      user: "محمد خالد العتيبي",
      rating: 5,
      comment: "واجهة المستخدم رائعة والتطبيق سريع جداً. أنصح به بشدة.",
      date: "2024-01-22",
      platform: "iOS",
      version: "2.1.0",
    },
  ]

  const mobileAnalytics = {
    dailyActiveUsers: 187,
    sessionDuration: "12.5 دقيقة",
    crashRate: "0.02%",
    retentionRate: "89%",
    pushNotificationRate: "76%",
    offlineUsage: "23%",
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 rtl" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">التطبيق المحمول والوصول عن بُعد</h1>
          <p className="text-gray-600">تطبيق محمول شامل مع دعم كامل للأجهزة الذكية والوصول الآمن</p>
        </div>

        {/* Mobile Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mb-8">
          <Card>
            <CardContent className="p-4">
              <div className="text-center">
                <Users className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-blue-600">{mobileStats.totalUsers}</p>
                <p className="text-xs text-gray-600">إجمالي المستخدمين</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="text-center">
                <Activity className="h-6 w-6 text-green-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-green-600">{mobileStats.activeUsers}</p>
                <p className="text-xs text-gray-600">مستخدمين نشطين</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="text-center">
                <Smartphone className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-purple-600">{mobileStats.iosUsers}</p>
                <p className="text-xs text-gray-600">مستخدمي iOS</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="text-center">
                <Tablet className="h-6 w-6 text-amber-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-amber-600">{mobileStats.androidUsers}</p>
                <p className="text-xs text-gray-600">مستخدمي Android</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="text-center">
                <Star className="h-6 w-6 text-yellow-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-yellow-600">{mobileStats.appRating}</p>
                <p className="text-xs text-gray-600">تقييم التطبيق</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="text-center">
                <Download className="h-6 w-6 text-red-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-red-600">{mobileStats.downloadCount}</p>
                <p className="text-xs text-gray-600">مرات التحميل</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6">
            <TabsTrigger value="overview">نظرة عامة</TabsTrigger>
            <TabsTrigger value="features">الميزات</TabsTrigger>
            <TabsTrigger value="versions">الإصدارات</TabsTrigger>
            <TabsTrigger value="analytics">التحليلات</TabsTrigger>
            <TabsTrigger value="feedback">التقييمات</TabsTrigger>
            <TabsTrigger value="qr">رمز QR</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Platform Distribution */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Smartphone className="h-5 w-5 ml-2" />
                    توزيع المنصات
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {deviceStats.map((platform, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            {platform.platform === "iOS" ? (
                              <Smartphone className="h-5 w-5 text-blue-600" />
                            ) : (
                              <Tablet className="h-5 w-5 text-green-600" />
                            )}
                            <div>
                              <p className="font-medium">{platform.platform}</p>
                              <p className="text-sm text-gray-600">الإصدار {platform.version}</p>
                            </div>
                          </div>
                          <div className="text-left">
                            <p className="font-bold">{platform.users} مستخدم</p>
                            <p className="text-sm text-gray-600">{platform.percentage}%</p>
                          </div>
                        </div>
                        <Progress value={platform.percentage} className="h-2" />
                        <div className="flex items-center justify-between text-sm">
                          <span>التقييم: {platform.rating}/5</span>
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-3 w-3 ${
                                  i < Math.floor(platform.rating) ? "text-yellow-500 fill-current" : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* App Performance */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Activity className="h-5 w-5 ml-2" />
                    أداء التطبيق
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-green-900">المستخدمين النشطين يومياً</h4>
                      <p className="text-2xl font-bold text-green-600">{mobileAnalytics.dailyActiveUsers}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 bg-blue-50 rounded-lg text-center">
                        <p className="text-sm text-blue-900">مدة الجلسة</p>
                        <p className="text-lg font-bold text-blue-600">{mobileAnalytics.sessionDuration}</p>
                      </div>
                      <div className="p-3 bg-purple-50 rounded-lg text-center">
                        <p className="text-sm text-purple-900">معدل الأخطاء</p>
                        <p className="text-lg font-bold text-purple-600">{mobileAnalytics.crashRate}</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">معدل الاحتفاظ</span>
                        <span className="font-bold">{mobileAnalytics.retentionRate}</span>
                      </div>
                      <Progress value={89} className="h-2" />
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">الإشعارات الفورية</span>
                        <span className="font-bold">{mobileAnalytics.pushNotificationRate}</span>
                      </div>
                      <Progress value={76} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Settings className="h-5 w-5 ml-2" />
                  إجراءات سريعة
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  <Button variant="outline" className="h-20 flex-col bg-transparent">
                    <Download className="h-6 w-6 mb-2" />
                    <span className="text-xs">تحديث التطبيق</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex-col bg-transparent">
                    <Bell className="h-6 w-6 mb-2" />
                    <span className="text-xs">إرسال إشعار</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex-col bg-transparent">
                    <Settings className="h-6 w-6 mb-2" />
                    <span className="text-xs">إعدادات التطبيق</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex-col bg-transparent">
                    <Shield className="h-6 w-6 mb-2" />
                    <span className="text-xs">أمان التطبيق</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex-col bg-transparent">
                    <RefreshCw className="h-6 w-6 mb-2" />
                    <span className="text-xs">إعادة تشغيل</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex-col bg-transparent">
                    <QrCode className="h-6 w-6 mb-2" />
                    <span className="text-xs">رمز QR</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="features" className="space-y-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold">ميزات التطبيق المحمول</h2>
                <p className="text-gray-600">إدارة وتطوير ميزات التطبيق المحمول</p>
              </div>
              <Button>
                <Plus className="h-4 w-4 ml-2" />
                ميزة جديدة
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mobileFeatures.map((feature) => {
                const IconComponent = feature.icon
                return (
                  <Card key={feature.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-blue-100 rounded-lg">
                          <IconComponent className="h-6 w-6 text-blue-600" />
                        </div>
                        <Badge variant={feature.status === "متاح" ? "default" : "secondary"}>{feature.status}</Badge>
                      </div>

                      <h3 className="font-semibold text-lg mb-2">{feature.name}</h3>
                      <p className="text-gray-600 text-sm mb-4">{feature.description}</p>

                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">معدل الاستخدام</span>
                          <span className="font-medium">{feature.usage}%</span>
                        </div>
                        <Progress value={feature.usage} className="h-2" />

                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">المنصة</span>
                          <Badge variant="outline" className="text-xs">
                            {feature.platform}
                          </Badge>
                        </div>
                      </div>

                      <div className="flex gap-2 mt-4">
                        <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                          <Eye className="h-4 w-4 ml-1" />
                          عرض
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                          <Edit className="h-4 w-4 ml-1" />
                          تعديل
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </TabsContent>

          <TabsContent value="versions" className="space-y-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold">إصدارات التطبيق</h2>
                <p className="text-gray-600">إدارة إصدارات التطبيق والتحديثات</p>
              </div>
              <Button>
                <Plus className="h-4 w-4 ml-2" />
                إصدار جديد
              </Button>
            </div>

            <div className="space-y-4">
              {appVersions.map((version, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-purple-100 rounded-lg">
                          {version.platform === "iOS" ? (
                            <Smartphone className="h-6 w-6 text-purple-600" />
                          ) : (
                            <Tablet className="h-6 w-6 text-purple-600" />
                          )}
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">
                            {version.platform} v{version.version}
                          </h3>
                          <p className="text-gray-600 text-sm">
                            تاريخ الإصدار: {new Date(version.releaseDate).toLocaleDateString("ar-SA")}
                          </p>
                        </div>
                      </div>
                      <div className="text-left">
                        <Badge variant={version.status === "حالي" ? "default" : "secondary"}>{version.status}</Badge>
                        <p className="text-sm text-gray-600 mt-1">{version.downloads} تحميل</p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-medium mb-2">الميزات الجديدة:</h4>
                      <div className="flex flex-wrap gap-2">
                        {version.features.map((feature, featureIndex) => (
                          <Badge key={featureIndex} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 ml-1" />
                        عرض التفاصيل
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 ml-1" />
                        تحميل
                      </Button>
                      {version.status === "قديم" && (
                        <Button variant="outline" size="sm" className="text-red-600 bg-transparent">
                          <Trash2 className="h-4 w-4 ml-1" />
                          حذف
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Usage Analytics */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="h-5 w-5 ml-2" />
                    تحليلات الاستخدام
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-900">المستخدمين النشطين يومياً</h4>
                      <p className="text-3xl font-bold text-blue-600">{mobileAnalytics.dailyActiveUsers}</p>
                      <p className="text-sm text-blue-700">+12% من الأسبوع الماضي</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 bg-green-50 rounded-lg text-center">
                        <p className="text-sm text-green-900">مدة الجلسة</p>
                        <p className="text-xl font-bold text-green-600">{mobileAnalytics.sessionDuration}</p>
                      </div>
                      <div className="p-3 bg-purple-50 rounded-lg text-center">
                        <p className="text-sm text-purple-900">الاستخدام دون اتصال</p>
                        <p className="text-xl font-bold text-purple-600">{mobileAnalytics.offlineUsage}</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold">الميزات الأكثر استخداماً</h4>
                      {[
                        { name: "تسجيل الحضور", usage: 95 },
                        { name: "كشف الراتب", usage: 92 },
                        { name: "طلب الإجازات", usage: 87 },
                        { name: "الإشعارات", usage: 78 },
                      ].map((feature, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span className="text-sm">{feature.name}</span>
                          <div className="flex items-center gap-2">
                            <Progress value={feature.usage} className="w-20 h-2" />
                            <span className="text-sm font-medium">{feature.usage}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Performance Metrics */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Activity className="h-5 w-5 ml-2" />
                    مقاييس الأداء
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-green-50 rounded-lg text-center">
                        <CheckCircle className="h-6 w-6 text-green-600 mx-auto mb-2" />
                        <p className="text-sm text-green-900">معدل الاحتفاظ</p>
                        <p className="text-2xl font-bold text-green-600">{mobileAnalytics.retentionRate}</p>
                      </div>
                      <div className="p-4 bg-red-50 rounded-lg text-center">
                        <AlertCircle className="h-6 w-6 text-red-600 mx-auto mb-2" />
                        <p className="text-sm text-red-900">معدل الأخطاء</p>
                        <p className="text-2xl font-bold text-red-600">{mobileAnalytics.crashRate}</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold">أداء الشبكة</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">سرعة التحميل</span>
                          <span className="font-medium">2.3 ثانية</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">استهلاك البيانات</span>
                          <span className="font-medium">1.2 MB/جلسة</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">معدل نجاح الطلبات</span>
                          <span className="font-medium">99.7%</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold">استهلاك البطارية</h4>
                      <div className="flex items-center gap-3">
                        <Battery className="h-5 w-5 text-green-600" />
                        <div className="flex-1">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm">متوسط الاستهلاك</span>
                            <span className="text-sm font-medium">منخفض</span>
                          </div>
                          <Progress value={25} className="h-2" />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="feedback" className="space-y-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold">تقييمات المستخدمين</h2>
                <p className="text-gray-600">آراء وتقييمات المستخدمين للتطبيق</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-yellow-600">{mobileStats.appRating}</p>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(mobileStats.appRating) ? "text-yellow-500 fill-current" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">من 5</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {userFeedback.map((feedback) => (
                <Card key={feedback.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback>
                            {feedback.user.split(" ")[0][0]}
                            {feedback.user.split(" ")[1][0]}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-medium">{feedback.user}</h4>
                          <div className="flex items-center gap-2 mt-1">
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-3 w-3 ${
                                    i < feedback.rating ? "text-yellow-500 fill-current" : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-gray-600">{feedback.rating}/5</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-left">
                        <Badge variant="outline" className="mb-1">
                          {feedback.platform}
                        </Badge>
                        <p className="text-xs text-gray-500">v{feedback.version}</p>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-3">{feedback.comment}</p>

                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{new Date(feedback.date).toLocaleDateString("ar-SA")}</span>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          رد
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="qr" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* QR Code Generator */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <QrCode className="h-5 w-5 ml-2" />
                    مولد رمز QR
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center space-y-4">
                    <div className="w-48 h-48 bg-gray-100 rounded-lg mx-auto flex items-center justify-center">
                      <QrCode className="h-32 w-32 text-gray-400" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold">تحميل التطبيق</h3>
                      <p className="text-sm text-gray-600">امسح الرمز لتحميل التطبيق</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" className="flex-1 bg-transparent">
                        <Download className="h-4 w-4 ml-1" />
                        تحميل الرمز
                      </Button>
                      <Button variant="outline" className="flex-1 bg-transparent">
                        <RefreshCw className="h-4 w-4 ml-1" />
                        تجديد
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* QR Code Settings */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Settings className="h-5 w-5 ml-2" />
                    إعدادات رمز QR
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">نوع الرمز</label>
                      <select className="w-full p-2 border rounded-lg">
                        <option>تحميل التطبيق</option>
                        <option>تسجيل الحضور</option>
                        <option>الوصول السريع</option>
                        <option>معلومات الاتصال</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">الحجم</label>
                      <select className="w-full p-2 border rounded-lg">
                        <option>صغير (128x128)</option>
                        <option>متوسط (256x256)</option>
                        <option>كبير (512x512)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">اللون</label>
                      <div className="flex gap-2">
                        <div className="w-8 h-8 bg-black rounded cursor-pointer border-2 border-gray-300"></div>
                        <div className="w-8 h-8 bg-blue-600 rounded cursor-pointer"></div>
                        <div className="w-8 h-8 bg-green-600 rounded cursor-pointer"></div>
                        <div className="w-8 h-8 bg-purple-600 rounded cursor-pointer"></div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">النص المرافق</label>
                      <Input placeholder="نص اختياري تحت الرمز" />
                    </div>

                    <Button className="w-full">
                      <QrCode className="h-4 w-4 ml-2" />
                      إنشاء رمز QR
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* QR Code Usage Statistics */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Activity className="h-5 w-5 ml-2" />
                  إحصائيات استخدام رمز QR
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <QrCode className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-blue-600">1,247</p>
                    <p className="text-sm text-gray-600">مسح إجمالي</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <Download className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-green-600">892</p>
                    <p className="text-sm text-gray-600">تحميل التطبيق</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <Clock className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-purple-600">345</p>
                    <p className="text-sm text-gray-600">تسجيل حضور</p>
                  </div>
                  <div className="text-center p-4 bg-amber-50 rounded-lg">
                    <Globe className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-amber-600">156</p>
                    <p className="text-sm text-gray-600">وصول سريع</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
