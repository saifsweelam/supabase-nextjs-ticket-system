// components/ticket-card.tsx
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

type TicketCardProps = {
  id: number
  status: "open" | "closed"
  author: string
  date: string
  title: string
  details: string
}

export function TicketCard({
  id,
  status,
  author,
  date,
  title,
  details,
}: TicketCardProps) {
  const statusStyles = {
    open: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-400",
    closed: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-400",
  }

  return (
    <Card className="bg-muted border border-border">
      <CardContent className="space-y-4 p-6">
        {/* Top row: ID + Status */}
        <div className="flex items-center gap-2 text-sm font-medium">
          <span className="text-foreground">#{id}</span>
          <Badge className={cn("rounded-sm px-2 py-0.5 text-xs", statusStyles[status])}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </Badge>
        </div>

        {/* Author info */}
        <p className="text-sm text-muted-foreground">
          Created by <span className="font-medium text-foreground">{author}</span> at {date}
        </p>

        {/* Title */}
        <h2 className="text-xl font-semibold text-foreground">
          {title}
        </h2>

        <hr className="border-border" />

        {/* Details */}
        <p className="text-sm text-muted-foreground">{details}</p>
      </CardContent>
    </Card>
  )
}
