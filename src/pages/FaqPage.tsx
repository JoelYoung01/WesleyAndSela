import { site } from '@/content/site'

export function FaqPage() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-8">
      <header className="flex flex-col gap-3">
        <p className="text-sm tracking-[0.2em] text-primary uppercase">In case you wondered</p>
        <h1 className="font-heading text-4xl font-medium tracking-tight md:text-5xl">
          FAQ
        </h1>
      </header>
      <div className="flex flex-col gap-8">
        {site.faq.map((item) => (
          <section key={item.q} className="flex flex-col gap-2">
            <h2 className="font-heading text-2xl font-medium">{item.q}</h2>
            <p className="text-muted-foreground">{item.a}</p>
          </section>
        ))}
      </div>
    </div>
  )
}
