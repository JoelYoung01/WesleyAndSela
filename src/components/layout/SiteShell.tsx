import { Outlet, useLocation } from 'react-router-dom'
import { SiteFooter } from '@/components/layout/SiteFooter'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { cn } from '@/lib/utils'

export function SiteShell() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <main
        className={cn(
          'flex-1',
          !isHome && 'mx-auto w-full max-w-5xl px-4 py-10 md:py-14',
        )}
      >
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}
