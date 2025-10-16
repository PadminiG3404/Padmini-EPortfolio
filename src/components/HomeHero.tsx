'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowDown } from 'lucide-react'
import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'

export default function HomeHero() {
  return (
    <section className="w-full max-w-7xl mx-auto py-24 px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">

        {/* Left Column – Greeting + Typewriter + Button */}
        <motion.div
          className="space-y-6 text-center md:text-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl text-muted-foreground">Hello,</h2>
          <h1 className="text-5xl md:text-6xl font-bold text-charcoal leading-tight">
            I&apos;m{' '}
            <span className="text-lilac drop-shadow-[2px_2px_0px_#2D2D2D]">
              Padmini Gudavalli
            </span>
          </h1>

          <div className="text-2xl text-charcoal font-medium">
            I’m an Aspiring{' '}
            <span className="text-rose text-4xl">
              <Typewriter
                options={{
                  strings: ['Software Developer', 'ML Engineer', 'Programmer'],
                  autoStart: true,
                  loop: true,
                  delay: 60,
                  deleteSpeed: 40,
                }}
              />
            </span>
          </div>

          <Link href="#about">
            <Button className="mt-8 bg-lilac text-charcoal hover:bg-rose transition-all">
              Learn More About Me
            </Button>
          </Link>
        </motion.div>

        {/* Center Column – Profile Picture */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="relative w-96 h-96 rounded-full overflow-hidden border-[6px] border-gold shadow-xl hover:scale-105 transition duration-300">
            <Image
              src="/images/profile.jpg"
              alt="Padmini Gudavalli"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Right Column – Description + Projects CTA */}
        <motion.div
          className="text-center md:text-left space-y-6 md:ml-12"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xl text-muted-foreground leading-snug">
            As a student, I’m on a journey to become a passionate AIML and 
            software developer — telling stories through code and building digital 
            experiences that inspire calm, purpose, and change.
          </p>

          <Link href="#projects">
            <Button variant="outline" className="mt-8 border-rose bg-rose text-charcoal hover:bg-lilac">
              See My Works →
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Bottom Caption Quote */}
      <motion.div
        className="mt-16 text-center md:text-right italic font-serif text-2xl text-charcoal"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        “Let’s collaborate and build something beautiful — where logic meets elegance.”
      </motion.div>

      {/* Scroll anchor */}
      <div className="flex justify-center mt-12">
        <Link href="#about">
          <Button variant="ghost" className="animate-bounce text-lilac">
            <ArrowDown className="w-6 h-6" />
          </Button>
        </Link>
      </div>
    </section>
  )
}
