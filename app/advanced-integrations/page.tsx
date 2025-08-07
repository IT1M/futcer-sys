"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Progress } from "@/components/ui/progress"
import {
  Cloud,
  Database,
  Zap,
  Shield,
  Smartphone,
  Bot,
  Brain,
  Workflow,
  Settings,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Plus,
  Eye,
  RefreshCw,
  Link,
  Cpu,
  Network,
  Server,
  Lock,
  Key,
  Monitor,
  Activity,
} from "lucide-react"

export default function AdvancedIntegrationsPage() {
  const [selectedIntegration, setSelectedIntegration] = useState(null)

  const advancedIntegrations = [
    {
      id: 1,
      name: "Microsoft Azure AD",
      description: "تكامل متقدم مع Azure Active Directory للمصادقة الموحدة",
      category: "مصادقة",
      status: "نشط",
      icon: Cloud,
      complexity: "متقدم",
      setupTime: "2-4 ساعات",
      features: ["Single Sign-On", "Multi-Factor Authentication", "Role-Based Access"],
      apiVersion: "v2.0",
      lastSync: "2024-01-25 15:30",
      dataFlow: "ثنائي الاتجاه",
      security: "عالي",
      performance: 98,
    },
    {
      id: 2,
      name: "SAP SuccessFactors",
      description: "تكامل شامل مع SAP SuccessFactors لإدارة المواهب",
      category: "إدارة المواهب",
      status: "نشط",
      icon: Database,
      complexity: "معقد",
      setupTime: "1-2 أسبوع",
      features: ["Performance Management", "Learning Management", "Succession Planning"],
      apiVersion: "v1.0",
      lastSync: "2024-01-25 14:45",
      dataFlow: "ثنائي الاتجاه",
      security: "عالي جداً",
      performance: 95,
    },
    {
      id: 3,
      name: "Workday HCM",
      description: "تكامل مع Workday لإدارة رأس المال البشري",
      category: "HCM",
      status: "قيد الإعداد",
      icon: Workflow,
      complexity: "معقد",
      setupTime: "2-3 أسابيع",
      features: ["Payroll Integration", "Benefits Management", "Time Tracking"],
      apiVersion: "v35.0",
      lastSync: "غير متاح",
      dataFlow: "ثنائي الاتجاه",
      security: "عالي",
      performance: 0,
    },
    {
      id: 4,
      name: "Oracle HCM Cloud",
      description: "تكامل مع Oracle HCM Cloud للموارد البشرية المتقدمة",
      category: "HCM",
      status: "متوقف",
      icon: Server,
      complexity: "معقد",
      setupTime: "3-4 أسابيع",
      features: ["Advanced Analytics", "AI-Powered Insights", "Global Payroll"],
      apiVersion: "v21.0",
      lastSync: "2024-01-20 10:00",
      dataFlow: "أحادي الاتجاه",
      security: "متوسط",
      performance: 85,
    },
    {
      id: 5,
      name: "Slack Workspace",
      description: "تكامل مع Slack للتواصل والإشعارات الفورية",
      category: "تواصل",
      status: "نشط",
      icon: Bot,
      complexity: "بسيط",
      setupTime: "30 دقيقة",
      features: ["Real-time Notifications", "Bot Commands", "Channel Integration"],
      apiVersion: "v1.7",
      lastSync: "2024-01-25 16:00",
      dataFlow: "أحادي الاتجاه",
      security: "متوسط",
      performance: 99,
    },
    {
      id: 6,
      name: "Power BI Analytics",
      description: "تكامل مع Power BI للتحليلات المتقدمة والتقارير التفاعلية",
      category: "تحليلات",
      status: "نشط",
      icon: Brain,
      complexity: "متوسط",
      setupTime: "1-2 يوم",
      features: ["Interactive Dashboards", "Real-time Analytics", "Custom Reports"],
      apiVersion: "v1.0",
      lastSync: "2024-01-25 15:45",
      dataFlow: "أحادي الاتجاه",
      security: "عالي",
      performance: 97,
    },
  ]

  const aiIntegrations = [
    {
      id: 1,
      name: "OpenAI GPT-4",
      description: "مساعد ذكي لتحليل البيانات والإجابة على الاستفسارات",
      status: "نشط",
      usage: "1,247 طلب/يوم",
      accuracy: "94%",
      features: ["Natural Language Processing", "Document Analysis", "Smart Recommendations"],
    },
    {
      id: 2,
      name: "Google Gemini",
      description: "تحليل متقدم للبيانات والتنبؤات الذكية",
      status: "نشط",
      usage: "892 طلب/يوم",
      accuracy: "96%",
      features: ["Predictive Analytics", "Pattern Recognition", "Automated Insights"],
    },
    {
      id: 3,
      name: "Azure Cognitive Services",
      description: "خدمات الذكاء الاصطناعي للتعرف على الوجوه والنصوص",
      status: "قيد التطوير",
      usage: "0 طلب/يوم",
      accuracy: "N/A",
      features: ["Face Recognition", "OCR", "Sentiment Analysis"],
    },
  ]

  const blockchainIntegrations = [
    {
      id: 1,
      name: "Ethereum Smart Contracts",
      description: "عقود ذكية لإدارة الرواتب والمكافآت بشفافية",
      status: "تجريبي",
      network: "Ethereum Mainnet",
      gasUsed: "0.05 ETH",
      transactions: 156,
    },
    {
      id: 2,
      name: "Hyperledger Fabric",
      description: "شبكة بلوك تشين خاصة لحفظ سجلات الموظفين",
      status: "قيد التطوير",
      network: "Private Network",
      gasUsed: "N/A",
      transactions: 0,
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "نشط":
        return <CheckCircle className="h-5 w-5 text-green-600" />
      case "متوقف":
        return <XCircle className="h-5 w-5 text-red-600" />
      case "قيد الإعداد":
      case "قيد التطوير":
      case "تجريبي":
        return <AlertTriangle className="h-5 w-5 text-amber-600" />
      default:
        return <AlertTriangle className="h-5 w-5 text-gray-600" />
    }
  }

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case "بسيط":
        return "bg-green-100 text-green-800"
      case "متوسط":
        return "bg-blue-100 text-blue-800"
      case "متقدم":
        return "bg-purple-100 text-purple-800"
      case "معقد":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 rtl" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">التكاملات المتقدمة</h1>
          <p className="text-gray-600">تكاملات متطورة مع الأنظمة المؤسسية والذكاء الاصطناعي وتقنيات البلوك تشين</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">التكاملات النشطة</p>
                  <p className="text-3xl font-bold text-green-600">
                    {advancedIntegrations.filter((i) => i.status === "نشط").length}
                  </p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">متوسط الأداء</p>
                  <p className="text-3xl font-bold text-blue-600">96%</p>
                </div>
                <Activity className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">API Calls اليوم</p>
                  <p className="text-3xl font-bold text-purple-600">12.5K</p>
                </div>
                <Network className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">مستوى الأمان</p>
                  <p className="text-3xl font-bold text-red-600">عالي</p>
                </div>
                <Shield className="h-8 w-8 text-red-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="enterprise" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5">
            <TabsTrigger value="enterprise">التكاملات المؤسسية</TabsTrigger>
            <TabsTrigger value="ai">الذكاء الاصطناعي</TabsTrigger>
            <TabsTrigger value="blockchain">البلوك تشين</TabsTrigger>
            <TabsTrigger value="iot">إنترنت الأشياء</TabsTrigger>
            <TabsTrigger value="security">الأمان المتقدم</TabsTrigger>
          </TabsList>

          <TabsContent value="enterprise" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">التكاملات المؤسسية</h2>
              <Button>
                <Plus className="h-4 w-4 ml-2" />
                تكامل جديد
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {advancedIntegrations.map((integration) => {
                const IconComponent = integration.icon
                return (
                  <Card key={integration.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="p-3 bg-blue-100 rounded-lg">
                            <IconComponent className="h-6 w-6 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg">{integration.name}</h3>
                            <p className="text-sm text-gray-600">{integration.category}</p>
                          </div>
                        </div>
                        {getStatusIcon(integration.status)}
                      </div>

                      <p className="text-gray-600 text-sm mb-4">{integration.description}</p>

                      <div className="space-y-3 mb-4">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500">التعقيد:</span>
                          <Badge className={getComplexityColor(integration.complexity)}>{integration.complexity}</Badge>
                        </div>

                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500">وقت الإعداد:</span>
                          <span className="text-sm font-medium">{integration.setupTime}</span>
                        </div>

                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500">إصدار API:</span>
                          <Badge variant="outline">{integration.apiVersion}</Badge>
                        </div>

                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500">الأداء:</span>
                          <div className="flex items-center gap-2">
                            <Progress value={integration.performance} className="w-16 h-2" />
                            <span className="text-sm font-medium">{integration.performance}%</span>
                          </div>
                        </div>

                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500">الأمان:</span>
                          <Badge variant={integration.security === "عالي جداً" ? "default" : "secondary"}>
                            {integration.security}
                          </Badge>
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-medium text-sm mb-2">الميزات:</h4>
                        <div className="flex flex-wrap gap-1">
                          {integration.features.map((feature, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                          <Settings className="h-4 w-4 ml-1" />
                          إعدادات
                        </Button>
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <RefreshCw className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </TabsContent>

          <TabsContent value="ai" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">تكاملات الذكاء الاصطناعي</h2>
              <Button>
                <Brain className="h-4 w-4 ml-2" />
                إضافة AI جديد
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {aiIntegrations.map((ai) => (
                <Card key={ai.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 bg-purple-100 rounded-lg">
                        <Brain className="h-6 w-6 text-purple-600" />
                      </div>
                      <Badge variant={ai.status === "نشط" ? "default" : "secondary"}>{ai.status}</Badge>
                    </div>

                    <h3 className="font-semibold text-lg mb-2">{ai.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{ai.description}</p>

                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">الاستخدام اليومي:</span>
                        <span className="text-sm font-medium">{ai.usage}</span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">دقة النتائج:</span>
                        <span className="text-sm font-medium">{ai.accuracy}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-medium text-sm mb-2">القدرات:</h4>
                      <div className="space-y-1">
                        {ai.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <CheckCircle className="h-3 w-3 text-green-600" />
                            <span className="text-xs text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                        <Settings className="h-4 w-4 ml-1" />
                        تكوين
                      </Button>
                      <Button variant="outline" size="sm">
                        <Activity className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* AI Performance Dashboard */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Brain className="h-5 w-5 ml-2" />
                  لوحة أداء الذكاء الاصطناعي
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Bot className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-blue-600">2,139</p>
                    <p className="text-sm text-gray-600">إجمالي الطلبات</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-green-600">95%</p>
                    <p className="text-sm text-gray-600">معدل النجاح</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <Zap className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-purple-600">1.2s</p>
                    <p className="text-sm text-gray-600">متوسط الاستجابة</p>
                  </div>
                  <div className="text-center p-4 bg-amber-50 rounded-lg">
                    <Cpu className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-amber-600">$127</p>
                    <p className="text-sm text-gray-600">التكلفة الشهرية</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="blockchain" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">تكاملات البلوك تشين</h2>
              <Button>
                <Link className="h-4 w-4 ml-2" />
                شبكة جديدة
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {blockchainIntegrations.map((blockchain) => (
                <Card key={blockchain.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 bg-indigo-100 rounded-lg">
                        <Link className="h-6 w-6 text-indigo-600" />
                      </div>
                      <Badge variant={blockchain.status === "تجريبي" ? "secondary" : "outline"}>
                        {blockchain.status}
                      </Badge>
                    </div>

                    <h3 className="font-semibold text-lg mb-2">{blockchain.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{blockchain.description}</p>

                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">الشبكة:</span>
                        <Badge variant="outline">{blockchain.network}</Badge>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">استهلاك Gas:</span>
                        <span className="text-sm font-medium">{blockchain.gasUsed}</span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">المعاملات:</span>
                        <span className="text-sm font-medium">{blockchain.transactions}</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                        <Settings className="h-4 w-4 ml-1" />
                        إعدادات الشبكة
                      </Button>
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Blockchain Benefits */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-5 w-5 ml-2" />
                  فوائد تقنية البلوك تشين
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4">
                    <Lock className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">الأمان والشفافية</h4>
                    <p className="text-sm text-gray-600">حماية البيانات بتشفير متقدم وشفافية كاملة في المعاملات</p>
                  </div>
                  <div className="text-center p-4">
                    <Database className="h-12 w-12 text-green-600 mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">عدم القابلية للتغيير</h4>
                    <p className="text-sm text-gray-600">سجلات لا يمكن تعديلها أو حذفها مما يضمن سلامة البيانات</p>
                  </div>
                  <div className="text-center p-4">
                    <Zap className="h-12 w-12 text-purple-600 mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">الأتمتة الذكية</h4>
                    <p className="text-sm text-gray-600">عقود ذكية تنفذ تلقائياً عند استيفاء الشروط المحددة</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="iot" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">إنترنت الأشياء (IoT)</h2>
              <Button>
                <Monitor className="h-4 w-4 ml-2" />
                جهاز جديد
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <Monitor className="h-6 w-6 text-blue-600" />
                    </div>
                    <Badge variant="default">متصل</Badge>
                  </div>
                  <h3 className="font-semibold mb-2">أجهزة الحضور الذكية</h3>
                  <p className="text-sm text-gray-600 mb-3">15 جهاز نشط</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>معدل التشغيل</span>
                      <span className="font-medium">99.2%</span>
                    </div>
                    <Progress value={99.2} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-green-100 rounded-lg">
                      <Smartphone className="h-6 w-6 text-green-600" />
                    </div>
                    <Badge variant="default">متصل</Badge>
                  </div>
                  <h3 className="font-semibold mb-2">أجهزة استشعار البيئة</h3>
                  <p className="text-sm text-gray-600 mb-3">8 مستشعر نشط</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>جودة الهواء</span>
                      <span className="font-medium">جيد</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-purple-100 rounded-lg">
                      <Activity className="h-6 w-6 text-purple-600" />
                    </div>
                    <Badge variant="secondary">قيد الصيانة</Badge>
                  </div>
                  <h3 className="font-semibold mb-2">أجهزة مراقبة الصحة</h3>
                  <p className="text-sm text-gray-600 mb-3">3 جهاز</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>الحالة</span>
                      <span className="font-medium">صيانة</span>
                    </div>
                    <Progress value={0} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-amber-100 rounded-lg">
                      <Shield className="h-6 w-6 text-amber-600" />
                    </div>
                    <Badge variant="default">متصل</Badge>
                  </div>
                  <h3 className="font-semibold mb-2">أنظمة الأمان الذكية</h3>
                  <p className="text-sm text-gray-600 mb-3">12 كاميرا نشطة</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>التغطية</span>
                      <span className="font-medium">100%</span>
                    </div>
                    <Progress value={100} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* IoT Dashboard */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Network className="h-5 w-5 ml-2" />
                  لوحة تحكم إنترنت الأشياء
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold">الأجهزة المتصلة</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">أجهزة الحضور</span>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm">15/15</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">مستشعرات البيئة</span>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm">8/8</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">كاميرات الأمان</span>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm">12/12</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold">البيانات في الوقت الفعلي</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">درجة الحرارة</span>
                        <span className="text-sm font-medium">23°C</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">الرطوبة</span>
                        <span className="text-sm font-medium">45%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">جودة الهواء</span>
                        <span className="text-sm font-medium">جيد</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold">التنبيهات</h4>
                    <div className="space-y-2">
                      <div className="p-2 bg-green-50 rounded text-sm">
                        <span className="text-green-800">جميع الأنظمة تعمل بشكل طبيعي</span>
                      </div>
                      <div className="p-2 bg-amber-50 rounded text-sm">
                        <span className="text-amber-800">صيانة مجدولة غداً</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">الأمان المتقدم</h2>
              <Button>
                <Shield className="h-4 w-4 ml-2" />
                إعداد أمني جديد
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Key className="h-5 w-5 ml-2" />
                    المصادقة متعددة العوامل
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">SMS</span>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">تطبيق المصادقة</span>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">البصمة البيومترية</span>
                      <Switch />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">مفاتيح الأمان</span>
                      <Switch />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="h-5 w-5 ml-2" />
                    حماية البيانات
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">تشفير البيانات</span>
                      <Badge variant="default">AES-256</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">النسخ الاحتياطي</span>
                      <Badge variant="default">يومي</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">مراقبة الوصول</span>
                      <Badge variant="default">24/7</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">سجل الأنشطة</span>
                      <Badge variant="default">مفعل</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Monitor className="h-5 w-5 ml-2" />
                    مراقبة الأمان
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                      <p className="text-sm font-medium">لا توجد تهديدات</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>محاولات الدخول المشبوهة</span>
                        <span className="font-medium">0</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>الفيروسات المكتشفة</span>
                        <span className="font-medium">0</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>آخر فحص أمني</span>
                        <span className="font-medium">منذ ساعة</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Security Compliance */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-5 w-5 ml-2" />
                  الامتثال للمعايير الأمنية
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="text-center p-4 border rounded-lg">
                    <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <h4 className="font-semibold">ISO 27001</h4>
                    <p className="text-sm text-gray-600">معتمد</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <h4 className="font-semibold">SOC 2</h4>
                    <p className="text-sm text-gray-600">معتمد</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <h4 className="font-semibold">GDPR</h4>
                    <p className="text-sm text-gray-600">متوافق</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <AlertTriangle className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                    <h4 className="font-semibold">HIPAA</h4>
                    <p className="text-sm text-gray-600">قيد المراجعة</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
