'use client'

import { SkillCategory } from '@/app/skills/skillsData'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SkillGridProps {
  categories: SkillCategory[]
}

export default function SkillGrid({ categories }: SkillGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {categories.map((cat, idx) => (
        <motion.div
          key={cat.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1, duration: 0.5 }}
          viewport={{ once: true }}
          className="rounded-xl border p-5 bg-white shadow hover:shadow-lg transition"
        >
          <h3 className="text-xl font-semibold mb-2">{cat.title}</h3>
          <p className="text-muted-foreground text-sm mb-3">{cat.description}</p>
          <div className="flex flex-wrap gap-2">
            {cat.skills.map(skill => (
              <span
                key={skill.name}
                className={cn(
                  'px-3 py-1 rounded-full text-sm transition',
                  'bg-muted hover:bg-muted/80 text-charcoal border border-transparent',
                  {
                    'bg-gold/70': cat.color === 'gold',
                    'bg-rose/30': cat.color === 'rose',
                    'bg-blue/20': cat.color === 'blue',
                    'bg-purple-100': cat.color === 'lilac',
                    'bg-green-100': cat.color === 'green',
                  }
                )}
              >
                {skill.name}
                {skill.level && (
                  <span className="ml-1 text-xs text-gray-500">({skill.level})</span>
                )}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
