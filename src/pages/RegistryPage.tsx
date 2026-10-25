import { ComingSoon } from '@/components/ComingSoon'
import { site } from '@/content/site'

export function RegistryPage() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-8">
      <header className="flex flex-col gap-3">
        <p className="text-sm tracking-[0.2em] text-primary uppercase">Gifts</p>
        <h1 className="font-heading text-4xl font-medium tracking-tight md:text-5xl">
          Registry
        </h1>
        <p className="text-muted-foreground">
          Your being here is the main thing. If you would like to get us
          something anyway: Amazon and Venmo links will live here. Boxed gifts
          at the venue are perfectly fine.
        </p>
      </header>

      <ComingSoon title="Amazon" item={site.registry.amazon} />
      <ComingSoon title="Venmo" item={site.registry.venmo} />
    </div>
  )
}
