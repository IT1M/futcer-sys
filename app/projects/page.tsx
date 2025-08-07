import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Search, Plus, Edit, Trash2, Users, Filter } from "lucide-react"

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      name: "تطوير نظام إدارة الأداء الجديد",
      description: "تطوير وتطبيق نظام جديد لتقييم الأداء ومتابعة الأهداف.",
      status: "قيد التقدم",
      progress: 75,
      startDate: "2023-10-01",
      endDate: "2024-03-31",
      team: ["أحمد محمد", "سارة أحمد", "خالد السعد"],
    },
    {
      id: 2,
      name: "حملة التوظيف الصيفية 2024",
      description: "إطلاق حملة توظيف واسعة لجذب المواهب الجديدة.",
      status: "مكتمل",
      progress: 100,
      startDate: "2023-06-01",
      endDate: "2023-08-31",
      team: ["فاطمة علي", "محمد خالد"],
    },
    {
      id: 3,
      name: "تحديث سياسات الموارد البشرية",
      description: "مراجعة وتحديث جميع سياسات وإجراءات الموارد البشرية.",
      status: "معلق",
      progress: 30,
      startDate: "2024-01-15",
      endDate: "2024-04-30",
      team: ["أحمد محمد"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 rtl" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">إدارة المشاريع</h1>
          <Button>
            <Plus className="h-4 w-4 ml-2" />
            مشروع جديد
          </Button>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <div className="relative flex-1 w-full md:w-auto">
            <Search className="absolute right-3 rtl:left-3 rtl:right-auto top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="البحث عن مشروع..."
              className="pl-10 rtl:pr-10 rtl:pl-4 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
            />
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <Button variant="outline" className="flex-1 md:flex-none bg-transparent">
              <Filter className="h-4 w-4 ml-2" />
              فلترة
            </Button>
          </div>
        </div>

        {/* Projects List */}
        <div className="space-y-6">
          {projects.map((project) => (
            <Card key={project.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-1">{project.name}</h2>
                    <p className="text-gray-600 text-sm">{project.description}</p>
                  </div>
                  <Badge
                    variant={
                      project.status === "قيد التقدم" ? "default" : project.status === "مكتمل" ? "secondary" : "outline"
                    }
                  >
                    {project.status}
                  </Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-500">تاريخ البدء:</p>
                    <p className="font-medium text-sm">{new Date(project.startDate).toLocaleDateString("ar-SA")}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">تاريخ الانتهاء المتوقع:</p>
                    <p className="font-medium text-sm">{new Date(project.endDate).toLocaleDateString("ar-SA")}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-2">التقدم:</p>
                  <Progress value={project.progress} className="h-2" />
                  <p className="text-sm text-gray-700 mt-1 text-left rtl:text-right">{project.progress}%</p>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-2">فريق العمل:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.team.map((member, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {member}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4 ml-2" />
                    تعديل
                  </Button>
                  <Button variant="outline" size="sm">
                    <Users className="h-4 w-4 ml-2" />
                    إدارة الفريق
                  </Button>
                  <Button variant="destructive" size="sm">
                    <Trash2 className="h-4 w-4 ml-2" />
                    حذف
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
          {projects.length === 0 && <div className="text-center text-gray-500 py-8">لا توجد مشاريع حالياً.</div>}
        </div>
      </div>
    </div>
  )
}
