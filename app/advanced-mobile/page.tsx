"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Switch } from "@/components/ui/switch"
import {
  Smartphone,
  Tablet,
  Watch,
  Fingerprint,
  MapPin,
  Wifi,
  Bell,
  Shield,
  Eye,
  Mic,
  Sun,
  Moon,
  Zap,
  Download,
  RefreshCw,
  Settings,
  Users,
  Activity,
  BarChart3,
  TrendingUp,
  Clock,
  Calendar,
  FileText,
  MessageSquare,
  Video,
  Phone,
  Lock,
  Key,
  Cpu,
  CheckCircle,
  AlertTriangle,
  Plus,
  Star,
  Menu,
  Home,
  User,
  Briefcase,
} from "lucide-react"

export default function AdvancedMobilePage() {
  const [selectedDevice, setSelectedDevice] = useState("smartphone")
  const [isDarkMode, setIsDarkMode] = useState(false)

  const mobileFeatures = [
    {
      id: 1,
      name: "الواقع المعزز للتدريب",
      description: "تدريب تفاعلي باستخدام تقنية الواقع المعزز",
      category: "AR/VR",
      status: "تجريبي",
      icon: Eye,
      usage: 23,
      rating: 4.6,
      devices: ["iOS", "Android"],
      requirements: "iOS 12+, Android 8+",
    },
    {
      id: 2,
      name: "المساعد الصوتي الذكي",
      description: "مساعد صوتي مدعوم بالذكاء الاصطناعي",
      category: "AI",
      status: "نشط",
      icon: Mic,
      usage: 67,
      rating: 4.8,
      devices: ["iOS", "Android", "Web"],
      requirements: "Microphone access required",
    },
    {
      id: 3,
      name: "التوقيع البيومتري المتقدم",
      description: "توقيع آمن باستخدام البصمة والتعرف على الوجه",
      category: "Security",
      status: "نشط",
      icon: Fingerprint,
      usage: 89,
      rating: 4.9,
      devices: ["iOS", "Android"],
      requirements: "Touch ID/Face ID, Fingerprint sensor",
    },
    {
      id: 4,
      name: "تتبع الموقع الذكي",
      description: "تتبع دقيق للموقع مع توفير البطارية",
      category: "Location",
      status: "نشط",
      icon: MapPin,
      usage: 94,
      rating: 4.7,
      devices: ["iOS", "Android", "Watch"],
      requirements: "GPS, Location services",
    },
    {
      id: 5,
      name: "الدردشة الفيديو المؤسسية",
      description: "مكالمات فيديو آمنة ومشفرة للفرق",
      category: "Communication",
      status: "نشط",
      icon: Video,
      usage: 78,
      rating: 4.5,
      devices: ["iOS", "Android", "Web"],
      requirements: "Camera, Microphone",
    },
    {
      id: 6,
      name: "الإشعارات الذكية",
      description: "إشعارات مخصصة بناءً على السياق والأولوية",
      category: "Notifications",
      status: "نشط",
      icon: Bell,
      usage: 96,
      rating: 4.4,
      devices: ["iOS", "Android", "Watch", "Web"],
      requirements: "Push notifications enabled",
    },
    {
      id: 7,
      name: "وضع العمل دون اتصال",
      description: "العمل الكامل حتى بدون اتصال بالإنترنت",
      category: "Offline",
      status: "قيد التطوير",
      icon: Wifi,
      usage: 45,
      rating: 4.2,
      devices: ["iOS", "Android"],
      requirements: "Local storage 2GB+",
    },
    {
      id: 8,
      name: "التكامل مع الساعات الذكية",
      description: "تحكم كامل من الساعة الذكية",
      category: "Wearables",
      status: "تجريبي",
      icon: Watch,
      usage: 34,
      rating: 4.3,
      devices: ["Apple Watch", "Wear OS"],
      requirements: "Compatible smartwatch",
    },
  ]

  const deviceAnalytics = {
    smartphone: {
      totalUsers: 1247,
      activeUsers: 1089,
      avgSessionTime: "12.5 دقيقة",
      crashRate: "0.02%",
      batteryUsage: "منخفض",
      dataUsage: "1.2MB/جلسة",
      topFeatures: ["تسجيل الحضور", "كشف الراتب", "طلب الإجازات"],
    },
    tablet: {
      totalUsers: 234,
      activeUsers: 198,
      avgSessionTime: "18.3 دقيقة",
      crashRate: "0.01%",
      batteryUsage: "متوسط",
      dataUsage: "2.1MB/جلسة",
      topFeatures: ["التقارير", "لوحة التحكم", "إدارة الفرق"],
    },
    watch: {
      totalUsers: 89,
      activeUsers: 67,
      avgSessionTime: "3.2 دقيقة",
      crashRate: "0.05%",
      batteryUsage: "منخفض جداً",
      dataUsage: "0.3MB/جلسة",
      topFeatures: ["الإشعارات", "تسجيل الحضور", "التذكيرات"],
    },
  }

  const securityFeatures = [
    {
      name: "التشفير من النهاية للنهاية",
      description: "تشفير جميع البيانات المرسلة والمستقبلة",
      enabled: true,
      level: "عالي جداً",
    },
    {
      name: "المصادقة البيومترية",
      description: "دخول آمن باستخدام البصمة أو الوجه",
      enabled: true,
      level: "عالي",
    },
    {
      name: "كشف الجذر/الكسر",
      description: "منع التشغيل على الأجهزة المخترقة",
      enabled: true,
      level: "متوسط",
    },
    {
      name: "حماية من لقطات الشاشة",
      description: "منع التقاط الشاشة للبيانات الحساسة",
      enabled: false,
      level: "متوسط",
    },
    {
      name: "انتهاء الجلسة التلقائي",
      description: "إنهاء الجلسة تلقائياً بعد فترة عدم نشاط",
      enabled: true,
      level: "متوسط",
    },
  ]

  const performanceMetrics = [
    { name: "سرعة بدء التشغيل", value: "1.8s", target: "< 2s", status: "good" },
    { name: "استجابة الواجهة", value: "16ms", target: "< 16ms", status: "excellent" },
    { name: "استهلاك الذاكرة", value: "45MB", target: "< 50MB", status: "good" },
    { name: "استهلاك البطارية", value: "2%/ساعة", target: "< 3%/ساعة", status: "excellent" },
    { name: "حجم التطبيق", value: "28MB", target: "< 30MB", status: "good" },
    { name: "معدل الأخطاء", value: "0.02%", target: "< 0.1%", status: "excellent" },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "نشط":
        return "bg-green-100 text-green-800"
      case "تجريبي":
        return "bg-blue-100 text-blue-800"
      case "قيد التطوير":
        return "bg-amber-100 text-amber-800"
      case "متوقف":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getPerformanceColor = (status: string) => {
    switch (status) {
      case "excellent":
        return "text-green-600"
      case "good":
        return "text-blue-600"
      case "warning":
        return "text-amber-600"
      case "critical":
        return "text-red-600"
      default:
        return "text-gray-600"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 rtl" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">الميزات المحمولة المتقدمة</h1>
          <p className="text-gray-600">تطبيق محمول متطور مع ميزات الذكاء الاصطناعي والواقع المعزز والأمان المتقدم</p>
        </div>

        {/* Device Selector */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-white rounded-lg p-1 shadow-sm">
            <Button
              variant={selectedDevice === "smartphone" ? "default" : "ghost"}
              size="sm"
              onClick={() => setSelectedDevice("smartphone")}
              className="flex items-center gap-2"
            >
              <Smartphone className="h-4 w-4" />
              الهاتف الذكي
            </Button>
            <Button
              variant={selectedDevice === "tablet" ? "default" : "ghost"}
              size="sm"
              onClick={() => setSelectedDevice("tablet")}
              className="flex items-center gap-2"
            >
              <Tablet className="h-4 w-4" />
              الجهاز اللوحي
            </Button>
            <Button
              variant={selectedDevice === "watch" ? "default" : "ghost"}
              size="sm"
              onClick={() => setSelectedDevice("watch")}
              className="flex items-center gap-2"
            >
              <Watch className="h-4 w-4" />
              الساعة الذكية
            </Button>
          </div>
        </div>

        {/* Device Analytics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">إجمالي المستخدمين</p>
                  <p className="text-3xl font-bold text-blue-600">{deviceAnalytics[selectedDevice].totalUsers}</p>
                </div>
                <Users className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">المستخدمين النشطين</p>
                  <p className="text-3xl font-bold text-green-600">{deviceAnalytics[selectedDevice].activeUsers}</p>
                </div>
                <Activity className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">متوسط الجلسة</p>
                  <p className="text-3xl font-bold text-purple-600">{deviceAnalytics[selectedDevice].avgSessionTime}</p>
                </div>
                <Clock className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">معدل الأخطاء</p>
                  <p className="text-3xl font-bold text-red-600">{deviceAnalytics[selectedDevice].crashRate}</p>
                </div>
                <Shield className="h-8 w-8 text-red-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="features" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5">
            <TabsTrigger value="features">الميزات المتقدمة</TabsTrigger>
            <TabsTrigger value="performance">الأداء</TabsTrigger>
            <TabsTrigger value="security">الأمان</TabsTrigger>
            <TabsTrigger value="ui-ux">واجهة المستخدم</TabsTrigger>
            <TabsTrigger value="analytics">التحليلات</TabsTrigger>
          </TabsList>

          <TabsContent value="features" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">الميزات المتقدمة</h2>
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
                        <Badge className={getStatusColor(feature.status)}>{feature.status}</Badge>
                      </div>

                      <h3 className="font-semibold text-lg mb-2">{feature.name}</h3>
                      <p className="text-gray-600 text-sm mb-4">{feature.description}</p>

                      <div className="space-y-3 mb-4">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500">معدل الاستخدام</span>
                          <span className="font-medium">{feature.usage}%</span>
                        </div>
                        <Progress value={feature.usage} className="h-2" />

                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500">التقييم</span>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 text-yellow-500 fill-current" />
                            <span className="font-medium">{feature.rating}</span>
                          </div>
                        </div>

                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500">الأجهزة المدعومة</span>
                          <div className="flex gap-1">
                            {feature.devices.map((device, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {device}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="text-xs text-gray-500 mb-4">
                        <strong>المتطلبات:</strong> {feature.requirements}
                      </div>

                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                          <Settings className="h-4 w-4 ml-1" />
                          إعدادات
                        </Button>
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <BarChart3 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Feature Categories */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Briefcase className="h-5 w-5 ml-2" />
                  الميزات حسب الفئة
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { category: "AR/VR", count: 2, icon: Eye, color: "bg-purple-100 text-purple-800" },
                    { category: "AI", count: 3, icon: Cpu, color: "bg-blue-100 text-blue-800" },
                    { category: "Security", count: 4, icon: Shield, color: "bg-red-100 text-red-800" },
                    { category: "Communication", count: 5, icon: MessageSquare, color: "bg-green-100 text-green-800" },
                  ].map((cat, index) => {
                    const IconComponent = cat.icon
                    return (
                      <div key={index} className="text-center p-4 border rounded-lg hover:shadow-md transition-shadow">
                        <div className="p-3 bg-gray-100 rounded-lg mx-auto mb-3 w-fit">
                          <IconComponent className="h-6 w-6 text-gray-600" />
                        </div>
                        <h4 className="font-semibold mb-1">{cat.category}</h4>
                        <Badge className={cat.color}>{cat.count} ميزة</Badge>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="performance" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {performanceMetrics.map((metric, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold">{metric.name}</h3>
                      <Badge variant="outline" className={getPerformanceColor(metric.status)}>
                        {metric.status === "excellent"
                          ? "ممتاز"
                          : metric.status === "good"
                            ? "جيد"
                            : metric.status === "warning"
                              ? "تحذير"
                              : "حرج"}
                      </Badge>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-gray-900">{metric.value}</span>
                        <span className="text-sm text-gray-600">الهدف: {metric.target}</span>
                      </div>
                      <Progress
                        value={metric.status === "excellent" ? 100 : metric.status === "good" ? 80 : 60}
                        className="h-2"
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Performance Chart */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 ml-2" />
                  أداء التطبيق عبر الوقت
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center bg-muted rounded-lg">
                  <BarChart3 className="h-24 w-24 text-gray-400" />
                </div>
                <div className="mt-4 grid grid-cols-4 gap-4 text-center">
                  <div>
                    <p className="text-sm text-gray-600">استهلاك البطارية</p>
                    <p className="text-lg font-bold text-green-600">{deviceAnalytics[selectedDevice].batteryUsage}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">استهلاك البيانات</p>
                    <p className="text-lg font-bold text-blue-600">{deviceAnalytics[selectedDevice].dataUsage}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">معدل الأخطاء</p>
                    <p className="text-lg font-bold text-red-600">{deviceAnalytics[selectedDevice].crashRate}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">متوسط الجلسة</p>
                    <p className="text-lg font-bold text-purple-600">
                      {deviceAnalytics[selectedDevice].avgSessionTime}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Performance Optimization */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="h-5 w-5 ml-2" />
                  تحسينات الأداء
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">ضغط الصور التلقائي</span>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">التحميل التدريجي</span>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">التخزين المؤقت الذكي</span>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">تحسين البطارية</span>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">ضغط البيانات</span>
                    <Switch />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Security Features */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="h-5 w-5 ml-2" />
                    ميزات الأمان
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {securityFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex-1">
                          <h4 className="font-medium">{feature.name}</h4>
                          <p className="text-sm text-gray-600">{feature.description}</p>
                          <Badge variant="outline" className="mt-2 text-xs">
                            مستوى الأمان: {feature.level}
                          </Badge>
                        </div>
                        <Switch checked={feature.enabled} />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Security Status */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Lock className="h-5 w-5 ml-2" />
                    حالة الأمان
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center p-6 bg-green-50 rounded-lg">
                      <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-3" />
                      <h3 className="font-semibold text-green-900">آمن</h3>
                      <p className="text-sm text-green-700">جميع الأنظمة الأمنية تعمل بشكل طبيعي</p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">آخر فحص أمني</span>
                        <span className="text-sm font-medium">منذ ساعة</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">التهديدات المكتشفة</span>
                        <span className="text-sm font-medium text-green-600">0</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">محاولات الدخول المشبوهة</span>
                        <span className="text-sm font-medium text-green-600">0</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">مستوى التشفير</span>
                        <Badge variant="default">AES-256</Badge>
                      </div>
                    </div>

                    <Button className="w-full">
                      <RefreshCw className="h-4 w-4 ml-2" />
                      تشغيل فحص أمني
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Security Compliance */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Key className="h-5 w-5 ml-2" />
                  الامتثال للمعايير الأمنية
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 border rounded-lg">
                    <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <h4 className="font-semibold">GDPR</h4>
                    <p className="text-sm text-gray-600">متوافق</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <h4 className="font-semibold">ISO 27001</h4>
                    <p className="text-sm text-gray-600">معتمد</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <AlertTriangle className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                    <h4 className="font-semibold">SOC 2</h4>
                    <p className="text-sm text-gray-600">قيد المراجعة</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ui-ux" className="space-y-6">
            {/* Theme Settings */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center">
                    <Sun className="h-5 w-5 ml-2" />
                    إعدادات المظهر
                  </span>
                  <div className="flex items-center gap-2">
                    <Sun className="h-4 w-4" />
                    <Switch checked={isDarkMode} onCheckedChange={setIsDarkMode} />
                    <Moon className="h-4 w-4" />
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold">خيارات التخصيص</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">الوضع الليلي التلقائي</span>
                        <Switch />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">حجم الخط الكبير</span>
                        <Switch />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">التباين العالي</span>
                        <Switch />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">تقليل الحركة</span>
                        <Switch />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold">إعدادات إمكانية الوصول</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">قارئ الشاشة</span>
                        <Switch />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">التحكم الصوتي</span>
                        <Switch />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">الاهتزاز للتنبيهات</span>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">الإشارات البصرية</span>
                        <Switch />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* UI Components Preview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Eye className="h-5 w-5 ml-2" />
                  معاينة واجهة المستخدم
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {/* Sample UI Components */}
                  <div className="p-4 border rounded-lg bg-white">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                          <User className="h-4 w-4 text-white" />
                        </div>
                        <span className="font-medium">أحمد محمد</span>
                      </div>
                      <Badge variant="default">نشط</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">مطور برمجيات</p>
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1">
                        <MessageSquare className="h-4 w-4 ml-1" />
                        رسالة
                      </Button>
                      <Button variant="outline" size="sm">
                        <Phone className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg bg-white">
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar className="h-5 w-5 text-blue-600" />
                      <span className="font-medium">اجتماع الفريق</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">اليوم - 2:00 م</p>
                    <p className="text-xs text-gray-500 mb-3">قاعة الاجتماعات الرئيسية</p>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                        انضمام
                      </Button>
                      <Button size="sm" variant="outline">
                        <Bell className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg bg-white">
                    <div className="flex items-center gap-2 mb-3">
                      <FileText className="h-5 w-5 text-green-600" />
                      <span className="font-medium">كشف الراتب</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">يناير 2024</p>
                    <p className="text-lg font-bold text-green-600 mb-3">15,420 ريال</p>
                    <Button size="sm" className="w-full">
                      <Download className="h-4 w-4 ml-1" />
                      تحميل
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Patterns */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Menu className="h-5 w-5 ml-2" />
                  أنماط التنقل
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="p-4 border rounded-lg mb-3">
                      <div className="flex justify-around items-center">
                        <Home className="h-6 w-6 text-blue-600" />
                        <Users className="h-6 w-6 text-gray-400" />
                        <Calendar className="h-6 w-6 text-gray-400" />
                        <User className="h-6 w-6 text-gray-400" />
                      </div>
                    </div>
                    <h4 className="font-medium">شريط التنقل السفلي</h4>
                    <p className="text-sm text-gray-600">للهواتف الذكية</p>
                  </div>

                  <div className="text-center">
                    <div className="p-4 border rounded-lg mb-3">
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 p-2 bg-blue-50 rounded">
                          <Home className="h-4 w-4 text-blue-600" />
                          <span className="text-sm">الرئيسية</span>
                        </div>
                        <div className="flex items-center gap-2 p-2">
                          <Users className="h-4 w-4 text-gray-400" />
                          <span className="text-sm">الموظفين</span>
                        </div>
                      </div>
                    </div>
                    <h4 className="font-medium">القائمة الجانبية</h4>
                    <p className="text-sm text-gray-600">للأجهزة اللوحية</p>
                  </div>

                  <div className="text-center">
                    <div className="p-4 border rounded-lg mb-3">
                      <div className="w-12 h-12 bg-blue-600 rounded-full mx-auto flex items-center justify-center mb-2">
                        <Plus className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex justify-center gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                      </div>
                    </div>
                    <h4 className="font-medium">الإجراءات السريعة</h4>
                    <p className="text-sm text-gray-600">للساعات الذكية</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            {/* Usage Analytics */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="h-5 w-5 ml-2" />
                  تحليلات الاستخدام
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center bg-muted rounded-lg mb-4">
                  <BarChart3 className="h-24 w-24 text-gray-400" />
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-blue-600">1,247</p>
                    <p className="text-sm text-gray-600">مستخدم نشط</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-green-600">89%</p>
                    <p className="text-sm text-gray-600">معدل الاحتفاظ</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-purple-600">4.8</p>
                    <p className="text-sm text-gray-600">تقييم التطبيق</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Top Features */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Star className="h-5 w-5 ml-2" />
                  الميزات الأكثر استخداماً
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {deviceAnalytics[selectedDevice].topFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                          <span className="text-sm font-bold text-blue-600">{index + 1}</span>
                        </div>
                        <span className="font-medium">{feature}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Progress value={90 - index * 10} className="w-20 h-2" />
                        <span className="text-sm font-medium">{90 - index * 10}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* User Feedback */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageSquare className="h-5 w-5 ml-2" />
                  آراء المستخدمين
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      user: "سارة أحمد",
                      rating: 5,
                      comment: "التطبيق ممتاز وسهل الاستخدام، خاصة ميزة التوقيع البيومتري",
                      date: "منذ يومين",
                    },
                    {
                      user: "محمد علي",
                      rating: 4,
                      comment: "أحب الواجهة الجديدة، لكن أتمنى تحسين سرعة التحميل",
                      date: "منذ أسبوع",
                    },
                    {
                      user: "فاطمة خالد",
                      rating: 5,
                      comment: "المساعد الصوتي مفيد جداً، يوفر الكثير من الوقت",
                      date: "منذ أسبوعين",
                    },
                  ].map((feedback, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                            <User className="h-4 w-4 text-gray-600" />
                          </div>
                          <span className="font-medium">{feedback.user}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < feedback.rating ? "text-yellow-500 fill-current" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 mb-2">{feedback.comment}</p>
                      <p className="text-xs text-gray-500">{feedback.date}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
