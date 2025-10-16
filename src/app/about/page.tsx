'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { TimelineItem } from '@/components/TimelineItem'
import { Badge } from '@/components/ui/badge'

export default function AboutPage() {
  return (
    <main className="pt-24 px-6 max-w-7xl mx-auto space-y-24">
      {/* Hero Section */}
      <motion.section
        className="grid md:grid-cols-[1fr_1.5fr] gap-12 items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Animated Profile Image */}
        <motion.div layoutId="profile-image" initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }}>
          <Image
            src="/images/profile.jpg"
            alt="Padmini Gudavalli"
            width={400}
            height={400}
            className="rounded-full shadow-xl border-4 border-gold shadow-xl hover:scale-105 transition duration-300"
          />
        </motion.div>

        {/* Summary as Points */}
        <motion.div
          className="bg-rose/30 p-6 rounded-xl shadow-xl hover:scale-105 transition duration-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-charcoal">About Me</h2>
          <ul className="text-charcoal text-lg list-disc list-inside pl-4 space-y-2 text-justify">
            <li>I’m <span className="font-semibold">Padmini Gudavalli</span> — a <span className="font-semibold">passionate and curious AI/ML developer</span> and <span className="font-semibold">front-end enthusiast</span> who believes that technology should be <span className="font-semibold">human-first, impactful, and inclusive</span>.</li>
            <li>I love blending <span className="font-semibold">creativity with logic</span> — from designing clean, responsive UIs to building intelligent systems that solve meaningful problems.</li>
            <li>I’m a <span className="font-semibold">builder</span>, a <span className="font-semibold">thinker</span>, and someone who finds joy in creating things that <span className="font-semibold">make a difference</span>. I care deeply about the <span className="italic">why</span> behind everything I create.</li>
            <li>I learn by doing — <span className="font-semibold">unafraid to try, fail, and try again</span>. You'll often find me sketching, journaling, or wandering through curious rabbit holes of ideas.</li>
            <li>Let’s keep learning, building, and becoming — <span className="font-semibold">one step at a time</span>. 💫</li>
          </ul>
          <Link href="/skills">
            <Button variant="outline" className="mt-8 ml-6 border-rose bg-rose text-charcoal text-md hover:bg-white">
              Explore My Skills →
            </Button>
          </Link>
        </motion.div>
      </motion.section>

      {/* Education Timeline */}
      <section className="space-y-12">
        <h3 className="text-2xl font-bold text-charcoal">Education</h3>
        <div className="border-l-2 border-lilac/40 pl-6 space-y-4">
          <TimelineItem
            title="Bachelor of Technology in CSE (AI & ML)"
            institution="B V Raju Institute of Technology, JNTUH"
            duration="2022 – 2026"
            score="8.81 / 10"
            coursework="ML, DL, NLP, DSA, OS, CN, DBMS"
            logo="/images/icons/bvrit.png"
            link="https://bvrit.ac.in"
          />

          <TimelineItem
            title="Intermediate Education – MPC"
            institution="Sri Chaitanya Junior College, Hyderabad"
            duration="2019 – 2021"
            score="972 / 1000"
            coursework="Mathematics, Physics, Chemistry, Sanskrit, English"
            logo="/images/icons/chaitanya.png"
            link="https://srichaitanya.net"
          />

          <TimelineItem
            title="Matriculation"
            institution="NSKK High School, Hyderabad"
            duration="2019"
            score="9.8 / 10"
            coursework="Core Academics"
            logo="/images/icons/nskk.png"
            link="https://nskkhighschool.com"
          />
        </div>

      </section>

      {/* Personal Details */}
      <section className="grid md:grid-cols-[1.5fr_1fr] gap-10 space-y-12 md:space-y-0">
        {/* Info Table */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-charcoal mb-4">Personal Information</h3>
          <div className="grid grid-cols-2 gap-4 text-charcoal text-lg">
            <p><strong>Full Name:</strong> Padmini Gudavalli</p>
            <p><strong>Age:</strong> Early 20s</p>
            <p><strong>Gender:</strong> Female</p>
            <p><strong>Status:</strong> Unmarried</p>
            <p><strong>Location:</strong> Hyderabad, India</p>
            <p><strong>Languages:</strong> English, Telugu, Hindi</p>
            <p><strong>Hobbies:</strong> Sketching, UI design, Reading AI</p>
            <p><strong>Open to:</strong> Internships, Research, Remote Work</p>
            <p><strong>Fun Fact:</strong> I blend art and code — I see visuals in logic</p>
            <p><strong>Personality:</strong> Curious, Creative, Detail-oriented</p>
          </div>

          <h3 className="text-lg font-bold text-charcoal mt-6 mb-6">My Values</h3>
          <div className="text-lg text-charcoal mb-4 justify-center ml-6">
            <ul style={{ listStyleType: "circle" }}>
              <li>I believe technology should be accessible, human-centered, and meaningful.</li>
              <li>I strive to build systems that are not only functional, but also impactful and empathetic.</li>
              <li>I value continuous learning, creative exploration, and collaborative growth.</li>
            </ul>
          </div>
        </motion.div>

        {/* Enhanced Values Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/images/icons/values.jpg"
            alt="Values"
            width={350}
            height={250}
            className="rounded-xl shadow-lg border-[3px] border-gold mx-auto mt-20"
          />
        </motion.div>
      </section>

      {/* Final CTA */}
      <motion.section
        className="bg-gold/40 p-12 text-center rounded-2xl shadow-xl hover:scale-[1.03] transition-transform duration-300 ease-in-out"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h4 className="text-xl font-semibold text-charcoal mb-4 ">
          Want to collaborate, connect, or just talk tech?
        </h4>
        <Link href="/contact">
          <Button className="text-base ">Let’s Connect →</Button>
        </Link>
      </motion.section>
    </main>
  )
}
