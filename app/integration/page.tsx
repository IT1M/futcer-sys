"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Globe,
  Settings,
  CheckCircle,
  AlertCircle,
  XCircle,
  RefreshCw,
  Plus,
  Edit,
  Trash2,
  Eye,
  Key,
  Database,
  MessageSquare,
  FileText,
  DollarSign,
  Shield,
  Zap,
  Activity,
  Brain,
  Building,
} from "lucide-react"

export default function IntegrationPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const integrationCategories = [
    {
      id: "government",
      name: "التكاملات الحكومية",
      icon: Shield,
      color: "bg-red-500",
      integrations: [
        {
          name: "منصة أبشر",
          description: "تكامل مع منصة أبشر للخدمات الحكومية",
          status: "متصل",
          lastSync: "2024-01-25 14:30",
          apiVersion: "v2.1",
          dataExchanged: "بيانات الهوية والإقامة",
          enabled: true,
        },
        {
          name: "منصة مقيم",
          description: "إدارة تأشيرات العمل والإقامة",
          status: "متصل",
          lastSync: "2024-01-25 12:15",
          apiVersion: "v1.8",
          dataExchanged: "بيانات التأشيرات والإقامات",
          enabled: true,
        },
        {
          name: "التأمينات الاجتماعية",
          description: "تبادل بيانات التأمينات والمساهمات",
          status: "متصل",
          lastSync: "2024-01-25 16:45",
          apiVersion: "v3.0",
          dataExchanged: "بيانات المساهمات والمزايا",
          enabled: true,
        },
        {
          name: "وزارة العمل",
          description: "تقارير العمالة والامتثال",
          status: "قيد التحديث",
          lastSync: "2024-01-24 09:20",
          apiVersion: "v2.5",
          dataExchanged: "تقارير العمالة",
          enabled: false,
        },
      ],
    },
    {
      id: "financial",
      name: "التكاملات المالية",
      icon: DollarSign,
      color: "bg-green-500",
      integrations: [
        {
          name: "البنك الأهلي السعودي",
          description: "تحويل الرواتب والمعاملات المصرفية",
          status: "متصل",
          lastSync: "2024-01-25 18:00",
          apiVersion: "v4.2",
          dataExchanged: "تحويلات الرواتب",
          enabled: true,
        },
        {
          name: "بنك الراجحي",
          description: "خدمات مصرفية للشركات",
          status: "متصل",
          lastSync: "2024-01-25 17:30",
          apiVersion: "v3.1",
          dataExchanged: "المعاملات المالية",
          enabled: true,
        },
        {
          name: "نظام فاتورة",
          description: "الفوترة الإلكترونية",
          status: "غير متصل",
          lastSync: "2024-01-20 10:15",
          apiVersion: "v1.0",
          dataExchanged: "الفواتير الإلكترونية",
          enabled: false,
        },
      ],
    },
    {
      id: "communication",
      name: "تكاملات التواصل",
      icon: MessageSquare,
      color: "bg-blue-500",
      integrations: [
        {
          name: "Microsoft Teams",
          description: "التواصل والاجتماعات الافتراضية",
          status: "متصل",
          lastSync: "2024-01-25 19:15",
          apiVersion: "v1.0",
          dataExchanged: "جدولة الاجتماعات",
          enabled: true,
        },
        {
          name: "WhatsApp Business",
          description: "إرسال الإشعارات والتنبيهات",
          status: "متصل",
          lastSync: "2024-01-25 20:00",
          apiVersion: "v2.0",
          dataExchanged: "الرسائل والإشعارات",
          enabled: true,
        },
        {
          name: "البريد الإلكتروني",
          description: "تكامل مع خوادم البريد الإلكتروني",
          status: "متصل",
          lastSync: "2024-01-25 19:45",
          apiVersion: "SMTP/IMAP",
          dataExchanged: "رسائل البريد الإلكتروني",
          enabled: true,
        },
      ],
    },
    {
      id: "ai",
      name: "تكاملات الذكاء الاصطناعي",
      icon: Brain,
      color: "bg-purple-500",
      integrations: [
        {
          name: "Google Gemini AI",
          description: "تحليل البيانات والرؤى الذكية",
          status: "متصل",
          lastSync: "2024-01-25 21:00",
          apiVersion: "v1.5",
          dataExchanged: "تحليل البيانات والتوقعات",
          enabled: true,
        },
        {
          name: "OpenAI GPT-4",
          description: "المساعد الذكي ومعالجة اللغة الطبيعية",
          status: "متصل",
          lastSync: "2024-01-25 20:30",
          apiVersion: "v4.0",
          dataExchanged: "معالجة النصوص والاستعلامات",
          enabled: true,
        },
        {
          name: "Azure Cognitive Services",
          description: "التعرف على الكلام والصور",
          status: "قيد الإعداد",
          lastSync: "2024-01-23 15:20",
          apiVersion: "v3.2",
          dataExchanged: "البيانات الصوتية والمرئية",
          enabled: false,
        },
      ],
    },
    {
      id: "enterprise",
      name: "الأنظمة المؤسسية",
      icon: Building,
      color: "bg-amber-500",
      integrations: [
        {
          name: "SAP SuccessFactors",
          description: "نظام إدارة الموارد البشرية المؤسسي",
          status: "متصل",
          lastSync: "2024-01-25 16:00",
          apiVersion: "v2.0",
          dataExchanged: "بيانات الموظفين والأداء",
          enabled: true,
        },
        {
          name: "Microsoft Active Directory",
          description: "إدارة الهويات والوصول",
          status: "متصل",
          lastSync: "2024-01-25 18:30",
          apiVersion: "LDAP v3",
          dataExchanged: "بيانات المصادقة",
          enabled: true,
        },
        {
          name: "Oracle HCM Cloud",
          description: "إدارة رأس المال البشري",
          status: "غير متصل",
          lastSync: "2024-01-15 11:00",
          apiVersion: "v21C",
          dataExchanged: "بيانات الموارد البشرية",
          enabled: false,
        },
      ],
    },
  ]

  const apiEndpoints = [
    {
      name: "Employee Data API",
      endpoint: "/api/v1/employees",
      method: "GET/POST/PUT/DELETE",
      description: "إدارة بيانات الموظفين",
      usage: "1,245 طلب/يوم",
      status: "نشط",
    },
    {
      name: "Payroll API",
      endpoint: "/api/v1/payroll",
      method: "GET/POST",
      description: "معلومات الرواتب والمزايا",
      usage: "892 طلب/يوم",
      status: "نشط",
    },
    {
      name: "Attendance API",
      endpoint: "/api/v1/attendance",
      method: "GET/POST",
      description: "تسجيل الحضور والانصراف",
      usage: "2,156 طلب/يوم",
      status: "نشط",
    },
    {
      name: "Reports API",
      endpoint: "/api/v1/reports",
      method: "GET",
      description: "إنتاج التقارير",
      usage: "456 طلب/يوم",
      status: "نشط",
    },
  ]

  const webhooks = [
    {
      name: "Employee Status Change",
      url: "https://api.company.com/webhooks/employee-status",
      events: ["employee.created", "employee.updated", "employee.deleted"],
      status: "نشط",
      lastTriggered: "2024-01-25 14:30",
    },
    {
      name: "Payroll Processing",
      url: "https://api.company.com/webhooks/payroll",
      events: ["payroll.processed", "payroll.approved"],
      status: "نشط",
      lastTriggered: "2024-01-25 12:00",
    },
    {
      name: "Document Approval",
      url: "https://api.company.com/webhooks/documents",
      events: ["document.approved", "document.rejected"],
      status: "معلق",
      lastTriggered: "2024-01-24 16:45",
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "متصل":
      case "نشط":
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case "قيد التحديث":
      case "قيد الإعداد":
      case "معلق":
        return <AlertCircle className="h-4 w-4 text-amber-600" />
      case "غير متصل":
        return <XCircle className="h-4 w-4 text-red-600" />
      default:
        return <AlertCircle className="h-4 w-4 text-gray-600" />
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "متصل":
      case "نشط":
        return <Badge variant="default">{status}</Badge>
      case "قيد التحديث":
      case "قيد الإعداد":
      case "معلق":
        return <Badge variant="secondary">{status}</Badge>
      case "غير متصل":
        return <Badge variant="destructive">{status}</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 rtl" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">التكاملات والواجهات البرمجية</h1>
          <p className="text-gray-600">إدارة شاملة للتكاملات مع الأنظمة الخارجية والداخلية</p>
        </div>

        {/* Integration Status Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">إجمالي التكاملات</p>
                  <p className="text-3xl font-bold text-blue-600">18</p>
                  <p className="text-sm text-blue-600">نظام متكامل</p>
                </div>
                <Globe className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">التكاملات النشطة</p>
                  <p className="text-3xl font-bold text-green-600">14</p>
                  <p className="text-sm text-green-600">77.8% معدل النجاح</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">طلبات API اليومية</p>
                  <p className="text-3xl font-bold text-purple-600">4.7K</p>
                  <p className="text-sm text-purple-600">متوسط يومي</p>
                </div>
                <Activity className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">وقت الاستجابة</p>
                  <p className="text-3xl font-bold text-amber-600">245ms</p>
                  <p className="text-sm text-amber-600">متوسط الاستجابة</p>
                </div>
                <Zap className="h-8 w-8 text-amber-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="integrations" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="integrations">التكاملات</TabsTrigger>
            <TabsTrigger value="apis">واجهات API</TabsTrigger>
            <TabsTrigger value="webhooks">Webhooks</TabsTrigger>
            <TabsTrigger value="settings">الإعدادات</TabsTrigger>
          </TabsList>

          <TabsContent value="integrations" className="space-y-6">
            {/* AI Integration Insights */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Brain className="h-5 w-5 ml-2" />
                  رؤى التكامل الذكية - Gemini
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-green-50 rounded-lg border-r-4 border-green-500">
                    <h4 className="font-semibold text-green-900">حالة التكاملات</h4>
                    <p className="text-green-700 text-sm mt-1">
                      جميع التكاملات الحكومية تعمل بكفاءة عالية مع معدل نجاح 99.2%
                    </p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg border-r-4 border-blue-500">
                    <h4 className="font-semibold text-blue-900">تحسينات مقترحة</h4>
                    <p className="text-blue-700 text-sm mt-1">يُنصح بتحديث تكامل وزارة العمل لتحسين سرعة المزامنة</p>
                  </div>
                  <div className="p-4 bg-amber-50 rounded-lg border-r-4 border-amber-500">
                    <h4 className="font-semibold text-amber-900">تنبيه أمني</h4>
                    <p className="text-amber-700 text-sm mt-1">
                      تحديث شهادات SSL مطلوب لـ 3 تكاملات خلال الأسبوعين القادمين
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Integration Categories */}
            <div className="space-y-6">
              {integrationCategories.map((category) => {
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
                      <div className="space-y-4">
                        {category.integrations.map((integration, index) => (
                          <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-start mb-3">
                              <div className="flex items-center gap-3">
                                {getStatusIcon(integration.status)}
                                <div>
                                  <h4 className="font-semibold">{integration.name}</h4>
                                  <p className="text-gray-600 text-sm">{integration.description}</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                {getStatusBadge(integration.status)}
                                <Switch checked={integration.enabled} />
                              </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600 mb-3">
                              <div>
                                <span className="font-medium">آخر مزامنة:</span>
                                <p>{integration.lastSync}</p>
                              </div>
                              <div>
                                <span className="font-medium">إصدار API:</span>
                                <p>{integration.apiVersion}</p>
                              </div>
                              <div>
                                <span className="font-medium">البيانات المتبادلة:</span>
                                <p>{integration.dataExchanged}</p>
                              </div>
                            </div>

                            <div className="flex gap-2">
                              <Button size="sm" variant="outline">
                                <RefreshCw className="h-4 w-4 ml-1" />
                                مزامنة
                              </Button>
                              <Button size="sm" variant="outline">
                                <Settings className="h-4 w-4 ml-1" />
                                إعدادات
                              </Button>
                              <Button size="sm" variant="outline">
                                <Eye className="h-4 w-4 ml-1" />
                                سجلات
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

          <TabsContent value="apis" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">واجهات API المتاحة</h2>
              <Button>
                <Plus className="h-4 w-4 ml-2" />
                إضافة API جديد
              </Button>
            </div>

            <div className="space-y-4">
              {apiEndpoints.map((api, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{api.name}</h3>
                        <p className="text-gray-600 text-sm mb-2">{api.description}</p>
                        <div className="flex items-center gap-4 text-sm">
                          <Badge variant="outline">{api.method}</Badge>
                          <code className="bg-gray-100 px-2 py-1 rounded text-xs">{api.endpoint}</code>
                        </div>
                      </div>
                      <div className="text-left">
                        {getStatusBadge(api.status)}
                        <p className="text-sm text-gray-600 mt-2">الاستخدام: {api.usage}</p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4 ml-1" />
                        الوثائق
                      </Button>
                      <Button size="sm" variant="outline">
                        <Key className="h-4 w-4 ml-1" />
                        مفاتيح API
                      </Button>
                      <Button size="sm" variant="outline">
                        <Activity className="h-4 w-4 ml-1" />
                        الإحصائيات
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* API Documentation */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-5 w-5 ml-2" />
                  وثائق API
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">دليل البدء السريع</h4>
                    <p className="text-gray-600 text-sm mb-3">تعلم كيفية استخدام واجهات API الخاصة بنا</p>
                    <Button size="sm" variant="outline">
                      <FileText className="h-4 w-4 ml-1" />
                      عرض الدليل
                    </Button>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">أمثلة الكود</h4>
                    <p className="text-gray-600 text-sm mb-3">أمثلة عملية بلغات البرمجة المختلفة</p>
                    <Button size="sm" variant="outline">
                      <FileText className="h-4 w-4 ml-1" />
                      عرض الأمثلة
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="webhooks" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">إدارة Webhooks</h2>
              <Button>
                <Plus className="h-4 w-4 ml-2" />
                إضافة Webhook
              </Button>
            </div>

            <div className="space-y-4">
              {webhooks.map((webhook, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{webhook.name}</h3>
                        <code className="bg-gray-100 px-2 py-1 rounded text-xs">{webhook.url}</code>
                        <div className="mt-2">
                          <span className="text-sm text-gray-600">الأحداث: </span>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {webhook.events.map((event, eventIndex) => (
                              <Badge key={eventIndex} variant="outline" className="text-xs">
                                {event}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="text-left">
                        {getStatusBadge(webhook.status)}
                        <p className="text-sm text-gray-600 mt-2">
                          آخر تشغيل: {new Date(webhook.lastTriggered).toLocaleString("ar-SA")}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Edit className="h-4 w-4 ml-1" />
                        تعديل
                      </Button>
                      <Button size="sm" variant="outline">
                        <Activity className="h-4 w-4 ml-1" />
                        السجلات
                      </Button>
                      <Button size="sm" variant="outline">
                        اختبار
                      </Button>
                      <Button size="sm" variant="destructive">
                        <Trash2 className="h-4 w-4 ml-1" />
                        حذف
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* General Settings */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Settings className="h-5 w-5 ml-2" />
                    الإعدادات العامة
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">تفعيل المزامنة التلقائية</h4>
                      <p className="text-sm text-gray-600">مزامنة البيانات تلقائياً كل ساعة</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">تسجيل العمليات</h4>
                      <p className="text-sm text-gray-600">حفظ سجل مفصل لجميع العمليات</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">التنبيهات الفورية</h4>
                      <p className="text-sm text-gray-600">إرسال تنبيهات عند فشل التكامل</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">مهلة الاتصال (ثانية)</label>
                    <Input type="number" defaultValue="30" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">عدد محاولات الإعادة</label>
                    <Input type="number" defaultValue="3" />
                  </div>
                </CardContent>
              </Card>

              {/* Security Settings */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="h-5 w-5 ml-2" />
                    إعدادات الأمان
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">تشفير البيانات</h4>
                      <p className="text-sm text-gray-600">تشفير جميع البيانات المتبادلة</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">التحقق من الشهادات</h4>
                      <p className="text-sm text-gray-600">التحقق من صحة شهادات SSL</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">مفتاح التشفير الرئيسي</label>
                    <div className="flex gap-2">
                      <Input type="password" placeholder="••••••••••••••••" className="flex-1" />
                      <Button variant="outline" size="sm">
                        <RefreshCw className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">عناوين IP المسموحة</label>
                    <Textarea placeholder="192.168.1.0/24&#10;10.0.0.0/8" rows={3} />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">مدة صلاحية الرمز المميز (ساعة)</label>
                    <Input type="number" defaultValue="24" />
                  </div>
                </CardContent>
              </Card>

              {/* Monitoring Settings */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Activity className="h-5 w-5 ml-2" />
                    إعدادات المراقبة
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">مراقبة الأداء</h4>
                      <p className="text-sm text-gray-600">مراقبة أداء التكاملات في الوقت الفعلي</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">تنبيهات الأداء</h4>
                      <p className="text-sm text-gray-600">تنبيه عند تجاوز حدود الأداء</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">حد وقت الاستجابة (مللي ثانية)</label>
                    <Input type="number" defaultValue="5000" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">معدل الطلبات المسموح (طلب/دقيقة)</label>
                    <Input type="number" defaultValue="1000" />
                  </div>
                </CardContent>
              </Card>

              {/* Backup Settings */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Database className="h-5 w-5 ml-2" />
                    إعدادات النسخ الاحتياطي
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">النسخ الاحتياطي التلقائي</h4>
                      <p className="text-sm text-gray-600">نسخ احتياطي يومي لإعدادات التكامل</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">وقت النسخ الاحتياطي</label>
                    <Input type="time" defaultValue="02:00" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">مدة الاحتفاظ (أيام)</label>
                    <Input type="number" defaultValue="30" />
                  </div>

                  <Button className="w-full">
                    <Database className="h-4 w-4 ml-2" />
                    إنشاء نسخة احتياطية الآن
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
