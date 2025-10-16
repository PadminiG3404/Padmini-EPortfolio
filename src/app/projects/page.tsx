'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ProjectCard } from '@/components/ProjectCard'
import { cn } from '@/lib/utils'
import { projectDetails, } from './ProjectDetails'

const FILTERS = [
  { label: 'All', value: 'all' },
  { label: '🛠 Software Development', value: 'software' },
  { label: '🧠 AI/ML', value: 'aiml' },
  { label: '📊 Data Science', value: 'datascience' },
  { label: '🔬 Experimental / Research', value: 'research' },
] as const

type FilterValue = typeof FILTERS[number]['value']

export default function ProjectsPage() {
  const [filter, setFilter] = useState<FilterValue>('all')

  const filteredProjects =
    filter === 'all'
      ? projectDetails
      : projectDetails.filter(project =>
          project.categories.includes(filter as any)
        )

  return (
    <div className="min-h-screen py-16 px-6 md:px-20 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-3">
          Projects & Experiments
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A curated collection of ideas transformed into elegant solutions — blending
          creativity, logic, and purpose.
        </p>
      </motion.div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {FILTERS.map(f => (
          <Badge
            key={f.value}
            onClick={() => setFilter(f.value)}
            className={cn(
              'cursor-pointer px-4 py-2 rounded-full text-base transition-all',
              filter === f.value
                ? 'bg-lilac text-white shadow-lg'
                : 'bg-white border border-muted text-muted-foreground'
            )}
          >
            {f.label}
          </Badge>
        ))}
      </div>

      {/* Project Grid */}
      <motion.div layout className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>

      {/* Final CTA */}
      <div className="mt-24 text-center bg-lilac/10 py-10 rounded-2xl">
        <h3 className="text-2xl font-semibold mb-4 text-charcoal">
          Interested in any of my work?
        </h3>
        <p className="text-muted-foreground mb-6">
          Let’s collaborate or geek out over a shared idea.
        </p>
        <Button variant="default" className="text-white bg-lilac hover:scale-105 transition">
          Let’s Collaborate →
        </Button>
      </div>
    </div>
  )
}
