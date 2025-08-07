// Employee types
export interface Employee {
  id: string
  name: string
  email: string
  phone: string
  position: string
  department: string
  salary: number
  joinDate: string
  status: "نشط" | "غير نشط" | "في إجازة" | "معلق"
  avatar?: string
  nationalId: string
  birthDate: string
  address: string
  emergencyContact: {
    name: string
    phone: string
    relationship: string
  }
  bankAccount: {
    iban: string
    bankName: string
  }
  performanceScore: number
  skills: string[]
  certifications: string[]
  manager?: string
  directReports: string[]
  workLocation: "مكتب" | "عن بعد" | "مختلط"
  contractType: "دوام كامل" | "دوام جزئي" | "مؤقت" | "متدرب"
  probationEndDate?: string
  lastLoginDate?: string
  createdAt: string
  updatedAt: string
}

// Leave Request types
export interface LeaveRequest {
  id: string
  employeeId: string
  employeeName: string
  type: "سنوية" | "مرضية" | "طارئة" | "أمومة" | "أبوة" | "حج" | "عمرة" | "بدون راتب"
  startDate: string
  endDate: string
  days: number
  reason: string
  status: "في الانتظار" | "معتمد" | "مرفوض" | "ملغي"
  submittedDate: string
  approvedBy?: string
  approvedDate?: string
  rejectionReason?: string
  emergencyContact?: string
  documents?: string[]
  replacementEmployee?: string
  handoverNotes?: string
  createdAt: string
  updatedAt: string
}

// Course types
export interface Course {
  id: string
  title: string
  description: string
  instructor: string
  duration: number // in hours
  startDate: string
  endDate: string
  maxStudents: number
  enrolled: number
  category: "تقني" | "إداري" | "قيادي" | "مهارات شخصية" | "سلامة" | "امتثال"
  level: "مبتدئ" | "متوسط" | "متقدم"
  format: "حضوري" | "عن بعد" | "مختلط"
  location?: string
  meetingLink?: string
  materials: string[]
  prerequisites: string[]
  objectives: string[]
  assessment: {
    type: "امتحان" | "مشروع" | "تقييم عملي" | "حضور"
    passingScore: number
  }
  certificate: boolean
  cost: number
  provider: string
  rating: number
  reviews: CourseReview[]
  status: "مجدول" | "قيد التنفيذ" | "مكتمل" | "ملغي"
  createdAt: string
  updatedAt: string
}

export interface CourseReview {
  id: string
  employeeId: string
  employeeName: string
  rating: number
  comment: string
  date: string
}

export interface CourseEnrollment {
  id: string
  courseId: string
  employeeId: string
  enrollmentDate: string
  completionDate?: string
  progress: number
  grade?: number
  status: "مسجل" | "قيد التنفيذ" | "مكتمل" | "راسب" | "منسحب"
  attendance: AttendanceRecord[]
  assignments: Assignment[]
}

export interface AttendanceRecord {
  date: string
  present: boolean
  duration: number
  notes?: string
}

export interface Assignment {
  id: string
  title: string
  description: string
  dueDate: string
  submissionDate?: string
  grade?: number
  feedback?: string
  status: "معلق" | "مقدم" | "مصحح" | "متأخر"
}

// Notification types
export interface Notification {
  id: string
  userId: string
  title: string
  message: string
  type: "معلومات" | "تحذير" | "خطأ" | "نجاح" | "تذكير"
  priority: "منخفض" | "عادي" | "عالي" | "عاجل"
  read: boolean
  actionUrl?: string
  actionText?: string
  metadata?: Record<string, any>
  expiresAt?: string
  createdAt: string
  readAt?: string
}

// Performance types
export interface PerformanceReview {
  id: string
  employeeId: string
  reviewerId: string
  period: {
    startDate: string
    endDate: string
  }
  type: "سنوي" | "نصف سنوي" | "ربع سنوي" | "شهري" | "تجريبي"
  status: "مسودة" | "قيد المراجعة" | "مكتمل" | "معتمد"
  overallRating: number
  goals: PerformanceGoal[]
  competencies: CompetencyRating[]
  achievements: string[]
  areasForImprovement: string[]
  developmentPlan: string[]
  employeeComments?: string
  reviewerComments: string
  hrComments?: string
  nextReviewDate: string
  createdAt: string
  updatedAt: string
}

export interface PerformanceGoal {
  id: string
  title: string
  description: string
  category: "أداء" | "تطوير" | "سلوكي" | "مشروع"
  targetDate: string
  weight: number // percentage
  status: "جديد" | "قيد التنفيذ" | "مكتمل" | "متأخر" | "ملغي"
  progress: number
  rating?: number
  comments?: string
}

