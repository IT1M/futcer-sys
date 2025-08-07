"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { toast } from "@/components/ui/use-toast"
import {
  GraduationCap,
  BookOpen,
  Video,
  Award,
  Users,
  Clock,
  Star,
  Play,
  Download,
  Search,
  Filter,
  Plus,
  Brain,
  Target,
  TrendingUp,
  Calendar,
  FileText,
  Headphones,
  Monitor,
  Smartphone,
  Globe,
  Heart,
  MessageSquare,
  BarChart3,
  ArrowLeft,
  X,
} from "lucide-react"

export default function LearningPage() {
  const router = useRouter()
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [activeTab, setActiveTab] = useState("courses")
  const [showCourseDialog, setShowCourseDialog] = useState(false)
  const [selectedCourse, setSelectedCourse] = useState<any>(null)

  const learningStats = {
    totalCourses: 156,
    completedCourses: 89,
    inProgressCourses: 23,
    totalLearners: 247,
    averageCompletion: 78,
    certificatesEarned: 145,
  }

  const courses = [
    {
      id: 1,
      title: "أساسيات الذكاء الاصطناعي",
      instructor: "د. أحمد محمد السعد",
      category: "تقنية",
      duration: "8 ساعات",
      level: "مبتدئ",
      rating: 4.8,
      enrolled: 45,
      progress: 0,
      type: "فيديو",
      language: "عربي",
      thumbnail: "/ai-technology.png",
      description: "مقدمة شاملة لمفاهيم الذكاء الاصطناعي وتطبيقاته في بيئة العمل",
    },
    {
      id: 2,
      title: "مهارات القيادة الفعالة",
      instructor: "أ. فاطمة علي الأحمد",
      category: "قيادة",
      duration: "12 ساعة",
      level: "متوسط",
      rating: 4.9,
      enrolled: 67,
      progress: 65,
      type: "تفاعلي",
      language: "عربي",
      thumbnail: "/leadership-skills.png",
      description: "تطوير المهارات القيادية والإدارية للمدراء والمشرفين",
    },
    {
      id: 3,
      title: "التسويق الرقمي المتقدم",
      instructor: "م. خالد أحمد العتيبي",
      category: "تسويق",
      duration: "15 ساعة",
      level: "متقدم",
      rating: 4.7,
      enrolled: 34,
      progress: 30,
      type: "مختلط",
      language: "عربي/إنجليزي",
      thumbnail: "/digital-marketing-concept.png",
      description: "استراتيجيات التسويق الرقمي الحديثة ووسائل التواصل الاجتماعي",
    },
    {
      id: 4,
      title: "الصحة النفسية في العمل",
      instructor: "د. سارة أحمد القحطاني",
      category: "صحة نفسية",
      duration: "6 ساعات",
      level: "مبتدئ",
      rating: 4.9,
      enrolled: 89,
      progress: 100,
      type: "صوتي",
      language: "عربي",
      thumbnail: "/workplace-mental-health.png",
      description: "كيفية الحفاظ على الصحة النفسية والتوازن في بيئة العمل",
    },
  ]

  const skillGaps = [
    {
      skill: "الذكاء الاصطناعي",
      currentLevel: 2.3,
      targetLevel: 4.0,
      gap: 1.7,
      priority: "عالي",
      affectedEmployees: 45,
    },
    {
      skill: "تحليل البيانات",
      currentLevel: 3.1,
      targetLevel: 4.2,
      gap: 1.1,
      priority: "متوسط",
      affectedEmployees: 32,
    },
    {
      skill: "القيادة الرقمية",
      currentLevel: 2.8,
      targetLevel: 4.5,
      gap: 1.7,
      priority: "عالي",
      affectedEmployees: 28,
    },
    {
      skill: "الأمن السيبراني",
      currentLevel: 2.1,
      targetLevel: 3.8,
      gap: 1.7,
      priority: "عاجل",
      affectedEmployees: 67,
    },
  ]

  const learningPaths = [
    {
      id: 1,
      title: "مسار تطوير القيادة",
      description: "برنامج شامل لتطوير المهارات القيادية والإدارية",
      courses: 8,
      duration: "3 أشهر",
      level: "متوسط إلى متقدم",
      enrolled: 23,
      completion: 67,
    },
    {
      id: 2,
      title: "مسار التحول الرقمي",
      description: "تعلم أحدث التقنيات والأدوات الرقمية",
      courses: 12,
      duration: "4 أشهر",
      level: "مبتدئ إلى متقدم",
      enrolled: 45,
      completion: 34,
    },
    {
      id: 3,
      title: "مسار الصحة والرفاهية",
      description: "برامج الصحة النفسية والجسدية في العمل",
      courses: 6,
      duration: "2 شهر",
      level: "جميع المستويات",
      enrolled: 78,
      completion: 89,
    },
  ]

  const wellnessPrograms = [
    {
      id: 1,
      title: "برنامج إدارة الضغوط",
      type: "ورشة عمل",
      duration: "4 ساعات",
      participants: 25,
      date: "2024-02-15",
      instructor: "د. نورا محمد",
      status: "قادم",
    },
    {
      id: 2,
      title: "جلسات التأمل والاسترخاء",
      type: "جلسة جماعية",
      duration: "1 ساعة",
      participants: 15,
      date: "يومياً",
      instructor: "أ. محمد علي",
      status: "نشط",
    },
    {
      id: 3,
      title: "استشارات نفسية فردية",
      type: "استشارة",
      duration: "45 دقيقة",
      participants: 1,
      date: "حسب الطلب",
      instructor: "د. فاطمة أحمد",
      status: "متاح",
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

  const handleAddCourse = () => {
    toast({
      title: "إضافة دورة جديدة",
      description: "تم فتح نموذج إضافة دورة جديدة",
    })
  }

  const handleStartCourse = (course: any) => {
    setSelectedCourse(course)
    setShowCourseDialog(true)
  }

  const handleCreateTrainingPlan = (skill: any) => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "تم إنشاء خطة التدريب",
        description: `تم إنشاء خطة تدريب لمهارة ${skill.skill}`,
      })
    }, 1500)
  }

  const handleStartPath = (path: any) => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "تم بدء المسار",
        description: `تم تسجيلك في مسار ${path.title}`,
      })
    }, 1500)
  }

  const handleJoinProgram = (program: any) => {
    toast({
      title: "تم الانضمام للبرنامج",
      description: `تم تسجيلك في ${program.title}`,
    })
  }

  const handleBookAppointment = (program: any) => {
    router.push("/self-service?tab=requests&action=new&type=appointment")
  }

  const filteredCourses = courses.filter((course) => {
    return (
      (selectedCategory === "all" || course.category === selectedCategory) &&
      (course.title.includes(searchTerm) || course.description.includes(searchTerm))
    )
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 rtl" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">التعلم والتطوير المهني</h1>
              <p className="text-gray-600">منصة شاملة للتعلم الإلكتروني وتطوير المهارات والصحة النفسية</p>
            </div>
            <Button variant="outline" onClick={() => router.push("/")} className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              العودة للرئيسية
            </Button>
          </div>
        </div>

        {/* Learning Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mb-8">
          <Card>
            <CardContent className="p-4">
              <div className="text-center">
                <BookOpen className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-blue-600">{learningStats.totalCourses}</p>
                <p className="text-xs text-gray-600">إجمالي الدورات</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="text-center">
                <Award className="h-6 w-6 text-green-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-green-600">{learningStats.completedCourses}</p>
                <p className="text-xs text-gray-600">دورات مكتملة</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="text-center">
                <Clock className="h-6 w-6 text-amber-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-amber-600">{learningStats.inProgressCourses}</p>
                <p className="text-xs text-gray-600">قيد التنفيذ</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="text-center">
                <Users className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-purple-600">{learningStats.totalLearners}</p>
                <p className="text-xs text-gray-600">المتعلمين</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="text-center">
                <TrendingUp className="h-6 w-6 text-red-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-red-600">{learningStats.averageCompletion}%</p>
                <p className="text-xs text-gray-600">معدل الإكمال</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="text-center">
                <GraduationCap className="h-6 w-6 text-indigo-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-indigo-600">{learningStats.certificatesEarned}</p>
                <p className="text-xs text-gray-600">شهادات محققة</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="courses" className="space-y-6" onValueChange={(value) => setActiveTab(value)}>
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6">
            <TabsTrigger value="courses">الدورات</TabsTrigger>
            <TabsTrigger value="paths">المسارات</TabsTrigger>
            <TabsTrigger value="skills">فجوات المهارات</TabsTrigger>
            <TabsTrigger value="wellness">الصحة النفسية</TabsTrigger>
            <TabsTrigger value="knowledge">المعرفة</TabsTrigger>
            <TabsTrigger value="analytics">التحليلات</TabsTrigger>
          </TabsList>

          <TabsContent value="courses" className="space-y-6">
            {/* Search and Filters */}
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        placeholder="البحث في الدورات..."
                        className="pr-10"
                        value={searchTerm}
                        onChange={handleSearch}
                      />
                    </div>
                  </div>
                  <Button variant="outline" onClick={handleFilter}>
                    <Filter className="h-4 w-4 ml-2" />
                    فلترة
                  </Button>
                  <Button onClick={handleAddCourse}>
                    <Plus className="h-4 w-4 ml-2" />
                    دورة جديدة
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* AI Learning Recommendations */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Brain className="h-5 w-5 ml-2" />
                  توصيات التعلم الذكاء الاصطناعي - Gemini
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg border-r-4 border-blue-500">
                    <h4 className="font-semibold text-blue-900">مهارات مطلوبة</h4>
                    <p className="text-blue-700 text-sm mt-1">
                      بناءً على تحليل السوق، يُنصح بالتركيز على دورات الذكاء الاصطناعي وتحليل البيانات
                    </p>
                    <div className="mt-3">
                      <Button size="sm" variant="outline" onClick={() => router.push("/learning?tab=skills")}>
                        عرض فجوات المهارات
                      </Button>
                    </div>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg border-r-4 border-green-500">
                    <h4 className="font-semibold text-green-900">مسارات شخصية</h4>
                    <p className="text-green-700 text-sm mt-1">
                      تم إنشاء مسارات تعلم مخصصة لـ 23 موظف بناءً على أدائهم وأهدافهم المهنية
                    </p>
                    <div className="mt-3">
                      <Button size="sm" variant="outline" onClick={() => router.push("/learning?tab=paths")}>
                        عرض المسارات
                      </Button>
                    </div>
                  </div>
                  <div className="p-4 bg-amber-50 rounded-lg border-r-4 border-amber-500">
                    <h4 className="font-semibold text-amber-900">فرص التطوير</h4>
                    <p className="text-amber-700 text-sm mt-1">
                      67% من الموظفين مؤهلون لبرامج القيادة المتقدمة والإدارة الاستراتيجية
                    </p>
                    <div className="mt-3">
                      <Button size="sm" variant="outline" onClick={() => router.push("/performance?tab=development")}>
                        عرض فرص التطوير
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Courses Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.length > 0 ? (
                filteredCourses.map((course) => (
                  <Card key={course.id} className="hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <img
                        src={course.thumbnail || "/placeholder.svg"}
                        alt={course.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <div className="absolute top-2 right-2">
                        <Badge variant="secondary">{course.category}</Badge>
                      </div>
                      <div className="absolute top-2 left-2">
                        {course.type === "فيديو" && <Video className="h-5 w-5 text-white" />}
                        {course.type === "صوتي" && <Headphones className="h-5 w-5 text-white" />}
                        {course.type === "تفاعلي" && <Monitor className="h-5 w-5 text-white" />}
                        {course.type === "مختلط" && <Smartphone className="h-5 w-5 text-white" />}
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <div className="mb-3">
                        <h3 className="font-semibold text-lg mb-1">{course.title}</h3>
                        <p className="text-sm text-gray-600 mb-2">{course.description}</p>
                        <p className="text-sm text-gray-500">المدرب: {course.instructor}</p>
                      </div>

                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <span className="text-sm font-medium">{course.rating}</span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {course.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="h-3 w-3" />
                            {course.enrolled}
                          </span>
                        </div>
                      </div>

                      {course.progress > 0 && (
                        <div className="mb-3">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm text-gray-600">التقدم</span>
                            <span className="text-sm font-medium">{course.progress}%</span>
                          </div>
                          <Progress value={course.progress} className="h-2" />
                        </div>
                      )}

                      <div className="flex items-center justify-between">
                        <div className="flex gap-2">
                          <Badge variant="outline" className="text-xs">
                            {course.level}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {course.language}
                          </Badge>
                        </div>
                        <Button size="sm" onClick={() => handleStartCourse(course)}>
                          {course.progress > 0 ? (
                            <>
                              <Play className="h-4 w-4 ml-1" />
                              متابعة
                            </>
                          ) : (
                            <>
                              <Play className="h-4 w-4 ml-1" />
                              بدء
                            </>
                          )}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="col-span-3 text-center py-12">
                  <BookOpen className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-1">لا توجد دورات مطابقة</h3>
                  <p className="text-gray-500 mb-4">لم يتم العثور على دورات تطابق معايير البحث</p>
                  <Button variant="outline" onClick={() => setSearchTerm("")}>
                    عرض جميع الدورات
                  </Button>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="paths" className="space-y-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold">مسارات التعلم المنظمة</h2>
                <p className="text-gray-600">برامج تعليمية متكاملة لتطوير مهارات محددة</p>
              </div>
              <Button
                onClick={() => {
                  toast({
                    title: "إضافة مسار جديد",
                    description: "تم فتح نموذج إضافة مسار تعليمي جديد",
                  })
                }}
              >
                <Plus className="h-4 w-4 ml-2" />
                مسار جديد
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {learningPaths.map((path) => (
                <Card key={path.id}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{path.title}</h3>
                        <p className="text-gray-600 text-sm mb-3">{path.description}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <BookOpen className="h-3 w-3" />
                            {path.courses} دورات
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {path.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="h-3 w-3" />
                            {path.enrolled} مشترك
                          </span>
                        </div>
                      </div>
                      <Badge variant="outline">{path.level}</Badge>
                    </div>

                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-600">معدل الإكمال</span>
                        <span className="text-sm font-medium">{path.completion}%</span>
                      </div>
                      <Progress value={path.completion} className="h-2" />
                    </div>

                    <Button className="w-full" onClick={() => handleStartPath(path)} disabled={isLoading}>
                      {isLoading ? (
                        <span className="flex items-center gap-2">
                          <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                          جاري التسجيل...
                        </span>
                      ) : (
                        <>
                          <Target className="h-4 w-4 ml-2" />
                          بدء المسار
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="skills" className="space-y-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">تحليل فجوات المهارات</h2>
              <p className="text-gray-600">تحديد المهارات المطلوبة وتطوير خطط التدريب المناسبة</p>
            </div>

            <div className="space-y-4">
              {skillGaps.map((skill, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-semibold text-lg">{skill.skill}</h3>
                        <p className="text-sm text-gray-600">يؤثر على {skill.affectedEmployees} موظف</p>
                      </div>
                      <Badge
                        variant={
                          skill.priority === "عاجل"
                            ? "destructive"
                            : skill.priority === "عالي"
                              ? "default"
                              : "secondary"
                        }
                      >
                        {skill.priority}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="text-center p-3 bg-red-50 rounded-lg">
                        <p className="text-sm text-gray-600">المستوى الحالي</p>
                        <p className="text-2xl font-bold text-red-600">{skill.currentLevel}</p>
                      </div>
                      <div className="text-center p-3 bg-green-50 rounded-lg">
                        <p className="text-sm text-gray-600">المستوى المطلوب</p>
                        <p className="text-2xl font-bold text-green-600">{skill.targetLevel}</p>
                      </div>
                      <div className="text-center p-3 bg-amber-50 rounded-lg">
                        <p className="text-sm text-gray-600">الفجوة</p>
                        <p className="text-2xl font-bold text-amber-600">{skill.gap}</p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-600">التقدم نحو الهدف</span>
                        <span className="text-sm font-medium">
                          {Math.round((skill.currentLevel / skill.targetLevel) * 100)}%
                        </span>
                      </div>
                      <Progress value={(skill.currentLevel / skill.targetLevel) * 100} className="h-2" />
                    </div>

                    <Button className="w-full" onClick={() => handleCreateTrainingPlan(skill)} disabled={isLoading}>
                      {isLoading ? (
                        <span className="flex items-center gap-2">
                          <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                          جاري الإنشاء...
                        </span>
                      ) : (
                        <>
                          <Target className="h-4 w-4 ml-2" />
                          إنشاء خطة تدريب
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="wellness" className="space-y-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">مركز الصحة النفسية والرفاهية</h2>
              <p className="text-gray-600">برامج شاملة لدعم الصحة النفسية والرفاهية في العمل</p>
            </div>

            {/* Wellness Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <Card>
                <CardContent className="p-4">
                  <div className="text-center">
                    <Heart className="h-6 w-6 text-red-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-red-600">89%</p>
                    <p className="text-xs text-gray-600">مستوى الرفاهية</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="text-center">
                    <Users className="h-6 w-6 text-green-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-green-600">156</p>
                    <p className="text-xs text-gray-600">مشارك في البرامج</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="text-center">
                    <MessageSquare className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-blue-600">45</p>
                    <p className="text-xs text-gray-600">جلسات استشارية</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="text-center">
                    <Calendar className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-purple-600">12</p>
                    <p className="text-xs text-gray-600">برامج نشطة</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Wellness Programs */}
            <div className="space-y-4">
              {wellnessPrograms.map((program) => (
                <Card key={program.id}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{program.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <Badge variant="outline">{program.type}</Badge>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {program.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="h-3 w-3" />
                            {program.participants} مشارك
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {program.date}
                          </span>
                        </div>
                        <p className="text-sm text-gray-500 mt-2">المدرب: {program.instructor}</p>
                      </div>
                      <Badge
                        variant={
                          program.status === "نشط" ? "default" : program.status === "قادم" ? "secondary" : "outline"
                        }
                      >
                        {program.status}
                      </Badge>
                    </div>

                    <Button
                      className="w-full"
                      onClick={() =>
                        program.status === "متاح" ? handleBookAppointment(program) : handleJoinProgram(program)
                      }
                    >
                      {program.status === "متاح" ? "حجز موعد" : "انضمام للبرنامج"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Mental Health Resources */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Heart className="h-5 w-5 ml-2" />
                  موارد الصحة النفسية
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg text-center">
                    <FileText className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">أدلة الصحة النفسية</h4>
                    <p className="text-sm text-gray-600 mb-3">مواد تعليمية وإرشادية</p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        toast({
                          title: "تم التحميل",
                          description: "تم تحميل أدلة الصحة النفسية بنجاح",
                        })
                      }}
                    >
                      <Download className="h-4 w-4 ml-1" />
                      تحميل
                    </Button>
                  </div>

                  <div className="p-4 border rounded-lg text-center">
                    <Headphones className="h-8 w-8 text-green-600 mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">تسجيلات الاسترخاء</h4>
                    <p className="text-sm text-gray-600 mb-3">جلسات تأمل وتنفس</p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        toast({
                          title: "تشغيل التسجيلات",
                          description: "جاري تشغيل تسجيلات الاسترخاء",
                        })
                      }}
                    >
                      <Play className="h-4 w-4 ml-1" />
                      استماع
                    </Button>
                  </div>

                  <div className="p-4 border rounded-lg text-center">
                    <MessageSquare className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">دعم الأقران</h4>
                    <p className="text-sm text-gray-600 mb-3">مجتمع الدعم المتبادل</p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        toast({
                          title: "تم الانضمام",
                          description: "تم الانضمام لمجموعة دعم الأقران بنجاح",
                        })
                      }}
                    >
                      <Users className="h-4 w-4 ml-1" />
                      انضمام
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="knowledge" className="space-y-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">مركز إدارة المعرفة</h2>
              <p className="text-gray-600">مكتبة رقمية شاملة ونظام ويكي تفاعلي لمشاركة المعرفة</p>
            </div>

            {/* Knowledge Base Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <Card
                className="hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => {
                  router.push("/documents?category=policies")
                }}
              >
                <CardContent className="p-4 text-center">
                  <FileText className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-1">السياسات والإجراءات</h3>
                  <p className="text-sm text-gray-600">156 وثيقة</p>
                </CardContent>
              </Card>

              <Card
                className="hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => {
                  router.push("/documents?category=best-practices")
                }}
              >
                <CardContent className="p-4 text-center">
                  <BookOpen className="h-8 w-8 text-green-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-1">أفضل الممارسات</h3>
                  <p className="text-sm text-gray-600">89 مقال</p>
                </CardContent>
              </Card>

              <Card
                className="hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => {
                  router.push("/documents?category=videos")
                }}
              >
                <CardContent className="p-4 text-center">
                  <Video className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-1">مكتبة الفيديو</h3>
                  <p className="text-sm text-gray-600">234 فيديو</p>
                </CardContent>
              </Card>

              <Card
                className="hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => {
                  router.push("/documents?category=wiki")
                }}
              >
                <CardContent className="p-4 text-center">
                  <Globe className="h-8 w-8 text-amber-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-1">ويكي الشركة</h3>
                  <p className="text-sm text-gray-600">67 صفحة</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Knowledge Articles */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center">
                    <BookOpen className="h-5 w-5 ml-2" />
                    المقالات الأخيرة
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      toast({
                        title: "إضافة مقال",
                        description: "تم فتح نموذج إضافة مقال جديد",
                      })
                    }}
                  >
                    <Plus className="h-4 w-4 ml-1" />
                    إضافة مقال
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: "دليل العمل عن بُعد",
                      author: "أحمد محمد السعد",
                      category: "سياسات",
                      views: 245,
                      date: "2024-01-20",
                    },
                    {
                      title: "أفضل ممارسات الأمن السيبراني",
                      author: "فاطمة علي الأحمد",
                      category: "تقنية",
                      views: 189,
                      date: "2024-01-18",
                    },
                    {
                      title: "إدارة الوقت والإنتاجية",
                      author: "خالد أحمد العتيبي",
                      category: "تطوير ذاتي",
                      views: 167,
                      date: "2024-01-15",
                    },
                  ].map((article, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <h4 className="font-medium">{article.title}</h4>
                        <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                          <span>بواسطة: {article.author}</span>
                          <Badge variant="outline" className="text-xs">
                            {article.category}
                          </Badge>
                          <span>{article.views} مشاهدة</span>
                          <span>{new Date(article.date).toLocaleDateString("ar-SA")}</span>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          router.push(`/documents?article=${article.title.replace(/ /g, "-")}`)
                        }}
                      >
                        قراءة
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Learning Analytics */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="h-5 w-5 ml-2" />
                    تحليلات التعلم
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-900">معدل المشاركة</h4>
                      <p className="text-2xl font-bold text-blue-600">87%</p>
                      <p className="text-sm text-blue-700">من الموظفين نشطين في التعلم</p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-green-900">وقت التعلم الشهري</h4>
                      <p className="text-2xl font-bold text-green-600">12.5</p>
                      <p className="text-sm text-green-700">ساعة متوسط لكل موظف</p>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <h4 className="font-semibold text-purple-900">تحسن الأداء</h4>
                      <p className="text-2xl font-bold text-purple-600">+23%</p>
                      <p className="text-sm text-purple-700">بعد إكمال البرامج</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Popular Courses */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="h-5 w-5 ml-2" />
                    الدورات الأكثر شعبية
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { name: "أساسيات الذكاء الاصطناعي", enrolled: 89, rating: 4.8 },
                      { name: "مهارات القيادة الفعالة", enrolled: 67, rating: 4.9 },
                      { name: "الصحة النفسية في العمل", enrolled: 56, rating: 4.7 },
                      { name: "التسويق الرقمي المتقدم", enrolled: 45, rating: 4.6 },
                    ].map((course, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium text-sm">{course.name}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs text-gray-600">{course.enrolled} مشترك</span>
                            <div className="flex items-center gap-1">
                              <Star className="h-3 w-3 text-yellow-500 fill-current" />
                              <span className="text-xs">{course.rating}</span>
                            </div>
                          </div>
                        </div>
                        <Progress value={(course.enrolled / 100) * 100} className="w-16 h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Course Dialog */}
      <Dialog open={showCourseDialog} onOpenChange={setShowCourseDialog}>
        <DialogContent className="max-w-3xl rtl" dir="rtl">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">{selectedCourse?.title}</DialogTitle>
          </DialogHeader>
          {selectedCourse && (
            <div className="space-y-4">
              <div className="relative">
                <img
                  src={selectedCourse.thumbnail || "/placeholder.svg"}
                  alt={selectedCourse.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <Badge className="absolute top-2 right-2">{selectedCourse.category}</Badge>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-gray-500" />
                  <span>المدرب: {selectedCourse.instructor}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gray-500" />
                  <span>المدة: {selectedCourse.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span>التقييم: {selectedCourse.rating}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-gray-500" />
                  <span>المستوى: {selectedCourse.level}</span>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">وصف الدورة</h3>
                <p className="text-gray-600">{selectedCourse.description}</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">محتوى الدورة</h3>
                <div className="space-y-2">
                  {[
                    "مقدمة في الموضوع",
                    "المفاهيم الأساسية",
                    "التطبيقات العملية",
                    "دراسات حالة",
                    "التمارين والاختبارات",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 p-2 border rounded-lg">
                      <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs">
                        {i + 1}
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-4">
                <Button variant="outline" onClick={() => setShowCourseDialog(false)}>
                  <X className="h-4 w-4 ml-1" />
                  إغلاق
                </Button>
                <Button
                  onClick={() => {
                    setShowCourseDialog(false)
                    toast({
                      title: "تم بدء الدورة",
                      description: `تم بدء دورة ${selectedCourse.title} بنجاح`,
                    })
                  }}
                >
                  <Play className="h-4 w-4 ml-1" />
                  بدء الدورة
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
