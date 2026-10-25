import { ComingSoon } from '@/components/ComingSoon'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { site } from '@/content/site'

export function TravelPage() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-8">
      <header className="flex flex-col gap-3">
        <p className="text-sm tracking-[0.2em] text-primary uppercase">Getting here</p>
        <h1 className="font-heading text-4xl font-medium tracking-tight md:text-5xl">
          Travel &amp; stay
        </h1>
        <p className="text-muted-foreground">
          Fly into Charlotte. Waxhaw is a south-of-the-city kind of situation.
          Hotel block and whether you actually need a rental car: coming.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle className="font-heading text-2xl font-medium">Airport</CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground">
          Charlotte Douglas (CLT) is the one. No need to get clever about it.
        </CardContent>
      </Card>

      <ComingSoon title="Where to stay" item={site.hotels} />
      <ComingSoon title="Things to do" item={site.thingsToDo} />
    </div>
  )
}
