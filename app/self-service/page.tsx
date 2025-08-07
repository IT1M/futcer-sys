"use client"

import { useState, useEffect, useTransition } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { toast } from "@/hooks/use-toast"
import { LeaveRequestForm } from "@/components/forms/leave-request-form"
import {
  User,
  Calendar,
  FileText,
  DollarSign,
  Clock,
  Download,
  Upload,
  Edit,
  Eye,
  Plus,
  CreditCard,
  Briefcase,
  GraduationCap,
  Settings,
  Phone,
  Mail,
  Users,
  Award,
  Target,
  TrendingUp,
  Send,
} from "lucide-react"

// Import server actions
import { getLeaveRequestsByEmployee, getLeaveBalance } from "@/actions/enhanced-leave-actions"
import { getEmployeeById } from "@/actions/enhanced-employee-actions"

export default function SelfServicePage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isPending, startTransition] = useTransition()

  // State management
  const [activeTab, setActiveTab] = useState("dashboard")
  const [showLeaveForm, setShowLeaveForm] = useState(false)
  const [showCertificateForm, setShowCertificateForm] = useState(false)
  const [showAdvanceForm, setShowAdvanceForm] = useState(false)
  const [employeeData, setEmployeeData] = useState<any>(null)
  const [leaveBalance, setLeaveBalance] = useState<any>(null)
  const [recentRequests, setRecentRequests] = useState<any[]>([])

  // Certificate form state
  const [certificateType, setCertificateType] = useState("")
  const [certificatePurpose, setCertificatePurpose] = useState("")
  const [additionalInfo, setAdditionalInfo] = useState("")

  // Advance form state
  const [advanceAmount, setAdvanceAmount] = useState("")
  const [advanceReason, setAdvanceReason] = useState("")
  const [repaymentPeriod, setRepaymentPeriod] = useState("")

  useEffect(() => {
    // Load employee data and leave requests
    loadEmployeeData()
    loadLeaveData()

    // Check URL parameters for tab switching
    const tab = searchParams.get("tab")
    const action = searchParams.get("action")

    if (tab) {
      setActiveTab(tab)
    }

    if (action === "new") {
      const type = searchParams.get("type")
      if (type === "leave") setShowLeaveForm(true)
      else if (type === "certificate") setShowCertificateForm(true)
      else if (type === "advance") setShowAdvanceForm(true)
    }
  }, [searchParams])

  const loadEmployeeData = async () => {
    try {
      // In real app, get current user ID from session/auth
      const currentUserId = "1"
      const result = await getEmployeeById(currentUserId)
      if (result.success) {
        setEmployeeData(result.data)
      }
    } catch (error) {
      console.error("Error loading employee data:", error)
    }
  }

  const loadLeaveData = async () => {
    try {
      const currentUserId = "1"
      const [balanceResult, requestsResult] = await Promise.all([
        getLeaveBalance(currentUserId),
        getLeaveRequestsByEmployee(currentUserId),
      ])

      if (balanceResult.success) {
        setLeaveBalance(balanceResult.data)
      }

      if (requestsResult.success) {
        setRecentRequests(requestsResult.data.slice(0, 5)) // Show latest 5
      }
    } catch (error) {
      console.error("Error loading leave data:", error)
    }
  }

  const handleQuickAction = (action: string) => {
    switch (action) {
      case "leave":
        setShowLeaveForm(true)
        break
      case "certificate":
        setShowCertificateForm(true)
        break
      case "payslip":
        router.push("/self-service?tab=payroll")
        break
      case "advance":
        setShowAdvanceForm(true)
        break
      case "documents":
        router.push("/documents")
        break
      case "settings":
        router.push("/settings")
        break
    }
  }

  const handleCertificateSubmit = async () => {
    if (!certificateType || !certificatePurpose) {
      toast({
        title: "خطأ في النموذج",
        description: "يرجى ملء جميع الحقول المطلوبة",
        variant: "destructive",
      })
      return
    }

    startTransition(async () => {
      try {
        // In real app, this would call a certificate request API
        await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate API call

        toast({
          title: "تم تقديم الطلب",
          description: "تم تقديم طلب الشهادة بنجاح وسيتم معالجته قريباً",
        })

        setShowCertificateForm(false)
        setCertificateType("")
        setCertificatePurpose("")
        setAdditionalInfo("")

        // Reload requests
        loadLeaveData()
      } catch (error) {
        toast({
          title: "خطأ",
          description: "حدث خطأ في تقديم الطلب",
          variant: "destructive",
        })
      }
    })
  }

  const handleAdvanceSubmit = async () => {
    if (!advanceAmount || !advanceReason || !repaymentPeriod) {
      toast({
        title: "خطأ في النموذج",
        description: "يرجى ملء جميع الحقول المطلوبة",
        variant: "destructive",
      })
      return
    }

    startTransition(async () => {
      try {
        // In real app, this would call an advance request API
        await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate API call

        toast({
          title: "تم تقديم الطلب",
          description: "تم تقديم طلب السلفة بنجاح وسيتم مراجعته",
        })

        setShowAdvanceForm(false)
        setAdvanceAmount("")
        setAdvanceReason("")
        setRepaymentPeriod("")

        // Reload requests
        loadLeaveData()
      } catch (error) {
        toast({
          title: "خطأ",
          description: "حدث خطأ في تقديم الطلب",
          variant: "destructive",
        })
      }
    })
  }

  const handleViewRequest = (request: any) => {
    // Navigate to appropriate section based on request type
    if (request.type && request.type.includes("إجازة")) {
      setActiveTab("leave")
    } else if (request.type === "طلب شهادة راتب") {
      setActiveTab("documents")
    } else {
      setActiveTab("requests")
    }
  }

  const handleDownloadPayslip = (month: string) => {
    toast({
      title: "جاري التحميل",
      description: `جاري تحميل كشف راتب ${month}`,
    })
    // In real app, this would download the actual payslip PDF
  }

  if (!employeeData) {
    return (
      <div
        className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 rtl flex items-center justify-center"
        dir="rtl"
      >
        <div className="text-center">
          <div className="animate-spin h-8 w-8 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-gray-600">جاري تحميل البيانات...</p>
        </div>
      </div>
    )
  }

  // Mock data for payslips and learning progress
  const payslips = [
    {
      month: "يناير 2024",
      basicSalary: 15000,
      allowances: 3000,
      deductions: 1800,
      netSalary: 16200,
      status: "متاح",
    },
    {
      month: "ديسمبر 2023",
      basicSalary: 15000,
      allowances: 3500,
      deductions: 1850,
      netSalary: 16650,
      status: "متاح",
    },
    {
      month: "نوفمبر 2023",
      basicSalary: 15000,
      allowances: 3000,
      deductions: 1800,
      netSalary: 16200,
      status: "متاح",
    },
  ]

  const learningProgress = [
    {
      course: "أساسيات الذكاء الاصطناعي",
      progress: 75,
      status: "قيد التنفيذ",
      dueDate: "2024-03-15",
    },
    {
      course: "مهارات القيادة الفعالة",
      progress: 100,
      status: "مكتمل",
      completedDate: "2024-01-20",
      certificate: true,
    },
    {
      course: "الأمن السيبراني",
      progress: 45,
      status: "قيد التنفيذ",
      dueDate: "2024-04-01",
    },
  ]

  const performanceGoals = [
    {
      title: "تطوير نظام إدارة المشاريع",
      progress: 85,
      status: "قيد التنفيذ",
      dueDate: "2024-03-31",
      priority: "عالي",
    },
    {
      title: "تدريب الفريق على التقنيات الجديدة",
      progress: 60,
      status: "قيد التنفيذ",
      dueDate: "2024-04-15",
      priority: "متوسط",
    },
    {
      title: "تحسين أداء النظام",
      progress: 100,
      status: "مكتمل",
      completedDate: "2024-01-15",
      priority: "عالي",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 rtl" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">بوابة الخدمة الذاتية</h1>
          <p className="text-gray-600">إدارة شؤونك الوظيفية بسهولة ويسر</p>
        </div>

        {/* Employee Profile Card */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center space-x-6 rtl:space-x-reverse">
              <Avatar className="h-24 w-24">
                <AvatarImage src={employeeData.avatar || "/placeholder.svg"} />
                <AvatarFallback className="text-2xl">
                  {employeeData.name.split(" ")[0][0]}
                  {employeeData.name.split(" ")[1]?.[0] || ""}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-2">{employeeData.name}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4 text-gray-500" />
                    <span>{employeeData.position}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-gray-500" />
                    <span>{employeeData.department}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-gray-500" />
                    <span>رقم الموظف: {employeeData.id}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-gray-500" />
                    <span>{employeeData.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-gray-500" />
                    <span>{employeeData.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-gray-500" />
                    <span>تاريخ التوظيف: {new Date(employeeData.joinDate).toLocaleDateString("ar-SA")}</span>
                  </div>
                </div>
              </div>
              <Button variant="outline" onClick={() => router.push("/profile")}>
                <Edit className="h-4 w-4 ml-2" />
                تحديث الملف الشخصي
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => handleQuickAction("leave")}>
            <CardContent className="p-4 text-center">
              <Calendar className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <p className="text-sm font-medium">طلب إجازة</p>
            </CardContent>
          </Card>

          <Card
            className="hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => handleQuickAction("certificate")}
          >
            <CardContent className="p-4 text-center">
              <FileText className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <p className="text-sm font-medium">طلب شهادة</p>
            </CardContent>
          </Card>

          <Card
            className="hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => handleQuickAction("payslip")}
          >
            <CardContent className="p-4 text-center">
              <DollarSign className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <p className="text-sm font-medium">كشف راتب</p>
            </CardContent>
          </Card>

          <Card
            className="hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => handleQuickAction("advance")}
          >
            <CardContent className="p-4 text-center">
              <CreditCard className="h-8 w-8 text-amber-600 mx-auto mb-2" />
              <p className="text-sm font-medium">طلب سلفة</p>
            </CardContent>
          </Card>

          <Card
            className="hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => handleQuickAction("documents")}
          >
            <CardContent className="p-4 text-center">
              <Upload className="h-8 w-8 text-red-600 mx-auto mb-2" />
              <p className="text-sm font-medium">رفع وثيقة</p>
            </CardContent>
          </Card>

          <Card
            className="hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => handleQuickAction("settings")}
          >
            <CardContent className="p-4 text-center">
              <Settings className="h-8 w-8 text-gray-600 mx-auto mb-2" />
              <p className="text-sm font-medium">الإعدادات</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6">
            <TabsTrigger value="dashboard">لوحة التحكم</TabsTrigger>
            <TabsTrigger value="leave">الإجازات</TabsTrigger>
            <TabsTrigger value="payroll">الرواتب</TabsTrigger>
            <TabsTrigger value="learning">التعلم</TabsTrigger>
            <TabsTrigger value="performance">الأداء</TabsTrigger>
            <TabsTrigger value="documents">الوثائق</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Leave Balance */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="h-5 w-5 ml-2" />
                    رصيد الإجازات
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {leaveBalance ? (
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm">الإجازة السنوية</span>
                          <span className="text-sm font-medium">
                            {leaveBalance.annualLeave.used}/{leaveBalance.annualLeave.total}
                          </span>
                        </div>
                        <Progress
                          value={(leaveBalance.annualLeave.used / leaveBalance.annualLeave.total) * 100}
                          className="h-2"
                        />
                        <p className="text-xs text-gray-600 mt-1">متبقي: {leaveBalance.annualLeave.remaining} يوم</p>
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm">الإجازة المرضية</span>
                          <span className="text-sm font-medium">
                            {leaveBalance.sickLeave.used}/{leaveBalance.sickLeave.total}
                          </span>
                        </div>
                        <Progress
                          value={(leaveBalance.sickLeave.used / leaveBalance.sickLeave.total) * 100}
                          className="h-2"
                        />
                        <p className="text-xs text-gray-600 mt-1">متبقي: {leaveBalance.sickLeave.remaining} يوم</p>
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm">الإجازة الطارئة</span>
                          <span className="text-sm font-medium">
                            {leaveBalance.emergencyLeave.used}/{leaveBalance.emergencyLeave.total}
                          </span>
                        </div>
                        <Progress
                          value={(leaveBalance.emergencyLeave.used / leaveBalance.emergencyLeave.total) * 100}
                          className="h-2"
                        />
                        <p className="text-xs text-gray-600 mt-1">متبقي: {leaveBalance.emergencyLeave.remaining} يوم</p>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-4">
                      <div className="animate-spin h-6 w-6 border-2 border-blue-600 border-t-transparent rounded-full mx-auto mb-2"></div>
                      <p className="text-sm text-gray-600">جاري تحميل رصيد الإجازات...</p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Recent Requests */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="h-5 w-5 ml-2" />
                    الطلبات الأخيرة
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {recentRequests.length > 0 ? (
                      recentRequests.slice(0, 3).map((request) => (
                        <div
                          key={request.id}
                          className="p-3 border rounded-lg cursor-pointer hover:bg-gray-50"
                          onClick={() => handleViewRequest(request)}
                        >
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-medium text-sm">{request.type}</h4>
                            <Badge
                              variant={
                                request.status === "معتمد"
                                  ? "default"
                                  : request.status === "مكتمل"
                                    ? "default"
                                    : request.status === "مرفوض"
                                      ? "destructive"
                                      : "secondary"
                              }
                              className="text-xs"
                            >
                              {request.status}
                            </Badge>
                          </div>
                          <p className="text-xs text-gray-600">
                            {request.reason || `${request.startDate} - ${request.endDate} (${request.days} أيام)`}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            تاريخ التقديم: {new Date(request.submittedDate).toLocaleDateString("ar-SA")}
                          </p>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-4">
                        <FileText className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                        <p className="text-sm text-gray-600">لا توجد طلبات حديثة</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="h-5 w-5 ml-2" />
                    إحصائيات سريعة
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                      <div>
                        <p className="text-sm font-medium">سنوات الخدمة</p>
                        <p className="text-2xl font-bold text-blue-600">
                          {(
                            (new Date().getTime() - new Date(employeeData.joinDate).getTime()) /
                            (1000 * 3600 * 24 * 365)
                          ).toFixed(1)}
                        </p>
                      </div>
                      <Award className="h-8 w-8 text-blue-600" />
                    </div>

                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <div>
                        <p className="text-sm font-medium">تقييم الأداء</p>
                        <p className="text-2xl font-bold text-green-600">{employeeData.performanceScore}/5</p>
                      </div>
                      <Target className="h-8 w-8 text-green-600" />
                    </div>

                    <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                      <div>
                        <p className="text-sm font-medium">الدورات المكتملة</p>
                        <p className="text-2xl font-bold text-purple-600">
                          {learningProgress.filter((course) => course.status === "مكتمل").length}
                        </p>
                      </div>
                      <GraduationCap className="h-8 w-8 text-purple-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="leave" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Leave Request Button */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center">
                      <Plus className="h-5 w-5 ml-2" />
                      طلب إجازة جديد
                    </span>
                    <Button onClick={() => setShowLeaveForm(true)}>
                      <Calendar className="h-4 w-4 ml-2" />
                      طلب إجازة
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <Calendar className="h-16 w-16 mx-auto text-blue-600 mb-4" />
                    <p className="text-gray-600 mb-4">انقر على الزر أعلاه لتقديم طلب إجازة جديد</p>
                    <p className="text-sm text-gray-500">سيتم مراجعة طلبك والرد عليك في أقرب وقت</p>
                  </div>
                </CardContent>
              </Card>

              {/* Leave History */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="h-5 w-5 ml-2" />
                    سجل الإجازات
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {recentRequests
                      .filter((req) => req.type && req.type.includes("إجازة"))
                      .map((request) => (
                        <div key={request.id} className="p-4 border rounded-lg">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h4 className="font-medium">{request.type}</h4>
                              <p className="text-sm text-gray-600">
                                {request.startDate} - {request.endDate}
                              </p>
                              <p className="text-sm text-gray-500">{request.days} أيام</p>
                            </div>
                            <Badge
                              variant={
                                request.status === "معتمد"
                                  ? "default"
                                  : request.status === "مرفوض"
                                    ? "destructive"
                                    : "secondary"
                              }
                            >
                              {request.status}
                            </Badge>
                          </div>
                          <div className="flex gap-2 mt-3">
                            <Button variant="ghost" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Download className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    {recentRequests.filter((req) => req.type && req.type.includes("إجازة")).length === 0 && (
                      <div className="text-center py-8">
                        <Calendar className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                        <p className="text-gray-600">لم تقدم أي طلبات إجازة بعد</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="payroll" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Current Month Payslip */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <DollarSign className="h-5 w-5 ml-2" />
                    كشف راتب {payslips[0].month}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-green-700">الاستحقاقات</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm">الراتب الأساسي</span>
                          <span className="font-medium">{payslips[0].basicSalary.toLocaleString()} ريال</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">البدلات</span>
                          <span className="font-medium">{payslips[0].allowances.toLocaleString()} ريال</span>
                        </div>
                        <div className="flex justify-between border-t pt-2">
                          <span className="font-medium">إجمالي الاستحقاقات</span>
                          <span className="font-bold text-green-600">
                            {(payslips[0].basicSalary + payslips[0].allowances).toLocaleString()} ريال
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-red-700">الاستقطاعات</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm">التأمينات الاجتماعية</span>
                          <span className="font-medium">1,500 ريال</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">ضريبة الدخل</span>
                          <span className="font-medium">300 ريال</span>
                        </div>
                        <div className="flex justify-between border-t pt-2">
                          <span className="font-medium">إجمالي الاستقطاعات</span>
                          <span className="font-bold text-red-600">{payslips[0].deductions.toLocaleString()} ريال</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold">صافي الراتب</span>
                      <span className="text-2xl font-bold text-blue-600">
                        {payslips[0].netSalary.toLocaleString()} ريال
                      </span>
                    </div>
                  </div>

                  <Button className="w-full mt-4" onClick={() => handleDownloadPayslip(payslips[0].month)}>
                    <Download className="h-4 w-4 ml-2" />
                    تحميل كشف الراتب
                  </Button>
                </CardContent>
              </Card>

              {/* Payslip History */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="h-5 w-5 ml-2" />
                    سجل كشوف الراتب
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {payslips.map((payslip, index) => (
                      <div key={index} className="p-3 border rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-medium">{payslip.month}</h4>
                          <Badge variant="default">{payslip.status}</Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">
                          صافي الراتب: {payslip.netSalary.toLocaleString()} ريال
                        </p>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full bg-transparent"
                          onClick={() => handleDownloadPayslip(payslip.month)}
                        >
                          <Download className="h-4 w-4 ml-1" />
                          تحميل
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="learning" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Learning Progress */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <GraduationCap className="h-5 w-5 ml-2" />
                    تقدم التعلم
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {learningProgress.map((course, index) => (
                      <div key={index} className="p-4 border rounded-lg">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h4 className="font-medium">{course.course}</h4>
                            <p className="text-sm text-gray-600">
                              {course.status === "مكتمل"
                                ? `مكتمل في: ${new Date(course.completedDate).toLocaleDateString("ar-SA")}`
                                : `موعد الانتهاء: ${new Date(course.dueDate).toLocaleDateString("ar-SA")}`}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant={course.status === "مكتمل" ? "default" : "secondary"}>{course.status}</Badge>
                            {course.certificate && <Award className="h-4 w-4 text-yellow-500" />}
                          </div>
                        </div>
                        <div className="mb-2">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm text-gray-600">التقدم</span>
                            <span className="text-sm font-medium">{course.progress}%</span>
                          </div>
                          <Progress value={course.progress} className="h-2" />
                        </div>
                        {course.status !== "مكتمل" && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full bg-transparent"
                            onClick={() => router.push("/learning")}
                          >
                            متابعة التعلم
                          </Button>
                        )}
                        {course.certificate && (
                          <Button variant="outline" size="sm" className="w-full mt-2 bg-transparent">
                            <Download className="h-4 w-4 ml-1" />
                            تحميل الشهادة
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recommended Courses */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="h-5 w-5 ml-2" />
                    دورات موصى بها
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        title: "إدارة المشاريع المتقدمة",
                        duration: "20 ساعة",
                        level: "متقدم",
                        rating: 4.8,
                      },
                      {
                        title: "تحليل البيانات باستخدام Python",
                        duration: "15 ساعة",
                        level: "متوسط",
                        rating: 4.7,
                      },
                      {
                        title: "مهارات التواصل الفعال",
                        duration: "8 ساعات",
                        level: "مبتدئ",
                        rating: 4.9,
                      },
                    ].map((course, index) => (
                      <div key={index} className="p-4 border rounded-lg">
                        <h4 className="font-medium mb-2">{course.title}</h4>
                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {course.duration}
                          </span>
                          <Badge variant="outline" className="text-xs">
                            {course.level}
                          </Badge>
                          <span className="flex items-center gap-1">
                            <Award className="h-3 w-3 text-yellow-500" />
                            {course.rating}
                          </span>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full bg-transparent"
                          onClick={() => router.push("/learning")}
                        >
                          التسجيل في الدورة
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="performance" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Performance Goals */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="h-5 w-5 ml-2" />
                    أهداف الأداء
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {performanceGoals.map((goal, index) => (
                      <div key={index} className="p-4 border rounded-lg">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h4 className="font-medium">{goal.title}</h4>
                            <p className="text-sm text-gray-600">
                              {goal.status === "مكتمل"
                                ? `مكتمل في: ${new Date(goal.completedDate).toLocaleDateString("ar-SA")}`
                                : `موعد الانتهاء: ${new Date(goal.dueDate).toLocaleDateString("ar-SA")}`}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge
                              variant={
                                goal.priority === "عالي"
                                  ? "destructive"
                                  : goal.priority === "متوسط"
                                    ? "default"
                                    : "secondary"
                              }
                              className="text-xs"
                            >
                              {goal.priority}
                            </Badge>
                            <Badge variant={goal.status === "مكتمل" ? "default" : "secondary"}>{goal.status}</Badge>
                          </div>
                        </div>
                        <div className="mb-2">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm text-gray-600">التقدم</span>
                            <span className="text-sm font-medium">{goal.progress}%</span>
                          </div>
                          <Progress value={goal.progress} className="h-2" />
                        </div>
                        {goal.status !== "مكتمل" && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full bg-transparent"
                            onClick={() => router.push("/performance")}
                          >
                            تحديث التقدم
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Performance Summary */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="h-5 w-5 ml-2" />
                    ملخص الأداء
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-green-900 mb-2">التقييم العام</h4>
                      <div className="flex items-center gap-2">
                        <span className="text-3xl font-bold text-green-600">{employeeData.performanceScore}</span>
                        <span className="text-green-700">من 5</span>
                      </div>
                      <p className="text-sm text-green-700 mt-1">أداء ممتاز - استمر على هذا المستوى</p>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold">الكفاءات الأساسية</h4>
                      {[
                        { name: "المهارات التقنية", score: 4.8 },
                        { name: "التواصل", score: 4.2 },
                        { name: "القيادة", score: 4.0 },
                        { name: "حل المشكلات", score: 4.7 },
                        { name: "العمل الجماعي", score: 4.3 },
                      ].map((competency, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span className="text-sm">{competency.name}</span>
                          <div className="flex items-center gap-2">
                            <Progress value={competency.score * 20} className="w-20 h-2" />
                            <span className="text-sm font-medium">{competency.score}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <Button className="w-full" onClick={() => router.push("/performance")}>
                      <Eye className="h-4 w-4 ml-2" />
                      عرض التقييم الكامل
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="documents" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Document Requests */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center">
                      <Plus className="h-5 w-5 ml-2" />
                      طلب وثيقة جديدة
                    </span>
                    <Button onClick={() => setShowCertificateForm(true)}>
                      <FileText className="h-4 w-4 ml-2" />
                      طلب شهادة
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <FileText className="h-16 w-16 mx-auto text-green-600 mb-4" />
                    <p className="text-gray-600 mb-4">انقر على الزر أعلاه لطلب شهادة أو وثيقة جديدة</p>
                    <p className="text-sm text-gray-500">
                      يمكنك طلب شهادات الراتب، شهادات العمل، وغيرها من الوثائق الرسمية
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* My Documents */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="h-5 w-5 ml-2" />
                    وثائقي
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      {
                        name: "شهادة راتب - يناير 2024",
                        type: "PDF",
                        size: "245 KB",
                        date: "2024-01-25",
                        status: "جاهز",
                      },
                      {
                        name: "شهادة عمل",
                        type: "PDF",
                        size: "189 KB",
                        date: "2024-01-15",
                        status: "جاهز",
                      },
                      {
                        name: "خطاب للبنك",
                        type: "PDF",
                        size: "156 KB",
                        date: "2024-01-10",
                        status: "قيد المراجعة",
                      },
                    ].map((doc, index) => (
                      <div key={index} className="p-3 border rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="font-medium text-sm">{doc.name}</h4>
                            <p className="text-xs text-gray-600">
                              {doc.type} • {doc.size} • {new Date(doc.date).toLocaleDateString("ar-SA")}
                            </p>
                          </div>
                          <Badge variant={doc.status === "جاهز" ? "default" : "secondary"} className="text-xs">
                            {doc.status}
                          </Badge>
                        </div>
                        {doc.status === "جاهز" && (
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                              <Eye className="h-4 w-4 ml-1" />
                              عرض
                            </Button>
                            <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                              <Download className="h-4 w-4 ml-1" />
                              تحميل
                            </Button>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Leave Request Dialog */}
      <Dialog open={showLeaveForm} onOpenChange={setShowLeaveForm}>
        <DialogContent className="max-w-4xl rtl" dir="rtl">
          <LeaveRequestForm
            onSuccess={() => {
              setShowLeaveForm(false)
              loadLeaveData() // Refresh data
            }}
            onCancel={() => setShowLeaveForm(false)}
          />
        </DialogContent>
      </Dialog>

      {/* Certificate Request Dialog */}
      <Dialog open={showCertificateForm} onOpenChange={setShowCertificateForm}>
        <DialogContent className="rtl" dir="rtl">
          <DialogHeader>
            <DialogTitle>طلب شهادة جديدة</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">نوع الشهادة</label>
              <Select value={certificateType} onValueChange={setCertificateType}>
                <SelectTrigger>
                  <SelectValue placeholder="اختر نوع الشهادة" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="salary-certificate">شهادة راتب</SelectItem>
                  <SelectItem value="employment-certificate">شهادة عمل</SelectItem>
                  <SelectItem value="experience-certificate">شهادة خبرة</SelectItem>
                  <SelectItem value="no-objection">خطاب عدم ممانعة</SelectItem>
                  <SelectItem value="bank-letter">خطاب للبنك</SelectItem>
                  <SelectItem value="address-certificate">شهادة عنوان</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">الغرض من الشهادة</label>
              <Textarea
                placeholder="اكتب الغرض من طلب الشهادة..."
                rows={3}
                value={certificatePurpose}
                onChange={(e) => setCertificatePurpose(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">معلومات إضافية (اختياري)</label>
              <Input
                placeholder="أي معلومات إضافية مطلوبة..."
                value={additionalInfo}
                onChange={(e) => setAdditionalInfo(e.target.value)}
              />
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setShowCertificateForm(false)}>
              إلغاء
            </Button>
            <Button onClick={handleCertificateSubmit} disabled={isPending}>
              {isPending ? (
                <span className="flex items-center gap-2">
                  <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                  جاري التقديم...
                </span>
              ) : (
                <>
                  <Send className="h-4 w-4 ml-2" />
                  تقديم الطلب
                </>
              )}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Advance Request Dialog */}
      <Dialog open={showAdvanceForm} onOpenChange={setShowAdvanceForm}>
        <DialogContent className="rtl" dir="rtl">
          <DialogHeader>
            <DialogTitle>طلب سلفة</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">المبلغ المطلوب (ريال)</label>
              <Input
                type="number"
                placeholder="أدخل المبلغ"
                value={advanceAmount}
                onChange={(e) => setAdvanceAmount(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">سبب طلب السلفة</label>
              <Textarea
                placeholder="اكتب سبب طلب السلفة بالتفصيل..."
                rows={3}
                value={advanceReason}
                onChange={(e) => setAdvanceReason(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">فترة السداد</label>
              <Select value={repaymentPeriod} onValueChange={setRepaymentPeriod}>
                <SelectTrigger>
                  <SelectValue placeholder="اختر فترة السداد" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="3">3 أشهر</SelectItem>
                  <SelectItem value="6">6 أشهر</SelectItem>
                  <SelectItem value="12">12 شهر</SelectItem>
                  <SelectItem value="24">24 شهر</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setShowAdvanceForm(false)}>
              إلغاء
            </Button>
            <Button onClick={handleAdvanceSubmit} disabled={isPending}>
              {isPending ? (
                <span className="flex items-center gap-2">
                  <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                  جاري التقديم...
                </span>
              ) : (
                <>
                  <Send className="h-4 w-4 ml-2" />
                  تقديم الطلب
                </>
              )}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
