// HeroTeaser.tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { fadeIn } from '@/lib/animations' // Create this helper for consistent motion presets
import { Github, Linkedin, Mail } from 'lucide-react'

export default function HeroTeaser() {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="w-full max-w-7xl mx-auto py-16 px-6 space-y-24"
    >
      {/* 🔹 Section 1: About Me Overview */}
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-semibold text-charcoal mb-0 text-center mt-0 mb-6">About Me</h2>
        <motion.div
          variants={fadeIn(0)}
          className="grid md:grid-cols-3 gap-4 bg-rose/30 p-8 rounded-lg shadow-md max-w-5xl w-full mx-auto"
        >
          {/* Left Column */}
          <ul className="md:col-span-2 space-y-3 text-charcoal text-lg leading-relaxed">
            <li>
              • Final-year <span className="font-semibold">B.Tech</span> student in <span className="font-semibold">AIML</span> at <span className="font-semibold">BVRIT Narsapur</span> (Expected Graduation: <span className="font-semibold">2026</span>), passionate about using <span className="font-semibold">technology</span> to drive meaningful change.
            </li>
            <li>
              • Fascinated by <span className="font-semibold">AI</span> and its power to redefine the world, I aim to build <span className="font-semibold">human-centric</span>, <span className="font-semibold">scalable</span>, and <span className="font-semibold">elegant digital solutions</span> that solve real-world problems.
            </li>
            <li>
              • Skilled in <span className="font-semibold">AI-powered development</span>, <span className="font-semibold">full-stack web applications</span>, and <span className="font-semibold">competitive programming</span>, blending technical precision with creative problem-solving.
            </li>
            <li>
              • Currently interning at <span className="font-semibold">APTPath</span>, working on <span className="font-semibold">SweetSpot</span> — a full-stack <span className="font-semibold">cake delivery platform</span>.
            </li>
            <li>
              • Actively engaged in <span className="font-semibold">research conferences</span>, <span className="font-semibold">national-level hackathons</span>, and collaborative tech projects focused on <span className="font-semibold">innovation</span> and <span className="font-semibold">impact</span>.
            </li>
          </ul>

          {/* Right Column - Images */}
          <div className="flex items-center md:pl-6">
            <Image
              src="/images/about1.jpg"
              alt="Project Work 1"
              width={250}
              height={150}
              className="rounded-lg shadow-md hover:scale-105 transition duration-300"
            />
          </div>
        </motion.div>
      </div>

      {/* 🔹 Section 2: About My Works */}
      <motion.div variants={fadeIn(1)} className="space-y-6 text-center">
        <h2 className="text-2xl font-semibold text-charcoal">My Core Focus Areas</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Software Development',
              desc: 'Building scalable front-end and back-end systems focused on performance, usability, and modern design.',
              skills: ['HTML', 'CSS', 'JavaScript', 'React'],
              href: '/projects#software',
              bg: 'bg-lilac/20'
            },
            {
              title: 'AI & Machine Learning',
              desc: 'Developing intelligent models using deep learning and LLMs to solve practical, real-world challenges.',
              skills: ['Python', 'TensorFlow', 'LLMs', 'Deep Learning'],
              href: '/projects#aiml',
              bg: 'bg-gold/20'
            },
            {
              title: 'Data Science',
              desc: 'Extracting meaningful insights through data analysis, predictive modeling, and intuitive visualizations.',
              skills: ['Pandas', 'NumPy', 'Matplotlib', 'Power BI'],
              href: '/projects#datascience',
              bg: 'bg-rose/20'
            }
          ].map((card, idx) => (
            <motion.a
            key={idx}
            href={card.href}
            variants={fadeIn(1.2 + idx * 0.2)}
            whileHover={{ scale: 1.05 }}
            className={`rounded-xl ${card.bg} p-6 text-left shadow-md transition flex flex-col items-start`}
          >
            <h3 className="text-lg font-semibold text-charcoal mb-2">{card.title}</h3>
            <p className="text-muted-foreground text-m mb-3">{card.desc}</p>
            <div className="mb-3">
              <span className="font-semibold text-charcoal text-m">Key Skills:</span>
              <ul className="flex flex-wrap gap-2 mt-2">
                {card.skills.map((skill, i) => (
                  <li key={i} className="bg-white/60 border border-gray-200 rounded px-2 py-0.5 text-sm font-medium text-charcoal">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* Replacing nested <a> with a styled <span> */}
            <span className="inline-block mb-3 mt-1 px-4 py-1.5 border border-charcoal rounded-md bg-charcoal text-white text-sm font-semibold hover:bg-white hover:text-charcoal transition">
              View my works →
            </span>

            <div className="w-full flex justify-center mt-auto">
              <img src={`/images/focus-${idx + 1}.png`} alt={`${card.title} illustration`} className="h-40 object-contain mt-2" />
            </div>
          </motion.a>

          ))}
        </div>
      </motion.div>
      

      {/* 🔹 Section 3: CTA and Footer */}
      <motion.div variants={fadeIn(2)} className="text-center space-y-6">
        <div className="bg-smoke/50 p-6 rounded-xl">
          <h3 className="text-xl font-semibold text-charcoal">
            Let’s collaborate and build something beautiful — where logic meets elegance.
          </h3>
          <Link href="/contact">
            <Button className="mt-4 hover:scale-105 transition-transform duration-200">Get in Touch →</Button>
          </Link>
        </div>

        {/* Footer */}
        <footer className="pt-6 border-t border-muted-foreground/20 text-sm text-muted-foreground flex flex-col items-center gap-2">
          <div>Padmini © {new Date().getFullYear()}</div>
          <div className="flex gap-4">
            <Link href="https://github.com/PadminiG3404" target="_blank" aria-label="GitHub">
              <Github className="w-5 h-5 hover:text-charcoal" />
            </Link>
            <Link href="https://www.linkedin.com/in/padmini-gudavalli-226245259" target="_blank" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5 hover:text-charcoal" />
            </Link>
            <Link href="mailto:22211a6642@bvrit.ac.in" aria-label="Email">
              <Mail className="w-5 h-5 hover:text-charcoal" />
            </Link>
          </div>
        </footer>
      </motion.div>
    </motion.section>
  )
}
