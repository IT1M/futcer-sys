import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BarChart, LineChart, PieChart, TrendingUp, Users, DollarSign, Calendar, Download, Filter } from "lucide-react"

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 rtl" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">التحليلات المتقدمة</h1>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <div className="flex items-center gap-2">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="اختر الفترة" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="daily">يومي</SelectItem>
                <SelectItem value="weekly">أسبوعي</SelectItem>
                <SelectItem value="monthly">شهري</SelectItem>
                <SelectItem value="quarterly">ربع سنوي</SelectItem>
                <SelectItem value="yearly">سنوي</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Filter className="h-4 w-4 ml-2" />
              تطبيق الفلاتر
            </Button>
          </div>
          <Button>
            <Download className="h-4 w-4 ml-2" />
            تصدير البيانات
          </Button>
        </div>

        <Tabs defaultValue="employees" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
            <TabsTrigger value="employees">الموظفين</TabsTrigger>
            <TabsTrigger value="payroll">الرواتب</TabsTrigger>
            <TabsTrigger value="performance">الأداء</TabsTrigger>
            <TabsTrigger value="recruitment">التوظيف</TabsTrigger>
          </TabsList>

          <TabsContent value="employees" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="h-5 w-5 ml-2" />
                    توزيع الموظفين حسب القسم
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Placeholder for Pie Chart */}
                  <div className="h-64 flex items-center justify-center bg-muted rounded-lg">
                    <PieChart className="h-24 w-24 text-gray-400" />
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-gray-700">
                    <li>التسويق: 25%</li>
                    <li>المحاسبة: 20%</li>
                    <li>تقنية المعلومات: 30%</li>
                    <li>الموارد البشرية: 15%</li>
                    <li>أخرى: 10%</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="h-5 w-5 ml-2" />
                    معدل دوران الموظفين
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Placeholder for Line Chart */}
                  <div className="h-64 flex items-center justify-center bg-muted rounded-lg">
                    <LineChart className="h-24 w-24 text-gray-400" />
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    معدل الدوران الحالي: 8% (انخفاض بنسبة 2% عن الربع السابق)
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="payroll" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <DollarSign className="h-5 w-5 ml-2" />
                    توزيع الرواتب حسب الدرجة الوظيفية
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Placeholder for Bar Chart */}
                  <div className="h-64 flex items-center justify-center bg-muted rounded-lg">
                    <BarChart className="h-24 w-24 text-gray-400" />
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    متوسط الرواتب يختلف بشكل كبير بين الدرجات الوظيفية العليا والدنيا.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="h-5 w-5 ml-2" />
                    تحليل تكاليف الرواتب الشهرية
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Placeholder for Line Chart */}
                  <div className="h-64 flex items-center justify-center bg-muted rounded-lg">
                    <LineChart className="h-24 w-24 text-gray-400" />
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    زيادة طفيفة في تكاليف الرواتب خلال الأشهر الستة الماضية بسبب التوظيف الجديد.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Placeholder for other tabs */}
          <TabsContent value="performance" className="text-center text-gray-500 py-8">
            تحليلات الأداء قيد التطوير.
          </TabsContent>
          <TabsContent value="recruitment" className="text-center text-gray-500 py-8">
            تحليلات التوظيف قيد التطوير.
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
