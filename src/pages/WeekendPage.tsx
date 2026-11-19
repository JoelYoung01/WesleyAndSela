import { ComingSoon } from '@/components/ComingSoon'
import { VenueBlock } from '@/components/VenueBlock'
import { site } from '@/content/site'

export function WeekendPage() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-8">
      <header className="flex flex-col gap-3">
        <p className="text-sm tracking-[0.2em] text-primary uppercase">Show up</p>
        <h1 className="font-heading text-4xl font-medium tracking-tight md:text-5xl">
          Schedule
        </h1>
        <p className="text-muted-foreground">
          Most of you are coming in from out of state, so this will be more than
          one afternoon. Exact times are still landing. Ceremony is outdoors.
          Shoes should survive grass.
        </p>
      </header>

      <ComingSoon title="Wedding day schedule" item={site.schedule} />
      <VenueBlock />
      <ComingSoon title="Parking" item={site.parking} />
      <ComingSoon title="The rest of the weekend" item={site.itinerary} />
    </div>
  )
}
