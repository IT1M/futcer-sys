"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrendingUp, TrendingDown, Award, Users, Calendar, BarChart3, PieChart } from "lucide-react"

interface PerformanceAnalyticsProps {
  data: {
    overallPerformance: number
    departmentPerformance: Array<{
      department: string
      average: number
      trend: "up" | "down" | "stable"
      employeeCount: number
    }>
    topPerformers: Array<{
      name: string
      score: number
      department: string
      improvement: number
    }>
    performanceDistribution: Array<{
      range: string
      count: number
      percentage: number
    }>
    monthlyTrends: Array<{
      month: string
      average: number
    }>
  }
}

export function PerformanceAnalytics({ data }: PerformanceAnalyticsProps) {
  return (
    <div className="space-y-6">
      {/* Overall Performance Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">متوسط الأداء العام</p>
                <p className="text-3xl font-bold text-green-600">{data.overallPerformance}</p>
                <p className="text-xs text-gray-500">من 5</p>
              </div>
              <div className="p-3 bg-green-100 rounded-lg">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">أفضل قسم</p>
                <p className="text-lg font-bold">
                  {data.departmentPerformance.sort((a, b) => b.average - a.average)[0]?.department}
                </p>
                <p className="text-xs text-gray-500">
                  {data.departmentPerformance.sort((a, b) => b.average - a.average)[0]?.average}/5
                </p>
              </div>
              <div className="p-3 bg-blue-100 rounded-lg">
                <Award className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">المتفوقون</p>
                <p className="text-3xl font-bold text-purple-600">{data.topPerformers.length}</p>
                <p className="text-xs text-gray-500">موظف متفوق</p>
              </div>
              <div className="p-3 bg-purple-100 rounded-lg">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">التحسن الشهري</p>
                <p className="text-3xl font-bold text-indigo-600">+12%</p>
                <p className="text-xs text-gray-500">مقارنة بالشهر الماضي</p>
              </div>
              <div className="p-3 bg-indigo-100 rounded-lg">
                <TrendingUp className="h-6 w-6 text-indigo-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="departments" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="departments">الأقسام</TabsTrigger>
          <TabsTrigger value="performers">المتفوقون</TabsTrigger>
          <TabsTrigger value="distribution">التوزيع</TabsTrigger>
          <TabsTrigger value="trends">الاتجاهات</TabsTrigger>
        </TabsList>

        <TabsContent value="departments" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                أداء الأقسام
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {data.departmentPerformance.map((dept, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{dept.department}</span>
                        <Badge variant="outline" className="text-xs">
                          {dept.employeeCount} موظف
                        </Badge>
                        {dept.trend === "up" && <TrendingUp className="h-4 w-4 text-green-500" />}
                        {dept.trend === "down" && <TrendingDown className="h-4 w-4 text-red-500" />}
                      </div>
                      <span className="font-bold">{dept.average}/5</span>
                    </div>
                    <Progress value={dept.average * 20} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performers" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                أفضل الموظفين
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {data.topPerformers.map((performer, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-8 h-8 bg-yellow-100 rounded-full">
                        <span className="text-sm font-bold text-yellow-600">#{index + 1}</span>
                      </div>
                      <div>
                        <h4 className="font-medium">{performer.name}</h4>
                        <p className="text-sm text-gray-600">{performer.department}</p>
                      </div>
                    </div>
                    <div className="text-left">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-lg">{performer.score}/5</span>
                        {performer.improvement > 0 && (
                          <Badge variant="default" className="text-xs">
                            +{performer.improvement}%
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="distribution" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PieChart className="h-5 w-5" />
                توزيع درجات الأداء
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {data.performanceDistribution.map((range, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{range.range}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">{range.count} موظف</span>
                        <span className="font-bold">{range.percentage}%</span>
                      </div>
                    </div>
                    <Progress value={range.percentage} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="trends" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                اتجاهات الأداء الشهرية
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {data.monthlyTrends.map((trend, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <span className="font-medium">{trend.month}</span>
                    <div className="flex items-center gap-2">
                      <span className="font-bold">{trend.average}/5</span>
                      <div className="w-24">
                        <Progress value={trend.average * 20} className="h-2" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
