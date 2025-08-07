"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import {
  UserPlus,
  Users,
  FileText,
  Calendar,
  Star,
  Eye,
  Upload,
  Search,
  Filter,
  Brain,
  Video,
  MessageSquare,
  TrendingUp,
  Clock,
  Globe,
  Briefcase,
} from "lucide-react"

export default function RecruitmentPage() {
  const [activeTab, setActiveTab] = useState("overview")

  const recruitmentStats = {
    openPositions: 15,
    totalApplications: 234,
    interviewsScheduled: 28,
    offersExtended: 8,
    hiredThisMonth: 5,
    averageTimeToHire: 21,
  }

  const jobPostings = [
    {
      id: 1,
      title: "مطور برمجيات أول",
      department: "تقنية المعلومات",
      location: "الرياض",
      type: "دوام كامل",
      applications: 45,
      status: "نشط",
      postedDate: "2024-01-15",
      salary: "15000-20000",
    },
    {
      id: 2,
      title: "أخصائي تسويق رقمي",
      department: "التسويق",
      location: "جدة",
      type: "دوام كامل",
      applications: 32,
      status: "نشط",
      postedDate: "2024-01-10",
      salary: "8000-12000",
    },
    {
      id: 3,
      title: "محاسب أول",
      department: "المحاسبة",
      location: "الدمام",
      type: "دوام كامل",
      applications: 28,
      status: "مغلق",
      postedDate: "2024-01-05",
      salary: "10000-15000",
    },
  ]

  const candidates = [
    {
      id: 1,
      name: "خالد أحمد السعد",
      position: "مطور برمجيات أول",
      experience: "5 سنوات",
      education: "بكالوريوس علوم حاسب",
      score: 92,
      status: "مقابلة مجدولة",
      appliedDate: "2024-01-20",
      skills: ["React", "Node.js", "Python", "AWS"],
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      name: "نورا محمد العتيبي",
      position: "أخصائي تسويق رقمي",
      experience: "3 سنوات",
      education: "بكالوريوس تسويق",
      score: 88,
      status: "قيد المراجعة",
      appliedDate: "2024-01-18",
      skills: ["SEO", "Google Ads", "Social Media", "Analytics"],
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      name: "عبدالله يوسف الشمري",
      position: "محاسب أول",
      experience: "7 سنوات",
      education: "بكالوريوس محاسبة",
      score: 95,
      status: "عرض عمل",
      appliedDate: "2024-01-15",
      skills: ["SAP", "Excel", "Financial Analysis", "IFRS"],
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  const interviews = [
    {
      id: 1,
      candidate: "خالد أحمد السعد",
      position: "مطور برمجيات أول",
      date: "2024-01-25",
      time: "10:00 ص",
      type: "حضوري",
      interviewer: "أحمد محمد - مدير التقنية",
      status: "مؤكد",
    },
    {
      id: 2,
      candidate: "سارة علي القحطاني",
      position: "أخصائي موارد بشرية",
      date: "2024-01-26",
      time: "2:00 م",
      type: "عن بُعد",
      interviewer: "فاطمة أحمد - مدير الموارد البشرية",
      status: "في الانتظار",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 rtl" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">التوظيف واكتساب المواهب</h1>
          <p className="text-gray-600">منصة ذكية للتوظيف مدعومة بالذكاء الاصطناعي لاكتساب أفضل المواهب</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mb-8">
          <Card>
            <CardContent className="p-4">
              <div className="text-center">
                <Briefcase className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-blue-600">{recruitmentStats.openPositions}</p>
                <p className="text-xs text-gray-600">وظائف شاغرة</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="text-center">
                <Users className="h-6 w-6 text-green-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-green-600">{recruitmentStats.totalApplications}</p>
                <p className="text-xs text-gray-600">إجمالي الطلبات</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="text-center">
                <Calendar className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-purple-600">{recruitmentStats.interviewsScheduled}</p>
                <p className="text-xs text-gray-600">مقابلات مجدولة</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="text-center">
                <FileText className="h-6 w-6 text-amber-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-amber-600">{recruitmentStats.offersExtended}</p>
                <p className="text-xs text-gray-600">عروض عمل</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="text-center">
                <UserPlus className="h-6 w-6 text-red-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-red-600">{recruitmentStats.hiredThisMonth}</p>
                <p className="text-xs text-gray-600">تم توظيفهم</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="text-center">
                <Clock className="h-6 w-6 text-gray-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-gray-600">{recruitmentStats.averageTimeToHire}</p>
                <p className="text-xs text-gray-600">يوم متوسط التوظيف</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5">
            <TabsTrigger value="overview">نظرة عامة</TabsTrigger>
            <TabsTrigger value="jobs">الوظائف</TabsTrigger>
            <TabsTrigger value="candidates">المرشحين</TabsTrigger>
            <TabsTrigger value="interviews">المقابلات</TabsTrigger>
            <TabsTrigger value="analytics">التحليلات</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* AI-Powered Insights */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Brain className="h-5 w-5 ml-2" />
                    رؤى الذكاء الاصطناعي - Gemini
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 rounded-lg border-r-4 border-blue-500">
                      <h4 className="font-semibold text-blue-900">تحليل السير الذاتية</h4>
                      <p className="text-blue-700 text-sm mt-1">
                        تم تحليل 45 سيرة ذاتية لوظيفة مطور البرمجيات. 12 مرشح يطابق المتطلبات بنسبة 90%+
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg border-r-4 border-green-500">
                      <h4 className="font-semibold text-green-900">توقعات الأداء</h4>
                      <p className="text-green-700 text-sm mt-1">
                        المرشح خالد السعد يظهر إمكانية أداء عالية بناءً على الخبرة والمهارات
                      </p>
                    </div>
                    <div className="p-4 bg-amber-50 rounded-lg border-r-4 border-amber-500">
                      <h4 className="font-semibold text-amber-900">توصيات التوظيف</h4>
                      <p className="text-amber-700 text-sm mt-1">
                        يُنصح بالتركيز على مهارات الذكاء الاصطناعي في الإعلانات القادمة
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="h-5 w-5 ml-2" />
                    النشاط الأخير
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3 rtl:space-x-reverse">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <div>
                        <p className="text-sm font-medium">طلب توظيف جديد</p>
                        <p className="text-xs text-gray-600">نورا العتيبي - أخصائي تسويق</p>
                        <p className="text-xs text-gray-500">منذ ساعة</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 rtl:space-x-reverse">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <div>
                        <p className="text-sm font-medium">مقابلة مكتملة</p>
                        <p className="text-xs text-gray-600">أحمد محمد - مطور برمجيات</p>
                        <p className="text-xs text-gray-500">منذ 3 ساعات</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 rtl:space-x-reverse">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <div>
                        <p className="text-sm font-medium">عرض عمل مقبول</p>
                        <p className="text-xs text-gray-600">سارة القحطاني - موارد بشرية</p>
                        <p className="text-xs text-gray-500">منذ 5 ساعات</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Platform Integration */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="h-5 w-5 ml-2" />
                  التكامل مع منصات التوظيف
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="p-4 border rounded-lg text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                      <Globe className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="font-semibold mb-1">LinkedIn</h3>
                    <Badge variant="default">متصل</Badge>
                    <p className="text-xs text-gray-600 mt-1">45 طلب جديد</p>
                  </div>
                  <div className="p-4 border rounded-lg text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                      <Globe className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="font-semibold mb-1">بيت.كوم</h3>
                    <Badge variant="default">متصل</Badge>
                    <p className="text-xs text-gray-600 mt-1">32 طلب جديد</p>
                  </div>
                  <div className="p-4 border rounded-lg text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                      <Globe className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="font-semibold mb-1">GulfTalent</h3>
                    <Badge variant="default">متصل</Badge>
                    <p className="text-xs text-gray-600 mt-1">28 طلب جديد</p>
                  </div>
                  <div className="p-4 border rounded-lg text-center">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                      <Globe className="h-6 w-6 text-amber-600" />
                    </div>
                    <h3 className="font-semibold mb-1">Indeed</h3>
                    <Badge variant="secondary">قيد الإعداد</Badge>
                    <p className="text-xs text-gray-600 mt-1">قريباً</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="candidates" className="space-y-6">
            {/* Search and Filters */}
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input placeholder="البحث في المرشحين..." className="pr-10" />
                    </div>
                  </div>
                  <Button variant="outline">
                    <Filter className="h-4 w-4 ml-2" />
                    فلترة
                  </Button>
                  <Button>
                    <Upload className="h-4 w-4 ml-2" />
                    رفع سيرة ذاتية
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Candidates List */}
            <Card>
              <CardHeader>
                <CardTitle>قائمة المرشحين ({candidates.length})</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {candidates.map((candidate) => (
                    <div key={candidate.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 rtl:space-x-reverse">
                          <Avatar className="h-12 w-12">
                            <AvatarImage src={candidate.avatar || "/placeholder.svg"} />
                            <AvatarFallback>
                              {candidate.name.split(" ")[0][0]}
                              {candidate.name.split(" ")[1][0]}
                            </AvatarFallback>
                          </Avatar>

                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-1">
                              <h3 className="font-semibold text-lg">{candidate.name}</h3>
                              <div className="flex items-center gap-1">
                                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                                <span className="text-sm font-medium">{candidate.score}%</span>
                              </div>
                            </div>
                            <p className="text-gray-600 text-sm mb-1">{candidate.position}</p>
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                              <span>{candidate.experience}</span>
                              <span>{candidate.education}</span>
                              <span>تقدم في: {new Date(candidate.appliedDate).toLocaleDateString("ar-SA")}</span>
                            </div>
                            <div className="flex gap-2 mt-2">
                              {candidate.skills.slice(0, 3).map((skill, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {skill}
                                </Badge>
                              ))}
                              {candidate.skills.length > 3 && (
                                <Badge variant="outline" className="text-xs">
                                  +{candidate.skills.length - 3}
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <Badge
                            variant={
                              candidate.status === "عرض عمل"
                                ? "default"
                                : candidate.status === "مقابلة مجدولة"
                                  ? "secondary"
                                  : "outline"
                            }
                          >
                            {candidate.status}
                          </Badge>
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <MessageSquare className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="interviews" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Upcoming Interviews */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="h-5 w-5 ml-2" />
                    المقابلات القادمة
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {interviews.map((interview) => (
                      <div key={interview.id} className="p-4 border rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="font-semibold">{interview.candidate}</h4>
                            <p className="text-sm text-gray-600">{interview.position}</p>
                          </div>
                          <Badge variant={interview.status === "مؤكد" ? "default" : "secondary"}>
                            {interview.status}
                          </Badge>
                        </div>
                        <div className="text-sm text-gray-500 space-y-1">
                          <p>
                            📅 {new Date(interview.date).toLocaleDateString("ar-SA")} - {interview.time}
                          </p>
                          <p>📍 {interview.type}</p>
                          <p>👤 {interview.interviewer}</p>
                        </div>
                        <div className="flex gap-2 mt-3">
                          <Button size="sm" variant="outline">
                            <Video className="h-4 w-4 ml-1" />
                            انضمام
                          </Button>
                          <Button size="sm" variant="outline">
                            تعديل
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Interview Analytics */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="h-5 w-5 ml-2" />
                    إحصائيات المقابلات
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">معدل النجاح</span>
                      <span className="font-bold">75%</span>
                    </div>
                    <Progress value={75} className="h-2" />

                    <div className="flex justify-between items-center">
                      <span className="text-sm">متوسط وقت المقابلة</span>
                      <span className="font-bold">45 دقيقة</span>
                    </div>
                    <Progress value={60} className="h-2" />

                    <div className="flex justify-between items-center">
                      <span className="text-sm">رضا المرشحين</span>
                      <span className="font-bold">4.2/5</span>
                    </div>
                    <Progress value={84} className="h-2" />
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
