import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Plus, Edit, Trash2, Laptop, Printer, Monitor, RefreshCw, Filter, Phone } from "lucide-react"

export default function InventoryPage() {
  const assets = [
    {
      id: 1,
      name: "كمبيوتر محمول Dell XPS 15",
      type: "كمبيوتر محمول",
      serialNumber: "SN-DXPS15-001",
      assignedTo: "أحمد محمد",
      status: "مخصص",
      purchaseDate: "2023-01-10",
      warrantyEndDate: "2025-01-10",
    },
    {
      id: 2,
      name: "شاشة LG UltraWide",
      type: "شاشة",
      serialNumber: "SN-LGULW-005",
      assignedTo: "فاطمة علي",
      status: "مخصص",
      purchaseDate: "2023-03-15",
      warrantyEndDate: "2026-03-15",
    },
    {
      id: 3,
      name: "طابعة HP LaserJet Pro",
      type: "طابعة",
      serialNumber: "SN-HPLJP-010",
      assignedTo: "المكتب الرئيسي",
      status: "متاح",
      purchaseDate: "2022-07-20",
      warrantyEndDate: "2024-07-20",
    },
    {
      id: 4,
      name: "هاتف iPhone 14 Pro",
      type: "هاتف ذكي",
      serialNumber: "SN-IP14P-003",
      assignedTo: "محمد خالد",
      status: "مخصص",
      purchaseDate: "2023-09-01",
      warrantyEndDate: "2024-09-01",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 rtl" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">إدارة الأصول والمخزون</h1>
          <Button>
            <Plus className="h-4 w-4 ml-2" />
            إضافة أصل جديد
          </Button>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <div className="relative flex-1 w-full md:w-auto">
            <Search className="absolute right-3 rtl:left-3 rtl:right-auto top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="البحث عن أصل..."
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

        {/* Assets List */}
        <div className="space-y-6">
          {assets.map((asset) => (
            <Card key={asset.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    {asset.type === "كمبيوتر محمول" && <Laptop className="h-6 w-6 text-blue-600" />}
                    {asset.type === "شاشة" && <Monitor className="h-6 w-6 text-green-600" />}
                    {asset.type === "طابعة" && <Printer className="h-6 w-6 text-purple-600" />}
                    {asset.type === "هاتف ذكي" && <Phone className="h-6 w-6 text-amber-600" />}
                    <div>
                      <h2 className="text-xl font-bold text-gray-900 mb-1">{asset.name}</h2>
                      <p className="text-gray-600 text-sm">الرقم التسلسلي: {asset.serialNumber}</p>
                    </div>
                  </div>
                  <Badge
                    variant={asset.status === "مخصص" ? "default" : asset.status === "متاح" ? "secondary" : "outline"}
                  >
                    {asset.status}
                  </Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-500">النوع:</p>
                    <p className="font-medium text-sm">{asset.type}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">مخصص لـ:</p>
                    <p className="font-medium text-sm">{asset.assignedTo}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">تاريخ الشراء:</p>
                    <p className="font-medium text-sm">{new Date(asset.purchaseDate).toLocaleDateString("ar-SA")}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-500">تاريخ انتهاء الضمان:</p>
                  <p className="font-medium text-sm">{new Date(asset.warrantyEndDate).toLocaleDateString("ar-SA")}</p>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4 ml-2" />
                    تعديل
                  </Button>
                  <Button variant="outline" size="sm">
                    <RefreshCw className="h-4 w-4 ml-2" />
                    تحديث الحالة
                  </Button>
                  <Button variant="destructive" size="sm">
                    <Trash2 className="h-4 w-4 ml-2" />
                    حذف
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
          {assets.length === 0 && <div className="text-center text-gray-500 py-8">لا توجد أصول حالياً.</div>}
        </div>
      </div>
    </div>
  )
}
