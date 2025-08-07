"use client"

import type React from "react"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { toast } from "@/components/ui/use-toast"
import { Calendar, Upload, Send, X } from "lucide-react"
import { apiClient } from "@/lib/api"

const leaveRequestSchema = z.object({
  type: z.string().min(1, "نوع الإجازة مطلوب"),
  startDate: z.string().min(1, "تاريخ البداية مطلوب"),
  endDate: z.string().min(1, "تاريخ النهاية مطلوب"),
  reason: z.string().min(10, "السبب يجب أن يكون 10 أحرف على الأقل"),
  emergencyContact: z.string().optional(),
  documents: z.array(z.any()).optional(),
})

type LeaveRequestFormData = z.infer<typeof leaveRequestSchema>

interface LeaveRequestFormProps {
  onSuccess?: () => void
  onCancel?: () => void
}

export function LeaveRequestForm({ onSuccess, onCancel }: LeaveRequestFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])

  const form = useForm<LeaveRequestFormData>({
    resolver: zodResolver(leaveRequestSchema),
    defaultValues: {
      type: "",
      startDate: "",
      endDate: "",
      reason: "",
      emergencyContact: "",
      documents: [],
    },
  })

  const onSubmit = async (data: LeaveRequestFormData) => {
    setIsSubmitting(true)
    try {
      // Calculate days between start and end date
      const start = new Date(data.startDate)
      const end = new Date(data.endDate)
      const days = Math.ceil((end.getTime() - start.getTime()) / (1000 * 3600 * 24)) + 1

      const requestData = {
        ...data,
        days,
        status: "في الانتظار",
        submittedDate: new Date().toISOString(),
      }

      await apiClient.post("/leave-requests", requestData)

      toast({
        title: "تم تقديم الطلب بنجاح",
        description: "سيتم مراجعة طلب الإجازة والرد عليك قريباً",
      })

      form.reset()
      setUploadedFiles([])
      onSuccess?.()
    } catch (error) {
      toast({
        title: "خطأ في تقديم الطلب",
        description: "حدث خطأ أثناء تقديم طلب الإجازة. يرجى المحاولة مرة أخرى.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files) {
      setUploadedFiles(Array.from(files))
    }
  }

  const removeFile = (index: number) => {
    setUploadedFiles((files) => files.filter((_, i) => i !== index))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Calendar className="h-5 w-5 ml-2" />
          طلب إجازة جديد
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>نوع الإجازة</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="اختر نوع الإجازة" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="سنوية">إجازة سنوية</SelectItem>
                      <SelectItem value="مرضية">إجازة مرضية</SelectItem>
                      <SelectItem value="طارئة">إجازة طارئة</SelectItem>
                      <SelectItem value="أمومة">إجازة أمومة</SelectItem>
                      <SelectItem value="أبوة">إجازة أبوة</SelectItem>
                      <SelectItem value="حج">إجازة حج</SelectItem>
                      <SelectItem value="عمرة">إجازة عمرة</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="startDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>تاريخ البداية</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="endDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>تاريخ النهاية</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="reason"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>سبب الإجازة</FormLabel>
                  <FormControl>
                    <Textarea placeholder="اكتب سبب طلب الإجازة بالتفصيل..." rows={4} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="emergencyContact"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>جهة الاتصال في حالات الطوارئ (اختياري)</FormLabel>
                  <FormControl>
                    <Input placeholder="رقم الهاتف أو البريد الإلكتروني" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div>
              <FormLabel>المستندات المرفقة (اختياري)</FormLabel>
              <div className="mt-2">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 mb-2">اسحب الملفات هنا أو انقر للتحميل</p>
                  <input
                    type="file"
                    multiple
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="file-upload"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => document.getElementById("file-upload")?.click()}
                  >
                    اختر الملفات
                  </Button>
                  <p className="text-xs text-gray-500 mt-1">يدعم: PDF, DOC, DOCX, JPG, PNG (حتى 10 ميجابايت لكل ملف)</p>
                </div>

                {uploadedFiles.length > 0 && (
                  <div className="mt-4 space-y-2">
                    {uploadedFiles.map((file, index) => (
                      <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                        <span className="text-sm">{file.name}</span>
                        <Button type="button" variant="ghost" size="sm" onClick={() => removeFile(index)}>
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="flex gap-4">
              {onCancel && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={onCancel}
                  className="flex-1 bg-transparent"
                  disabled={isSubmitting}
                >
                  إلغاء
                </Button>
              )}
              <Button type="submit" className="flex-1" disabled={isSubmitting}>
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                    جاري التقديم...
                  </span>
                ) : (
                  <>
                    <Send className="h-4 w-4 ml-2" />
                    تقديم طلب الإجازة
                  </>
                )}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