export interface CompetencyRating {
  competency: string
  rating: number
  comments?: string
  importance: "أساسي" | "مهم" | "مرغوب"
}

// Payroll types
export interface PayrollRecord {
  id: string
  employeeId: string
  period: {
    month: number
    year: number
  }
  basicSalary: number
  allowances: {
    housing: number
    transportation: number
    food: number
    mobile: number
    other: number
  }
  overtime: {
    hours: number
    rate: number
    amount: number
  }
  bonuses: {
    performance: number
    annual: number
    other: number
  }
  deductions: {
    socialInsurance: number
    tax: number
    loan: number
    advance: number
    other: number
  }
  netSalary: number
  paymentDate: string
  paymentMethod: "تحويل بنكي" | "شيك" | "نقد"
  status: "معلق" | "معتمد" | "مدفوع" | "مرفوض"
  approvedBy?: string
  notes?: string
  createdAt: string
  updatedAt: string
}

// Attendance types
export interface AttendanceEntry {
  id: string
  employeeId: string
  date: string
  checkIn?: string
  checkOut?: string
  breakStart?: string
  breakEnd?: string
  totalHours: number
  regularHours: number
  overtimeHours: number
  status: "حاضر" | "غائب" | "متأخر" | "انصراف مبكر" | "إجازة" | "مرضي"
  location: "مكتب" | "عن بعد" | "موقع عمل" | "عميل"
  notes?: string
  approvedBy?: string
  createdAt: string
  updatedAt: string
}

// Document types
export interface Document {
  id: string
  title: string
  description?: string
  type: "عقد" | "شهادة" | "تقرير" | "سياسة" | "نموذج" | "أخرى"
  category: "موارد بشرية" | "مالي" | "قانوني" | "تقني" | "إداري"
  fileName: string
  fileSize: number
  mimeType: string
  url: string
  uploadedBy: string
  tags: string[]
  version: string
  status: "مسودة" | "مراجعة" | "معتمد" | "منتهي الصلاحية"
  accessLevel: "عام" | "محدود" | "سري"
  expiryDate?: string
  relatedEmployees: string[]
  approvedBy?: string
  approvedDate?: string
  createdAt: string
  updatedAt: string
}

// Project types
export interface Project {
  id: string
  name: string
  description: string
  status: "مخطط" | "قيد التنفيذ" | "معلق" | "مكتمل" | "ملغي"
  priority: "منخفض" | "عادي" | "عالي" | "عاجل"
  startDate: string
  endDate: string
  budget: number
  actualCost: number
  progress: number
  manager: string
  team: string[]
  client?: string
  department: string
  milestones: Milestone[]
  tasks: Task[]
  risks: Risk[]
  documents: string[]
  createdAt: string
  updatedAt: string
}

export interface Milestone {
  id: string
  title: string
  description: string
  dueDate: string
  status: "معلق" | "قيد التنفيذ" | "مكتمل" | "متأخر"
  completionDate?: string
}

export interface Task {
  id: string
  title: string
  description: string
  assignedTo: string
  status: "جديد" | "قيد التنفيذ" | "مراجعة" | "مكتمل"
  priority: "منخفض" | "عادي" | "عالي" | "عاجل"
  estimatedHours: number
  actualHours: number
  startDate: string
  dueDate: string
  completionDate?: string
  dependencies: string[]
  tags: string[]
}

export interface Risk {
  id: string
  title: string
  description: string
  probability: "منخفض" | "متوسط" | "عالي"
  impact: "منخفض" | "متوسط" | "عالي"
  status: "محدد" | "قيد المراقبة" | "محلول" | "مقبول"
  mitigation: string
  owner: string
}

// Recruitment types
export interface JobPosting {
  id: string
  title: string
  department: string
  location: string
  type: "دوام كامل" | "دوام جزئي" | "مؤقت" | "تدريب"
  level: "مبتدئ" | "متوسط" | "كبير" | "إداري"
  description: string
  requirements: string[]
  responsibilities: string[]
  qualifications: string[]
  skills: string[]
  salaryRange: {
    min: number
    max: number
  }
  benefits: string[]
  applicationDeadline: string
  status: "مسودة" | "منشور" | "معلق" | "مغلق"
  postedBy: string
  applicationsCount: number
  viewsCount: number
  createdAt: string
  updatedAt: string
}

