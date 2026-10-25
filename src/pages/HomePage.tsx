import { Link } from 'react-router-dom'
import { ComingSoon } from '@/components/ComingSoon'
import { Countdown } from '@/components/Countdown'
import { Button } from '@/components/ui/button'
import { site } from '@/content/site'

export function HomePage() {
  return (
    <div className="flex flex-col items-center">
      <section className="relative flex min-h-[calc(100svh-3.5rem)] w-full items-end justify-center overflow-hidden px-4 py-14 text-center md:items-center md:py-24">
        <img
          src={site.images.hero.src}
          alt={site.images.hero.alt}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover object-[center_35%]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-black/25"
        />

        <div className="relative z-10 flex max-w-2xl flex-col items-center gap-4 text-[#f8ebe2] drop-shadow-sm">
          <p className="text-xs font-medium tracking-[0.25em] text-[#f8ebe2]/90 uppercase md:text-sm">
            {site.location.display}
          </p>
          <h1 className="font-heading text-6xl font-medium tracking-tight text-[#f8ebe2] md:text-8xl">
            {site.names.display}
          </h1>
          <Countdown className="text-[#f8ebe2]/90" />
          <p className="max-w-lg text-base text-[#f8ebe2]/90 md:text-lg">
            We are getting married in the woods-adjacent corner of North
            Carolina, and we would like you there. Details will fill in as we
            pin them down.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-[#f8ebe2]/60 bg-black/25 px-5 text-[#f8ebe2] backdrop-blur-xs hover:bg-[#f8ebe2]/20 hover:text-[#f8ebe2]"
            >
              <Link to="/rsvp">RSVP</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-[#f8ebe2]/60 bg-black/25 px-5 text-[#f8ebe2] backdrop-blur-xs hover:bg-[#f8ebe2]/20 hover:text-[#f8ebe2]"
            >
              <Link to="/schedule">Schedule</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-[#f8ebe2]/60 bg-black/25 px-5 text-[#f8ebe2] backdrop-blur-xs hover:bg-[#f8ebe2]/20 hover:text-[#f8ebe2]"
            >
              <Link to="/registry">Registry</Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-12 px-4 py-12 md:py-16">
        <section className="grid w-full max-w-4xl gap-4 md:grid-cols-12">
          <figure className="overflow-hidden rounded-2xl border border-border/80 bg-card p-2 shadow-sm md:col-span-5">
            <img
              src={site.images.formalSmiles.src}
              alt={site.images.formalSmiles.alt}
              loading="lazy"
              className="aspect-[2/3] h-full w-full rounded-xl object-cover"
            />
          </figure>
          <div className="flex flex-col gap-4 md:col-span-7">
            <figure className="overflow-hidden rounded-2xl border border-border/80 bg-card p-2 shadow-sm">
              <img
                src={site.images.ring.src}
                alt={site.images.ring.alt}
                loading="lazy"
                className="aspect-[3/2] w-full rounded-xl object-cover"
              />
            </figure>
            <div className="grid gap-4 sm:grid-cols-2">
              <figure className="overflow-hidden rounded-2xl border border-border/80 bg-card p-2 shadow-sm">
                <img
                  src={site.images.selasFav.src}
                  alt={site.images.selasFav.alt}
                  loading="lazy"
                  className="aspect-[4/5] h-full w-full rounded-xl object-cover"
                />
              </figure>
              <figure className="overflow-hidden rounded-2xl border border-border/80 bg-card p-2 shadow-sm">
                <img
                  src={site.images.informalFun.src}
                  alt={site.images.informalFun.alt}
                  loading="lazy"
                  className="aspect-[4/5] h-full w-full rounded-xl object-cover"
                />
              </figure>
            </div>
          </div>
        </section>

        <section className="grid w-full max-w-4xl gap-4 text-left md:grid-cols-2">
          <ComingSoon title="The venue" item={site.venue} />
          <ComingSoon title="Photos" item={site.photos} />
        </section>
      </div>
    </div>
  )
}
