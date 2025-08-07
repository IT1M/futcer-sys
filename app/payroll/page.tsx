"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DollarSign,
  TrendingUp,
  Calculator,
  FileText,
  Download,
  CreditCard,
  PieChart,
  BarChart3,
  AlertCircle,
  CheckCircle,
  Clock,
  Building2,
} from "lucide-react"

export default function PayrollPage() {
  const [selectedMonth, setSelectedMonth] = useState("2024-01")

  const payrollStats = {
    totalPayroll: 2450000,
    totalEmployees: 247,
    averageSalary: 9919,
    totalDeductions: 245000,
    totalBenefits: 367500,
    gosiContribution: 147000,
    pendingApprovals: 12,
  }

  const departmentPayroll = [
    { department: "تقنية المعلومات", employees: 45, totalSalary: 810000, avgSalary: 18000 },
    { department: "المبيعات", employees: 62, totalSalary: 744000, avgSalary: 12000 },
    { department: "التسويق", employees: 28, totalSalary: 420000, avgSalary: 15000 },
    { department: "المحاسبة", employees: 18, totalSalary: 270000, avgSalary: 15000 },
    { department: "الموارد البشرية", employees: 15, totalSalary: 206250, avgSalary: 13750 },
  ]

  const recentTransactions = [
    { id: 1, employee: "أحمد محمد السعد", amount: 15000, type: "راتب", status: "مكتمل", date: "2024-01-01" },
    { id: 2, employee: "فاطمة علي الأحمد", amount: 5000, type: "سلفة", status: "معلق", date: "2024-01-02" },
    { id: 3, employee: "محمد خالد العتيبي", amount: 18000, type: "راتب", status: "مكتمل", date: "2024-01-01" },
    { id: 4, employee: "سارة أحمد القحطاني", amount: 2000, type: "مكافأة", status: "قيد المراجعة", date: "2024-01-03" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 rtl" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">إدارة الرواتب والمزايا</h1>
          <p className="text-gray-600">نظام شامل لإدارة الرواتب والمزايا والامتثال للتأمينات الاجتماعية</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm">إجمالي الرواتب الشهرية</p>
                  <p className="text-3xl font-bold">{payrollStats.totalPayroll.toLocaleString()}</p>
                  <p className="text-blue-100 text-sm">ريال سعودي</p>
                </div>
                <DollarSign className="h-8 w-8 text-blue-200" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">متوسط الراتب</p>
                  <p className="text-3xl font-bold text-green-600">{payrollStats.averageSalary.toLocaleString()}</p>
                  <p className="text-green-600 text-sm flex items-center">
                    <TrendingUp className="h-4 w-4 ml-1" />
                    +3.2% من الشهر الماضي
                  </p>
                </div>
                <Calculator className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">مساهمة التأمينات</p>
                  <p className="text-3xl font-bold text-purple-600">{payrollStats.gosiContribution.toLocaleString()}</p>
                  <p className="text-purple-600 text-sm">ريال سعودي</p>
                </div>
                <Building2 className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">طلبات معلقة</p>
                  <p className="text-3xl font-bold text-amber-600">{payrollStats.pendingApprovals}</p>
                  <p className="text-amber-600 text-sm">تحتاج موافقة</p>
                </div>
                <Clock className="h-8 w-8 text-amber-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5">
            <TabsTrigger value="overview">نظرة عامة</TabsTrigger>
            <TabsTrigger value="departments">الأقسام</TabsTrigger>
            <TabsTrigger value="gosi">التأمينات</TabsTrigger>
            <TabsTrigger value="loans">القروض</TabsTrigger>
            <TabsTrigger value="reports">التقارير</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Payroll Breakdown */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <PieChart className="h-5 w-5 ml-2" />
                    تفصيل الرواتب الشهرية
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">الرواتب الأساسية</span>
                      <span className="text-sm font-bold">1,960,000 ريال</span>
                    </div>
                    <Progress value={80} className="h-2" />

                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">البدلات والمزايا</span>
                      <span className="text-sm font-bold">367,500 ريال</span>
                    </div>
                    <Progress value={15} className="h-2" />

                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">المكافآت</span>
                      <span className="text-sm font-bold">122,500 ريال</span>
                    </div>
                    <Progress value={5} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              {/* Recent Transactions */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CreditCard className="h-5 w-5 ml-2" />
                    المعاملات الأخيرة
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {recentTransactions.map((transaction) => (
                      <div key={transaction.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium text-sm">{transaction.employee}</p>
                          <p className="text-xs text-gray-600">
                            {transaction.type} - {transaction.date}
                          </p>
                        </div>
                        <div className="text-left">
                          <p className="font-bold text-sm">{transaction.amount.toLocaleString()} ريال</p>
                          <Badge
                            variant={
                              transaction.status === "مكتمل"
                                ? "default"
                                : transaction.status === "معلق"
                                  ? "secondary"
                                  : "outline"
                            }
                            className="text-xs"
                          >
                            {transaction.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Approval Queue */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center">
                    <AlertCircle className="h-5 w-5 ml-2" />
                    طابور الموافقات المالية
                  </span>
                  <Badge variant="secondary">{payrollStats.pendingApprovals}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg border-r-4 border-red-500">
                    <div>
                      <p className="font-medium">طلب سلفة عاجلة</p>
                      <p className="text-sm text-gray-600">محمد أحمد - 10,000 ريال</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        رفض
                      </Button>
                      <Button size="sm">موافقة</Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-amber-50 rounded-lg border-r-4 border-amber-500">
                    <div>
                      <p className="font-medium">مكافأة أداء</p>
                      <p className="text-sm text-gray-600">فاطمة علي - 5,000 ريال</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        مراجعة
                      </Button>
                      <Button size="sm">موافقة</Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border-r-4 border-blue-500">
                    <div>
                      <p className="font-medium">تعديل راتب</p>
                      <p className="text-sm text-gray-600">سارة محمد - زيادة 2,000 ريال</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        مراجعة
                      </Button>
                      <Button size="sm">موافقة</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="departments" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="h-5 w-5 ml-2" />
                  توزيع الرواتب حسب الأقسام
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {departmentPayroll.map((dept, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex justify-between items-center mb-3">
                        <div>
                          <h3 className="font-semibold">{dept.department}</h3>
                          <p className="text-sm text-gray-600">{dept.employees} موظف</p>
                        </div>
                        <div className="text-left">
                          <p className="font-bold text-lg">{dept.totalSalary.toLocaleString()} ريال</p>
                          <p className="text-sm text-gray-600">متوسط: {dept.avgSalary.toLocaleString()} ريال</p>
                        </div>
                      </div>
                      <Progress value={(dept.totalSalary / payrollStats.totalPayroll) * 100} className="h-2" />
                      <p className="text-xs text-gray-500 mt-1">
                        {((dept.totalSalary / payrollStats.totalPayroll) * 100).toFixed(1)}% من إجمالي الرواتب
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="gosi" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Building2 className="h-5 w-5 ml-2" />
                    حاسبة التأمينات الاجتماعية
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">مساهمة صاحب العمل</h4>
                      <div className="flex justify-between">
                        <span>التأمينات العامة (12%)</span>
                        <span className="font-bold">294,000 ريال</span>
                      </div>
                      <div className="flex justify-between">
                        <span>إصابات العمل (2%)</span>
                        <span className="font-bold">49,000 ريال</span>
                      </div>
                      <div className="flex justify-between border-t pt-2 mt-2">
                        <span className="font-bold">الإجمالي</span>
                        <span className="font-bold">343,000 ريال</span>
                      </div>
                    </div>

                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-green-900 mb-2">مساهمة الموظف</h4>
                      <div className="flex justify-between">
                        <span>التأمينات العامة (10%)</span>
                        <span className="font-bold">245,000 ريال</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle className="h-5 w-5 ml-2" />
                    حالة الامتثال
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <span className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-600 ml-2" />
                        التقرير الشهري
                      </span>
                      <Badge variant="default">مكتمل</Badge>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <span className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-600 ml-2" />
                        دفع المساهمات
                      </span>
                      <Badge variant="default">مكتمل</Badge>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-amber-50 rounded-lg">
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 text-amber-600 ml-2" />
                        تحديث البيانات
                      </span>
                      <Badge variant="secondary">قيد التنفيذ</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="loans" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>القروض النشطة</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-blue-600 mb-2">23</div>
                  <p className="text-sm text-gray-600">إجمالي القروض</p>
                  <Progress value={65} className="mt-2" />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>المبلغ المستحق</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-red-600 mb-2">450,000</div>
                  <p className="text-sm text-gray-600">ريال سعودي</p>
                  <Progress value={45} className="mt-2" />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>الأقساط الشهرية</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-600 mb-2">75,000</div>
                  <p className="text-sm text-gray-600">ريال سعودي</p>
                  <Progress value={80} className="mt-2" />
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>إدارة القروض والسلف</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">أحمد محمد السعد</p>
                      <p className="text-sm text-gray-600">قرض شخصي - 50,000 ريال</p>
                      <p className="text-xs text-gray-500">المتبقي: 35,000 ريال</p>
                    </div>
                    <div className="text-left">
                      <Badge variant="default">نشط</Badge>
                      <p className="text-sm mt-1">القسط: 2,500 ريال</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">فاطمة علي الأحمد</p>
                      <p className="text-sm text-gray-600">سلفة راتب - 15,000 ريال</p>
                      <p className="text-xs text-gray-500">المتبقي: 10,000 ريال</p>
                    </div>
                    <div className="text-left">
                      <Badge variant="secondary">قيد السداد</Badge>
                      <p className="text-sm mt-1">القسط: 1,500 ريال</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="h-5 w-5 ml-2" />
                    التقارير المالية
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      <Download className="h-4 w-4 ml-2" />
                      تقرير الرواتب الشهري
                    </Button>
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      <Download className="h-4 w-4 ml-2" />
                      تقرير التأمينات الاجتماعية
                    </Button>
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      <Download className="h-4 w-4 ml-2" />
                      تقرير القروض والسلف
                    </Button>
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      <Download className="h-4 w-4 ml-2" />
                      تقرير الضرائب والزكاة
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="h-5 w-5 ml-2" />
                    التحليلات المتقدمة
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-900">تحليل التكاليف</h4>
                      <p className="text-sm text-blue-700">انخفاض في التكاليف بنسبة 5% مقارنة بالشهر الماضي</p>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-green-900">كفاءة الرواتب</h4>
                      <p className="text-sm text-green-700">نسبة الرواتب إلى الإيرادات: 35% (ضمن المعدل المثالي)</p>
                    </div>
                    <div className="p-3 bg-amber-50 rounded-lg">
                      <h4 className="font-semibold text-amber-900">توقعات الميزانية</h4>
                      <p className="text-sm text-amber-700">متوقع زيادة 8% في الربع القادم</p>
                    </div>
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
