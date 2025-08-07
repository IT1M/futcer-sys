import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Date utilities for Arabic locale
export function formatArabicDate(date: string | Date): string {
  const dateObj = typeof date === "string" ? new Date(date) : date
  return new Intl.DateTimeFormat("ar-SA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(dateObj)
}

export function formatShortArabicDate(date: string | Date): string {
  const dateObj = typeof date === "string" ? new Date(date) : date
  return new Intl.DateTimeFormat("ar-SA", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(dateObj)
}

export function formatArabicDateTime(date: string | Date): string {
  const dateObj = typeof date === "string" ? new Date(date) : date
  return new Intl.DateTimeFormat("ar-SA", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(dateObj)
}

// Currency formatting for Saudi Riyal
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("ar-SA", {
    style: "currency",
    currency: "SAR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount)
}

// Number formatting for Arabic locale
export function formatNumber(number: number): string {
  return new Intl.NumberFormat("ar-SA").format(number)
}

// Percentage formatting
export function formatPercentage(value: number, decimals = 1): string {
  return new Intl.NumberFormat("ar-SA", {
    style: "percent",
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value / 100)
}

// Time ago formatting in Arabic
export function getTimeAgo(date: string | Date): string {
  const now = new Date()
  const dateObj = typeof date === "string" ? new Date(date) : date
  const diffInSeconds = Math.floor((now.getTime() - dateObj.getTime()) / 1000)

  if (diffInSeconds < 60) {
    return "الآن"
  } else if (diffInSeconds < 3600) {
    const minutes = Math.floor(diffInSeconds / 60)
    return `منذ ${minutes} ${minutes === 1 ? "دقيقة" : "دقائق"}`
  } else if (diffInSeconds < 86400) {
    const hours = Math.floor(diffInSeconds / 3600)
    return `منذ ${hours} ${hours === 1 ? "ساعة" : "ساعات"}`
  } else if (diffInSeconds < 2592000) {
    const days = Math.floor(diffInSeconds / 86400)
    return `منذ ${days} ${days === 1 ? "يوم" : "أيام"}`
  } else if (diffInSeconds < 31536000) {
    const months = Math.floor(diffInSeconds / 2592000)
    return `منذ ${months} ${months === 1 ? "شهر" : "أشهر"}`
  } else {
    const years = Math.floor(diffInSeconds / 31536000)
    return `منذ ${years} ${years === 1 ? "سنة" : "سنوات"}`
  }
}

// Calculate days between two dates
export function calculateDaysBetween(startDate: string, endDate: string): number {
  const start = new Date(startDate)
  const end = new Date(endDate)
  const diffTime = Math.abs(end.getTime() - start.getTime())
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
}

// Validate email
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Validate Saudi phone number
export function isValidSaudiPhone(phone: string): boolean {
  const phoneRegex = /^(\+966|966|0)?[5][0-9]{8}$/
  return phoneRegex.test(phone.replace(/\s/g, ""))
}

// Validate Saudi ID
export function isValidSaudiID(id: string): boolean {
  const idRegex = /^[12][0-9]{9}$/
  return idRegex.test(id)
}

// Format Saudi phone number
export function formatSaudiPhone(phone: string): string {
  const cleaned = phone.replace(/\D/g, "")
  if (cleaned.startsWith("966")) {
    return `+${cleaned}`
  } else if (cleaned.startsWith("05")) {
    return `+966${cleaned.substring(1)}`
  } else if (cleaned.startsWith("5")) {
    return `+966${cleaned}`
  }
  return phone
}

// Generate random ID
export function generateId(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36)
}

// Truncate text
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength) + "..."
}

// Get initials from name
export function getInitials(name: string): string {
  return name
    .split(" ")
    .map((word) => word.charAt(0))
    .join("")
    .toUpperCase()
    .substring(0, 2)
}

// Status color mapping
export function getStatusColor(status: string): string {
  const statusColors: Record<string, string> = {
    نشط: "bg-green-100 text-green-800 border-green-200",
    "غير نشط": "bg-red-100 text-red-800 border-red-200",
    "في إجازة": "bg-blue-100 text-blue-800 border-blue-200",
    "في الانتظار": "bg-yellow-100 text-yellow-800 border-yellow-200",
    معتمد: "bg-green-100 text-green-800 border-green-200",
    مرفوض: "bg-red-100 text-red-800 border-red-200",
    مكتمل: "bg-green-100 text-green-800 border-green-200",
    "قيد التنفيذ": "bg-blue-100 text-blue-800 border-blue-200",
    معلق: "bg-yellow-100 text-yellow-800 border-yellow-200",
    ملغي: "bg-gray-100 text-gray-800 border-gray-200",
  }
  return statusColors[status] || "bg-gray-100 text-gray-800 border-gray-200"
}

// Priority color mapping
export function getPriorityColor(priority: string): string {
  const priorityColors: Record<string, string> = {
    منخفض: "bg-green-100 text-green-800 border-green-200",
    عادي: "bg-blue-100 text-blue-800 border-blue-200",
    متوسط: "bg-yellow-100 text-yellow-800 border-yellow-200",
    عالي: "bg-orange-100 text-orange-800 border-orange-200",
    عاجل: "bg-red-100 text-red-800 border-red-200",
    طارئ: "bg-red-100 text-red-800 border-red-200",
  }
  return priorityColors[priority] || "bg-gray-100 text-gray-800 border-gray-200"
}

// Performance score color
export function getPerformanceColor(score: number): string {
  if (score >= 4.5) return "text-green-600"
  if (score >= 4.0) return "text-blue-600"
  if (score >= 3.5) return "text-yellow-600"
  if (score >= 3.0) return "text-orange-600"
  return "text-red-600"
}

// Calculate progress percentage
export function calculateProgress(current: number, total: number): number {
  if (total === 0) return 0
  return Math.round((current / total) * 100)
}

// Format file size
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return "0 بايت"
  const k = 1024
  const sizes = ["بايت", "كيلوبايت", "ميجابايت", "جيجابايت"]
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
}

// Debounce function
export function debounce<T extends (...args: any[]) => any>(func: T, wait: number): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

// Throttle function
export function throttle<T extends (...args: any[]) => any>(func: T, limit: number): (...args: Parameters<T>) => void {
  let inThrottle: boolean
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

// Deep clone object
export function deepClone<T>(obj: T): T {
  if (obj === null || typeof obj !== "object") return obj
  if (obj instanceof Date) return new Date(obj.getTime()) as unknown as T
  if (obj instanceof Array) return obj.map((item) => deepClone(item)) as unknown as T
  if (typeof obj === "object") {
    const clonedObj = {} as { [key: string]: any }
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        clonedObj[key] = deepClone(obj[key])
      }
    }
    return clonedObj as T
  }
  return obj
}

