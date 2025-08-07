"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  HelpCircle,
  Search,
  Book,
  Video,
  MessageSquare,
  Phone,
  Mail,
  FileText,
  ExternalLink,
  ChevronRight,
  Star,
  ThumbsUp,
  ThumbsDown,
  Send,
  Clock,
  Users,
  Headphones,
  Smartphone,
  Zap,
  Shield,
  BarChart3,
  DollarSign,
  Brain,
  Bot,
  Upload,
  Eye,
} from "lucide-react"

export default function HelpPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [ticketSubject, setTicketSubject] = useState("")
  const [ticketMessage, setTicketMessage] = useState("")

  const helpCategories = [
    {
      id: "getting-started",
      name: "البدء السريع",
      icon: Zap,
      color: "bg-blue-500",
      articles: 12,
      description: "تعلم أساسيات استخدام النظام",
    },
    {
      id: "employees",
      name: "إدارة الموظفين",
      icon: Users,
      color: "bg-green-500",
      articles: 18,
      description: "كيفية إدارة بيانات الموظفين",
    },
    {
      id: "payroll",
      name: "الرواتب والمزايا",
      icon: DollarSign,
      color: "bg-purple-500",
      articles: 15,
      description: "إدارة الرواتب والمزايا",
    },
    {
      id: "reports",
      name: "التقارير",
      icon: BarChart3,
      color: "bg-amber-500",
      articles: 10,
      description: "إنتاج وتخصيص التقارير",
    },
    {
      id: "security",
      name: "الأمان والخصوصية",
      icon: Shield,
      color: "bg-red-500",
      articles: 8,
      description: "إعدادات الأمان وحماية البيانات",
    },
    {
      id: "mobile",
      name: "التطبيق المحمول",
      icon: Smartphone,
      color: "bg-indigo-500",
      articles: 6,
      description: "استخدام التطبيق على الأجهزة المحمولة",
    },
  ]

  const popularArticles = [
    {
      id: 1,
      title: "كيفية إضافة موظف جديد",
      category: "إدارة الموظفين",
      views: 1245,
      rating: 4.8,
      lastUpdated: "2024-01-20",
      readTime: "5 دقائق",
    },
    {
      id: 2,
      title: "إعداد الرواتب الشهرية",
      category: "الرواتب والمزايا",
      views: 987,
      rating: 4.9,
      lastUpdated: "2024-01-18",
      readTime: "8 دقائق",
    },
    {
      id: 3,
      title: "إنتاج تقرير الحضور والانصراف",
      category: "التقارير",
      views: 756,
      rating: 4.7,
      lastUpdated: "2024-01-15",
      readTime: "6 دقائق",
    },
    {
      id: 4,
      title: "تفعيل المصادقة الثنائية",
      category: "الأمان والخصوصية",
      views: 654,
      rating: 4.6,
      lastUpdated: "2024-01-12",
      readTime: "4 دقائق",
    },
    {
      id: 5,
      title: "استخدام التطبيق المحمول",
      category: "التطبيق المحمول",
      views: 543,
      rating: 4.5,
      lastUpdated: "2024-01-10",
      readTime: "7 دقائق",
    },
  ]

  const videoTutorials = [
    {
      id: 1,
      title: "جولة شاملة في النظام",
      duration: "15:30",
      views: 2156,
      thumbnail: "/placeholder.svg?height=120&width=200",
      category: "البدء السريع",
    },
    {
      id: 2,
      title: "إدارة الموظفين خطوة بخطوة",
      duration: "12:45",
      views: 1876,
      thumbnail: "/placeholder.svg?height=120&width=200",
      category: "إدارة الموظفين",
    },
    {
      id: 3,
      title: "معالجة الرواتب الشهرية",
      duration: "18:20",
      views: 1543,
      thumbnail: "/placeholder.svg?height=120&width=200",
      category: "الرواتب والمزايا",
    },
    {
      id: 4,
      title: "إنشاء التقارير المخصصة",
      duration: "10:15",
      views: 1234,
      thumbnail: "/placeholder.svg?height=120&width=200",
      category: "التقارير",
    },
  ]

  const supportTickets = [
    {
      id: "TK-2024-001",
      subject: "مشكلة في تسجيل الحضور",
      status: "مفتوح",
      priority: "عالي",
      created: "2024-01-25",
      lastUpdate: "2024-01-25",
      assignedTo: "فريق الدعم التقني",
    },
    {
      id: "TK-2024-002",
      subject: "طلب تدريب على النظام",
      status: "قيد المعالجة",
      priority: "متوسط",
      created: "2024-01-24",
      lastUpdate: "2024-01-25",
      assignedTo: "فريق التدريب",
    },
    {
      id: "TK-2024-003",
      subject: "استفسار حول التقارير",
      status: "مغلق",
      priority: "منخفض",
      created: "2024-01-22",
      lastUpdate: "2024-01-23",
      assignedTo: "فريق الدعم",
    },
  ]

  const faqItems = [
    {
      question: "كيف يمكنني إعادة تعيين كلمة المرور؟",
      answer:
        "يمكنك إعادة تعيين كلمة المرور من خلال النقر على 'نسيت كلمة المرور' في صفحة تسجيل الدخول، ثم اتباع التعليمات المرسلة إلى بريدك الإلكتروني.",
      category: "الحساب والأمان",
      helpful: 45,
      notHelpful: 3,
    },
    {
      question: "كيف أضيف موظف جديد؟",
      answer: "انتقل إلى قسم 'الموظفين' ثم انقر على 'موظف جديد'. املأ جميع البيانات المطلوبة واحفظ التغييرات.",
      category: "إدارة الموظفين",
      helpful: 67,
      notHelpful: 2,
    },
    {
      question: "كيف يمكنني إنتاج تقرير الرواتب؟",
      answer:
        "اذهب إلى قسم 'التقارير' واختر 'تقرير الرواتب'. حدد الفترة الزمنية والمعايير المطلوبة ثم انقر على 'إنتاج التقرير'.",
      category: "التقارير",
      helpful: 52,
      notHelpful: 1,
    },
    {
      question: "هل يمكنني الوصول للنظام من الهاتف المحمول؟",
      answer: "نعم، يمكنك تحميل التطبيق المحمول من متجر التطبيقات أو استخدام المتصفح على هاتفك للوصول للنظام.",
      category: "التطبيق المحمول",
      helpful: 38,
      notHelpful: 5,
    },
  ]

  const contactOptions = [
    {
      type: "الهاتف",
      icon: Phone,
      value: "+966 11 123 4567",
      description: "الدعم الفوري - متاح 24/7",
      color: "bg-green-500",
    },
    {
      type: "البريد الإلكتروني",
      icon: Mail,
      value: "support@hrms.com",
      description: "الرد خلال 24 ساعة",
      color: "bg-blue-500",
    },
    {
      type: "الدردشة المباشرة",
      icon: MessageSquare,
      value: "ابدأ المحادثة",
      description: "متاح من 8 ص إلى 6 م",
      color: "bg-purple-500",
    },
    {
      type: "المساعد الذكي",
      icon: Bot,
      value: "اسأل الذكاء الاصطناعي",
      description: "إجابات فورية بالذكاء الاصطناعي",
      color: "bg-amber-500",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 rtl" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">مركز المساعدة والدعم</h1>
          <p className="text-gray-600">احصل على المساعدة التي تحتاجها لاستخدام النظام بكفاءة</p>
        </div>

        {/* Search Bar */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="relative">
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="ابحث عن المساعدة... (مثل: كيفية إضافة موظف)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pr-12 py-3 text-lg"
              />
            </div>
          </CardContent>
        </Card>

        {/* AI Assistant */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Brain className="h-5 w-5 ml-2" />
              المساعد الذكي - Gemini
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border-r-4 border-purple-500">
              <div className="flex items-start gap-3">
                <Bot className="h-6 w-6 text-purple-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-purple-900 mb-2">مرحباً! كيف يمكنني مساعدتك اليوم؟</h4>
                  <p className="text-purple-700 text-sm mb-3">
                    يمكنني مساعدتك في العثور على المعلومات، شرح الميزات، أو حل المشاكل التقنية.
                  </p>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="bg-white">
                      كيف أضيف موظف جديد؟
                    </Button>
                    <Button size="sm" variant="outline" className="bg-white">
                      مشكلة في الرواتب
                    </Button>
                    <Button size="sm" variant="outline" className="bg-white">
                      كيفية إنتاج التقارير
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Content */}
        <Tabs defaultValue="categories" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5">
            <TabsTrigger value="categories">الفئات</TabsTrigger>
            <TabsTrigger value="articles">المقالات</TabsTrigger>
            <TabsTrigger value="videos">الفيديوهات</TabsTrigger>
            <TabsTrigger value="faq">الأسئلة الشائعة</TabsTrigger>
            <TabsTrigger value="support">الدعم التقني</TabsTrigger>
          </TabsList>

          <TabsContent value="categories" className="space-y-6">
            {/* Help Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {helpCategories.map((category) => {
                const IconComponent = category.icon
                return (
                  <Card key={category.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className={`p-3 rounded-lg ${category.color} mr-4`}>
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{category.name}</h3>
                          <p className="text-sm text-gray-600">{category.articles} مقال</p>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                      <Button variant="outline" className="w-full bg-transparent">
                        <ChevronRight className="h-4 w-4 ml-2" />
                        استكشاف المقالات
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Quick Contact */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Headphones className="h-5 w-5 ml-2" />
                  تواصل معنا
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {contactOptions.map((option, index) => {
                    const IconComponent = option.icon
                    return (
                      <div
                        key={index}
                        className="p-4 border rounded-lg hover:shadow-md transition-shadow cursor-pointer"
                      >
                        <div className="flex items-center mb-3">
                          <div className={`p-2 rounded-lg ${option.color} mr-3`}>
                            <IconComponent className="h-5 w-5 text-white" />
                          </div>
                          <h4 className="font-semibold">{option.type}</h4>
                        </div>
                        <p className="font-medium text-blue-600 mb-1">{option.value}</p>
                        <p className="text-sm text-gray-600">{option.description}</p>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="articles" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">المقالات الشائعة</h2>
              <Button variant="outline">
                <Book className="h-4 w-4 ml-2" />
                عرض جميع المقالات
              </Button>
            </div>

            <div className="space-y-4">
              {popularArticles.map((article) => (
                <Card key={article.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{article.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <Badge variant="outline">{article.category}</Badge>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {article.readTime}
                          </span>
                          <span>{article.views} مشاهدة</span>
                          <span>آخر تحديث: {new Date(article.lastUpdated).toLocaleDateString("ar-SA")}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium">{article.rating}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm">
                        <Book className="h-4 w-4 ml-1" />
                        قراءة المقال
                      </Button>
                      <Button size="sm" variant="outline">
                        <ExternalLink className="h-4 w-4 ml-1" />
                        مشاركة
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="videos" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">الفيديوهات التعليمية</h2>
              <Button variant="outline">
                <Video className="h-4 w-4 ml-2" />
                عرض جميع الفيديوهات
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videoTutorials.map((video) => (
                <Card key={video.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="relative">
                    <img
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.title}
                      className="w-full h-32 object-cover rounded-t-lg"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                        <Video className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-xs">
                      {video.duration}
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">{video.title}</h3>
                    <div className="flex justify-between items-center text-sm text-gray-600">
                      <Badge variant="outline">{video.category}</Badge>
                      <span>{video.views} مشاهدة</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="faq" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">الأسئلة الشائعة</h2>
              <Button variant="outline">
                <HelpCircle className="h-4 w-4 ml-2" />
                اقتراح سؤال جديد
              </Button>
            </div>

            <div className="space-y-4">
              {faqItems.map((faq, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t">
                      <Badge variant="outline">{faq.category}</Badge>
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-600">هل كان هذا مفيداً؟</span>
                        <div className="flex items-center gap-2">
                          <Button size="sm" variant="ghost" className="flex items-center gap-1">
                            <ThumbsUp className="h-4 w-4" />
                            <span className="text-xs">{faq.helpful}</span>
                          </Button>
                          <Button size="sm" variant="ghost" className="flex items-center gap-1">
                            <ThumbsDown className="h-4 w-4" />
                            <span className="text-xs">{faq.notHelpful}</span>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="support" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Create Support Ticket */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MessageSquare className="h-5 w-5 ml-2" />
                    إنشاء تذكرة دعم جديدة
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">موضوع المشكلة</label>
                    <Input
                      placeholder="اكتب موضوع المشكلة..."
                      value={ticketSubject}
                      onChange={(e) => setTicketSubject(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">نوع المشكلة</label>
                    <select className="w-full p-2 border rounded-lg">
                      <option>اختر نوع المشكلة</option>
                      <option>مشكلة تقنية</option>
                      <option>طلب تدريب</option>
                      <option>استفسار عام</option>
                      <option>طلب ميزة جديدة</option>
                      <option>مشكلة في البيانات</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">الأولوية</label>
                    <select className="w-full p-2 border rounded-lg">
                      <option>متوسط</option>
                      <option>منخفض</option>
                      <option>عالي</option>
                      <option>عاجل</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">وصف المشكلة</label>
                    <Textarea
                      placeholder="اشرح المشكلة بالتفصيل..."
                      rows={4}
                      value={ticketMessage}
                      onChange={(e) => setTicketMessage(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">إرفاق ملفات (اختياري)</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                      <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">اسحب الملفات هنا أو انقر للتحميل</p>
                    </div>
                  </div>
                  <Button className="w-full">
                    <Send className="h-4 w-4 ml-2" />
                    إرسال التذكرة
                  </Button>
                </CardContent>
              </Card>

              {/* My Support Tickets */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="h-5 w-5 ml-2" />
                    تذاكر الدعم الخاصة بي
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {supportTickets.map((ticket) => (
                      <div key={ticket.id} className="p-4 border rounded-lg">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h4 className="font-semibold">{ticket.subject}</h4>
                            <p className="text-sm text-gray-600">#{ticket.id}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge
                              variant={
                                ticket.status === "مفتوح"
                                  ? "destructive"
                                  : ticket.status === "قيد المعالجة"
                                    ? "default"
                                    : "secondary"
                              }
                              className="text-xs"
                            >
                              {ticket.status}
                            </Badge>
                            <Badge
                              variant={
                                ticket.priority === "عاجل"
                                  ? "destructive"
                                  : ticket.priority === "عالي"
                                    ? "default"
                                    : "outline"
                              }
                              className="text-xs"
                            >
                              {ticket.priority}
                            </Badge>
                          </div>
                        </div>
                        <div className="text-sm text-gray-600 space-y-1">
                          <p>تاريخ الإنشاء: {new Date(ticket.created).toLocaleDateString("ar-SA")}</p>
                          <p>آخر تحديث: {new Date(ticket.lastUpdate).toLocaleDateString("ar-SA")}</p>
                          <p>مُسند إلى: {ticket.assignedTo}</p>
                        </div>
                        <Button size="sm" variant="outline" className="mt-3 bg-transparent">
                          <Eye className="h-4 w-4 ml-1" />
                          عرض التفاصيل
                        </Button>
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
