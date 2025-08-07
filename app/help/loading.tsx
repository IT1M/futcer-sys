import { Skeleton } from "@/components/ui/skeleton"
import { Card } from "@/components/ui/card"

export default function HelpLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 rtl" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Skeleton className="h-10 w-64 mb-6 mx-auto" />
        <Skeleton className="h-12 w-full max-w-2xl mx-auto mb-10" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {Array.from({ length: 3 }).map((_, i) => (
            <Card key={i} className="p-6 text-center">
              <Skeleton className="h-12 w-12 rounded-full mx-auto mb-4" />
              <Skeleton className="h-6 w-3/4 mx-auto mb-2" />
              <Skeleton className="h-4 w-full mb-4" />
              <Skeleton className="h-8 w-1/2 mx-auto" />
            </Card>
          ))}
        </div>

        <Skeleton className="h-8 w-48 mb-6" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {Array.from({ length: 3 }).map((_, i) => (
            <Card key={i} className="p-4">
              <Skeleton className="h-6 w-3/4 mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-6 w-1/3" />
            </Card>
          ))}
        </div>

        <Card className="bg-blue-600 text-white p-6 text-center">
          <Skeleton className="h-16 w-16 rounded-full mx-auto mb-4 bg-blue-500" />
          <Skeleton className="h-8 w-3/4 mx-auto mb-2 bg-blue-500" />
          <Skeleton className="h-4 w-full mx-auto mb-6 bg-blue-500" />
          <Skeleton className="h-10 w-1/2 mx-auto bg-blue-500" />
        </Card>
      </div>
    </div>
  )
}
