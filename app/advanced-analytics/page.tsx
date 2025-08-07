"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import {
  BarChart3,
  TrendingUp,
  Brain,
  Target,
  AlertTriangle,
  CheckCircle,
  Eye,
  Download,
  Filter,
  Zap,
  LineChart,
  Activity,
  Cpu,
  Database,
  Globe,
  Star,
  ArrowUp,
  ArrowDown,
  Minus,
} from "lucide-react"

export default function AdvancedAnalyticsPage() {
  const [selectedPeriod, setSelectedPeriod] = useState("monthly")
  const [selectedDepartment, setSelectedDepartment] = useState("all")

  const predictiveInsights = [
    {
      id: 1,
      title: "توقع معدل الدوران",
      prediction: "زيادة 3.2% في الربع القادم",
      confidence: 87,
      impact: "متوسط",
      recommendation: "تحسين برامج الاحتفاظ بالموظفين",
      trend: "up",
      category: "retention",
    },
    {
      id: 2,
      title: "توقع الأداء",
      prediction: "تحسن 12% في الإنتاجية",
      confidence: 94,
      impact: "عالي",
      recommendation: "الاستثمار في التدريب المتقدم",
      trend: "up",
      category: "performance",
    },
    {
      id: 3,
      title: "توقع التكاليف",
      prediction: "انخفاض 8% في تكاليف التوظيف",
      confidence: 76,
      impact: "متوسط",
      recommendation: "تحسين عمليات التوظيف الداخلي",
      trend: "down",
      category: "cost",
    },
    {
      id: 4,
      title: "توقع الرضا الوظيفي",
      prediction: "استقرار في مستوى الرضا",
      confidence: 82,
      impact: "منخفض",
      recommendation: "مراقبة مستمرة للمؤشرات",
      trend: "stable",
      category: "satisfaction",
    },
  ]

  const kpiMetrics = [
    {
      name: "معدل الاحتفاظ بالموظفين",
      current: 92,
      target: 95,
      trend: "up",
      change: "+2.3%",
      status: "good",
    },
    {
      name: "متوسط وقت التوظيف",
      current: 28,
      target: 21,
      trend: "down",
      change: "-5 أيام",
      status: "warning",
      unit: "يوم",
    },
    {
      name: "مؤشر الرضا الوظيفي",
      current: 4.2,
      target: 4.5,
      trend: "up",
      change: "+0.3",
      status: "good",
      unit: "/5",
    },
    {
      name: "معدل الغياب",
      current: 3.8,
      target: 3.0,
      trend: "up",
      change: "+0.5%",
      status: "critical",
      unit: "%",
    },
    {
      name: "تكلفة الموظف الواحد",
      current: 15420,
      target: 14000,
      trend: "up",
      change: "+8.2%",
      status: "warning",
      unit: "ريال",
    },
    {
      name: "معدل الترقيات الداخلية",
      current: 68,
      target: 70,
      trend: "stable",
      change: "0%",
      status: "good",
      unit: "%",
    },
  ]

  const departmentAnalytics = [
    {
      name: "تقنية المعلومات",
      employees: 45,
      performance: 94,
      satisfaction: 4.6,
      turnover: 5.2,
      productivity: 112,
      budget: 2.1,
      trend: "excellent",
    },
    {
      name: "التسويق",
      employees: 32,
      performance: 88,
      satisfaction: 4.2,
      turnover: 8.1,
      productivity: 98,
      budget: 1.8,
      trend: "good",
    },
    {
      name: "المبيعات",
      employees: 28,
      performance: 91,
      satisfaction: 3.9,
      turnover: 12.3,
      productivity: 105,
      budget: 1.5,
      trend: "warning",
    },
    {
      name: "الموارد البشرية",
      employees: 18,
      performance: 89,
      satisfaction: 4.4,
      turnover: 6.7,
      productivity: 95,
      budget: 1.2,
      trend: "good",
    },
    {
      name: "المحاسبة",
      employees: 22,
      performance: 92,
      satisfaction: 4.1,
      turnover: 4.8,
      productivity: 101,
      budget: 1.4,
      trend: "good",
    },
  ]

  const aiInsights = [
    {
      type: "pattern",
      title: "نمط في أوقات الحضور",
      description: "الموظفون في قسم التسويق يميلون للحضور متأخراً يوم الاثنين بنسبة 23%",
      action: "اقتراح نظام مرن للعمل يوم الاثنين",
      confidence: 91,
    },
    {
      type: "anomaly",
      title: "شذوذ في معدل الإنتاجية",
      description: "انخفاض غير متوقع في الإنتاجية خلال الأسبوع الثالث من كل شهر",
      action: "مراجعة جدولة المشاريع والمهام",
      confidence: 85,
    },
    {
      type: "opportunity",
      title: "فرصة تحسين",
      description: "الموظفون الذين يحضرون التدريبات يظهرون أداءً أفضل بنسبة 18%",
      action: "زيادة الاستثمار في برامج التدريب",
      confidence: 96,
    },
    {
      type: "risk",
      title: "تحذير من مخاطر",
      description: "3 موظفين في قسم المبيعات يظهرون مؤشرات تدل على احتمالية ترك العمل",
      action: "إجراء مقابلات شخصية ومراجعة الحوافز",
      confidence: 78,
    },
  ]

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return <ArrowUp className="h-4 w-4 text-green-600" />
      case "down":
        return <ArrowDown className="h-4 w-4 text-red-600" />
      case "stable":
        return <Minus className="h-4 w-4 text-gray-600" />
      default:
        return <Minus className="h-4 w-4 text-gray-600" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "good":
        return "text-green-600 bg-green-50"
      case "warning":
        return "text-amber-600 bg-amber-50"
      case "critical":
        return "text-red-600 bg-red-50"
      default:
        return "text-gray-600 bg-gray-50"
    }
  }

  const getDepartmentTrendColor = (trend: string) => {
    switch (trend) {
      case "excellent":
        return "border-green-500 bg-green-50"
      case "good":
        return "border-blue-500 bg-blue-50"
      case "warning":
        return "border-amber-500 bg-amber-50"
      case "critical":
        return "border-red-500 bg-red-50"
      default:
        return "border-gray-500 bg-gray-50"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 rtl" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">التحليلات المتطورة</h1>
          <p className="text-gray-600">
            تحليلات متقدمة مدعومة بالذكاء الاصطناعي للحصول على رؤى عميقة حول أداء الموارد البشرية
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <div className="flex items-center gap-4">
            <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="اختر الفترة" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="daily">يومي</SelectItem>
                <SelectItem value="weekly">أسبوعي</SelectItem>
                <SelectItem value="monthly">شهري</SelectItem>
                <SelectItem value="quarterly">ربع سنوي</SelectItem>
                <SelectItem value="yearly">سنوي</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="اختر القسم" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">جميع الأقسام</SelectItem>
                <SelectItem value="it">تقنية المعلومات</SelectItem>
                <SelectItem value="marketing">التسويق</SelectItem>
                <SelectItem value="sales">المبيعات</SelectItem>
                <SelectItem value="hr">الموارد البشرية</SelectItem>
                <SelectItem value="finance">المحاسبة</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline">
              <Filter className="h-4 w-4 ml-2" />
              فلاتر متقدمة
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline">
              <Eye className="h-4 w-4 ml-2" />
              عرض مخصص
            </Button>
            <Button>
              <Download className="h-4 w-4 ml-2" />
              تصدير التقرير
            </Button>
          </div>
        </div>

        {/* Main Analytics Tabs */}
        <Tabs defaultValue="predictive" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5">
            <TabsTrigger value="predictive">التحليل التنبؤي</TabsTrigger>
            <TabsTrigger value="kpi">مؤشرات الأداء</TabsTrigger>
            <TabsTrigger value="departments">تحليل الأقسام</TabsTrigger>
            <TabsTrigger value="ai-insights">رؤى الذكاء الاصطناعي</TabsTrigger>
            <TabsTrigger value="benchmarking">المقارنات المرجعية</TabsTrigger>
          </TabsList>

          <TabsContent value="predictive" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Predictive Insights */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Brain className="h-5 w-5 ml-2" />
                    التوقعات الذكية
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {predictiveInsights.map((insight) => (
                      <div key={insight.id} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-semibold text-sm">{insight.title}</h4>
                          <div className="flex items-center gap-1">
                            {getTrendIcon(insight.trend)}
                            <Badge variant={insight.impact === "عالي" ? "default" : "secondary"} className="text-xs">
                              {insight.impact}
                            </Badge>
                          </div>
                        </div>

                        <p className="text-sm text-gray-700 mb-3">{insight.prediction}</p>

                        <div className="space-y-2 mb-3">
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-gray-500">مستوى الثقة</span>
                            <span className="text-xs font-medium">{insight.confidence}%</span>
                          </div>
                          <Progress value={insight.confidence} className="h-1" />
                        </div>

                        <div className="p-2 bg-blue-50 rounded text-xs">
                          <span className="font-medium">التوصية: </span>
                          <span className="text-blue-800">{insight.recommendation}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Forecasting Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="h-5 w-5 ml-2" />
                    توقعات معدل الدوران
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center bg-muted rounded-lg">
                    <LineChart className="h-24 w-24 text-gray-400" />
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-sm text-gray-600">الحالي</p>
                      <p className="text-lg font-bold text-blue-600">8.2%</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">المتوقع</p>
                      <p className="text-lg font-bold text-amber-600">11.4%</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">المستهدف</p>
                      <p className="text-lg font-bold text-green-600">7.0%</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="h-5 w-5 ml-2" />
                    توقعات الإنتاجية
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center bg-muted rounded-lg">
                    <BarChart3 className="h-24 w-24 text-gray-400" />
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-sm text-gray-600">الحالي</p>
                      <p className="text-lg font-bold text-blue-600">102%</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">المتوقع</p>
                      <p className="text-lg font-bold text-green-600">114%</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">المستهدف</p>
                      <p className="text-lg font-bold text-purple-600">110%</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="kpi" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {kpiMetrics.map((metric, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-sm">{metric.name}</h3>
                      <div className="flex items-center gap-1">
                        {getTrendIcon(metric.trend)}
                        <span className={`text-xs px-2 py-1 rounded ${getStatusColor(metric.status)}`}>
                          {metric.change}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between items-end">
                        <div>
                          <p className="text-2xl font-bold">
                            {metric.current}
                            {metric.unit}
                          </p>
                          <p className="text-sm text-gray-600">القيمة الحالية</p>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-medium text-gray-700">
                            {metric.target}
                            {metric.unit}
                          </p>
                          <p className="text-sm text-gray-600">المستهدف</p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-500">التقدم نحو الهدف</span>
                          <span className="text-xs font-medium">
                            {Math.round((metric.current / metric.target) * 100)}%
                          </span>
                        </div>
                        <Progress value={Math.min((metric.current / metric.target) * 100, 100)} className="h-2" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* KPI Summary Dashboard */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="h-5 w-5 ml-2" />
                  ملخص مؤشرات الأداء الرئيسية
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-green-600">4</p>
                    <p className="text-sm text-gray-600">مؤشرات جيدة</p>
                  </div>
                  <div className="text-center p-4 bg-amber-50 rounded-lg">
                    <AlertTriangle className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-amber-600">2</p>
                    <p className="text-sm text-gray-600">تحتاج انتباه</p>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <AlertTriangle className="h-8 w-8 text-red-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-red-600">1</p>
                    <p className="text-sm text-gray-600">حرجة</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Activity className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-blue-600">85%</p>
                    <p className="text-sm text-gray-600">الأداء العام</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="departments" className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              {departmentAnalytics.map((dept, index) => (
                <Card key={index} className={`border-l-4 ${getDepartmentTrendColor(dept.trend)}`}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="font-semibold text-lg">{dept.name}</h3>
                        <p className="text-sm text-gray-600">{dept.employees} موظف</p>
                      </div>
                      <Badge
                        variant={
                          dept.trend === "excellent" ? "default" : dept.trend === "warning" ? "secondary" : "outline"
                        }
                      >
                        {dept.trend === "excellent" ? "ممتاز" : dept.trend === "good" ? "جيد" : "يحتاج تحسين"}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-blue-600">{dept.performance}%</p>
                        <p className="text-xs text-gray-600">الأداء</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-green-600">{dept.satisfaction}</p>
                        <p className="text-xs text-gray-600">الرضا</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-red-600">{dept.turnover}%</p>
                        <p className="text-xs text-gray-600">الدوران</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-purple-600">{dept.productivity}%</p>
                        <p className="text-xs text-gray-600">الإنتاجية</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-amber-600">{dept.budget}M</p>
                        <p className="text-xs text-gray-600">الميزانية</p>
                      </div>
                      <div className="text-center">
                        <Button variant="outline" size="sm" className="bg-transparent">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Department Comparison Chart */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="h-5 w-5 ml-2" />
                  مقارنة أداء الأقسام
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center bg-muted rounded-lg">
                  <BarChart3 className="h-24 w-24 text-gray-400" />
                </div>
                <p className="text-sm text-gray-600 mt-4 text-center">
                  مخطط تفاعلي يوضح مقارنة شاملة لجميع مؤشرات الأداء بين الأقسام المختلفة
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ai-insights" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {aiInsights.map((insight, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`p-2 rounded-lg ${
                            insight.type === "pattern"
                              ? "bg-blue-100"
                              : insight.type === "anomaly"
                                ? "bg-amber-100"
                                : insight.type === "opportunity"
                                  ? "bg-green-100"
                                  : "bg-red-100"
                          }`}
                        >
                          {insight.type === "pattern" && <Brain className="h-5 w-5 text-blue-600" />}
                          {insight.type === "anomaly" && <AlertTriangle className="h-5 w-5 text-amber-600" />}
                          {insight.type === "opportunity" && <Target className="h-5 w-5 text-green-600" />}
                          {insight.type === "risk" && <AlertTriangle className="h-5 w-5 text-red-600" />}
                        </div>
                        <div>
                          <h3 className="font-semibold">{insight.title}</h3>
                          <Badge variant="outline" className="text-xs">
                            {insight.type === "pattern"
                              ? "نمط"
                              : insight.type === "anomaly"
                                ? "شذوذ"
                                : insight.type === "opportunity"
                                  ? "فرصة"
                                  : "مخاطرة"}
                          </Badge>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">{insight.confidence}%</p>
                        <p className="text-xs text-gray-500">مستوى الثقة</p>
                      </div>
                    </div>

                    <p className="text-gray-700 text-sm mb-4">{insight.description}</p>

                    <div className="p-3 bg-gray-50 rounded-lg">
                      <h4 className="font-medium text-sm mb-1">الإجراء المقترح:</h4>
                      <p className="text-sm text-gray-700">{insight.action}</p>
                    </div>

                    <div className="mt-4">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs text-gray-500">مستوى الثقة</span>
                        <span className="text-xs font-medium">{insight.confidence}%</span>
                      </div>
                      <Progress value={insight.confidence} className="h-1" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* AI Performance Metrics */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Cpu className="h-5 w-5 ml-2" />
                  أداء نظام الذكاء الاصطناعي
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Database className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-blue-600">2.4TB</p>
                    <p className="text-sm text-gray-600">البيانات المحللة</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <Zap className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-green-600">0.8s</p>
                    <p className="text-sm text-gray-600">متوسط الاستجابة</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <Brain className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-purple-600">94%</p>
                    <p className="text-sm text-gray-600">دقة التوقعات</p>
                  </div>
                  <div className="text-center p-4 bg-amber-50 rounded-lg">
                    <Activity className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-amber-600">24/7</p>
                    <p className="text-sm text-gray-600">التشغيل المستمر</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="benchmarking" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="h-5 w-5 ml-2" />
                  المقارنات المرجعية مع الصناعة
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[
                    { metric: "معدل الاحتفاظ بالموظفين", company: 92, industry: 87, best: 96, unit: "%" },
                    { metric: "متوسط وقت التوظيف", company: 28, industry: 35, best: 21, unit: "يوم" },
                    { metric: "تكلفة التوظيف", company: 15420, industry: 18500, best: 12000, unit: "ريال" },
                    { metric: "مؤشر الرضا الوظيفي", company: 4.2, industry: 3.8, best: 4.7, unit: "/5" },
                    { metric: "معدل الترقيات الداخلية", company: 68, industry: 62, best: 75, unit: "%" },
                  ].map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <h4 className="font-medium">{item.metric}</h4>
                        <div className="flex items-center gap-4 text-sm">
                          <span className="text-blue-600 font-medium">
                            شركتنا: {item.company}
                            {item.unit}
                          </span>
                          <span className="text-gray-600">
                            الصناعة: {item.industry}
                            {item.unit}
                          </span>
                          <span className="text-green-600">
                            الأفضل: {item.best}
                            {item.unit}
                          </span>
                        </div>
                      </div>
                      <div className="relative">
                        <Progress value={50} className="h-3 bg-gray-200" />
                        <div
                          className="absolute top-0 h-3 bg-blue-500 rounded-l"
                          style={{ width: `${(item.company / item.best) * 100}%` }}
                        />
                        <div
                          className="absolute top-0 h-3 bg-gray-400 opacity-50"
                          style={{
                            left: `${(item.industry / item.best) * 100}%`,
                            width: "2px",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Industry Insights */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Star className="h-5 w-5 ml-2" />
                    نقاط القوة
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <div>
                        <p className="font-medium text-sm">معدل الاحتفاظ ممتاز</p>
                        <p className="text-xs text-gray-600">أعلى من متوسط الصناعة بـ 5%</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <div>
                        <p className="font-medium text-sm">رضا الموظفين عالي</p>
                        <p className="text-xs text-gray-600">أعلى من متوسط الصناعة بـ 0.4 نقطة</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <div>
                        <p className="font-medium text-sm">الترقيات الداخلية جيدة</p>
                        <p className="text-xs text-gray-600">أعلى من متوسط الصناعة بـ 6%</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertTriangle className="h-5 w-5 ml-2" />
                    فرص التحسين
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-amber-50 rounded-lg">
                      <AlertTriangle className="h-5 w-5 text-amber-600" />
                      <div>
                        <p className="font-medium text-sm">تحسين سرعة التوظيف</p>
                        <p className="text-xs text-gray-600">أبطأ من متوسط الصناعة بـ 7 أيام</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-amber-50 rounded-lg">
                      <AlertTriangle className="h-5 w-5 text-amber-600" />
                      <div>
                        <p className="font-medium text-sm">تقليل تكلفة التوظيف</p>
                        <p className="text-xs text-gray-600">أعلى من متوسط الصناعة بـ 3,080 ريال</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                      <Target className="h-5 w-5 text-blue-600" />
                      <div>
                        <p className="font-medium text-sm">الوصول للمعايير العالمية</p>
                        <p className="text-xs text-gray-600">فجوة 8% للوصول لأفضل الممارسات</p>
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
