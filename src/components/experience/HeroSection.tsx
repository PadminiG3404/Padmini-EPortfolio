'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ExperienceHeroSection() {
  return (
    <section className="w-full py-20 px-4 sm:px-8 md:px-16 lg:px-24 bg-gradient-to-br from-smoke to-white relative overflow-hidden">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

        {/* 📍 LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:w-1/2 space-y-6"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-charcoal leading-snug">
            My Journey Through <br className="hidden sm:block" /> Experience & Exploration
          </h1>
          <blockquote className="text-muted-foreground italic border-l-4 border-lilac pl-4">
            “Each role, project, and challenge added a petal to my growth — shaping who I am as a developer and a creative.”
          </blockquote>
          <p className="text-lg text-gray-700">
            From research and internships to national-level hackathons and conference presentations, here’s a look at my journey — driven by a desire to build, learn, and make meaningful impact through tech.
          </p>
        </motion.div>

        {/* 🎞️ RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative w-full lg:w-1/2 h-[400px] flex items-center justify-center"
        >
          {/* Profile image with lotus-style clip-path */}
          <div className="relative w-[250px] h-[250px] shadow-xl rounded-xl overflow-hidden bg-rose/10 border border-gold backdrop-blur-sm">
            <Image
              src="/images/profile-soft.jpg" // Replace with actual image
              alt="Profile photo"
              fill
              className="object-cover lotus-clip transition duration-700 ease-in-out"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
