'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function SkillsCTA() {
  return (
    <motion.section
      className="mt-24 flex justify-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      id="skills-cta"
    >
      <div className="w-full max-w-6xl text-center bg-lilac/10 py-10 px-6 rounded-2xl shadow-sm">
        <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-charcoal">
          Always learning, always building.
        </h3>

        <p className="text-muted-foreground mb-6">
          Open to projects, mentorship, and collaboration. Let’s connect and create something meaningful.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <Link href="/projects">
            <Button variant="default" className="text-white bg-lilac hover:scale-105 transition">
              See My Projects →
            </Button>
          </Link>

          <Link href="/contact">
            <Button variant="outline" className="hover:scale-105 transition">
              Let’s Talk →
            </Button>
          </Link>
        </div>
      </div>
    </motion.section>
  )
}
