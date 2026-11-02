import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { navForMode, site } from '@/content/site'
import { cn } from '@/lib/utils'

const desktopNav = 'hidden items-center gap-1.5 text-base lg:flex'

const linkClass = (isActive: boolean, mobile = false) =>
  cn(
    'rounded-md text-muted-foreground transition-colors hover:text-foreground',
    mobile ? 'px-3 py-2.5 text-lg' : 'px-3 py-1.5',
    isActive && 'font-medium text-foreground',
  )

export function SiteHeader() {
  const items = navForMode(site.mode)
  const rsvp = items.find((item) => item.emphasis)
  const rest = items.filter((item) => !item.emphasis)
  const { pathname } = useLocation()
  const [menuPath, setMenuPath] = useState(pathname)
  const [open, setOpen] = useState(false)

  if (menuPath !== pathname) {
    setMenuPath(pathname)
    setOpen(false)
  }

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 64rem)')
    const closeOnDesktop = () => {
      if (desktop.matches) setOpen(false)
    }
    desktop.addEventListener('change', closeOnDesktop)
    return () => desktop.removeEventListener('change', closeOnDesktop)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="sticky top-0 z-20 border-b border-border/80 bg-background/90 backdrop-blur">
      <div className="flex w-full items-center justify-between gap-3 px-4 py-3 lg:px-6 lg:py-3.5">
        <Link
          to="/"
          className="font-heading text-2xl font-medium tracking-wide lg:text-3xl"
          onClick={() => setOpen(false)}
        >
          {site.names.display}
        </Link>

        <nav className={desktopNav} aria-label="Primary">
          {rest.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => linkClass(isActive)}
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

        <Button
          type="button"
          variant="ghost"
          size="icon-lg"
          className="lg:hidden"
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
        </Button>
      </div>

      <div
        className={cn(
          'grid transition-[grid-template-rows] duration-200 ease-out lg:hidden',
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
        )}
      >
        <div className="overflow-hidden">
          <nav
            id="site-menu"
            aria-label="Primary"
            inert={!open}
            className="flex flex-col gap-1 border-t border-border/80 px-4 py-3"
          >
            {rest.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) => linkClass(isActive, true)}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            {rsvp ? (
              <Button asChild size="lg" className="mt-2 w-full text-base">
                <Link to={rsvp.to} onClick={() => setOpen(false)}>
                  {rsvp.label}
                </Link>
              </Button>
            ) : null}
          </nav>
        </div>
      </div>
    </header>
  )
}
