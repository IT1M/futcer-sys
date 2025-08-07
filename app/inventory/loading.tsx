import { Skeleton } from "@/components/ui/skeleton"
import { Card } from "@/components/ui/card"

export default function InventoryLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 rtl" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <Skeleton className="h-10 w-64" />
          <Skeleton className="h-10 w-32" />
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <Skeleton className="h-10 w-full md:w-1/2" />
          <Skeleton className="h-10 w-full md:w-32" />
        </div>
        <div className="space-y-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <Card key={i} className="p-6">
              <div className="flex justify-between items-start mb-4">
                <Skeleton className="h-8 w-3/4" />
                <Skeleton className="h-6 w-24" />
              </div>
              <Skeleton className="h-4 w-full mb-4" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <Skeleton className="h-16 w-full" />
                <Skeleton className="h-16 w-full" />
                <Skeleton className="h-16 w-full" />
              </div>
              <Skeleton className="h-4 w-1/4 mb-2" />
              <Skeleton className="h-8 w-full" />
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
