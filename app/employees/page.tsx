"use client"

import { useState, useEffect, useTransition } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"
import {
  Users,
  UserPlus,
  Search,
  Filter,
  Download,
  Eye,
  Edit,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Briefcase,
  GraduationCap,
  TrendingUp,
  Activity,
  Brain,
  BarChart3,
  Heart,
  ArrowLeft,
  Loader2,
  Trash2,
} from "lucide-react"

// استيراد Server Actions
import {
  getEmployees,
  searchEmployees,
  addEmployee,
  updateEmployee,
  deleteEmployee,
  exportEmployees,
} from "@/actions/employee-actions"
import type { Employee } from "@/lib/types"

export default function EmployeesPage() {
  const [employees, setEmployees] = useState<Employee[]>([])
  const [filteredEmployees, setFilteredEmployees] = useState<Employee[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedDepartment, setSelectedDepartment] = useState("all")
  const [selectedStatus, setSelectedStatus] = useState("all")
  const [isLoading, setIsLoading] = useState(true)
  const [showAddDialog, setShowAddDialog] = useState(false)
  const [showEditDialog, setShowEditDialog] = useState(false)
  const [showDetailsDialog, setShowDetailsDialog] = useState(false)
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null)
  const [isPending, startTransition] = useTransition()

  // تحميل بيانات الموظفين عند تحميل الصفحة
  useEffect(() => {
    loadEmployees()
  }, [])

  // تطبيق الفلاتر عند تغيير المعايير
  useEffect(() => {
    applyFilters()
  }, [employees, searchTerm, selectedDepartment, selectedStatus])

  const loadEmployees = async () => {
    setIsLoading(true)
    try {
      const result = await getEmployees()
      if (result.success && result.data) {
        setEmployees(result.data)
        toast({
          title: "تم تحميل البيانات",
          description: result.message,
        })
      } else {
        toast({
          title: "خطأ",
          description: result.error || "حدث خطأ في تحميل البيانات",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "خطأ",
        description: "حدث خطأ غير متوقع",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const applyFilters = () => {
    let filtered = employees

    // فلترة حسب البحث
    if (searchTerm) {
      filtered = filtered.filter(
        (employee) =>
          employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          employee.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
          employee.position.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    // فلترة حسب القسم
    if (selectedDepartment !== "all") {
      filtered = filtered.filter((employee) => employee.department === selectedDepartment)
    }

    // فلترة حسب الحالة
    if (selectedStatus !== "all") {
      filtered = filtered.filter((employee) => employee.status === selectedStatus)
    }

    setFilteredEmployees(filtered)
  }

  const handleSearch = async (term: string) => {
    setSearchTerm(term)
    if (term.trim()) {
      startTransition(async () => {
        const result = await searchEmployees(term)
        if (result.success && result.data) {
          setFilteredEmployees(result.data)
          toast({
            title: "نتائج البحث",
            description: result.message,
          })
        }
      })
    }
  }

  const handleAddEmployee = async (formData: FormData) => {
    startTransition(async () => {
      const result = await addEmployee(formData)
      if (result.success) {
        toast({
          title: "تم بنجاح",
          description: result.message,
        })
        setShowAddDialog(false)
        loadEmployees()
      } else {
        toast({
          title: "خطأ",
          description: result.error,
          variant: "destructive",
        })
      }
    })
  }

  const handleEditEmployee = async (formData: FormData) => {
    if (!selectedEmployee) return

    startTransition(async () => {
      const result = await updateEmployee(selectedEmployee.id, formData)
      if (result.success) {
        toast({
          title: "تم التحديث",
          description: result.message,
        })
        setShowEditDialog(false)
        setSelectedEmployee(null)
        loadEmployees()
      } else {
        toast({
          title: "خطأ",
          description: result.error,
          variant: "destructive",
        })
      }
    })
  }

  const handleDeleteEmployee = async (employeeId: string) => {
    if (!confirm("هل أنت متأكد من حذف هذا الموظف؟")) return

    startTransition(async () => {
      const result = await deleteEmployee(employeeId)
      if (result.success) {
        toast({
          title: "تم الحذف",
          description: result.message,
        })
        loadEmployees()
      } else {
        toast({
          title: "خطأ",
          description: result.error,
          variant: "destructive",
        })
      }
    })
  }

  const handleExportEmployees = async (format: "excel" | "pdf" = "excel") => {
    startTransition(async () => {
      const result = await exportEmployees(format)
      if (result.success) {
        toast({
          title: "تم التصدير",
          description: result.message,
        })
        // محاكاة تحميل الملف
        const link = document.createElement("a")
        link.href = "#"
        link.download = result.data || "employees_export.xlsx"
        link.click()
      } else {
        toast({
          title: "خطأ",
          description: result.error,
          variant: "destructive",
        })
      }
    })
  }

  const handleViewDetails = (employee: Employee) => {
    setSelectedEmployee(employee)
    setShowDetailsDialog(true)
    toast({
      title: "عرض التفاصيل",
      description: `تم فتح ملف ${employee.name}`,
    })
  }

  const departmentStats = [
    { name: "تقنية المعلومات", count: 45, growth: 12 },
    { name: "الموارد البشرية", count: 15, growth: 5 },
    { name: "المبيعات", count: 62, growth: -3 },
    { name: "المحاسبة", count: 18, growth: 8 },
    { name: "التسويق", count: 28, growth: 15 },
    { name: "خدمة العملاء", count: 35, growth: 7 },
  ]

  const sentimentData = [
    { department: "تقنية المعلومات", positive: 78, neutral: 18, negative: 4 },
    { department: "الموارد البشرية", positive: 85, neutral: 12, negative: 3 },
    { department: "المبيعات", positive: 65, neutral: 25, negative: 10 },
    { department: "المحاسبة", positive: 72, neutral: 22, negative: 6 },
  ]

  if (isLoading) {
    return (
      <div
        className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 rtl flex items-center justify-center"
        dir="rtl"
      >
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
          <p className="text-gray-600">جاري تحميل بيانات الموظفين...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 rtl" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">إدارة الموظفين</h1>
          </div>
          <p className="text-gray-600">نظام شامل لإدارة بيانات الموظفين ومتابعة أدائهم</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">إجمالي الموظفين</p>
                  <p className="text-3xl font-bold text-blue-600">{employees.length}</p>
                  <p className="text-sm text-green-600 flex items-center mt-1">
                    <TrendingUp className="h-4 w-4 ml-1" />
                    +5.2% من الشهر الماضي
                  </p>
                </div>
                <Users className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">الموظفين النشطين</p>
                  <p className="text-3xl font-bold text-green-600">
                    {employees.filter((emp) => emp.status === "نشط").length}
                  </p>
                  <p className="text-sm text-gray-600">
                    {employees.length > 0
                      ? Math.round((employees.filter((emp) => emp.status === "نشط").length / employees.length) * 100)
                      : 0}
                    % من الإجمالي
                  </p>
                </div>
                <Activity className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">متوسط الأداء</p>
                  <p className="text-3xl font-bold text-purple-600">
                    {employees.length > 0
                      ? (employees.reduce((sum, emp) => sum + emp.performanceScore, 0) / employees.length).toFixed(1)
                      : "0"}
                  </p>
                  <p className="text-sm text-purple-600">من 5.0</p>
                </div>
                <BarChart3 className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">معدل الرضا</p>
                  <p className="text-3xl font-bold text-red-600">87%</p>
                  <p className="text-sm text-red-600">استطلاع الرضا الأخير</p>
                </div>
                <Heart className="h-8 w-8 text-red-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* AI Employee Sentiment Analysis */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Brain className="h-5 w-5 ml-2" />
              تحليل مشاعر الموظفين بالذكاء الاصطناعي - Gemini
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {sentimentData.map((dept, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-3">{dept.department}</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-green-700">إيجابي</span>
                      <span className="font-bold text-green-600">{dept.positive}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: `${dept.positive}%` }}></div>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-700">محايد</span>
                      <span className="font-bold text-gray-600">{dept.neutral}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gray-500 h-2 rounded-full" style={{ width: `${dept.neutral}%` }}></div>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-sm text-red-700">سلبي</span>
                      <span className="font-bold text-red-600">{dept.negative}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-red-500 h-2 rounded-full" style={{ width: `${dept.negative}%` }}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Main Content */}
        <Tabs defaultValue="list" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="list">قائمة الموظفين</TabsTrigger>
            <TabsTrigger value="departments">الأقسام</TabsTrigger>
            <TabsTrigger value="analytics">التحليلات</TabsTrigger>
          </TabsList>

          <TabsContent value="list" className="space-y-6">
            {/* Search and Filters */}
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        placeholder="البحث عن موظف..."
                        value={searchTerm}
                        onChange={(e) => handleSearch(e.target.value)}
                        className="pr-10"
                      />
                    </div>
                  </div>

                  <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                    <SelectTrigger className="w-full md:w-48">
                      <SelectValue placeholder="اختر القسم" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">جميع الأقسام</SelectItem>
                      <SelectItem value="تقنية المعلومات">تقنية المعلومات</SelectItem>
                      <SelectItem value="الموارد البشرية">الموارد البشرية</SelectItem>
                      <SelectItem value="المبيعات">المبيعات</SelectItem>
                      <SelectItem value="المحاسبة">المحاسبة</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                    <SelectTrigger className="w-full md:w-48">
                      <SelectValue placeholder="اختر الحالة" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">جميع الحالات</SelectItem>
                      <SelectItem value="نشط">نشط</SelectItem>
                      <SelectItem value="إجازة">إجازة</SelectItem>
                      <SelectItem value="معلق">معلق</SelectItem>
                    </SelectContent>
                  </Select>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      onClick={() => toast({ title: "فلترة متقدمة", description: "تم فتح نموذج الفلترة المتقدمة" })}
                    >
                      <Filter className="h-4 w-4 ml-2" />
                      فلترة متقدمة
                    </Button>
                    <Dialog open={showAddDialog} onOpenChange={setShowAddDialog}>
                      <DialogTrigger asChild>
                        <Button>
                          <UserPlus className="h-4 w-4 ml-2" />
                          موظف جديد
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-md rtl" dir="rtl">
                        <DialogHeader>
                          <DialogTitle>إضافة موظف جديد</DialogTitle>
                        </DialogHeader>
                        <form action={handleAddEmployee} className="space-y-4">
                          <div>
                            <Label htmlFor="name">الاسم الكامل</Label>
                            <Input id="name" name="name" required />
                          </div>
                          <div>
                            <Label htmlFor="email">البريد الإلكتروني</Label>
                            <Input id="email" name="email" type="email" required />
                          </div>
                          <div>
                            <Label htmlFor="phone">رقم الهاتف</Label>
                            <Input id="phone" name="phone" />
                          </div>
                          <div>
                            <Label htmlFor="position">المنصب</Label>
                            <Input id="position" name="position" required />
                          </div>
                          <div>
                            <Label htmlFor="department">القسم</Label>
                            <Select name="department" required>
                              <SelectTrigger>
                                <SelectValue placeholder="اختر القسم" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="تقنية المعلومات">تقنية المعلومات</SelectItem>
                                <SelectItem value="الموارد البشرية">الموارد البشرية</SelectItem>
                                <SelectItem value="المبيعات">المبيعات</SelectItem>
                                <SelectItem value="المحاسبة">المحاسبة</SelectItem>
                                <SelectItem value="التسويق">التسويق</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label htmlFor="salary">الراتب</Label>
                            <Input id="salary" name="salary" type="number" />
                          </div>
                          <div>
                            <Label htmlFor="location">الموقع</Label>
                            <Input id="location" name="location" />
                          </div>
                          <div>
                            <Label htmlFor="joinDate">تاريخ التوظيف</Label>
                            <Input id="joinDate" name="joinDate" type="date" required />
                          </div>
                          <Button type="submit" className="w-full" disabled={isPending}>
                            {isPending ? (
                              <>
                                <Loader2 className="h-4 w-4 ml-2 animate-spin" />
                                جاري الإضافة...
                              </>
                            ) : (
                              "إضافة الموظف"
                            )}
                          </Button>
                        </form>
                      </DialogContent>
                    </Dialog>
                    <Button variant="outline" onClick={() => handleExportEmployees("excel")} disabled={isPending}>
                      {isPending ? (
                        <Loader2 className="h-4 w-4 ml-2 animate-spin" />
                      ) : (
                        <Download className="h-4 w-4 ml-2" />
                      )}
                      تصدير Excel
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Employees List */}
            <div className="space-y-4">
              {filteredEmployees.length > 0 ? (
                filteredEmployees.map((employee) => (
                  <Card key={employee.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 rtl:space-x-reverse">
                          <Avatar className="h-16 w-16">
                            <AvatarImage src={employee.avatar || "/placeholder.svg"} />
                            <AvatarFallback>
                              {employee.name.split(" ")[0][0]}
                              {employee.name.split(" ")[1]?.[0] || ""}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg">{employee.name}</h3>
                            <p className="text-gray-600">{employee.position}</p>
                            <div className="flex items-center gap-6 mt-2 text-sm text-gray-500">
                              <span className="flex items-center gap-1">
                                <Briefcase className="h-3 w-3" />
                                {employee.department}
                              </span>
                              <span className="flex items-center gap-1">
                                <MapPin className="h-3 w-3" />
                                {employee.location}
                              </span>
                              <span className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                {new Date(employee.joinDate).toLocaleDateString("ar-SA")}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="text-left">
                          <Badge
                            variant={
                              employee.status === "نشط"
                                ? "default"
                                : employee.status === "إجازة"
                                  ? "secondary"
                                  : "outline"
                            }
                          >
                            {employee.status}
                          </Badge>
                          <div className="mt-2 text-sm text-gray-600">
                            <p>الأداء: {employee.performanceScore}/5</p>
                            <p>الراتب: {employee.salary.toLocaleString()} ريال</p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="flex items-center gap-2">
                            <Mail className="h-4 w-4 text-gray-500" />
                            <span className="text-sm">{employee.email}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone className="h-4 w-4 text-gray-500" />
                            <span className="text-sm">{employee.phone}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <GraduationCap className="h-4 w-4 text-gray-500" />
                            <span className="text-sm">تقييم الأداء: {employee.performanceScore}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-2 mt-4">
                        <Button variant="outline" size="sm" onClick={() => handleViewDetails(employee)}>
                          <Eye className="h-4 w-4 ml-1" />
                          عرض
                        </Button>
                        <Dialog open={showEditDialog} onOpenChange={setShowEditDialog}>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm" onClick={() => setSelectedEmployee(employee)}>
                              <Edit className="h-4 w-4 ml-1" />
                              تعديل
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-md rtl" dir="rtl">
                            <DialogHeader>
                              <DialogTitle>تعديل بيانات الموظف</DialogTitle>
                            </DialogHeader>
                            {selectedEmployee && (
                              <form action={handleEditEmployee} className="space-y-4">
                                <div>
                                  <Label htmlFor="edit-name">الاسم الكامل</Label>
                                  <Input id="edit-name" name="name" defaultValue={selectedEmployee.name} required />
                                </div>
                                <div>
                                  <Label htmlFor="edit-email">البريد الإلكتروني</Label>
                                  <Input
                                    id="edit-email"
                                    name="email"
                                    type="email"
                                    defaultValue={selectedEmployee.email}
                                    required
                                  />
                                </div>
                                <div>
                                  <Label htmlFor="edit-phone">رقم الهاتف</Label>
                                  <Input id="edit-phone" name="phone" defaultValue={selectedEmployee.phone} />
                                </div>
                                <div>
                                  <Label htmlFor="edit-position">المنصب</Label>
                                  <Input
                                    id="edit-position"
                                    name="position"
                                    defaultValue={selectedEmployee.position}
                                    required
                                  />
                                </div>
                                <div>
                                  <Label htmlFor="edit-salary">الراتب</Label>
                                  <Input
                                    id="edit-salary"
                                    name="salary"
                                    type="number"
                                    defaultValue={selectedEmployee.salary}
                                  />
                                </div>
                                <div>
                                  <Label htmlFor="edit-location">الموقع</Label>
                                  <Input id="edit-location" name="location" defaultValue={selectedEmployee.location} />
                                </div>
                                <Button type="submit" className="w-full" disabled={isPending}>
                                  {isPending ? (
                                    <>
                                      <Loader2 className="h-4 w-4 ml-2 animate-spin" />
                                      جاري التحديث...
                                    </>
                                  ) : (
                                    "تحديث البيانات"
                                  )}
                                </Button>
                              </form>
                            )}
                          </DialogContent>
                        </Dialog>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDeleteEmployee(employee.id)}
                          disabled={isPending}
                          className="text-red-600 hover:text-red-700"
                        >
                          {isPending ? (
                            <Loader2 className="h-4 w-4 ml-1 animate-spin" />
                          ) : (
                            <Trash2 className="h-4 w-4 ml-1" />
                          )}
                          حذف
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="text-center text-gray-500 py-8">
                  <Users className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                  <h3 className="text-lg font-medium text-gray-900 mb-1">لا توجد موظفين</h3>
                  <p className="text-gray-500 mb-4">
                    {searchTerm || selectedDepartment !== "all" || selectedStatus !== "all"
                      ? "لا توجد موظفين يطابقون معايير البحث"
                      : "لم يتم إضافة أي موظفين بعد"}
                  </p>
                  <Button onClick={() => setShowAddDialog(true)}>
                    <UserPlus className="h-4 w-4 ml-2" />
                    إضافة موظف جديد
                  </Button>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="departments" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {departmentStats.map((department, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-lg">{department.name}</h3>
                      <Badge
                        variant={
                          department.growth > 0 ? "default" : department.growth < 0 ? "destructive" : "secondary"
                        }
                      >
                        {department.growth > 0 ? "+" : ""}
                        {department.growth}%
                      </Badge>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-blue-600">{department.count}</p>
                      <p className="text-sm text-gray-600">موظف</p>
                    </div>
                    <div className="mt-4">
                      <Progress value={Math.min((department.count / 70) * 100, 100)} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="h-5 w-5 ml-2" />
                    إحصائيات الأداء
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">أداء ممتاز (4.5+)</span>
                      <span className="font-bold text-green-600">
                        {employees.filter((emp) => emp.performanceScore >= 4.5).length}
                      </span>
                    </div>
                    <Progress
                      value={
                        employees.length > 0
                          ? (employees.filter((emp) => emp.performanceScore >= 4.5).length / employees.length) * 100
                          : 0
                      }
                      className="h-2"
                    />

                    <div className="flex justify-between items-center">
                      <span className="text-sm">أداء جيد (3.5-4.4)</span>
                      <span className="font-bold text-blue-600">
                        {employees.filter((emp) => emp.performanceScore >= 3.5 && emp.performanceScore < 4.5).length}
                      </span>
                    </div>
                    <Progress
                      value={
                        employees.length > 0
                          ? (employees.filter((emp) => emp.performanceScore >= 3.5 && emp.performanceScore < 4.5)
                              .length /
                              employees.length) *
                            100
                          : 0
                      }
                      className="h-2"
                    />

                    <div className="flex justify-between items-center">
                      <span className="text-sm">أداء متوسط (2.5-3.4)</span>
                      <span className="font-bold text-amber-600">
                        {employees.filter((emp) => emp.performanceScore >= 2.5 && emp.performanceScore < 3.5).length}
                      </span>
                    </div>
                    <Progress
                      value={
                        employees.length > 0
                          ? (employees.filter((emp) => emp.performanceScore >= 2.5 && emp.performanceScore < 3.5)
                              .length /
                              employees.length) *
                            100
                          : 0
                      }
                      className="h-2"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="h-5 w-5 ml-2" />
                    اتجاهات التوظيف
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-green-900">موظفين جدد هذا الشهر</h4>
                      <p className="text-2xl font-bold text-green-600">
                        {
                          employees.filter((emp) => {
                            const joinDate = new Date(emp.joinDate)
                            const now = new Date()
                            return (
                              joinDate.getMonth() === now.getMonth() && joinDate.getFullYear() === now.getFullYear()
                            )
                          }).length
                        }
                      </p>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-900">متوسط وقت التوظيف</h4>
                      <p className="text-2xl font-bold text-blue-600">18 يوم</p>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <h4 className="font-semibold text-purple-900">معدل الاحتفاظ</h4>
                      <p className="text-2xl font-bold text-purple-600">94.2%</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Employee Details Dialog */}
        <Dialog open={showDetailsDialog} onOpenChange={setShowDetailsDialog}>
          <DialogContent className="max-w-2xl rtl" dir="rtl">
            <DialogHeader>
              <DialogTitle>تفاصيل الموظف</DialogTitle>
            </DialogHeader>
            {selectedEmployee && (
              <div className="space-y-6">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src={selectedEmployee.avatar || "/placeholder.svg"} />
                    <AvatarFallback className="text-lg">
                      {selectedEmployee.name.split(" ")[0][0]}
                      {selectedEmployee.name.split(" ")[1]?.[0] || ""}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-bold">{selectedEmployee.name}</h3>
                    <p className="text-gray-600">{selectedEmployee.position}</p>
                    <Badge className="mt-1">{selectedEmployee.status}</Badge>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold">المعلومات الشخصية</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-gray-500" />
                        <span className="text-sm">{selectedEmployee.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-gray-500" />
                        <span className="text-sm">{selectedEmployee.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-gray-500" />
                        <span className="text-sm">{selectedEmployee.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold">معلومات العمل</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Briefcase className="h-4 w-4 text-gray-500" />
                        <span className="text-sm">{selectedEmployee.department}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-gray-500" />
                        <span className="text-sm">
                          تاريخ التوظيف: {new Date(selectedEmployee.joinDate).toLocaleDateString("ar-SA")}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <GraduationCap className="h-4 w-4 text-gray-500" />
                        <span className="text-sm">تقييم الأداء: {selectedEmployee.performanceScore}/5</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">الراتب الشهري</span>
                    <span className="text-lg font-bold text-green-600">
                      {selectedEmployee.salary.toLocaleString()} ريال
                    </span>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
