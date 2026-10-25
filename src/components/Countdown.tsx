import { useEffect, useState } from 'react'
import { site } from '@/content/site'
import { cn } from '@/lib/utils'

export function Countdown({ className }: { className?: string }) {
  if (!site.date.confirmed || !site.date.iso) {
    return (
      <p
        className={cn(
          'text-sm tracking-wide text-muted-foreground uppercase',
          className,
        )}
      >
        {site.date.display}
      </p>
    )
  }

  return (
    <LiveCountdown
      iso={site.date.iso}
      display={site.date.display}
      className={className}
    />
  )
}

function LiveCountdown({
  iso,
  display,
  className,
}: {
  iso: string
  display: string
  className?: string
}) {
  const [days, setDays] = useState<number | null>(null)

  useEffect(() => {
    const target = new Date(`${iso}T00:00:00`).getTime()
    const tick = () =>
      setDays(Math.max(0, Math.ceil((target - Date.now()) / 86_400_000)))
    tick()
    const id = window.setInterval(tick, 60_000)
    return () => window.clearInterval(id)
  }, [iso])

  if (days === null) {
    return (
      <p
        className={cn(
          'text-sm tracking-wide text-muted-foreground uppercase',
          className,
        )}
      >
        {display}
      </p>
    )
  }

  return (
    <p
      className={cn(
        'text-sm tracking-wide text-muted-foreground uppercase',
        className,
      )}
    >
      {days} days until {display}
    </p>
  )
}
