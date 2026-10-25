import { site } from '@/content/site'

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border/80">
      <div className="mx-auto flex max-w-5xl flex-col gap-1.5 px-4 py-8 text-base text-muted-foreground">
        <p className="font-heading text-xl text-foreground">
          {site.names.display}
        </p>
        <p>
          {site.location.display} · {site.date.display}
        </p>
        <p>
          Questions?{' '}
          <a className="underline decoration-primary/50 underline-offset-4" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </p>
        {site.photographer.creditReady ? (
          <p>Photos by {site.photographer.name}</p>
        ) : null}
      </div>
    </footer>
  )
}
