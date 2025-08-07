"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Switch } from "@/components/ui/switch"
import {
  Zap,
  Cpu,
  Database,
  Server,
  Network,
  Monitor,
  Activity,
  Settings,
  RefreshCw,
  TrendingUp,
  CheckCircle,
  Clock,
  BarChart3,
  Gauge,
  HardDrive,
  Wifi,
  Shield,
  Battery,
  Smartphone,
  Eye,
  Play,
  Pause,
} from "lucide-react"

export default function PerformanceOptimizationPage() {
  const [systemMetrics, setSystemMetrics] = useState({
    cpu: 45,
    memory: 62,
    disk: 38,
    network: 23,
  })

  const [isOptimizing, setIsOptimizing] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setSystemMetrics({
        cpu: Math.floor(Math.random() * 100),
        memory: Math.floor(Math.random() * 100),
        disk: Math.floor(Math.random() * 100),
        network: Math.floor(Math.random() * 100),
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const performanceMetrics = [
    {
      name: "سرعة تحميل الصفحات",
      current: 1.2,
      target: 1.0,
      unit: "ثانية",
      status: "good",
      trend: "improving",
    },
    {
      name: "استجابة قاعدة البيانات",
      current: 45,
      target: 30,
      unit: "مللي ثانية",
      status: "warning",
      trend: "stable",
    },
    {
      name: "معدل نقل البيانات",
      current: 850,
      target: 1000,
      unit: "MB/s",
      status: "good",
      trend: "improving",
    },
    {
      name: "وقت الاستجابة للAPI",
      current: 120,
      target: 100,
      unit: "مللي ثانية",
      status: "warning",
      trend: "declining",
    },
    {
      name: "معدل الأخطاء",
      current: 0.02,
      target: 0.01,
      unit: "%",
      status: "critical",
      trend: "stable",
    },
    {
      name: "استهلاك الذاكرة",
      current: 68,
      target: 70,
      unit: "%",
      status: "good",
      trend: "stable",
    },
  ]

  const optimizationTasks = [
    {
      id: 1,
      name: "تحسين استعلامات قاعدة البيانات",
      description: "تحسين الاستعلامات البطيئة وإضافة فهارس جديدة",
      impact: "عالي",
      effort: "متوسط",
      status: "مكتمل",
      progress: 100,
      estimatedImprovement: "40% تحسن في سرعة الاستعلامات",
    },
    {
      id: 2,
      name: "ضغط الصور والملفات",
      description: "تطبيق ضغط متقدم للصور والملفات الثابتة",
      impact: "متوسط",
      effort: "منخفض",
      status: "قيد التنفيذ",
      progress: 75,
      estimatedImprovement: "25% تقليل في حجم البيانات",
    },
    {
      id: 3,
      name: "تحسين التخزين المؤقت",
      description: "تطبيق استراتيجيات تخزين مؤقت متقدمة",
      impact: "عالي",
      effort: "عالي",
      status: "مجدول",
      progress: 0,
      estimatedImprovement: "60% تحسن في سرعة التحميل",
    },
    {
      id: 4,
      name: "تحديث البنية التحتية",
      description: "ترقية الخوادم وتحسين الشبكة",
      impact: "عالي جداً",
      effort: "عالي جداً",
      status: "مجدول",
      progress: 0,
      estimatedImprovement: "80% تحسن شامل في الأداء",
    },
  ]

  const serverMetrics = [
    {
      name: "خادم التطبيقات الرئيسي",
      cpu: 45,
      memory: 62,
      disk: 38,
      network: 23,
      status: "healthy",
      uptime: "99.9%",
      location: "الرياض",
    },
    {
      name: "خادم قاعدة البيانات",
      cpu: 72,
      memory: 84,
      disk: 56,
      network: 41,
      status: "warning",
      uptime: "99.7%",
      location: "جدة",
    },
    {
      name: "خادم النسخ الاحتياطي",
      cpu: 28,
      memory: 45,
      disk: 67,
      network: 15,
      status: "healthy",
      uptime: "99.8%",
      location: "الدمام",
    },
  ]

  const mobileOptimizations = [
    {
      name: "تحسين التطبيق المحمول",
      description: "تحسين أداء التطبيق على الأجهزة المحمولة",
      metrics: {
        loadTime: "2.1s",
        crashRate: "0.01%",
        batteryUsage: "منخفض",
        dataUsage: "1.2MB/جلسة",
      },
      optimizations: [
        "ضغط الصور التلقائي",
        "تحميل البيانات التدريجي",
        "تحسين استهلاك البطارية",
        "تقليل استخدام البيانات",
      ],
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "good":
      case "healthy":
        return "text-green-600 bg-green-50"
      case "warning":
        return "text-amber-600 bg-amber-50"
      case "critical":
        return "text-red-600 bg-red-50"
      default:
        return "text-gray-600 bg-gray-50"
    }
  }

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "عالي جداً":
        return "bg-red-100 text-red-800"
      case "عالي":
        return "bg-orange-100 text-orange-800"
      case "متوسط":
        return "bg-blue-100 text-blue-800"
      case "منخفض":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const handleOptimization = () => {
    setIsOptimizing(true)
    setTimeout(() => {
      setIsOptimizing(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 rtl" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">تحسينات الأداء المتقدمة</h1>
          <p className="text-gray-600">مراقبة وتحسين أداء النظام بشكل مستمر لضمان أفضل تجربة للمستخدمين</p>
        </div>

        {/* Real-time System Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Cpu className="h-6 w-6 text-blue-600" />
                </div>
                <Badge variant="outline">مباشر</Badge>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">المعالج</span>
                  <span className="font-bold">{systemMetrics.cpu}%</span>
                </div>
                <Progress value={systemMetrics.cpu} className="h-2" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Database className="h-6 w-6 text-green-600" />
                </div>
                <Badge variant="outline">مباشر</Badge>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">الذاكرة</span>
                  <span className="font-bold">{systemMetrics.memory}%</span>
                </div>
                <Progress value={systemMetrics.memory} className="h-2" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <HardDrive className="h-6 w-6 text-purple-600" />
                </div>
                <Badge variant="outline">مباشر</Badge>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">التخزين</span>
                  <span className="font-bold">{systemMetrics.disk}%</span>
                </div>
                <Progress value={systemMetrics.disk} className="h-2" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-amber-100 rounded-lg">
                  <Network className="h-6 w-6 text-amber-600" />
                </div>
                <Badge variant="outline">مباشر</Badge>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">الشبكة</span>
                  <span className="font-bold">{systemMetrics.network}%</span>
                </div>
                <Progress value={systemMetrics.network} className="h-2" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5">
            <TabsTrigger value="overview">نظرة عامة</TabsTrigger>
            <TabsTrigger value="servers">الخوادم</TabsTrigger>
            <TabsTrigger value="database">قاعدة البيانات</TabsTrigger>
            <TabsTrigger value="mobile">التطبيق المحمول</TabsTrigger>
            <TabsTrigger value="optimization">التحسينات</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Performance Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {performanceMetrics.map((metric, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-sm">{metric.name}</h3>
                      <Badge className={getStatusColor(metric.status)}>
                        {metric.status === "good" ? "جيد" : metric.status === "warning" ? "تحذير" : "حرج"}
                      </Badge>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between items-end">
                        <div>
                          <p className="text-2xl font-bold">
                            {metric.current} {metric.unit}
                          </p>
                          <p className="text-sm text-gray-600">القيمة الحالية</p>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-medium text-gray-700">
                            {metric.target} {metric.unit}
                          </p>
                          <p className="text-sm text-gray-600">المستهدف</p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-500">الاتجاه</span>
                          <span
                            className={`text-xs px-2 py-1 rounded ${
                              metric.trend === "improving"
                                ? "bg-green-100 text-green-800"
                                : metric.trend === "declining"
                                  ? "bg-red-100 text-red-800"
                                  : "bg-gray-100 text-gray-800"
                            }`}
                          >
                            {metric.trend === "improving" ? "تحسن" : metric.trend === "declining" ? "تراجع" : "مستقر"}
                          </span>
                        </div>
                        <Progress value={Math.min((metric.current / metric.target) * 100, 100)} className="h-2" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center">
                    <Zap className="h-5 w-5 ml-2" />
                    إجراءات التحسين السريعة
                  </span>
                  <Button onClick={handleOptimization} disabled={isOptimizing} className="flex items-center gap-2">
                    {isOptimizing ? (
                      <>
                        <RefreshCw className="h-4 w-4 animate-spin" />
                        جاري التحسين...
                      </>
                    ) : (
                      <>
                        <Play className="h-4 w-4" />
                        تشغيل التحسين التلقائي
                      </>
                    )}
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Button variant="outline" className="h-20 flex-col bg-transparent">
                    <Database className="h-6 w-6 mb-2" />
                    <span className="text-xs">تحسين قاعدة البيانات</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex-col bg-transparent">
                    <Server className="h-6 w-6 mb-2" />
                    <span className="text-xs">إعادة تشغيل الخوادم</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex-col bg-transparent">
                    <RefreshCw className="h-6 w-6 mb-2" />
                    <span className="text-xs">مسح التخزين المؤقت</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex-col bg-transparent">
                    <Monitor className="h-6 w-6 mb-2" />
                    <span className="text-xs">تحديث النظام</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Performance Chart */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="h-5 w-5 ml-2" />
                  مخطط الأداء التاريخي
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center bg-muted rounded-lg">
                  <BarChart3 className="h-24 w-24 text-gray-400" />
                </div>
                <div className="mt-4 grid grid-cols-4 gap-4 text-center">
                  <div>
                    <p className="text-sm text-gray-600">متوسط الاستجابة</p>
                    <p className="text-lg font-bold text-blue-600">1.2s</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">وقت التشغيل</p>
                    <p className="text-lg font-bold text-green-600">99.9%</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">معدل الأخطاء</p>
                    <p className="text-lg font-bold text-red-600">0.02%</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">المستخدمين المتزامنين</p>
                    <p className="text-lg font-bold text-purple-600">1,247</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="servers" className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              {serverMetrics.map((server, index) => (
                <Card
                  key={index}
                  className={`border-l-4 ${server.status === "healthy" ? "border-green-500" : "border-amber-500"}`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h3 className="font-semibold text-lg">{server.name}</h3>
                        <p className="text-sm text-gray-600">
                          {server.location} • وقت التشغيل: {server.uptime}
                        </p>
                      </div>
                      <Badge variant={server.status === "healthy" ? "default" : "secondary"}>
                        {server.status === "healthy" ? "سليم" : "يحتاج انتباه"}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Cpu className="h-4 w-4 text-blue-600" />
                          <span className="text-sm text-gray-600">المعالج</span>
                        </div>
                        <div className="space-y-1">
                          <div className="flex justify-between">
                            <span className="text-xs text-gray-500">الاستخدام</span>
                            <span className="text-xs font-medium">{server.cpu}%</span>
                          </div>
                          <Progress value={server.cpu} className="h-2" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Database className="h-4 w-4 text-green-600" />
                          <span className="text-sm text-gray-600">الذاكرة</span>
                        </div>
                        <div className="space-y-1">
                          <div className="flex justify-between">
                            <span className="text-xs text-gray-500">الاستخدام</span>
                            <span className="text-xs font-medium">{server.memory}%</span>
                          </div>
                          <Progress value={server.memory} className="h-2" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <HardDrive className="h-4 w-4 text-purple-600" />
                          <span className="text-sm text-gray-600">التخزين</span>
                        </div>
                        <div className="space-y-1">
                          <div className="flex justify-between">
                            <span className="text-xs text-gray-500">الاستخدام</span>
                            <span className="text-xs font-medium">{server.disk}%</span>
                          </div>
                          <Progress value={server.disk} className="h-2" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Network className="h-4 w-4 text-amber-600" />
                          <span className="text-sm text-gray-600">الشبكة</span>
                        </div>
                        <div className="space-y-1">
                          <div className="flex justify-between">
                            <span className="text-xs text-gray-500">الاستخدام</span>
                            <span className="text-xs font-medium">{server.network}%</span>
                          </div>
                          <Progress value={server.network} className="h-2" />
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2 mt-6">
                      <Button variant="outline" size="sm" className="bg-transparent">
                        <Eye className="h-4 w-4 ml-1" />
                        تفاصيل
                      </Button>
                      <Button variant="outline" size="sm" className="bg-transparent">
                        <RefreshCw className="h-4 w-4 ml-1" />
                        إعادة تشغيل
                      </Button>
                      <Button variant="outline" size="sm" className="bg-transparent">
                        <Settings className="h-4 w-4 ml-1" />
                        إعدادات
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="database" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Database Performance */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Database className="h-5 w-5 ml-2" />
                    أداء قاعدة البيانات
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm">متوسط وقت الاستعلام</span>
                      <span className="font-bold">45ms</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm">الاستعلامات النشطة</span>
                      <span className="font-bold">23</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm">حجم قاعدة البيانات</span>
                      <span className="font-bold">2.4 TB</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm">الاتصالات المتزامنة</span>
                      <span className="font-bold">156</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Database Optimization */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Zap className="h-5 w-5 ml-2" />
                    تحسينات قاعدة البيانات
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">فهرسة تلقائية</span>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">ضغط البيانات</span>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">تنظيف البيانات القديمة</span>
                      <Switch />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">تحسين الاستعلامات</span>
                      <Switch defaultChecked />
                    </div>
                    <Button className="w-full mt-4">
                      <RefreshCw className="h-4 w-4 ml-2" />
                      تطبيق التحسينات
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Slow Queries */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-5 w-5 ml-2" />
                  الاستعلامات البطيئة
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { query: "SELECT * FROM employees WHERE...", time: "2.3s", count: 45 },
                    { query: "UPDATE payroll SET salary...", time: "1.8s", count: 23 },
                    { query: "JOIN departments ON...", time: "1.2s", count: 67 },
                  ].map((query, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <p className="font-mono text-sm text-gray-800">{query.query}</p>
                        <p className="text-xs text-gray-500 mt-1">تم تنفيذها {query.count} مرة</p>
                      </div>
                      <div className="text-right">
                        <Badge variant="secondary">{query.time}</Badge>
                        <div className="flex gap-2 mt-2">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Zap className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="mobile" className="space-y-6">
            {mobileOptimizations.map((mobile, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Smartphone className="h-5 w-5 ml-2" />
                    {mobile.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{mobile.description}</p>

                  {/* Mobile Metrics */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <Clock className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                      <p className="text-lg font-bold text-blue-600">{mobile.metrics.loadTime}</p>
                      <p className="text-sm text-gray-600">وقت التحميل</p>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <Shield className="h-6 w-6 text-green-600 mx-auto mb-2" />
                      <p className="text-lg font-bold text-green-600">{mobile.metrics.crashRate}</p>
                      <p className="text-sm text-gray-600">معدل الأخطاء</p>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <Battery className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                      <p className="text-lg font-bold text-purple-600">{mobile.metrics.batteryUsage}</p>
                      <p className="text-sm text-gray-600">استهلاك البطارية</p>
                    </div>
                    <div className="text-center p-4 bg-amber-50 rounded-lg">
                      <Wifi className="h-6 w-6 text-amber-600 mx-auto mb-2" />
                      <p className="text-lg font-bold text-amber-600">{mobile.metrics.dataUsage}</p>
                      <p className="text-sm text-gray-600">استهلاك البيانات</p>
                    </div>
                  </div>

                  {/* Optimizations List */}
                  <div>
                    <h4 className="font-semibold mb-3">التحسينات المطبقة:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {mobile.optimizations.map((optimization, optIndex) => (
                        <div key={optIndex} className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                          <span className="text-sm">{optimization}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Mobile Performance Chart */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Activity className="h-5 w-5 ml-2" />
                  أداء التطبيق المحمول عبر الوقت
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center bg-muted rounded-lg">
                  <Activity className="h-24 w-24 text-gray-400" />
                </div>
                <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-sm text-gray-600">متوسط التقييم</p>
                    <p className="text-lg font-bold text-yellow-600">4.8/5</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">المستخدمين النشطين</p>
                    <p className="text-lg font-bold text-blue-600">1,247</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">معدل الاحتفاظ</p>
                    <p className="text-lg font-bold text-green-600">89%</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="optimization" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">مهام التحسين</h2>
              <Button>
                <Zap className="h-4 w-4 ml-2" />
                مهمة تحسين جديدة
              </Button>
            </div>

            <div className="space-y-4">
              {optimizationTasks.map((task) => (
                <Card key={task.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="font-semibold text-lg">{task.name}</h3>
                        <p className="text-gray-600 text-sm">{task.description}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className={getImpactColor(task.impact)}>{task.impact}</Badge>
                        <Badge variant="outline">{task.status}</Badge>
                      </div>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">التقدم</span>
                        <span className="text-sm font-medium">{task.progress}%</span>
                      </div>
                      <Progress value={task.progress} className="h-2" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <p className="text-sm text-gray-600">التأثير المتوقع</p>
                        <p className="text-xs font-medium text-blue-800">{task.estimatedImprovement}</p>
                      </div>
                      <div className="text-center p-3 bg-purple-50 rounded-lg">
                        <p className="text-sm text-gray-600">مستوى الجهد</p>
                        <p className="text-xs font-medium text-purple-800">{task.effort}</p>
                      </div>
                      <div className="text-center p-3 bg-green-50 rounded-lg">
                        <p className="text-sm text-gray-600">الحالة</p>
                        <p className="text-xs font-medium text-green-800">{task.status}</p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="bg-transparent">
                        <Eye className="h-4 w-4 ml-1" />
                        عرض التفاصيل
                      </Button>
                      {task.status === "مجدول" && (
                        <Button variant="outline" size="sm" className="bg-transparent">
                          <Play className="h-4 w-4 ml-1" />
                          بدء التنفيذ
                        </Button>
                      )}
                      {task.status === "قيد التنفيذ" && (
                        <Button variant="outline" size="sm" className="bg-transparent">
                          <Pause className="h-4 w-4 ml-1" />
                          إيقاف مؤقت
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Optimization Impact Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 ml-2" />
                  ملخص تأثير التحسينات
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-green-600">+35%</p>
                    <p className="text-sm text-gray-600">تحسن في السرعة</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Gauge className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-blue-600">-28%</p>
                    <p className="text-sm text-gray-600">تقليل استهلاك الموارد</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <CheckCircle className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-purple-600">99.9%</p>
                    <p className="text-sm text-gray-600">وقت التشغيل</p>
                  </div>
                  <div className="text-center p-4 bg-amber-50 rounded-lg">
                    <Activity className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-amber-600">+42%</p>
                    <p className="text-sm text-gray-600">رضا المستخدمين</p>
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
