import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import type { Tbd } from '@/content/site'

export function ComingSoon({
  title,
  item,
}: {
  title: string
  item: Tbd
}) {
  return (
    <Card className="border-dashed border-primary/40 bg-card/70 shadow-none ring-0">
      <CardHeader>
        <CardTitle className="font-heading text-2xl font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-muted-foreground">
        <p>{item.note ?? 'Details coming soon.'}</p>
      </CardContent>
    </Card>
  )
}