// Sort array by Arabic text
export function sortByArabicText<T>(array: T[], key: keyof T, direction: "asc" | "desc" = "asc"): T[] {
  return array.sort((a, b) => {
    const aValue = String(a[key])
    const bValue = String(b[key])
    const comparison = aValue.localeCompare(bValue, "ar")
    return direction === "asc" ? comparison : -comparison
  })
}

// Filter array by search term (Arabic-friendly)
export function filterBySearch<T>(array: T[], searchTerm: string, keys: (keyof T)[]): T[] {
  if (!searchTerm.trim()) return array

  const normalizedSearch = searchTerm.toLowerCase().trim()

  return array.filter((item) =>
    keys.some((key) => {
      const value = String(item[key]).toLowerCase()
      return value.includes(normalizedSearch)
    }),
  )
}

// Group array by key
export function groupBy<T, K extends keyof T>(array: T[], key: K): Record<string, T[]> {
  return array.reduce(
    (groups, item) => {
      const groupKey = String(item[key])
      if (!groups[groupKey]) {
        groups[groupKey] = []
      }
      groups[groupKey].push(item)
      return groups
    },
    {} as Record<string, T[]>,
  )
}

// Calculate age from birth date
export function calculateAge(birthDate: string): number {
  const today = new Date()
  const birth = new Date(birthDate)
  let age = today.getFullYear() - birth.getFullYear()
  const monthDiff = today.getMonth() - birth.getMonth()

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--
  }

  return age
}

// Check if date is weekend (Friday/Saturday in Saudi Arabia)
export function isWeekend(date: string | Date): boolean {
  const dateObj = typeof date === "string" ? new Date(date) : date
  const day = dateObj.getDay()
  return day === 5 || day === 6 // Friday = 5, Saturday = 6
}

// Get working days between two dates
export function getWorkingDays(startDate: string, endDate: string): number {
  const start = new Date(startDate)
  const end = new Date(endDate)
  let workingDays = 0

  const currentDate = new Date(start)
  while (currentDate <= end) {
    if (!isWeekend(currentDate)) {
      workingDays++
    }
    currentDate.setDate(currentDate.getDate() + 1)
  }

  return workingDays
}

// Validate IBAN
export function isValidIBAN(iban: string): boolean {
  const ibanRegex = /^SA[0-9]{22}$/
  return ibanRegex.test(iban.replace(/\s/g, ""))
}

// Format IBAN
export function formatIBAN(iban: string): string {
  const cleaned = iban.replace(/\s/g, "").toUpperCase()
  return cleaned.replace(/(.{4})/g, "$1 ").trim()
}

// Generate password
export function generatePassword(length = 12): string {
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*"
  let password = ""
  for (let i = 0; i < length; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length))
  }
  return password
}

// Check password strength
export function checkPasswordStrength(password: string): {
  score: number
  feedback: string[]
} {
  const feedback: string[] = []
  let score = 0

  if (password.length >= 8) score += 1
  else feedback.push("يجب أن تكون كلمة المرور 8 أحرف على الأقل")

  if (/[a-z]/.test(password)) score += 1
  else feedback.push("يجب أن تحتوي على حرف صغير")

  if (/[A-Z]/.test(password)) score += 1
  else feedback.push("يجب أن تحتوي على حرف كبير")

  if (/[0-9]/.test(password)) score += 1
  else feedback.push("يجب أن تحتوي على رقم")

  if (/[^A-Za-z0-9]/.test(password)) score += 1
  else feedback.push("يجب أن تحتوي على رمز خاص")

  return { score, feedback }
}
