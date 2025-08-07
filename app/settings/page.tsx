"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Settings,
  User,
  Bell,
  Database,
  Shield,
  Globe,
  Palette,
  Clock,
  Key,
  Download,
  Upload,
  Save,
  RefreshCw,
  AlertTriangle,
  CheckCircle,
} from "lucide-react"

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(false)
  const [notifications, setNotifications] = useState(true)
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [smsNotifications, setSmsNotifications] = useState(false)
  const [autoBackup, setAutoBackup] = useState(true)
  const [language, setLanguage] = useState("ar")
  const [timezone, setTimezone] = useState("Asia/Riyadh")

  const systemStats = {
    totalUsers: 275,
    activeUsers: 258,
    storageUsed: 45.2,
    storageTotal: 100,
    lastBackup: "2024-01-25 14:30",
    systemUptime: "99.9%",
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 rtl" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">إعدادات النظام</h1>
          <p className="text-gray-600">إدارة إعدادات النظام والتفضيلات الشخصية</p>
        </div>

        {/* System Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">المستخدمين النشطين</p>
                  <p className="text-2xl font-bold text-green-600">{systemStats.activeUsers}</p>
                  <p className="text-xs text-gray-500">من {systemStats.totalUsers} إجمالي</p>
                </div>
                <User className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">استخدام التخزين</p>
                  <p className="text-2xl font-bold text-blue-600">{systemStats.storageUsed}%</p>
                  <p className="text-xs text-gray-500">من {systemStats.storageTotal} جيجا</p>
                </div>
                <Database className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">آخر نسخة احتياطية</p>
                  <p className="text-lg font-bold text-purple-600">اليوم</p>
                  <p className="text-xs text-gray-500">{systemStats.lastBackup}</p>
                </div>
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">وقت التشغيل</p>
                  <p className="text-2xl font-bold text-amber-600">{systemStats.systemUptime}</p>
                  <p className="text-xs text-gray-500">هذا الشهر</p>
                </div>
                <CheckCircle className="h-8 w-8 text-amber-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Settings Tabs */}
        <Tabs defaultValue="general" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6">
            <TabsTrigger value="general">عام</TabsTrigger>
            <TabsTrigger value="account">الحساب</TabsTrigger>
            <TabsTrigger value="notifications">الإشعارات</TabsTrigger>
            <TabsTrigger value="security">الأمان</TabsTrigger>
            <TabsTrigger value="system">النظام</TabsTrigger>
            <TabsTrigger value="backup">النسخ الاحتياطي</TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Settings className="h-5 w-5 ml-2" />
                    الإعدادات العامة
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">اللغة الافتراضية</h4>
                      <p className="text-sm text-gray-600">تحديد اللغة الافتراضية للنظام</p>
                    </div>
                    <Select value={language} onValueChange={setLanguage}>
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ar">العربية</SelectItem>
                        <SelectItem value="en">English</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">المنطقة الزمنية</h4>
                      <p className="text-sm text-gray-600">تحديد المنطقة الزمنية للنظام</p>
                    </div>
                    <Select value={timezone} onValueChange={setTimezone}>
                      <SelectTrigger className="w-40">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Asia/Riyadh">الرياض</SelectItem>
                        <SelectItem value="Asia/Dubai">دبي</SelectItem>
                        <SelectItem value="Asia/Kuwait">الكويت</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">الوضع الداكن</h4>
                      <p className="text-sm text-gray-600">تفعيل الوضع الداكن لواجهة المستخدم</p>
                    </div>
                    <Switch checked={darkMode} onCheckedChange={setDarkMode} />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">تفعيل الإشعارات</h4>
                      <p className="text-sm text-gray-600">تلقي إشعارات النظام</p>
                    </div>
                    <Switch checked={notifications} onCheckedChange={setNotifications} />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Palette className="h-5 w-5 ml-2" />
                    تخصيص الواجهة
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">لون النظام الأساسي</label>
                    <div className="flex gap-3">
                      {["blue", "green", "purple", "red", "amber"].map((color) => (
                        <div
                          key={color}
                          className={`w-8 h-8 rounded-full cursor-pointer border-2 border-gray-300 bg-${color}-500`}
                        ></div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">حجم الخط</label>
                    <Select defaultValue="medium">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="small">صغير</SelectItem>
                        <SelectItem value="medium">متوسط</SelectItem>
                        <SelectItem value="large">كبير</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">كثافة المحتوى</label>
                    <Select defaultValue="comfortable">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="compact">مضغوط</SelectItem>
                        <SelectItem value="comfortable">مريح</SelectItem>
                        <SelectItem value="spacious">واسع</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="account" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <User className="h-5 w-5 ml-2" />
                    معلومات الحساب
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">الاسم الكامل</label>
                    <Input type="text" defaultValue="أحمد محمد السعد" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">البريد الإلكتروني</label>
                    <Input type="email" defaultValue="ahmed.saad@company.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">رقم الهاتف</label>
                    <Input type="tel" defaultValue="+966501234567" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">المنصب</label>
                    <Input type="text" defaultValue="مطور برمجيات أول" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">القسم</label>
                    <Select defaultValue="it">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="it">تقنية المعلومات</SelectItem>
                        <SelectItem value="hr">الموارد البشرية</SelectItem>
                        <SelectItem value="finance">المالية</SelectItem>
                        <SelectItem value="marketing">التسويق</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button className="w-full">
                    <Save className="h-4 w-4 ml-2" />
                    حفظ التغييرات
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Key className="h-5 w-5 ml-2" />
                    تغيير كلمة المرور
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">كلمة المرور الحالية</label>
                    <Input type="password" placeholder="أدخل كلمة المرور الحالية" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">كلمة المرور الجديدة</label>
                    <Input type="password" placeholder="أدخل كلمة مرور جديدة" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">تأكيد كلمة المرور</label>
                    <Input type="password" placeholder="أعد إدخال كلمة المرور الجديدة" />
                  </div>
                  <div className="p-3 bg-amber-50 rounded-lg border border-amber-200">
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-amber-600 mt-0.5" />
                      <div className="text-sm text-amber-800">
                        <p className="font-medium">متطلبات كلمة المرور:</p>
                        <ul className="mt-1 space-y-1 text-xs">
                          <li>• على الأقل 8 أحرف</li>
                          <li>• حرف كبير وصغير</li>
                          <li>• رقم واحد على الأقل</li>
                          <li>• رمز خاص واحد على الأقل</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full">
                    <Key className="h-4 w-4 ml-2" />
                    تحديث كلمة المرور
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Bell className="h-5 w-5 ml-2" />
                    إعدادات الإشعارات
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">إشعارات البريد الإلكتروني</h4>
                      <p className="text-sm text-gray-600">تلقي الإشعارات عبر البريد الإلكتروني</p>
                    </div>
                    <Switch checked={emailNotifications} onCheckedChange={setEmailNotifications} />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">إشعارات داخل التطبيق</h4>
                      <p className="text-sm text-gray-600">تلقي الإشعارات داخل النظام</p>
                    </div>
                    <Switch checked={notifications} onCheckedChange={setNotifications} />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">إشعارات الرسائل القصيرة</h4>
                      <p className="text-sm text-gray-600">تلقي الإشعارات عبر الرسائل القصيرة</p>
                    </div>
                    <Switch checked={smsNotifications} onCheckedChange={setSmsNotifications} />
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-medium mb-3">أنواع الإشعارات</h4>
                    <div className="space-y-3">
                      {[
                        { label: "طلبات الإجازة", enabled: true },
                        { label: "تحديثات الراتب", enabled: true },
                        { label: "تقييمات الأداء", enabled: false },
                        { label: "التدريب والتطوير", enabled: true },
                        { label: "الإعلانات العامة", enabled: false },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <span className="text-sm">{item.label}</span>
                          <Switch defaultChecked={item.enabled} />
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="h-5 w-5 ml-2" />
                    توقيت الإشعارات
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">ساعات العمل</label>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-gray-600 mb-1">من</label>
                        <Input type="time" defaultValue="08:00" />
                      </div>
                      <div>
                        <label className="block text-xs text-gray-600 mb-1">إلى</label>
                        <Input type="time" defaultValue="17:00" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">أيام العمل</label>
                    <div className="grid grid-cols-2 gap-2">
                      {["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"].map((day, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            id={day}
                            defaultChecked={index < 5}
                            className="rounded border-gray-300"
                          />
                          <label htmlFor={day} className="text-sm">
                            {day}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">تكرار الإشعارات</label>
                    <Select defaultValue="immediate">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="immediate">فوري</SelectItem>
                        <SelectItem value="hourly">كل ساعة</SelectItem>
                        <SelectItem value="daily">يومي</SelectItem>
                        <SelectItem value="weekly">أسبوعي</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="security" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="h-5 w-5 ml-2" />
                    إعدادات الأمان
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">المصادقة الثنائية</h4>
                      <p className="text-sm text-gray-600">تفعيل المصادقة الثنائية للحماية الإضافية</p>
                    </div>
                    <Badge variant="outline">غير مفعل</Badge>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">تسجيل الخروج التلقائي</h4>
                      <p className="text-sm text-gray-600">تسجيل الخروج بعد فترة عدم نشاط</p>
                    </div>
                    <Select defaultValue="30">
                      <SelectTrigger className="w-24">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="15">15 دقيقة</SelectItem>
                        <SelectItem value="30">30 دقيقة</SelectItem>
                        <SelectItem value="60">ساعة</SelectItem>
                        <SelectItem value="never">أبداً</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-medium mb-3">الجلسات النشطة</h4>
                    <div className="space-y-3">
                      {[
                        { device: "Chrome - Windows", location: "الرياض، السعودية", current: true },
                        { device: "Safari - iPhone", location: "جدة، السعودية", current: false },
                        { device: "Chrome - Android", location: "الدمام، السعودية", current: false },
                      ].map((session, index) => (
                        <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                          <div>
                            <p className="text-sm font-medium">{session.device}</p>
                            <p className="text-xs text-gray-600">{session.location}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            {session.current && (
                              <Badge variant="default" className="text-xs">
                                الحالية
                              </Badge>
                            )}
                            {!session.current && (
                              <Button variant="outline" size="sm">
                                إنهاء الجلسة
                              </Button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Key className="h-5 w-5 ml-2" />
                    سجل الأنشطة الأمنية
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      {
                        action: "تسجيل دخول ناجح",
                        time: "منذ 5 دقائق",
                        ip: "192.168.1.100",
                        status: "success",
                      },
                      {
                        action: "تغيير كلمة المرور",
                        time: "منذ يومين",
                        ip: "192.168.1.100",
                        status: "success",
                      },
                      {
                        action: "محاولة دخول فاشلة",
                        time: "منذ أسبوع",
                        ip: "203.0.113.1",
                        status: "warning",
                      },
                    ].map((activity, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="text-sm font-medium">{activity.action}</p>
                          <p className="text-xs text-gray-600">IP: {activity.ip}</p>
                        </div>
                        <div className="text-left">
                          <Badge
                            variant={
                              activity.status === "success"
                                ? "default"
                                : activity.status === "warning"
                                  ? "destructive"
                                  : "secondary"
                            }
                            className="text-xs mb-1"
                          >
                            {activity.status === "success" ? "نجح" : "تحذير"}
                          </Badge>
                          <p className="text-xs text-gray-500">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="system" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Database className="h-5 w-5 ml-2" />
                    إعدادات النظام
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">حد المستخدمين المتزامنين</label>
                    <Input type="number" defaultValue="500" />
                    <p className="text-xs text-gray-600 mt-1">الحد الأقصى للمستخدمين المتصلين في نفس الوقت</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">مهلة انتهاء الجلسة (بالدقائق)</label>
                    <Input type="number" defaultValue="30" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">حجم الملف الأقصى (ميجابايت)</label>
                    <Input type="number" defaultValue="50" />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">وضع الصيانة</h4>
                      <p className="text-sm text-gray-600">تفعيل وضع الصيانة للنظام</p>
                    </div>
                    <Switch />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">تسجيل الأخطاء التفصيلي</h4>
                      <p className="text-sm text-gray-600">حفظ تفاصيل الأخطاء للمطورين</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Globe className="h-5 w-5 ml-2" />
                    إعدادات التكامل
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">API الخارجي للتأمينات</label>
                    <Input type="url" placeholder="https://api.gosi.gov.sa" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">خدمة البريد الإلكتروني</label>
                    <Select defaultValue="smtp">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="smtp">SMTP</SelectItem>
                        <SelectItem value="sendgrid">SendGrid</SelectItem>
                        <SelectItem value="mailgun">Mailgun</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">خدمة الرسائل القصيرة</label>
                    <Select defaultValue="twilio">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="twilio">Twilio</SelectItem>
                        <SelectItem value="nexmo">Nexmo</SelectItem>
                        <SelectItem value="local">محلي</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-medium mb-3">حالة الخدمات</h4>
                    <div className="space-y-2">
                      {[
                        { service: "قاعدة البيانات", status: "متصل" },
                        { service: "خدمة البريد", status: "متصل" },
                        { service: "التأمينات الاجتماعية", status: "غير متصل" },
                        { service: "النسخ الاحتياطي", status: "متصل" },
                      ].map((service, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <span className="text-sm">{service.service}</span>
                          <Badge variant={service.status === "متصل" ? "default" : "destructive"} className="text-xs">
                            {service.status}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="backup" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Database className="h-5 w-5 ml-2" />
                    النسخ الاحتياطي
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">النسخ الاحتياطي التلقائي</h4>
                      <p className="text-sm text-gray-600">تفعيل النسخ الاحتياطي التلقائي للبيانات</p>
                    </div>
                    <Switch checked={autoBackup} onCheckedChange={setAutoBackup} />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">تكرار النسخ الاحتياطي</label>
                    <Select defaultValue="daily">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hourly">كل ساعة</SelectItem>
                        <SelectItem value="daily">يومي</SelectItem>
                        <SelectItem value="weekly">أسبوعي</SelectItem>
                        <SelectItem value="monthly">شهري</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">وقت النسخ الاحتياطي</label>
                    <Input type="time" defaultValue="02:00" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">الاحتفاظ بالنسخ (أيام)</label>
                    <Input type="number" defaultValue="30" />
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1">
                      <Download className="h-4 w-4 ml-2" />
                      إنشاء نسخة احتياطية الآن
                    </Button>
                    <Button variant="outline" className="flex-1 bg-transparent">
                      <RefreshCw className="h-4 w-4 ml-2" />
                      جدولة
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Upload className="h-5 w-5 ml-2" />
                    استعادة البيانات
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-amber-600 mt-0.5" />
                      <div className="text-sm text-amber-800">
                        <p className="font-medium">تحذير مهم:</p>
                        <p>
                          استعادة البيانات ستحل محل جميع البيانات الحالية. تأكد من إنشاء نسخة احتياطية قبل المتابعة.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">اختر ملف النسخة الاحتياطية</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">اسحب ملف النسخة الاحتياطية هنا أو انقر للتحميل</p>
                      <p className="text-xs text-gray-500 mt-1">يدعم ملفات .sql, .zip, .tar.gz</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium">النسخ الاحتياطية المتاحة</h4>
                    {[
                      { name: "backup_2024-01-25_14-30.sql", size: "45.2 MB", date: "2024-01-25" },
                      { name: "backup_2024-01-24_14-30.sql", size: "44.8 MB", date: "2024-01-24" },
                      { name: "backup_2024-01-23_14-30.sql", size: "44.1 MB", date: "2024-01-23" },
                    ].map((backup, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="text-sm font-medium">{backup.name}</p>
                          <p className="text-xs text-gray-600">
                            {backup.size} • {backup.date}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            استعادة
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
    </div>
  )
}
