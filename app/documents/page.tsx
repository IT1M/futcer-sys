"use client"

import type React from "react"

import { useState, useEffect } from "react"
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
  Eye,
  Edit,
  Trash2,
  Plus,
  Search,
  Filter,
  Clock,
  User,
  Building,
  Shield,
  CheckCircle,
  AlertCircle,
  XCircle,
  FilePenLineIcon as Signature,
  Share,
  Archive,
  RefreshCw,
  FileCheck,
  FilePlus,
  Folder,
  Settings,
  DollarSign,
  TrendingUp,
  Award,
  ArrowLeft,
  X,
} from "lucide-react"

export default function DocumentsPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get("category")
  const articleParam = searchParams.get("article")

  const [selectedCategory, setSelectedCategory] = useState(categoryParam || "all")
  const [selectedStatus, setSelectedStatus] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [activeTab, setActiveTab] = useState("documents")
  const [showDocumentDialog, setShowDocumentDialog] = useState(false)
  const [selectedDocument, setSelectedDocument] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (categoryParam) {
      setActiveTab("documents")
    } else if (articleParam) {
      setActiveTab("knowledge")
    }
  }, [categoryParam, articleParam])

  const documentStats = {
    totalDocuments: 1247,
    activeDocuments: 892,
    expiringSoon: 23,
    expired: 15,
    pendingApproval: 45,
    templates: 67,
  }

  const documents = [
    {
      id: 1,
      name: "عقد العمل - أحمد محمد السعد",
      type: "عقد",
      category: "موارد بشرية",
      employee: "أحمد محمد السعد",
      department: "تقنية المعلومات",
      createdDate: "2020-01-15",
      expiryDate: "2025-01-15",
      status: "نشط",
      size: "2.4 MB",
      format: "PDF",
      version: "1.2",
      lastModified: "2024-01-10",
      approvedBy: "فاطمة علي الأحمد",
      digitalSignature: true,
      confidential: false,
    },
    {
      id: 2,
      name: "شهادة راتب - يناير 2024",
      type: "شهادة",
      category: "مالية",
      employee: "أحمد محمد السعد",
      department: "تقنية المعلومات",
      createdDate: "2024-01-25",
      expiryDate: "2024-07-25",
      status: "نشط",
      size: "245 KB",
      format: "PDF",
      version: "1.0",
      lastModified: "2024-01-25",
      approvedBy: "محمد خالد العتيبي",
      digitalSignature: true,
      confidential: true,
    },
    {
      id: 3,
      name: "تقرير الأداء السنوي 2023",
      type: "تقرير",
      category: "أداء",
      employee: "فاطمة علي الأحمد",
      department: "الموارد البشرية",
      createdDate: "2024-01-01",
      expiryDate: "2027-01-01",
      status: "قيد المراجعة",
      size: "1.8 MB",
      format: "PDF",
      version: "2.1",
      lastModified: "2024-01-20",
      approvedBy: "في الانتظار",
      digitalSignature: false,
      confidential: false,
    },
    {
      id: 4,
      name: "رخصة العمل - محمد خالد العتيبي",
      type: "رخصة",
      category: "قانونية",
      employee: "محمد خالد العتيبي",
      department: "تقنية المعلومات",
      createdDate: "2021-06-10",
      expiryDate: "2024-06-10",
      status: "منتهي الصلاحية",
      size: "890 KB",
      format: "PDF",
      version: "1.0",
      lastModified: "2021-06-10",
      approvedBy: "سارة أحمد القحطاني",
      digitalSignature: true,
      confidential: true,
    },
    {
      id: 5,
      name: "بوليصة التأمين الطبي",
      type: "بوليصة",
      category: "تأمين",
      employee: "جميع الموظفين",
      department: "عام",
      createdDate: "2024-01-01",
      expiryDate: "2024-12-31",
      status: "نشط",
      size: "3.2 MB",
      format: "PDF",
      version: "1.0",
      lastModified: "2024-01-01",
      approvedBy: "أحمد محمد السعد",
      digitalSignature: true,
      confidential: false,
    },
  ]

  const templates = [
    {
      id: 1,
      name: "قالب عقد العمل",
      category: "موارد بشرية",
      description: "قالب موحد لعقود العمل الجديدة",
      usage: 45,
      lastUpdated: "2024-01-15",
      version: "2.1",
    },
    {
      id: 2,
      name: "قالب شهادة راتب",
      category: "مالية",
      description: "قالب لإصدار شهادات الراتب",
      usage: 89,
      lastUpdated: "2024-01-10",
      version: "1.5",
    },
    {
      id: 3,
      name: "قالب تقرير الأداء",
      category: "أداء",
      description: "قالب لتقارير الأداء الدورية",
      usage: 23,
      lastUpdated: "2024-01-05",
      version: "3.0",
    },
  ]

  const approvalWorkflow = [
    {
      id: 1,
      documentName: "عقد العمل - نورا محمد العتيبي",
      currentStep: "مراجعة المدير المباشر",
      approver: "أحمد محمد السعد",
      submittedDate: "2024-01-20",
      priority: "عالي",
      status: "في الانتظار",
      steps: [
        { step: "تقديم الطلب", status: "مكتمل", date: "2024-01-20" },
        { step: "مراجعة الموارد البشرية", status: "مكتمل", date: "2024-01-21" },
        { step: "مراجعة المدير المباشر", status: "قيد المراجعة", date: null },
        { step: "الموافقة النهائية", status: "في الانتظار", date: null },
      ],
    },
    {
      id: 2,
      documentName: "تحديث سياسة الإجازات",
      currentStep: "الموافقة النهائية",
      approver: "فاطمة علي الأحمد",
      submittedDate: "2024-01-18",
      priority: "متوسط",
      status: "في الانتظار",
      steps: [
        { step: "تقديم الطلب", status: "مكتمل", date: "2024-01-18" },
        { step: "مراجعة قانونية", status: "مكتمل", date: "2024-01-19" },
        { step: "مراجعة الإدارة", status: "مكتمل", date: "2024-01-22" },
        { step: "الموافقة النهائية", status: "قيد المراجعة", date: null },
      ],
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

  const handleAddDocument = () => {
    toast({
      title: "إضافة وثيقة جديدة",
      description: "تم فتح نموذج إضافة وثيقة جديدة",
    })
  }

  const handleViewDocument = (document: any) => {
    setSelectedDocument(document)
    setShowDocumentDialog(true)
  }

  const handleDownloadDocument = (document: any) => {
    toast({
      title: "جاري التحميل",
      description: `جاري تحميل ${document.name}`,
    })
  }

  const handleEditDocument = (document: any) => {
    router.push(`/documents/edit/${document.id}`)
  }

  const handleShareDocument = (document: any) => {
    toast({
      title: "مشاركة الوثيقة",
      description: `تم نسخ رابط مشاركة ${document.name}`,
    })
  }

  const handleDeleteDocument = (document: any) => {
    toast({
      title: "حذف الوثيقة",
      description: `تم حذف ${document.name} بنجاح`,
      variant: "destructive",
    })
  }

  const handleUseTemplate = (template: any) => {
    toast({
      title: "استخدام القالب",
      description: `تم فتح نموذج إنشاء وثيقة باستخدام قالب ${template.name}`,
    })
  }

  const handleApproveDocument = (workflow: any) => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "تمت الموافقة",
        description: `تمت الموافقة على ${workflow.documentName}`,
      })
    }, 1500)
  }

  const handleRenewCertificate = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "تم التجديد",
        description: "تم تجديد الشهادة الرقمية بنجاح",
      })
    }, 1500)
  }

  const filteredDocuments = documents.filter((doc) => {
    const matchesSearch =
      doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.employee.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || doc.category === selectedCategory
    const matchesStatus = selectedStatus === "all" || doc.status === selectedStatus
    return matchesSearch && matchesCategory && matchesStatus
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 rtl" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">إدارة الوثائق والتوقيع الرقمي</h1>
              <p className="text-gray-600">نظام شامل لإدارة الوثائق مع التوقيع الرقمي والأرشفة الذكية</p>
            </div>
            <Button variant="outline" onClick={() => router.push("/")} className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              العودة للرئيسية
            </Button>
          </div>
        </div>

        {/* Document Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mb-8">
          <Card>
            <CardContent className="p-4">
              <div className="text-center">
                <FileText className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-blue-600">{documentStats.totalDocuments}</p>
                <p className="text-xs text-gray-600">إجمالي الوثائق</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="text-center">
                <CheckCircle className="h-6 w-6 text-green-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-green-600">{documentStats.activeDocuments}</p>
                <p className="text-xs text-gray-600">وثائق نشطة</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="text-center">
                <AlertCircle className="h-6 w-6 text-amber-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-amber-600">{documentStats.expiringSoon}</p>
                <p className="text-xs text-gray-600">تنتهي قريباً</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="text-center">
                <XCircle className="h-6 w-6 text-red-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-red-600">{documentStats.expired}</p>
                <p className="text-xs text-gray-600">منتهية الصلاحية</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="text-center">
                <Clock className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-purple-600">{documentStats.pendingApproval}</p>
                <p className="text-xs text-gray-600">في انتظار الموافقة</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="text-center">
                <FilePlus className="h-6 w-6 text-indigo-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-indigo-600">{documentStats.templates}</p>
                <p className="text-xs text-gray-600">قوالب متاحة</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="documents" className="space-y-6" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5">
            <TabsTrigger value="documents">الوثائق</TabsTrigger>
            <TabsTrigger value="templates">القوالب</TabsTrigger>
            <TabsTrigger value="approval">سير الموافقة</TabsTrigger>
            <TabsTrigger value="signature">التوقيع الرقمي</TabsTrigger>
            <TabsTrigger value="archive">الأرشيف</TabsTrigger>
          </TabsList>

          <TabsContent value="documents" className="space-y-6">
            {/* Search and Filters */}
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        placeholder="البحث في الوثائق..."
                        value={searchTerm}
                        onChange={handleSearch}
                        className="pr-10"
                      />
                    </div>
                  </div>

                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="w-full md:w-48">
                      <SelectValue placeholder="اختر الفئة" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">جميع الفئات</SelectItem>
                      <SelectItem value="موارد بشرية">موارد بشرية</SelectItem>
                      <SelectItem value="مالية">مالية</SelectItem>
                      <SelectItem value="قانونية">قانونية</SelectItem>
                      <SelectItem value="أداء">أداء</SelectItem>
                      <SelectItem value="تأمين">تأمين</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                    <SelectTrigger className="w-full md:w-48">
                      <SelectValue placeholder="اختر الحالة" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">جميع الحالات</SelectItem>
                      <SelectItem value="نشط">نشط</SelectItem>
                      <SelectItem value="قيد المراجعة">قيد المراجعة</SelectItem>
                      <SelectItem value="منتهي الصلاحية">منتهي الصلاحية</SelectItem>
                    </SelectContent>
                  </Select>

                  <div className="flex gap-2">
                    <Button variant="outline" onClick={handleFilter}>
                      <Filter className="h-4 w-4 ml-2" />
                      فلترة متقدمة
                    </Button>
                    <Button onClick={handleAddDocument}>
                      <Plus className="h-4 w-4 ml-2" />
                      وثيقة جديدة
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Documents List */}
            <div className="space-y-4">
              {filteredDocuments.length > 0 ? (
                filteredDocuments.map((document) => (
                  <Card key={document.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4 rtl:space-x-reverse">
                          <div className="p-2 bg-blue-100 rounded-lg">
                            <FileText className="h-6 w-6 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg">{document.name}</h3>
                            <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                              <Badge variant="outline">{document.type}</Badge>
                              <Badge variant="outline">{document.category}</Badge>
                              <span className="flex items-center gap-1">
                                <User className="h-3 w-3" />
                                {document.employee}
                              </span>
                              <span className="flex items-center gap-1">
                                <Building className="h-3 w-3" />
                                {document.department}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="text-left">
                          <Badge
                            variant={
                              document.status === "نشط"
                                ? "default"
                                : document.status === "منتهي الصلاحية"
                                  ? "destructive"
                                  : "secondary"
                            }
                          >
                            {document.status}
                          </Badge>
                          {document.digitalSignature && (
                            <div className="flex items-center gap-1 mt-2">
                              <Signature className="h-4 w-4 text-green-600" />
                              <span className="text-xs text-green-600">موقع رقمياً</span>
                            </div>
                          )}
                          {document.confidential && (
                            <div className="flex items-center gap-1 mt-1">
                              <Shield className="h-4 w-4 text-red-600" />
                              <span className="text-xs text-red-600">سري</span>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-sm">
                        <div>
                          <span className="text-gray-500">تاريخ الإنشاء:</span>
                          <p className="font-medium">{new Date(document.createdDate).toLocaleDateString("ar-SA")}</p>
                        </div>
                        <div>
                          <span className="text-gray-500">تاريخ الانتهاء:</span>
                          <p className="font-medium">{new Date(document.expiryDate).toLocaleDateString("ar-SA")}</p>
                        </div>
                        <div>
                          <span className="text-gray-500">الحجم:</span>
                          <p className="font-medium">{document.size}</p>
                        </div>
                        <div>
                          <span className="text-gray-500">الإصدار:</span>
                          <p className="font-medium">v{document.version}</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t">
                        <div className="text-sm text-gray-600">
                          <span>آخر تعديل: {new Date(document.lastModified).toLocaleDateString("ar-SA")}</span>
                          <span className="mx-2">•</span>
                          <span>معتمد من: {document.approvedBy}</span>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm" onClick={() => handleViewDocument(document)}>
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" onClick={() => handleDownloadDocument(document)}>
                            <Download className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" onClick={() => handleEditDocument(document)}>
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" onClick={() => handleShareDocument(document)}>
                            <Share className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-red-600 hover:text-red-700"
                            onClick={() => handleDeleteDocument(document)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="text-center py-12">
                  <FileText className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-1">لا توجد وثائق مطابقة</h3>
                  <p className="text-gray-500 mb-4">لم يتم العثور على وثائق تطابق معايير البحث</p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSearchTerm("")
                      setSelectedCategory("all")
                      setSelectedStatus("all")
                    }}
                  >
                    عرض جميع الوثائق
                  </Button>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="templates" className="space-y-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">قوالب الوثائق</h2>
                <p className="text-gray-600">قوالب موحدة لإنشاء الوثائق بسرعة وكفاءة</p>
              </div>
              <Button
                onClick={() => {
                  toast({
                    title: "إضافة قالب جديد",
                    description: "تم فتح نموذج إضافة قالب جديد",
                  })
                }}
              >
                <Plus className="h-4 w-4 ml-2" />
                قالب جديد
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {templates.map((template) => (
                <Card key={template.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 bg-purple-100 rounded-lg">
                        <FilePlus className="h-8 w-8 text-purple-600" />
                      </div>
                      <Badge variant="outline">{template.category}</Badge>
                    </div>

                    <h3 className="font-semibold text-lg mb-2">{template.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{template.description}</p>

                    <div className="space-y-2 mb-4 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">مرات الاستخدام:</span>
                        <span className="font-medium">{template.usage}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">آخر تحديث:</span>
                        <span className="font-medium">
                          {new Date(template.lastUpdated).toLocaleDateString("ar-SA")}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">الإصدار:</span>
                        <span className="font-medium">v{template.version}</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button className="flex-1" onClick={() => handleUseTemplate(template)}>
                        <FilePlus className="h-4 w-4 ml-1" />
                        استخدام
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          toast({
                            title: "تعديل القالب",
                            description: `تم فتح نموذج تعديل قالب ${template.name}`,
                          })
                        }}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          toast({
                            title: "معاينة القالب",
                            description: `تم فتح معاينة قالب ${template.name}`,
                          })
                        }}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="approval" className="space-y-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">سير عمل الموافقات</h2>
              <p className="text-gray-600">تتبع حالة الوثائق في مراحل الموافقة المختلفة</p>
            </div>

            <div className="space-y-6">
              {approvalWorkflow.map((workflow) => (
                <Card key={workflow.id}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{workflow.documentName}</h3>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span>المرحلة الحالية: {workflow.currentStep}</span>
                          <span>المراجع: {workflow.approver}</span>
                          <span>تاريخ التقديم: {new Date(workflow.submittedDate).toLocaleDateString("ar-SA")}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge
                          variant={
                            workflow.priority === "عالي"
                              ? "destructive"
                              : workflow.priority === "متوسط"
                                ? "default"
                                : "secondary"
                          }
                        >
                          {workflow.priority}
                        </Badge>
                        <Badge variant="secondary">{workflow.status}</Badge>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {workflow.steps.map((step, index) => (
                        <div key={index} className="flex items-center gap-4">
                          <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-gray-300">
                            {step.status === "مكتمل" ? (
                              <CheckCircle className="h-5 w-5 text-green-600" />
                            ) : step.status === "قيد المراجعة" ? (
                              <Clock className="h-5 w-5 text-amber-600" />
                            ) : (
                              <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                            )}
                          </div>
                          <div className="flex-1">
                            <p className="font-medium">{step.step}</p>
                            {step.date && (
                              <p className="text-sm text-gray-600">{new Date(step.date).toLocaleDateString("ar-SA")}</p>
                            )}
                          </div>
                          <Badge
                            variant={
                              step.status === "مكتمل"
                                ? "default"
                                : step.status === "قيد المراجعة"
                                  ? "secondary"
                                  : "outline"
                            }
                            className="text-xs"
                          >
                            {step.status}
                          </Badge>
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-2 mt-6 pt-4 border-t">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          toast({
                            title: "عرض الوثيقة",
                            description: `تم فتح وثيقة ${workflow.documentName}`,
                          })
                        }}
                      >
                        <Eye className="h-4 w-4 ml-1" />
                        عرض الوثيقة
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          toast({
                            title: "تعديل الطلب",
                            description: `تم فتح نموذج تعديل طلب ${workflow.documentName}`,
                          })
                        }}
                      >
                        <Edit className="h-4 w-4 ml-1" />
                        تعديل
                      </Button>
                      <Button size="sm" onClick={() => handleApproveDocument(workflow)} disabled={isLoading}>
                        {isLoading ? (
                          <span className="flex items-center gap-2">
                            <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                            جاري الموافقة...
                          </span>
                        ) : (
                          <>
                            <CheckCircle className="h-4 w-4 ml-1" />
                            موافقة
                          </>
                        )}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="signature" className="space-y-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">التوقيع الرقمي</h2>
              <p className="text-gray-600">نظام التوقيع الرقمي المعتمد والآمن</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Digital Signature Status */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Signature className="h-5 w-5 ml-2" />
                    حالة التوقيع الرقمي
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 rounded-lg border-r-4 border-green-500">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-green-900">الشهادة الرقمية</h4>
                          <p className="text-green-700 text-sm">صالحة حتى: 2025-12-31</p>
                        </div>
                        <CheckCircle className="h-8 w-8 text-green-600" />
                      </div>
                    </div>

                    <div className="p-4 bg-blue-50 rounded-lg border-r-4 border-blue-500">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-blue-900">الوثائق الموقعة</h4>
                          <p className="text-blue-700 text-sm">892 وثيقة موقعة رقمياً</p>
                        </div>
                        <FileCheck className="h-8 w-8 text-blue-600" />
                      </div>
                    </div>

                    <div className="p-4 bg-amber-50 rounded-lg border-r-4 border-amber-500">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-amber-900">في انتظار التوقيع</h4>
                          <p className="text-amber-700 text-sm">23 وثيقة تحتاج توقيع</p>
                        </div>
                        <Clock className="h-8 w-8 text-amber-600" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Signature Settings */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Settings className="h-5 w-5 ml-2" />
                    إعدادات التوقيع
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <h4 className="font-medium">التوقيع التلقائي</h4>
                        <p className="text-sm text-gray-600">توقيع الوثائق المعتمدة تلقائياً</p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          toast({
                            title: "تم التفعيل",
                            description: "تم تفعيل التوقيع التلقائي بنجاح",
                          })
                        }}
                      >
                        تفعيل
                      </Button>
                    </div>

                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <h4 className="font-medium">التحقق المتقدم</h4>
                        <p className="text-sm text-gray-600">التحقق من الهوية قبل التوقيع</p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          toast({
                            title: "تم التعطيل",
                            description: "تم تعطيل التحقق المتقدم بنجاح",
                          })
                        }}
                      >
                        مفعل
                      </Button>
                    </div>

                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <h4 className="font-medium">الطابع الزمني</h4>
                        <p className="text-sm text-gray-600">إضافة طابع زمني للتوقيع</p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          toast({
                            title: "تم التعطيل",
                            description: "تم تعطيل الطابع الزمني بنجاح",
                          })
                        }}
                      >
                        مفعل
                      </Button>
                    </div>

                    <Button className="w-full" onClick={handleRenewCertificate} disabled={isLoading}>
                      {isLoading ? (
                        <span className="flex items-center gap-2">
                          <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                          جاري التجديد...
                        </span>
                      ) : (
                        <>
                          <RefreshCw className="h-4 w-4 ml-2" />
                          تجديد الشهادة الرقمية
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Pending Signatures */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-5 w-5 ml-2" />
                  الوثائق في انتظار التوقيع
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    {
                      name: "عقد العمل - سارة أحمد القحطاني",
                      type: "عقد",
                      priority: "عالي",
                      dueDate: "2024-02-01",
                    },
                    {
                      name: "تحديث سياسة الخصوصية",
                      type: "سياسة",
                      priority: "متوسط",
                      dueDate: "2024-02-05",
                    },
                    {
                      name: "اتفاقية سرية - مشروع جديد",
                      type: "اتفاقية",
                      priority: "عالي",
                      dueDate: "2024-01-30",
                    },
                  ].map((doc, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h4 className="font-medium">{doc.name}</h4>
                        <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                          <Badge variant="outline">{doc.type}</Badge>
                          <span>موعد الاستحقاق: {new Date(doc.dueDate).toLocaleDateString("ar-SA")}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={doc.priority === "عالي" ? "destructive" : "default"} className="text-xs">
                          {doc.priority}
                        </Badge>
                        <Button
                          size="sm"
                          onClick={() => {
                            toast({
                              title: "تم التوقيع",
                              description: `تم توقيع ${doc.name} بنجاح`,
                            })
                          }}
                        >
                          <Signature className="h-4 w-4 ml-1" />
                          توقيع
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="archive" className="space-y-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">أرشيف الوثائق</h2>
              <p className="text-gray-600">إدارة وتنظيم الوثائق المؤرشفة والقديمة</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Archive Categories */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Folder className="h-5 w-5 ml-2" />
                    فئات الأرشيف
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {[
                      { name: "عقود العمل", count: 245, icon: FileText },
                      { name: "الوثائق المالية", count: 189, icon: DollarSign },
                      { name: "تقارير الأداء", count: 156, icon: TrendingUp },
                      { name: "الوثائق القانونية", count: 89, icon: Shield },
                      { name: "شهادات التدريب", count: 234, icon: Award },
                    ].map((category, index) => {
                      const IconComponent = category.icon
                      return (
                        <div
                          key={index}
                          className="flex items-center justify-between p-2 hover:bg-gray-50 rounded cursor-pointer"
                          onClick={() => {
                            toast({
                              title: "تم اختيار الفئة",
                              description: `تم اختيار فئة ${category.name}`,
                            })
                          }}
                        >
                          <div className="flex items-center gap-2">
                            <IconComponent className="h-4 w-4 text-gray-600" />
                            <span className="text-sm">{category.name}</span>
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {category.count}
                          </Badge>
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Archive Statistics */}
              <Card className="lg:col-span-3">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Archive className="h-5 w-5 ml-2" />
                    إحصائيات الأرشيف
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="p-4 bg-blue-50 rounded-lg text-center">
                      <h4 className="font-semibold text-blue-900">إجمالي الوثائق المؤرشفة</h4>
                      <p className="text-3xl font-bold text-blue-600">2,847</p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg text-center">
                      <h4 className="font-semibold text-green-900">مساحة التخزين المستخدمة</h4>
                      <p className="text-3xl font-bold text-green-600">15.2 GB</p>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg text-center">
                      <h4 className="font-semibold text-purple-900">متوسط عمر الوثائق</h4>
                      <p className="text-3xl font-bold text-purple-600">3.2 سنة</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold">الوثائق المؤرشفة حديثاً</h4>
                    {[
                      {
                        name: "عقود العمل - دفعة 2020",
                        date: "2024-01-15",
                        size: "2.4 GB",
                        count: 45,
                      },
                      {
                        name: "تقارير الأداء - الربع الرابع 2023",
                        date: "2024-01-10",
                        size: "890 MB",
                        count: 23,
                      },
                      {
                        name: "الوثائق المالية - ديسمبر 2023",
                        date: "2024-01-05",
                        size: "1.2 GB",
                        count: 67,
                      },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <h5 className="font-medium">{item.name}</h5>
                          <p className="text-sm text-gray-600">
                            {item.count} وثيقة • {item.size} • {new Date(item.date).toLocaleDateString("ar-SA")}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => {
                              toast({
                                title: "عرض الوثائق",
                                description: `تم فتح ${item.name}`,
                              })
                            }}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => {
                              toast({
                                title: "جاري التحميل",
                                description: `جاري تحميل ${item.name}`,
                              })
                            }}
                          >
                            <Download className="h-4 w-4" />
                          </Button>
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

      {/* Document Dialog */}
      <Dialog open={showDocumentDialog} onOpenChange={setShowDocumentDialog}>
        <DialogContent className="max-w-3xl rtl" dir="rtl">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">{selectedDocument?.name}</DialogTitle>
          </DialogHeader>
          {selectedDocument && (
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <FileText className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <Badge variant="outline">{selectedDocument.type}</Badge>
                  <Badge
                    variant={
                      selectedDocument.status === "نشط"
                        ? "default"
                        : selectedDocument.status === "منتهي الصلاحية"
                          ? "destructive"
                          : "secondary"
                    }
                    className="mr-2"
                  >
                    {selectedDocument.status}
                  </Badge>
                  {selectedDocument.digitalSignature && (
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      <Signature className="h-3 w-3 mr-1" />
                      موقع رقمياً
                    </Badge>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">الموظف:</span>
                  <p className="font-medium">{selectedDocument.employee}</p>
                </div>
                <div>
                  <span className="text-gray-500">القسم:</span>
                  <p className="font-medium">{selectedDocument.department}</p>
                </div>
                <div>
                  <span className="text-gray-500">تاريخ الإنشاء:</span>
                  <p className="font-medium">{new Date(selectedDocument.createdDate).toLocaleDateString("ar-SA")}</p>
                </div>
                <div>
                  <span className="text-gray-500">تاريخ الانتهاء:</span>
                  <p className="font-medium">{new Date(selectedDocument.expiryDate).toLocaleDateString("ar-SA")}</p>
                </div>
                <div>
                  <span className="text-gray-500">الحجم:</span>
                  <p className="font-medium">{selectedDocument.size}</p>
                </div>
                <div>
                  <span className="text-gray-500">الإصدار:</span>
                  <p className="font-medium">v{selectedDocument.version}</p>
                </div>
                <div>
                  <span className="text-gray-500">آخر تعديل:</span>
                  <p className="font-medium">{new Date(selectedDocument.lastModified).toLocaleDateString("ar-SA")}</p>
                </div>
                <div>
                  <span className="text-gray-500">معتمد من:</span>
                  <p className="font-medium">{selectedDocument.approvedBy}</p>
                </div>
              </div>

              <div className="border p-4 rounded-lg bg-gray-50 h-64 flex items-center justify-center">
                <div className="text-center">
                  <FileText className="h-12 w-12 mx-auto text-gray-400 mb-2" />
                  <p className="text-gray-500">معاينة الوثيقة</p>
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-4">
                <Button variant="outline" onClick={() => setShowDocumentDialog(false)}>
                  <X className="h-4 w-4 ml-1" />
                  إغلاق
                </Button>
                <Button variant="outline" onClick={() => handleDownloadDocument(selectedDocument)}>
                  <Download className="h-4 w-4 ml-1" />
                  تحميل
                </Button>
                <Button
                  onClick={() => {
                    setShowDocumentDialog(false)
                    handleEditDocument(selectedDocument)
                  }}
                >
                  <Edit className="h-4 w-4 ml-1" />
                  تعديل
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
