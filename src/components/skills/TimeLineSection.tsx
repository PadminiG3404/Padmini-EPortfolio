'use client'

import { motion } from 'framer-motion'
import { skillTimelineData } from '@/app/skills/skillTimelineData'

// Lotus-inspired pastel themes
const cardColors = [
  'bg-pink-50 border-pink-200',
  'bg-rose-50 border-rose-200',
  'bg-purple-50 border-purple-200',
  'bg-violet-50 border-violet-200',
  'bg-fuchsia-50 border-fuchsia-200',
  'bg-indigo-50 border-indigo-200',
  'bg-amber-50 border-amber-200',
]

export default function TimelineSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-rose-50 to-white" id="timeline">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-charcoal mb-4">📈 My Skill Evolution</h2>
        <p className="text-center text-muted-foreground mb-12">
          A journey of curiosity, persistence, and purpose — from logic basics to LLMs and scalable systems.
        </p>

        <div className="overflow-x-auto">
          <div className="flex space-x-8 px-4 md:px-10 min-w-[1000px]">
            {skillTimelineData.map((item, index) => {
              const cardColor = cardColors[index % cardColors.length]

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`rounded-xl shadow-md p-6 w-80 shrink-0 flex flex-col justify-between hover:shadow-lg transition border ${cardColor}`}
                >
                  <div>
                    <div className="text-sm font-semibold text-rose-500">{item.date}</div>
                    <h3 className="text-lg font-bold text-charcoal mt-2">Skills Gained</h3>
                    <ul className="flex flex-wrap gap-2 mt-3">
                      {item.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="bg-white/70 text-charcoal text-xs px-3 py-1 rounded-full font-medium border border-white hover:bg-white/90 transition"
                        >
                          {skill}
                        </span>
                      ))}
                    </ul>
                  </div>
                  {item.note && (
                    <p className="text-sm text-muted-foreground mt-4 italic">"{item.note}"</p>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
