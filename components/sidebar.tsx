"use client"

import { useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Home,
  Users,
  Calendar,
  GraduationCap,
  BarChart3,
  Settings,
  FileText,
  Briefcase,
  Target,
  Bell,
  HelpCircle,
  LogOut,
  ChevronLeft,
  ChevronRight,
  User,
  DollarSign,
  Clock,
  Shield,
  Smartphone,
  Zap,
  TrendingUp,
  UserPlus,
  Building,
  Globe,
  Layers,
} from "lucide-react"

interface SidebarProps {
  className?: string
}

export function Sidebar({ className }: SidebarProps) {
  const router = useRouter()
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)
  const [notifications, setNotifications] = useState(3)

  // Mock user data
  const currentUser = {
    name: "أحمد محمد السعد",
    email: "ahmed.alsaad@company.com",
    avatar: "/male-avatar.png",
    role: "مدير الموارد البشرية",
  }

  const mainMenuItems = [
    {
      title: "الرئيسية",
      icon: Home,
      href: "/",
      badge: null,
    },
    {
      title: "الموظفون",
      icon: Users,
      href: "/employees",
      badge: null,
    },
    {
      title: "الخدمة الذاتية",
      icon: User,
      href: "/self-service",
      badge: null,
    },
    {
      title: "التعلم والتطوير",
      icon: GraduationCap,
      href: "/learning",
      badge: "جديد",
    },
    {
      title: "إدارة الأداء",
      icon: Target,
      href: "/performance",
      badge: null,
    },
    {
      title: "الرواتب",
      icon: DollarSign,
      href: "/payroll",
      badge: null,
    },
    {
      title: "الحضور والانصراف",
      icon: Clock,
      href: "/attendance",
      badge: null,
    },
    {
      title: "التقارير والتحليلات",
      icon: BarChart3,
      href: "/analytics",
      badge: null,
    },
  ]

  const managementItems = [
    {
      title: "إدارة المشاريع",
      icon: Briefcase,
      href: "/projects",
      badge: null,
    },
    {
      title: "التوظيف",
      icon: UserPlus,
      href: "/recruitment",
      badge: "5",
    },
    {
      title: "الوثائق",
      icon: FileText,
      href: "/documents",
      badge: null,
    },
    {
      title: "التقويم",
      icon: Calendar,
      href: "/calendar",
      badge: null,
    },
    {
      title: "الإشعارات",
      icon: Bell,
      href: "/notifications",
      badge: notifications > 0 ? notifications.toString() : null,
    },
  ]

  const systemItems = [
    {
      title: "لوحة الإدارة",
      icon: Shield,
      href: "/admin",
      badge: null,
    },
    {
      title: "الإعدادات",
      icon: Settings,
      href: "/settings",
      badge: null,
    },
    {
      title: "المساعدة",
      icon: HelpCircle,
      href: "/help",
      badge: null,
    },
  ]

  const advancedFeatures = [
    {
      title: "التحليلات المتقدمة",
      icon: TrendingUp,
      href: "/advanced-analytics",
      badge: "Pro",
    },
    {
      title: "التطبيق المحمول",
      icon: Smartphone,
      href: "/mobile",
      badge: "قريباً",
    },
    {
      title: "التكاملات",
      icon: Layers,
      href: "/integrations",
      badge: null,
    },
    {
      title: "الأتمتة",
      icon: Zap,
      href: "/automation",
      badge: "Beta",
    },
  ]

  const handleNavigation = (href: string) => {
    router.push(href)
  }

  const handleLogout = () => {
    // Handle logout logic here
    console.log("Logging out...")
    router.push("/login")
  }

  const SidebarItem = ({ item, isActive }: { item: any; isActive: boolean }) => (
    <Button
      variant={isActive ? "default" : "ghost"}
      className={cn(
        "w-full justify-start h-10 px-3 mb-1",
        isActive && "bg-primary text-primary-foreground",
        !isActive && "hover:bg-muted",
        collapsed && "px-2",
      )}
      onClick={() => handleNavigation(item.href)}
    >
      <item.icon className={cn("h-4 w-4", !collapsed && "ml-2")} />
      {!collapsed && (
        <>
          <span className="flex-1 text-right">{item.title}</span>
          {item.badge && (
            <Badge
              variant={item.badge === "جديد" || item.badge === "Pro" ? "default" : "secondary"}
              className="text-xs px-1.5 py-0.5"
            >
              {item.badge}
            </Badge>
          )}
        </>
      )}
    </Button>
  )

  const SectionTitle = ({ title }: { title: string }) => (
    <div className={cn("px-3 py-2", collapsed && "px-2")}>
      {!collapsed ? (
        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{title}</h3>
      ) : (
        <div className="h-px bg-border" />
      )}
    </div>
  )

  return (
    <div
      className={cn(
        "flex flex-col h-screen bg-card border-l border-border transition-all duration-300",
        collapsed ? "w-16" : "w-64",
        className,
      )}
      dir="rtl"
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        {!collapsed && (
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Building className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h2 className="text-lg font-bold">نظام الموارد البشرية</h2>
              <p className="text-xs text-muted-foreground">إدارة شاملة</p>
            </div>
          </div>
        )}
        <Button variant="ghost" size="sm" onClick={() => setCollapsed(!collapsed)} className="h-8 w-8 p-0">
          {collapsed ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
        </Button>
      </div>

      {/* User Profile */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <Avatar className="h-10 w-10">
            <AvatarImage src={currentUser.avatar || "/placeholder.svg"} />
            <AvatarFallback>
              {currentUser.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{currentUser.name}</p>
              <p className="text-xs text-muted-foreground truncate">{currentUser.role}</p>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        <nav className="p-2">
          {/* Main Menu */}
          <SectionTitle title="القائمة الرئيسية" />
          <div className="space-y-1">
            {mainMenuItems.map((item) => (
              <SidebarItem key={item.href} item={item} isActive={pathname === item.href} />
            ))}
          </div>

          {/* Management */}
          <SectionTitle title="الإدارة" />
          <div className="space-y-1">
            {managementItems.map((item) => (
              <SidebarItem key={item.href} item={item} isActive={pathname === item.href} />
            ))}
          </div>

          {/* Advanced Features */}
          <SectionTitle title="الميزات المتقدمة" />
          <div className="space-y-1">
            {advancedFeatures.map((item) => (
              <SidebarItem key={item.href} item={item} isActive={pathname === item.href} />
            ))}
          </div>

          {/* System */}
          <SectionTitle title="النظام" />
          <div className="space-y-1">
            {systemItems.map((item) => (
              <SidebarItem key={item.href} item={item} isActive={pathname === item.href} />
            ))}
          </div>
        </nav>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-border">
        {!collapsed && (
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>الإصدار 2.1.0</span>
              <span>متصل</span>
            </div>
            <div className="flex items-center space-x-2 rtl:space-x-reverse text-xs text-muted-foreground">
              <Globe className="h-3 w-3" />
              <span>www.company.com</span>
            </div>
          </div>
        )}
        <Button
          variant="ghost"
          className={cn(
            "w-full justify-start mt-2 text-red-600 hover:text-red-700 hover:bg-red-50",
            collapsed && "px-2",
          )}
          onClick={handleLogout}
        >
          <LogOut className={cn("h-4 w-4", !collapsed && "ml-2")} />
          {!collapsed && <span>تسجيل الخروج</span>}
        </Button>
      </div>
    </div>
  )
}
