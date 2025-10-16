import HeroSection from '@/components/skills/HeroSection'
import SkillTabs from '@/components/skills/SkillTabs'
import TimelineSection from '@/components/skills/TimeLineSection'
import CertificationSection from '@/components/skills/CertificationSection'
import SkillsCTA from '@/components/skills/SkillsCTA'

export default function SkillsPage() {
  return (
    <>
      <HeroSection />
      <section id="skills-section" className="px-4 sm:px-6 lg:px-20 py-10">
        <SkillTabs />
      </section>
      <TimelineSection />
      <section id="certifications-section" className="px-4 sm:px-6 lg:px-20 py-10">
        <CertificationSection />
      </section>
      <SkillsCTA />
    </>
  )
}