export interface JobApplication {
  id: string
  jobId: string
  applicantName: string
  email: string
  phone: string
  resume: string
  coverLetter?: string
  status: "جديد" | "قيد المراجعة" | "مقابلة" | "مقبول" | "مرفوض" | "منسحب"
  source: "موقع الشركة" | "لينكد إن" | "بيت.كوم" | "إحالة" | "أخرى"
  experience: number
  education: string
  currentSalary?: number
  expectedSalary?: number
  availabilityDate: string
  notes?: string
  interviews: Interview[]
  evaluations: Evaluation[]
  submittedAt: string
  updatedAt: string
}

export interface Interview {
  id: string
  type: "هاتفي" | "فيديو" | "وجهاً لوجه" | "تقني"
  scheduledDate: string
  duration: number
  interviewers: string[]
  location?: string
  meetingLink?: string
  status: "مجدول" | "مكتمل" | "ملغي" | "لم يحضر"
  feedback?: string
  rating?: number
  nextSteps?: string
}

export interface Evaluation {
  id: string
  evaluatorId: string
  criteria: {
    technical: number
    communication: number
    experience: number
    cultural: number
    overall: number
  }
  strengths: string[]
  weaknesses: string[]
  recommendation: "يوصى بشدة" | "يوصى" | "محايد" | "لا يوصى"
  comments: string
  date: string
}

// System types
export interface SystemSettings {
  id: string
  category: "عام" | "أمان" | "إشعارات" | "تكاملات" | "نسخ احتياطي"
  key: string
  value: any
  description: string
  type: "string" | "number" | "boolean" | "object" | "array"
  isPublic: boolean
  updatedBy: string
  updatedAt: string
}

export interface AuditLog {
  id: string
  userId: string
  userName: string
  action: string
  resource: string
  resourceId: string
  details: Record<string, any>
  ipAddress: string
  userAgent: string
  timestamp: string
}

// API Response types
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  message?: string
  error?: string
  errors?: Record<string, string[]>
  meta?: {
    total?: number
    page?: number
    limit?: number
    hasNext?: boolean
    hasPrev?: boolean
  }
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  meta: {
    total: number
    page: number
    limit: number
    totalPages: number
    hasNext: boolean
    hasPrev: boolean
  }
}

// Form types
export interface FormField {
  name: string
  label: string
  type: "text" | "email" | "password" | "number" | "date" | "select" | "textarea" | "checkbox" | "radio" | "file"
  required: boolean
  placeholder?: string
  options?: { value: string; label: string }[]
  validation?: {
    min?: number
    max?: number
    pattern?: string
    custom?: (value: any) => boolean | string
  }
}

// Dashboard types
export interface DashboardStats {
  totalEmployees: number
  activeEmployees: number
  pendingLeaves: number
  completedTrainings: number
  averagePerformance: number
  monthlyGrowth: number
  departmentStats: DepartmentStats[]
  recentActivities: Activity[]
}

export interface DepartmentStats {
  name: string
  employeeCount: number
  averagePerformance: number
  pendingLeaves: number
  completedTrainings: number
}

export interface Activity {
  id: string
  type: "employee" | "leave" | "training" | "performance" | "system"
  title: string
  description: string
  timestamp: string
  userId: string
  userName: string
  metadata?: Record<string, any>
}

// Chart data types
export interface ChartData {
  labels: string[]
  datasets: ChartDataset[]
}

export interface ChartDataset {
  label: string
  data: number[]
  backgroundColor?: string | string[]
  borderColor?: string | string[]
  borderWidth?: number
  fill?: boolean
}

// Filter and search types
export interface FilterOptions {
  departments: string[]
  positions: string[]
  statuses: string[]
  dateRange: {
    start?: string
    end?: string
  }
  salaryRange: {
    min?: number
    max?: number
  }
}

export interface SearchParams {
  query?: string
  filters?: Partial<FilterOptions>
  sortBy?: string
  sortOrder?: "asc" | "desc"
  page?: number
  limit?: number
}

// Export types
export interface ExportOptions {
  format: "excel" | "pdf" | "csv"
  fields: string[]
  filters?: Partial<FilterOptions>
  includeHeaders: boolean
  fileName?: string
}

// Notification preferences
export interface NotificationPreferences {
  email: {
    enabled: boolean
    frequency: "فوري" | "يومي" | "أسبوعي"
    types: string[]
  }
  sms: {
    enabled: boolean
    types: string[]
  }
  push: {
    enabled: boolean
    types: string[]
  }
  inApp: {
    enabled: boolean
    types: string[]
  }
}

// User preferences
export interface UserPreferences {
  language: "ar" | "en"
  theme: "light" | "dark" | "system"
  timezone: string
  dateFormat: string
  currency: string
  notifications: NotificationPreferences
  dashboard: {
    layout: string
    widgets: string[]
  }
}
