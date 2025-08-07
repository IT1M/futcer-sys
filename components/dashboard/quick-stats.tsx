"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Calendar, GraduationCap, TrendingUp, Clock, CheckCircle, AlertTriangle } from "lucide-react"

interface QuickStatsProps {
  stats: {
    totalEmployees: number
    activeEmployees: number
    pendingLeaves: number
    completedTrainings: number
    averagePerformance: number
    monthlyGrowth: number
    pendingApprovals: number
    upcomingReviews: number
  }
}

export function QuickStats({ stats }: QuickStatsProps) {
  const statCards = [
    {
      title: "إجمالي الموظفين",
      value: stats.totalEmployees,
      change: `+${stats.monthlyGrowth}%`,
      changeType: "positive" as const,
      icon: Users,
      color: "blue",
    },
    {
      title: "الموظفون النشطون",
      value: stats.activeEmployees,
      subtitle: `من أصل ${stats.totalEmployees}`,
      icon: CheckCircle,
      color: "green",
    },
    {
      title: "طلبات الإجازة المعلقة",
      value: stats.pendingLeaves,
      urgent: stats.pendingLeaves > 10,
      icon: Calendar,
      color: stats.pendingLeaves > 10 ? "red" : "orange",
    },
    {
      title: "الدورات المكتملة",
      value: stats.completedTrainings,
      change: "هذا الشهر",
      icon: GraduationCap,
      color: "purple",
    },
    {
      title: "متوسط تقييم الأداء",
      value: stats.averagePerformance,
      suffix: "/5",
      icon: TrendingUp,
      color: "indigo",
    },
    {
      title: "الموافقات المعلقة",
      value: stats.pendingApprovals,
      urgent: stats.pendingApprovals > 5,
      icon: Clock,
      color: stats.pendingApprovals > 5 ? "red" : "yellow",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {statCards.map((stat, index) => {
        const Icon = stat.icon
        return (
          <Card key={index} className="relative overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">{stat.title}</CardTitle>
              <div className={`p-2 rounded-lg bg-${stat.color}-100`}>
                <Icon className={`h-4 w-4 text-${stat.color}-600`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline space-x-2 rtl:space-x-reverse">
                <div className="text-2xl font-bold">
                  {typeof stat.value === "number" ? stat.value.toLocaleString() : stat.value}
                  {stat.suffix && <span className="text-lg text-gray-500">{stat.suffix}</span>}
                </div>
                {stat.change && (
                  <Badge variant={stat.changeType === "positive" ? "default" : "secondary"} className="text-xs">
                    {stat.change}
                  </Badge>
                )}
                {stat.urgent && (
                  <Badge variant="destructive" className="text-xs">
                    <AlertTriangle className="h-3 w-3 ml-1" />
                    عاجل
                  </Badge>
                )}
              </div>
              {stat.subtitle && <p className="text-xs text-gray-500 mt-1">{stat.subtitle}</p>}
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
