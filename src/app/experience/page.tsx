'use client'

import HeroSection from '@/components/experience/HeroSection'
import ExperienceTimeline from '@/components/experience/ExperienceTimeline'
import ExperienceCTA from '@/components/experience/ExperienceCTA'

export default function ExperiencePage() {
  return (
    <main className="w-full min-h-screen bg-smoke">
      {/* Hero Section */}
      <HeroSection />

      {/* Timeline Section */}
      <section className="py-20">
        <ExperienceTimeline />
      </section>

      {/* Final CTA */}
      <ExperienceCTA />
    </main>
  )
}
