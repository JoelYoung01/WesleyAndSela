import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export function NotFoundPage() {
  return (
    <div className="flex flex-col items-center gap-4 py-16 text-center">
      <h1 className="font-heading text-4xl font-medium">Wrong turn</h1>
      <p className="text-muted-foreground">That page is not part of the weekend.</p>
      <Button asChild>
        <Link to="/">Back home</Link>
      </Button>
    </div>
  )
}
