"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  TrendingUp,
  Users,
  Star,
  BarChart3,
  PieChart,
  Award,
  Eye,
  Edit,
  Plus,
  Download,
  Filter,
  Search,
  Clock,
  CheckCircle,
  AlertCircle,
  Brain,
} from "lucide-react"

export default function PerformancePage() {
  const [selectedPeriod, setSelectedPeriod] = useState("2024-Q1")
  const [selectedEmployee, setSelectedEmployee] = useState("")

  const performanceStats = {
    totalEvaluations: 247,
    completedEvaluations: 198,
    pendingEvaluations: 49,
    averageScore: 4.2,
    topPerformers: 23,
    improvementNeeded: 15,
  }

  const okrData = [
    {
      id: 1,
      title: "زيادة رضا العملاء",
      owner: "أحمد محمد السعد",
      department: "خدمة العملاء",
      progress: 85,
      status: "على المسار الصحيح",
      keyResults: [
        { title: "تحسين وقت الاستجابة إلى أقل من 2 دقيقة", progress: 90, target: "< 2 دقيقة" },
        { title: "زيادة معدل الرضا إلى 95%", progress: 80, target: "95%" },
        { title: "تقليل الشكاوى بنسبة 30%", progress: 85, target: "-30%" },
      ],
    },
    {
      id: 2,
      title: "تطوير المنتجات الرقمية",
      owner: "فاطمة علي الأحمد",
      department: "تقنية المعلومات",
      progress: 70,
      status: "يحتاج متابعة",
      keyResults: [
        { title: "إطلاق 3 منتجات جديدة", progress: 66, target: "3 منتجات" },
        { title: "تحسين الأداء بنسبة 40%", progress: 75, target: "+40%" },
        { title: "تقليل الأخطاء إلى أقل من 1%", progress: 70, target: "< 1%" },
      ],
    },
  ]

  const evaluationData = [
    {
      id: 1,
      employee: "خالد أحمد السعد",
      position: "مطور برمجيات أول",
      department: "تقنية المعلومات",
      evaluator: "أحمد محمد - مدير التقنية",
      period: "Q1 2024",
      overallScore: 4.5,
      status: "مكتمل",
      competencies: {
        technical: 4.8,
        communication: 4.2,
        leadership: 4.0,
        problemSolving: 4.7,
        teamwork: 4.3,
      },
      goals: [
        { title: "تطوير نظام إدارة المشاريع", progress: 95, status: "مكتمل" },
        { title: "تدريب الفريق على التقنيات الجديدة", progress: 80, status: "قيد التنفيذ" },
        { title: "تحسين أداء النظام", progress: 90, status: "مكتمل" },
      ],
    },
    {
      id: 2,
      employee: "نورا محمد العتيبي",
      position: "أخصائي تسويق رقمي",
      department: "التسويق",
      evaluator: "سارة أحمد - مدير التسويق",
      period: "Q1 2024",
      overallScore: 4.1,
      status: "قيد المراجعة",
      competencies: {
        technical: 4.0,
        communication: 4.5,
        leadership: 3.8,
        problemSolving: 4.2,
        teamwork: 4.0,
      },
      goals: [
        { title: "زيادة التفاعل على وسائل التواصل", progress: 85, status: "قيد التنفيذ" },
        { title: "تطوير حملات إعلانية جديدة", progress: 75, status: "قيد التنفيذ" },
        { title: "تحليل بيانات العملاء", progress: 90, status: "مكتمل" },
      ],
    },
  ]

  const feedbackData = [
    {
      id: 1,
      from: "أحمد محمد السعد",
      to: "خالد أحمد السعد",
      type: "تقييم المدير",
      rating: 4.5,
      feedback: "أداء ممتاز في تطوير الأنظمة الجديدة. يظهر مهارات قيادية قوية ويساعد الفريق بشكل فعال.",
      date: "2024-01-15",
      categories: ["الأداء التقني", "القيادة", "العمل الجماعي"],
    },
    {
      id: 2,
      from: "فاطمة علي الأحمد",
      to: "خالد أحمد السعد",
      type: "تقييم الزملاء",
      rating: 4.2,
      feedback: "زميل متعاون ومفيد. دائماً مستعد لمساعدة الآخرين وتقديم الحلول الإبداعية.",
      date: "2024-01-12",
      categories: ["التعاون", "الإبداع", "المساعدة"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 rtl" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">إدارة الأداء والتقييم</h1>
          <p className="text-gray-600">نظام شامل لتقييم الأداء وإدارة الأهداف والتطوير المهني</p>
        </div>

        {/* Performance Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mb-8">
          <Card>
            <CardContent className="p-4">
              <div className="text-center">
                <Users className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-blue-600">{performanceStats.totalEvaluations}</p>
                <p className="text-xs text-gray-600">إجمالي التقييمات</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="text-center">
                <CheckCircle className="h-6 w-6 text-green-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-green-600">{performanceStats.completedEvaluations}</p>
                <p className="text-xs text-gray-600">تقييمات مكتملة</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="text-center">
                <Clock className="h-6 w-6 text-amber-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-amber-600">{performanceStats.pendingEvaluations}</p>
                <p className="text-xs text-gray-600">في الانتظار</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="text-center">
                <Star className="h-6 w-6 text-yellow-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-yellow-600">{performanceStats.averageScore}</p>
                <p className="text-xs text-gray-600">متوسط التقييم</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="text-center">
                <Award className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-purple-600">{performanceStats.topPerformers}</p>
                <p className="text-xs text-gray-600">أداء متميز</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="text-center">
                <AlertCircle className="h-6 w-6 text-red-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-red-600">{performanceStats.improvementNeeded}</p>
                <p className="text-xs text-gray-600">يحتاج تطوير</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5">
            <TabsTrigger value="overview">نظرة عامة</TabsTrigger>
            <TabsTrigger value="okr">الأهداف والنتائج</TabsTrigger>
            <TabsTrigger value="evaluations">التقييمات</TabsTrigger>
            <TabsTrigger value="feedback">التغذية الراجعة</TabsTrigger>
            <TabsTrigger value="analytics">التحليلات</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* AI Performance Insights */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Brain className="h-5 w-5 ml-2" />
                    رؤى الأداء الذكية - Gemini
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 rounded-lg border-r-4 border-green-500">
                      <h4 className="font-semibold text-green-900">اتجاهات الأداء</h4>
                      <p className="text-green-700 text-sm mt-1">
                        تحسن عام في الأداء بنسبة 15% مقارنة بالربع السابق. قسم التقنية يقود التحسن.
                      </p>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg border-r-4 border-blue-500">
                      <h4 className="font-semibold text-blue-900">توصيات التطوير</h4>
                      <p className="text-blue-700 text-sm mt-1">
                        يُنصح بتركيز برامج التدريب على مهارات التواصل والقيادة للموظفين الجدد.
                      </p>
                    </div>
                    <div className="p-4 bg-amber-50 rounded-lg border-r-4 border-amber-500">
                      <h4 className="font-semibold text-amber-900">تحليل المخاطر</h4>
                      <p className="text-amber-700 text-sm mt-1">
                        3 موظفين يظهرون علامات انخفاض في الأداء - يحتاجون لخطط تطوير فردية.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Performance Distribution */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <PieChart className="h-5 w-5 ml-2" />
                    توزيع مستويات الأداء
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">أداء متميز (4.5-5.0)</span>
                      <span className="text-sm font-bold text-green-600">23 موظف</span>
                    </div>
                    <Progress value={23} className="h-2" />

                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">أداء جيد (3.5-4.4)</span>
                      <span className="text-sm font-bold text-blue-600">156 موظف</span>
                    </div>
                    <Progress value={63} className="h-2" />

                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">أداء مقبول (2.5-3.4)</span>
                      <span className="text-sm font-bold text-amber-600">53 موظف</span>
                    </div>
                    <Progress value={21} className="h-2" />

                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">يحتاج تطوير (أقل من 2.5)</span>
                      <span className="text-sm font-bold text-red-600">15 موظف</span>
                    </div>
                    <Progress value={6} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Performance Activities */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 ml-2" />
                  الأنشطة الأخيرة
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 rtl:space-x-reverse p-3 border rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">تم إكمال تقييم الأداء</p>
                      <p className="text-xs text-gray-600">خالد السعد - تقييم ربع سنوي</p>
                      <p className="text-xs text-gray-500">منذ ساعتين</p>
                    </div>
                    <Badge variant="default">4.5/5</Badge>
                  </div>

                  <div className="flex items-start space-x-3 rtl:space-x-reverse p-3 border rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">تحديث هدف OKR</p>
                      <p className="text-xs text-gray-600">فاطمة الأحمد - تطوير المنتجات الرقمية</p>
                      <p className="text-xs text-gray-500">منذ 4 ساعات</p>
                    </div>
                    <Badge variant="secondary">70%</Badge>
                  </div>

                  <div className="flex items-start space-x-3 rtl:space-x-reverse p-3 border rounded-lg">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">تغذية راجعة جديدة</p>
                      <p className="text-xs text-gray-600">تقييم 360 درجة - نورا العتيبي</p>
                      <p className="text-xs text-gray-500">منذ 6 ساعات</p>
                    </div>
                    <Badge variant="outline">جديد</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="okr" className="space-y-6">
            {/* OKR Management */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold">إدارة الأهداف والنتائج الرئيسية (OKR)</h2>
                <p className="text-gray-600">تتبع وإدارة الأهداف الاستراتيجية والنتائج المرجوة</p>
              </div>
              <Button>
                <Plus className="h-4 w-4 ml-2" />
                هدف جديد
              </Button>
            </div>

            <div className="space-y-6">
              {okrData.map((okr) => (
                <Card key={okr.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{okr.title}</CardTitle>
                        <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                          <span>المسؤول: {okr.owner}</span>
                          <span>القسم: {okr.department}</span>
                        </div>
                      </div>
                      <div className="text-left">
                        <div className="text-2xl font-bold text-blue-600">{okr.progress}%</div>
                        <Badge variant={okr.status === "على المسار الصحيح" ? "default" : "secondary"} className="mt-1">
                          {okr.status}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <Progress value={okr.progress} className="h-3" />
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold">النتائج الرئيسية:</h4>
                      {okr.keyResults.map((kr, index) => (
                        <div key={index} className="p-3 bg-gray-50 rounded-lg">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium">{kr.title}</span>
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-gray-600">الهدف: {kr.target}</span>
                              <span className="text-sm font-bold">{kr.progress}%</span>
                            </div>
                          </div>
                          <Progress value={kr.progress} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="evaluations" className="space-y-6">
            {/* Search and Filters */}
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input placeholder="البحث في التقييمات..." className="pr-10" />
                    </div>
                  </div>
                  <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                    <SelectTrigger className="w-full md:w-48">
                      <SelectValue placeholder="اختر الفترة" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2024-Q1">الربع الأول 2024</SelectItem>
                      <SelectItem value="2023-Q4">الربع الرابع 2023</SelectItem>
                      <SelectItem value="2023-Q3">الربع الثالث 2023</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline">
                    <Filter className="h-4 w-4 ml-2" />
                    فلترة
                  </Button>
                  <Button>
                    <Plus className="h-4 w-4 ml-2" />
                    تقييم جديد
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Evaluations List */}
            <div className="space-y-4">
              {evaluationData.map((evaluation) => (
                <Card key={evaluation.id}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center space-x-4 rtl:space-x-reverse">
                        <Avatar className="h-12 w-12">
                          <AvatarFallback>
                            {evaluation.employee.split(" ")[0][0]}
                            {evaluation.employee.split(" ")[1][0]}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold text-lg">{evaluation.employee}</h3>
                          <p className="text-gray-600">{evaluation.position}</p>
                          <p className="text-sm text-gray-500">{evaluation.department}</p>
                        </div>
                      </div>
                      <div className="text-left">
                        <div className="flex items-center gap-2 mb-2">
                          <Star className="h-5 w-5 text-yellow-500 fill-current" />
                          <span className="text-xl font-bold">{evaluation.overallScore}</span>
                        </div>
                        <Badge variant={evaluation.status === "مكتمل" ? "default" : "secondary"}>
                          {evaluation.status}
                        </Badge>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Competencies */}
                      <div>
                        <h4 className="font-semibold mb-3">الكفاءات الأساسية</h4>
                        <div className="space-y-2">
                          {Object.entries(evaluation.competencies).map(([key, value]) => (
                            <div key={key} className="flex justify-between items-center">
                              <span className="text-sm">
                                {key === "technical"
                                  ? "المهارات التقنية"
                                  : key === "communication"
                                    ? "التواصل"
                                    : key === "leadership"
                                      ? "القيادة"
                                      : key === "problemSolving"
                                        ? "حل المشكلات"
                                        : "العمل الجماعي"}
                              </span>
                              <div className="flex items-center gap-2">
                                <Progress value={value * 20} className="w-20 h-2" />
                                <span className="text-sm font-medium">{value}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Goals */}
                      <div>
                        <h4 className="font-semibold mb-3">الأهداف المحققة</h4>
                        <div className="space-y-2">
                          {evaluation.goals.map((goal, index) => (
                            <div key={index} className="p-2 bg-gray-50 rounded">
                              <div className="flex justify-between items-center mb-1">
                                <span className="text-sm font-medium">{goal.title}</span>
                                <Badge variant={goal.status === "مكتمل" ? "default" : "secondary"} className="text-xs">
                                  {goal.status}
                                </Badge>
                              </div>
                              <Progress value={goal.progress} className="h-1" />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center mt-4 pt-4 border-t">
                      <div className="text-sm text-gray-600">
                        <span>المقيم: {evaluation.evaluator}</span>
                        <span className="mx-2">•</span>
                        <span>الفترة: {evaluation.period}</span>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="feedback" className="space-y-6">
            {/* 360-Degree Feedback */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold">التغذية الراجعة 360 درجة</h2>
                <p className="text-gray-600">تقييم شامل من المدراء والزملاء والمرؤوسين</p>
              </div>
              <Button>
                <Plus className="h-4 w-4 ml-2" />
                طلب تغذية راجعة
              </Button>
            </div>

            <div className="space-y-4">
              {feedbackData.map((feedback) => (
                <Card key={feedback.id}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold">{feedback.from}</h3>
                          <Badge variant="outline">{feedback.type}</Badge>
                        </div>
                        <p className="text-sm text-gray-600">إلى: {feedback.to}</p>
                        <p className="text-xs text-gray-500">{new Date(feedback.date).toLocaleDateString("ar-SA")}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-5 w-5 text-yellow-500 fill-current" />
                        <span className="font-bold">{feedback.rating}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-gray-700">{feedback.feedback}</p>
                    </div>

                    <div className="flex gap-2">
                      {feedback.categories.map((category, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {category}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Performance Trends */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="h-5 w-5 ml-2" />
                    اتجاهات الأداء
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-green-900">تحسن الأداء العام</h4>
                      <p className="text-2xl font-bold text-green-600">+15%</p>
                      <p className="text-sm text-green-700">مقارنة بالربع السابق</p>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-900">معدل إكمال الأهداف</h4>
                      <p className="text-2xl font-bold text-blue-600">87%</p>
                      <p className="text-sm text-blue-700">من الأهداف المحددة</p>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <h4 className="font-semibold text-purple-900">رضا الموظفين</h4>
                      <p className="text-2xl font-bold text-purple-600">4.3/5</p>
                      <p className="text-sm text-purple-700">متوسط التقييم</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Department Performance */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <PieChart className="h-5 w-5 ml-2" />
                    أداء الأقسام
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { dept: "تقنية المعلومات", score: 4.6, color: "bg-blue-500" },
                      { dept: "التسويق", score: 4.3, color: "bg-green-500" },
                      { dept: "المبيعات", score: 4.1, color: "bg-purple-500" },
                      { dept: "المحاسبة", score: 4.0, color: "bg-amber-500" },
                      { dept: "الموارد البشرية", score: 4.2, color: "bg-red-500" },
                    ].map((dept, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <div className={`w-3 h-3 rounded-full ${dept.color}`}></div>
                          <span className="text-sm">{dept.dept}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Progress value={dept.score * 20} className="w-20 h-2" />
                          <span className="text-sm font-bold">{dept.score}</span>
                        </div>
                      </div>
                    ))}
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
