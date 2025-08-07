"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { toast } from "@/components/ui/use-toast"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  GraduationCap,
  Edit,
  Plus,
  ArrowLeft,
  Save,
  X,
  Shield,
  Bell,
  Settings,
  FileText,
  Calendar,
  Clock,
  CheckCircle,
  Award,
  Upload,
} from "lucide-react"

export default function ProfilePage() {
  const router = useRouter()
  const [isEditing, setIsEditing] = useState(false)
  const [activeTab, setActiveTab] = useState("personal")
  const [showCertificateDialog, setShowCertificateDialog] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const personalInfo = {
    name: "أحمد محمد السعد",
    email: "ahmed.saad@example.com",
    phone: "+966 50 123 4567",
    birthDate: "15/03/1985",
    address: "شارع الملك فهد، حي النرجس، الرياض، المملكة العربية السعودية",
    avatar: "/male-avatar.png",
    position: "مدير التسويق",
    status: "نشط",
  }

  const employmentInfo = {
    department: "التسويق",
    position: "مدير التسويق",
    joinDate: "01/09/2010",
    salary: "15,000 ريال سعودي",
    employeeId: "HRM-00123",
    manager: "خالد أحمد العتيبي",
    workLocation: "المقر الرئيسي - الرياض",
    workSchedule: "8:00 ص - 4:00 م",
  }

  const educationInfo = [
    {
      id: 1,
      degree: "بكالوريوس إدارة الأعمال",
      institution: "جامعة الملك سعود",
      year: "2007",
      description: "تخصص في التسويق والإدارة الاستراتيجية",
    },
    {
      id: 2,
      degree: "شهادة محترف تسويق رقمي",
      institution: "Google Digital Garage",
      year: "2018",
      description: "شهادة معتمدة في التسويق الرقمي والإعلانات عبر الإنترنت",
    },
  ]

  const recentActivities = [
    {
      id: 1,
      type: "إجازة",
      title: "طلب إجازة سنوية",
      date: "2024-01-20",
      status: "تمت الموافقة",
    },
    {
      id: 2,
      type: "تدريب",
      title: "إكمال دورة القيادة الفعالة",
      date: "2024-01-15",
      status: "مكتمل",
    },
    {
      id: 3,
      type: "تقييم",
      title: "تقييم الأداء الربع سنوي",
      date: "2024-01-10",
      status: "مكتمل",
    },
    {
      id: 4,
      type: "مستند",
      title: "تحديث بيانات الهوية",
      date: "2024-01-05",
      status: "مكتمل",
    },
  ]

  const handleEditProfile = () => {
    setIsEditing(true)
  }

  const handleSaveProfile = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setIsEditing(false)
      toast({
        title: "تم الحفظ",
        description: "تم حفظ التغييرات بنجاح",
      })
    }, 1500)
  }

  const handleCancelEdit = () => {
    setIsEditing(false)
    toast({
      title: "تم الإلغاء",
      description: "تم إلغاء التعديلات",
      variant: "destructive",
    })
  }

  const handleAddEducation = () => {
    setShowCertificateDialog(true)
  }

  const handleSaveCertificate = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setShowCertificateDialog(false)
      toast({
        title: "تمت الإضافة",
        description: "تم إضافة الشهادة بنجاح",
      })
    }, 1500)
  }

  const handleViewActivity = (activity: any) => {
    if (activity.type === "إجازة") {
      router.push("/self-service?tab=leaves")
    } else if (activity.type === "تدريب") {
      router.push("/learning")
    } else if (activity.type === "تقييم") {
      router.push("/performance")
    } else if (activity.type === "مستند") {
      router.push("/documents")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 rtl" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-900">الملف الشخصي</h1>
          <Button variant="outline" onClick={() => router.push("/")} className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            العودة للرئيسية
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Summary Card */}
          <Card className="lg:col-span-1">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <Avatar className="h-24 w-24 mb-4">
                <AvatarImage src={personalInfo.avatar || "/placeholder.svg"} />
                <AvatarFallback>أح</AvatarFallback>
              </Avatar>
              <h2 className="text-2xl font-bold text-gray-900">{personalInfo.name}</h2>
              <p className="text-gray-600 mb-2">{personalInfo.position}</p>
              <Badge variant="default" className="mb-4">
                {personalInfo.status}
              </Badge>
              {!isEditing ? (
                <Button variant="outline" className="w-full bg-transparent" onClick={handleEditProfile}>
                  <Edit className="h-4 w-4 ml-2" />
                  تعديل الملف الشخصي
                </Button>
              ) : (
                <div className="flex gap-2 w-full">
                  <Button variant="outline" className="flex-1 bg-transparent" onClick={handleCancelEdit}>
                    <X className="h-4 w-4 ml-1" />
                    إلغاء
                  </Button>
                  <Button className="flex-1" onClick={handleSaveProfile} disabled={isLoading}>
                    {isLoading ? (
                      <span className="flex items-center gap-2">
                        <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                        جاري الحفظ...
                      </span>
                    ) : (
                      <>
                        <Save className="h-4 w-4 ml-1" />
                        حفظ
                      </>
                    )}
                  </Button>
                </div>
              )}

              <div className="w-full mt-6 space-y-2">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-gray-700"
                  onClick={() => router.push("/settings?tab=security")}
                >
                  <Shield className="h-4 w-4 ml-2" />
                  إعدادات الأمان
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-gray-700"
                  onClick={() => router.push("/notifications")}
                >
                  <Bell className="h-4 w-4 ml-2" />
                  الإشعارات
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-gray-700"
                  onClick={() => router.push("/settings")}
                >
                  <Settings className="h-4 w-4 ml-2" />
                  الإعدادات
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Main Content */}
          <Card className="lg:col-span-2">
            <CardContent className="p-6">
              <Tabs defaultValue="personal" value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="personal">المعلومات الشخصية</TabsTrigger>
                  <TabsTrigger value="employment">معلومات التوظيف</TabsTrigger>
                  <TabsTrigger value="education">التعليم والشهادات</TabsTrigger>
                </TabsList>

                <TabsContent value="personal" className="mt-6 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">الاسم الكامل</label>
                      <Input
                        type="text"
                        defaultValue={personalInfo.name}
                        disabled={!isEditing}
                        className={isEditing ? "bg-white" : ""}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">البريد الإلكتروني</label>
                      <Input
                        type="email"
                        defaultValue={personalInfo.email}
                        disabled={!isEditing}
                        className={isEditing ? "bg-white" : ""}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">رقم الهاتف</label>
                      <Input
                        type="text"
                        defaultValue={personalInfo.phone}
                        disabled={!isEditing}
                        className={isEditing ? "bg-white" : ""}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">تاريخ الميلاد</label>
                      <Input
                        type="text"
                        defaultValue={personalInfo.birthDate}
                        disabled={!isEditing}
                        className={isEditing ? "bg-white" : ""}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">العنوان</label>
                    <Textarea
                      defaultValue={personalInfo.address}
                      disabled={!isEditing}
                      className={isEditing ? "bg-white" : ""}
                    />
                  </div>
                  {isEditing && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">تغيير الصورة الشخصية</label>
                      <div className="flex items-center gap-4">
                        <Avatar className="h-16 w-16">
                          <AvatarImage src={personalInfo.avatar || "/placeholder.svg"} />
                          <AvatarFallback>أح</AvatarFallback>
                        </Avatar>
                        <Button variant="outline" className="gap-2 bg-transparent">
                          <Upload className="h-4 w-4" />
                          رفع صورة
                        </Button>
                      </div>
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="employment" className="mt-6 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">القسم</label>
                      <Input type="text" defaultValue={employmentInfo.department} disabled />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">المسمى الوظيفي</label>
                      <Input type="text" defaultValue={employmentInfo.position} disabled />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">تاريخ الانضمام</label>
                      <Input type="text" defaultValue={employmentInfo.joinDate} disabled />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">الراتب الأساسي</label>
                      <Input type="text" defaultValue={employmentInfo.salary} disabled />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">رقم الموظف</label>
                      <Input type="text" defaultValue={employmentInfo.employeeId} disabled />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">المدير المباشر</label>
                      <Input type="text" defaultValue={employmentInfo.manager} disabled />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">موقع العمل</label>
                      <Input type="text" defaultValue={employmentInfo.workLocation} disabled />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">جدول العمل</label>
                      <Input type="text" defaultValue={employmentInfo.workSchedule} disabled />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="education" className="mt-6 space-y-4">
                  {educationInfo.map((education) => (
                    <div key={education.id} className="border p-4 rounded-lg">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-semibold">{education.degree}</h4>
                          <p className="text-sm text-gray-600">
                            {education.institution}، {education.year}
                          </p>
                          {education.description && (
                            <p className="text-sm text-gray-500 mt-1">{education.description}</p>
                          )}
                        </div>
                        {isEditing && (
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-red-600 hover:text-red-700"
                            onClick={() => {
                              toast({
                                title: "تم الحذف",
                                description: `تم حذف ${education.degree}`,
                                variant: "destructive",
                              })
                            }}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                  <Button
                    variant={isEditing ? "default" : "outline"}
                    onClick={handleAddEducation}
                    disabled={!isEditing}
                  >
                    <Plus className="h-4 w-4 ml-2" />
                    إضافة تعليم/شهادة
                  </Button>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Recent Activities */}
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="h-5 w-5 ml-2" />
                النشاطات الأخيرة
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`p-2 rounded-full ${
                          activity.type === "إجازة"
                            ? "bg-blue-100"
                            : activity.type === "تدريب"
                              ? "bg-green-100"
                              : activity.type === "تقييم"
                                ? "bg-purple-100"
                                : "bg-amber-100"
                        }`}
                      >
                        {activity.type === "إجازة" && <Calendar className="h-5 w-5 text-blue-600" />}
                        {activity.type === "تدريب" && <GraduationCap className="h-5 w-5 text-green-600" />}
                        {activity.type === "تقييم" && <Award className="h-5 w-5 text-purple-600" />}
                        {activity.type === "مستند" && <FileText className="h-5 w-5 text-amber-600" />}
                      </div>
                      <div>
                        <h4 className="font-medium">{activity.title}</h4>
                        <p className="text-sm text-gray-600">{new Date(activity.date).toLocaleDateString("ar-SA")}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge
                        variant={
                          activity.status === "تمت الموافقة"
                            ? "default"
                            : activity.status === "مكتمل"
                              ? "secondary"
                              : "outline"
                        }
                      >
                        {activity.status === "تمت الموافقة" && <CheckCircle className="h-3 w-3 mr-1" />}
                        {activity.status}
                      </Badge>
                      <Button variant="ghost" size="sm" onClick={() => handleViewActivity(activity)}>
                        عرض
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Certificate Dialog */}
      <Dialog open={showCertificateDialog} onOpenChange={setShowCertificateDialog}>
        <DialogContent className="rtl" dir="rtl">
          <DialogHeader>
            <DialogTitle>إضافة شهادة جديدة</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">اسم الشهادة/الدرجة العلمية</label>
              <Input placeholder="مثال: ماجستير إدارة الأعمال" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">المؤسسة التعليمية</label>
              <Input placeholder="مثال: جامعة الملك سعود" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">سنة الحصول عليها</label>
              <Input placeholder="مثال: 2020" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">وصف (اختياري)</label>
              <Textarea placeholder="وصف مختصر للشهادة أو التخصص" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">إرفاق صورة الشهادة (اختياري)</label>
              <Button variant="outline" className="w-full gap-2 bg-transparent">
                <Upload className="h-4 w-4" />
                رفع ملف
              </Button>
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setShowCertificateDialog(false)}>
              إلغاء
            </Button>
            <Button onClick={handleSaveCertificate} disabled={isLoading}>
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                  جاري الحفظ...
                </span>
              ) : (
                "حفظ"
              )}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
