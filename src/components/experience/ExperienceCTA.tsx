'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function ExperienceCTA() {
  return (
    <section className="relative py-20 mt-16 bg-gradient-to-br from-rose/20 via-lilac/20 to-gold/20 rounded-2xl overflow-hidden">
      {/* Subtle Lotus / Bloom Animation */}
      <motion.div
        className="absolute inset-0 bg-[url('/images/lotus-bg.svg')] bg-contain bg-no-repeat bg-center opacity-10"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 text-center max-w-2xl mx-auto"
      >
        <h3 className="text-2xl sm:text-3xl font-bold text-charcoal mb-4">
          🌸 Want to collaborate or know more?
        </h3>
        <p className="text-muted-foreground mb-6">
          My journey is still unfolding — let’s build, explore, and innovate together.  
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/projects">
            <Button className="bg-rose text-white hover:scale-105 hover:bg-rose/80 transition-transform">
              See My Projects →
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              variant="outline"
              className="border-charcoal text-charcoal hover:bg-charcoal/10 transition"
            >
              Let’s Connect →
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
