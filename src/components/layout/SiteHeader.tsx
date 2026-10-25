import { Link, NavLink } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { navForMode, site } from '@/content/site'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const items = navForMode(site.mode)
  const rsvp = items.find((item) => item.emphasis)
  const rest = items.filter((item) => !item.emphasis)

  return (
    <header className="sticky top-0 z-20 border-b border-border/80 bg-background/90 backdrop-blur">
      <div className="flex w-full flex-wrap items-center justify-between gap-3 px-6 py-3.5">
        <Link to="/" className="font-heading text-2xl font-medium tracking-wide md:text-3xl">
          {site.names.display}
        </Link>
        <nav className="flex flex-wrap items-center gap-1.5 text-base">
          {rest.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                cn(
                  'rounded-md px-3 py-1.5 text-muted-foreground transition-colors hover:text-foreground',
                  isActive && 'font-medium text-foreground',
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
          {rsvp ? (
            <Button asChild size="default" className="ml-2 px-4 text-base">
              <Link to={rsvp.to}>{rsvp.label}</Link>
            </Button>
          ) : null}
        </nav>
      </div>
    </header>
  )
}
