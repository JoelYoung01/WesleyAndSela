import { Button } from '@/components/ui/button'
import { site } from '@/content/site'

export function RsvpPage() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center gap-6 text-center">
      <p className="text-sm tracking-[0.2em] text-primary uppercase">Please reply</p>
      <h1 className="font-heading text-4xl font-medium tracking-tight md:text-5xl">
        RSVP
      </h1>
      <figure className="w-full max-w-sm overflow-hidden rounded-2xl border border-border/80 bg-card p-2 shadow-sm">
        <img
          src={site.images.selasFav.src}
          alt={site.images.selasFav.alt}
          className="aspect-[4/5] w-full rounded-xl object-cover"
        />
      </figure>
      {site.rsvp.placeholder ? (
        <p className="text-muted-foreground">
          The real Google Form is not live yet, so this button is a placeholder
          with a sense of humor. When the form exists, this page stays put and
          only the link changes.
        </p>
      ) : (
        <p className="text-muted-foreground">
          One form per household is plenty. Meals and the rest are on the form.
          {site.rsvp.deadline ? ` Please reply by ${site.rsvp.deadline}.` : ''}
          Need to change an answer later? Email us.
        </p>
      )}
      <Button asChild size="lg">
        <a href={site.rsvp.formUrl} target="_blank" rel="noreferrer">
          {site.rsvp.placeholder ? 'Placeholder RSVP' : 'Open RSVP form'}
        </a>
      </Button>
      <p className="text-sm text-muted-foreground">
        Questions:{' '}
        <a className="underline decoration-primary/50 underline-offset-4" href={`mailto:${site.email}`}>
          {site.email}
        </a>
      </p>
    </div>
  )
}
