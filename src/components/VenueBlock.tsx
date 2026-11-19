import { ComingSoon } from '@/components/ComingSoon'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { isReady, site } from '@/content/site'

export function VenueBlock({ title = 'Venue' }: { title?: string }) {
  if (!isReady(site.venue)) {
    return <ComingSoon title={title} item={site.venue} />
  }

  const venue = site.venue.value

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-heading text-2xl font-medium">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3 text-muted-foreground">
        <div className="flex flex-col gap-1">
          <p className="text-foreground">{venue.name}</p>
          <p>{venue.street}</p>
          <p>
            {venue.city}, {venue.region} {venue.postalCode}
          </p>
        </div>
        <Button asChild variant="outline" className="w-fit">
          <a href={venue.mapUrl} target="_blank" rel="noreferrer">
            Map &amp; directions
          </a>
        </Button>
      </CardContent>
    </Card>
  )
}
