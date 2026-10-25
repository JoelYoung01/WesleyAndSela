import { Route, Routes } from 'react-router-dom'
import { SiteShell } from '@/components/layout/SiteShell'
import { FaqPage } from '@/pages/FaqPage'
import { HomePage } from '@/pages/HomePage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { RegistryPage } from '@/pages/RegistryPage'
import { RsvpPage } from '@/pages/RsvpPage'
import { TravelPage } from '@/pages/TravelPage'
import { WeekendPage } from '@/pages/WeekendPage'

export default function App() {
  return (
    <Routes>
      <Route element={<SiteShell />}>
        <Route index element={<HomePage />} />
        <Route path="schedule" element={<WeekendPage />} />
        <Route path="travel" element={<TravelPage />} />
        <Route path="rsvp" element={<RsvpPage />} />
        <Route path="registry" element={<RegistryPage />} />
        <Route path="faq" element={<FaqPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
