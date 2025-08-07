"use client"

import type React from "react"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { toast } from "@/components/ui/use-toast"
import {
  FileText,
  Download,
  Users,
  DollarSign,
  TrendingUp,
  BarChart3,
  PieChart,
  Filter,
  Search,
  Eye,
  Share,
  Printer,
  Mail,
  Clock,
  Brain,
  Shield,
  ArrowLeft,
  X,
} from "lucide-react"

export default function ReportsPage() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [selectedPeriod, setSelectedPeriod] = useState("monthly")
  const [selectedDepartment, setSelectedDepartment] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [activeTab, setActiveTab] = useState("standard")
  const [showReportDialog, setShowReportDialog] = useState(false)
  const [selectedReport, setSelectedReport] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)

  const reportCategories = [
    {
      id: "hr",
      name: "تقارير الموارد البشرية",
      icon: Users,
      color: "bg-blue-500",
      reports: [
        {
          name: "تقرير الموظفين الشامل",
          description: "تقرير مفصل عن جميع بيانات الموظفين",
          lastGenerated: "2024-01-25",
          format: "PDF/Excel",
          size: "2.4 MB",
          status: "جاهز",
        },
        {
          name: "تقرير الحضور والانصراف",
          description: "تحليل أنماط الحضور والغياب",
          lastGenerated: "2024-01-24",
          format: "Excel",
          size: "1.8 MB",
          status: "جاهز",
        },
        {
          name: "تقرير معدل دوران الموظفين",
          description: "تحليل معدلات ترك العمل والاحتفاظ",
          lastGenerated: "2024-01-20",
          format: "PDF",
          size: "890 KB",
          status: "قيد التحديث",
        },
      ],
    },
    {
      id: "payroll",
      name: "تقارير الرواتب والمزايا",
      icon: DollarSign,
      color: "bg-green-500",
      reports: [
        {
          name: "تقرير الرواتب الشهري",
          description: "تفصيل الرواتب والاستقطاعات الشهرية",
          lastGenerated: "2024-01-25",
          format: "PDF/Excel",
          size: "3.2 MB",
          status: "جاهز",
        },
        {
          name: "تقرير التأمينات الاجتماعية",
          description: "مساهمات التأمينات للموظفين وصاحب العمل",
          lastGenerated: "2024-01-25",
          format: "Excel",
          size: "1.5 MB",
          status: "جاهز",
        },
        {
          name: "تقرير المزايا والبدلات",
          description: "تحليل المزايا المقدمة للموظفين",
          lastGenerated: "2024-01-23",
          format: "PDF",
          size: "1.1 MB",
          status: "جاهز",
        },
      ],
    },
    {
      id: "performance",
      name: "تقارير الأداء",
      icon: TrendingUp,
      color: "bg-purple-500",
      reports: [
        {
          name: "تقرير تقييم الأداء السنوي",
          description: "تقييمات الأداء السنوية لجميع الموظفين",
          lastGenerated: "2024-01-15",
          format: "PDF",
          size: "4.1 MB",
          status: "جاهز",
        },
        {
          name: "تقرير الأهداف والإنجازات",
          description: "متابعة تحقيق الأهداف الفردية والجماعية",
          lastGenerated: "2024-01-22",
          format: "Excel",
          size: "2.3 MB",
          status: "جاهز",
        },
      ],
    },
    {
      id: "compliance",
      name: "تقارير الامتثال",
      icon: Shield,
      color: "bg-red-500",
      reports: [
        {
          name: "تقرير الامتثال الحكومي",
          description: "تقرير شامل للامتثال للوائح الحكومية",
          lastGenerated: "2024-01-25",
          format: "PDF",
          size: "1.9 MB",
          status: "جاهز",
        },
        {
          name: "تقرير تجديد الوثائق",
          description: "الوثائق المنتهية الصلاحية والمطلوب تجديدها",
          lastGenerated: "2024-01-24",
          format: "Excel",
          size: "756 KB",
          status: "جاهز",
        },
      ],
    },
  ]

  const aiInsights = [
    {
      title: "تحليل اتجاهات الأداء",
      insight: "يظهر تحسن عام في الأداء بنسبة 15% مقارنة بالربع السابق، مع تميز قسم تقنية المعلومات",
      confidence: 92,
      type: "positive",
      link: "/performance",
    },
    {
      title: "توقعات معدل الدوران",
      insight: "متوقع انخفاض في معدل دوران الموظفين بنسبة 8% خلال الأشهر الثلاثة القادمة",
      confidence: 87,
      type: "positive",
      link: "/employees",
    },
    {
      title: "تحليل تكاليف الرواتب",
      insight: "زيادة في تكاليف الرواتب بنسبة 12% بسبب التوظيف الجديد، ضمن الميزانية المخططة",
      confidence: 95,
      type: "neutral",
      link: "/payroll",
    },
    {
      title: "تحذير الامتثال",
      insight: "15 موظف يحتاجون لتجديد وثائقهم خلال الشهرين القادمين",
      confidence: 100,
      type: "warning",
      link: "/documents",
    },
  ]

  const customReports = [
    {
      name: "تقرير مخصص - الأداء الربعي",
      description: "تقرير مخصص لتحليل الأداء الربعي حسب الأقسام",
      createdBy: "أحمد محمد السعد",
      createdDate: "2024-01-20",
      parameters: ["الفترة الزمنية", "الأقسام المحددة", "مؤشرات الأداء"],
      status: "نشط",
    },
    {
      name: "تقرير مخصص - تحليل التكاليف",
      description: "تحليل مفصل لتكاليف الموارد البشرية",
      createdBy: "فاطمة علي الأحمد",
      createdDate: "2024-01-18",
      parameters: ["نوع التكلفة", "الفترة الزمنية", "مقارنة سنوية"],
      status: "نشط",
    },
  ]

  // وظائف التفاعل
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const handleFilter = () => {
    toast({
      title: "تم تطبيق الفلتر",
      description: "تم تطبيق معايير الفلترة المتقدمة",
    })
  }

  const handleViewReport = (report: any) => {
    setSelectedReport(report)
    setShowReportDialog(true)
  }

  const handleDownloadReport = (report: any) => {
    toast({
      title: "جاري التحميل",
      description: `جاري تحميل ${report.name}`,
    })
  }

  const handleShareReport = (report: any) => {
    toast({
      title: "مشاركة التقرير",
      description: `تم نسخ رابط مشاركة ${report.name}`,
    })
  }

  const handleRunCustomReport = (report: any) => {
    setIsGenerating(true)
    setTimeout(() => {
      setIsGenerating(false)
      toast({
        title: "تم إنشاء التقرير",
        description: `تم إنشاء ${report.name} بنجاح`,
      })
    }, 2000)
  }

  const handleCreateCustomReport = () => {
    router.push("/reports/create")
  }

  const handleScheduleReport = () => {
    toast({
      title: "جدولة تقرير",
      description: "تم فتح نموذج جدولة تقرير جديد",
    })
  }

  const handleInsightAction = (insight: any) => {
    router.push(insight.link)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 rtl" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">التقارير والتحليلات المتقدمة</h1>
              <p className="text-gray-600">نظام شامل لإنتاج التقارير مع رؤى الذكاء الاصطناعي</p>
            </div>
            <Button variant="outline" onClick={() => router.push("/")} className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              العودة للرئيسية
            </Button>
          </div>
        </div>

        {/* AI Insights Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Brain className="h-5 w-5 ml-2" />
              رؤى الذكاء الاصطناعي - Gemini
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {aiInsights.map((insight, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border-r-4 ${
                    insight.type === "positive"
                      ? "bg-green-50 border-green-500"
                      : insight.type === "warning"
                        ? "bg-amber-50 border-amber-500"
                        : "bg-blue-50 border-blue-500"
                  }`}
                >
                  <h4
                    className={`font-semibold mb-2 ${
                      insight.type === "positive"
                        ? "text-green-900"
                        : insight.type === "warning"
                          ? "text-amber-900"
                          : "text-blue-900"
                    }`}
                  >
                    {insight.title}
                  </h4>
                  <p
                    className={`text-sm mb-2 ${
                      insight.type === "positive"
                        ? "text-green-700"
                        : insight.type === "warning"
                          ? "text-amber-700"
                          : "text-blue-700"
                    }`}
                  >
                    {insight.insight}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-600">مستوى الثقة: {insight.confidence}%</span>
                    <div className="flex items-center gap-2">
                      <Badge
                        variant={
                          insight.type === "positive"
                            ? "default"
                            : insight.type === "warning"
                              ? "destructive"
                              : "secondary"
                        }
                        className="text-xs"
                      >
                        {insight.type === "positive" ? "إيجابي" : insight.type === "warning" ? "تحذير" : "محايد"}
                      </Badge>
                      <Button size="sm" variant="outline" onClick={() => handleInsightAction(insight)}>
                        عرض التفاصيل
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Main Content */}
        <Tabs defaultValue="standard" className="space-y-6" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="standard">التقارير المعيارية</TabsTrigger>
            <TabsTrigger value="custom">التقارير المخصصة</TabsTrigger>
            <TabsTrigger value="scheduled">التقارير المجدولة</TabsTrigger>
            <TabsTrigger value="analytics">التحليلات المتقدمة</TabsTrigger>
          </TabsList>

          <TabsContent value="standard" className="space-y-6">
            {/* Search and Filters */}
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        placeholder="البحث في التقارير..."
                        value={searchTerm}
                        onChange={handleSearch}
                        className="pr-10"
                      />
                    </div>
                  </div>

                  <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                    <SelectTrigger className="w-full md:w-48">
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
                    <SelectTrigger className="w-full md:w-48">
                      <SelectValue placeholder="اختر القسم" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">جميع الأقسام</SelectItem>
                      <SelectItem value="hr">الموارد البشرية</SelectItem>
                      <SelectItem value="it">تقنية المعلومات</SelectItem>
                      <SelectItem value="finance">المالية</SelectItem>
                      <SelectItem value="sales">المبيعات</SelectItem>
                    </SelectContent>
                  </Select>

                  <Button variant="outline" onClick={handleFilter}>
                    <Filter className="h-4 w-4 ml-2" />
                    فلترة متقدمة
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Report Categories */}
            <div className="space-y-6">
              {reportCategories.map((category) => {
                const IconComponent = category.icon
                return (
                  <Card key={category.id}>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <div className={`p-2 rounded-lg ${category.color} mr-3`}>
                          <IconComponent className="h-5 w-5 text-white" />
                        </div>
                        {category.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {category.reports.map((report, index) => (
                          <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-start mb-3">
                              <h4 className="font-semibold text-lg">{report.name}</h4>
                              <Badge
                                variant={
                                  report.status === "جاهز"
                                    ? "default"
                                    : report.status === "قيد التحديث"
                                      ? "secondary"
                                      : "outline"
                                }
                                className="text-xs"
                              >
                                {report.status}
                              </Badge>
                            </div>
                            <p className="text-gray-600 text-sm mb-3">{report.description}</p>
                            <div className="space-y-2 text-sm text-gray-500 mb-4">
                              <div className="flex justify-between">
                                <span>آخر إنتاج:</span>
                                <span>{new Date(report.lastGenerated).toLocaleDateString("ar-SA")}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>التنسيق:</span>
                                <span>{report.format}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>الحجم:</span>
                                <span>{report.size}</span>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <Button size="sm" className="flex-1" onClick={() => handleDownloadReport(report)}>
                                <Download className="h-4 w-4 ml-1" />
                                تحميل
                              </Button>
                              <Button variant="outline" size="sm" onClick={() => handleViewReport(report)}>
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button variant="outline" size="sm" onClick={() => handleShareReport(report)}>
                                <Share className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </TabsContent>

          <TabsContent value="custom" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">التقارير المخصصة</h2>
              <Button onClick={handleCreateCustomReport}>
                <FileText className="h-4 w-4 ml-2" />
                إنشاء تقرير مخصص
              </Button>
            </div>

            <div className="space-y-4">
              {customReports.map((report, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{report.name}</h3>
                        <p className="text-gray-600 text-sm mb-2">{report.description}</p>
                        <div className="text-sm text-gray-500">
                          <p>أنشأه: {report.createdBy}</p>
                          <p>تاريخ الإنشاء: {new Date(report.createdDate).toLocaleDateString("ar-SA")}</p>
                        </div>
                      </div>
                      <Badge variant={report.status === "نشط" ? "default" : "secondary"}>{report.status}</Badge>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-medium mb-2">المعاملات:</h4>
                      <div className="flex flex-wrap gap-2">
                        {report.parameters.map((param, paramIndex) => (
                          <Badge key={paramIndex} variant="outline" className="text-xs">
                            {param}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" onClick={() => handleRunCustomReport(report)} disabled={isGenerating}>
                        {isGenerating ? (
                          <span className="flex items-center gap-2">
                            <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                            جاري التشغيل...
                          </span>
                        ) : (
                          <>
                            <Download className="h-4 w-4 ml-1" />
                            تشغيل التقرير
                          </>
                        )}
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          toast({
                            title: "معاينة التقرير",
                            description: `تم فتح معاينة تقرير ${report.name}`,
                          })
                        }}
                      >
                        <Eye className="h-4 w-4 ml-1" />
                        معاينة
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          toast({
                            title: "تعديل التقرير",
                            description: `تم فتح نموذج تعديل تقرير ${report.name}`,
                          })
                        }}
                      >
                        تعديل
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="scheduled" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">التقارير المجدولة</h2>
              <Button onClick={handleScheduleReport}>
                <Clock className="h-4 w-4 ml-2" />
                جدولة تقرير جديد
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "تقرير الحضور الأسبوعي",
                  schedule: "كل يوم اثنين - 8:00 ص",
                  recipients: ["hr@company.com", "manager@company.com"],
                  lastRun: "2024-01-22",
                  nextRun: "2024-01-29",
                  status: "نشط",
                },
                {
                  name: "تقرير الرواتب الشهري",
                  schedule: "آخر يوم من كل شهر - 6:00 م",
                  recipients: ["finance@company.com", "ceo@company.com"],
                  lastRun: "2024-01-31",
                  nextRun: "2024-02-29",
                  status: "نشط",
                },
                {
                  name: "تقرير الأداء الربعي",
                  schedule: "آخر يوم من كل ربع - 5:00 م",
                  recipients: ["management@company.com"],
                  lastRun: "2023-12-31",
                  nextRun: "2024-03-31",
                  status: "معلق",
                },
              ].map((schedule, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-semibold">{schedule.name}</h3>
                      <Badge variant={schedule.status === "نشط" ? "default" : "secondary"}>{schedule.status}</Badge>
                    </div>

                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{schedule.schedule}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        <span>{schedule.recipients.length} مستلم</span>
                      </div>
                      <div>
                        <span>آخر تشغيل: {new Date(schedule.lastRun).toLocaleDateString("ar-SA")}</span>
                      </div>
                      <div>
                        <span>التشغيل القادم: {new Date(schedule.nextRun).toLocaleDateString("ar-SA")}</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 bg-transparent"
                        onClick={() => {
                          toast({
                            title: "تعديل الجدولة",
                            description: `تم فتح نموذج تعديل جدولة تقرير ${schedule.name}`,
                          })
                        }}
                      >
                        تعديل
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => {
                          toast({
                            title: "طباعة التقرير",
                            description: `جاري طباعة تقرير ${schedule.name}`,
                          })
                        }}
                      >
                        <Printer className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="h-5 w-5 ml-2" />
                    تحليل استخدام التقارير
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-900">التقارير الأكثر استخداماً</h4>
                      <p className="text-2xl font-bold text-blue-600">تقرير الحضور</p>
                      <p className="text-sm text-blue-700">245 مرة هذا الشهر</p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-green-900">وقت الذروة</h4>
                      <p className="text-2xl font-bold text-green-600">9:00 ص</p>
                      <p className="text-sm text-green-700">أعلى استخدام للتقارير</p>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <h4 className="font-semibold text-purple-900">متوسط وقت الإنتاج</h4>
                      <p className="text-2xl font-bold text-purple-600">2.3 ثانية</p>
                      <p className="text-sm text-purple-700">للتقارير المعيارية</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <PieChart className="h-5 w-5 ml-2" />
                    إحصائيات الأداء
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">تقارير الموارد البشرية</span>
                      <span className="font-bold">45%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: "45%" }}></div>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-sm">تقارير الرواتب</span>
                      <span className="font-bold">30%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: "30%" }}></div>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-sm">تقارير الأداء</span>
                      <span className="font-bold">15%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{ width: "15%" }}></div>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-sm">تقارير الامتثال</span>
                      <span className="font-bold">10%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-red-500 h-2 rounded-full" style={{ width: "10%" }}></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Report Dialog */}
      <Dialog open={showReportDialog} onOpenChange={setShowReportDialog}>
        <DialogContent className="max-w-3xl rtl" dir="rtl">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">{selectedReport?.name}</DialogTitle>
          </DialogHeader>
          {selectedReport && (
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <FileText className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <Badge variant="outline">{selectedReport.format}</Badge>
                  <Badge
                    variant={
                      selectedReport.status === "جاهز"
                        ? "default"
                        : selectedReport.status === "قيد التحديث"
                          ? "secondary"
                          : "outline"
                    }
                    className="mr-2"
                  >
                    {selectedReport.status}
                  </Badge>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">آخر إنتاج:</span>
                  <p className="font-medium">{new Date(selectedReport.lastGenerated).toLocaleDateString("ar-SA")}</p>
                </div>
                <div>
                  <span className="text-gray-500">الحجم:</span>
                  <p className="font-medium">{selectedReport.size}</p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">وصف التقرير</h3>
                <p className="text-gray-600">{selectedReport.description}</p>
              </div>

              <div className="border p-4 rounded-lg bg-gray-50 h-64 flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="h-12 w-12 mx-auto text-gray-400 mb-2" />
                  <p className="text-gray-500">معاينة التقرير</p>
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-4">
                <Button variant="outline" onClick={() => setShowReportDialog(false)}>
                  <X className="h-4 w-4 ml-1" />
                  إغلاق
                </Button>
                <Button variant="outline" onClick={() => handleShareReport(selectedReport)}>
                  <Share className="h-4 w-4 ml-1" />
                  مشاركة
                </Button>
                <Button onClick={() => handleDownloadReport(selectedReport)}>
                  <Download className="h-4 w-4 ml-1" />
                  تحميل
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
