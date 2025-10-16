'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { experienceData } from '@/app/experience/ExperienceDetails';

import { ExperienceItem } from '@/types/ExperienceItem'
import Image from 'next/image'

// 🎯 Icons for types
const typeIcons: Record<ExperienceItem['type'], string> = {
  Internship: '💼',
  Hackathon: '🎯',
  Research: '🧪',
  Volunteering: '🤝',
}

// 🎨 Badge colors
const badgeColors = [
  'bg-rose/30 text-charcoal',
  'bg-lilac/30 text-charcoal',
  'bg-gold/30 text-charcoal',
  'bg-smoke text-charcoal',
]

export default function ExperienceTimeline() {
  const [filter, setFilter] = useState<'All' | ExperienceItem['type']>('All')

  const filteredData =
    filter === 'All' ? experienceData : experienceData.filter(e => e.type === filter)

  return (
    <section className="py-20 bg-gradient-to-b from-white via-smoke to-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-charcoal mb-6">
          🕰️ Experience Timeline
        </h2>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {['All', 'Internship', 'Hackathon', 'Research', 'Volunteering'].map(t => (
            <button
              key={t}
              onClick={() => setFilter(t as any)}
              className={`px-4 py-2 rounded-full border transition ${
                filter === t
                  ? 'bg-rose text-white border-rose'
                  : 'bg-white border-gray-300 hover:bg-gray-100'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <VerticalTimeline lineColor="#E2B6CF">
          {filteredData.map((item, i) => (
            <VerticalTimelineElement
              key={i}
              contentStyle={{
                background: '#fff',
                border: '1px solid #E2B6CF',
                borderRadius: '1rem',
                boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
              }}
              contentArrowStyle={{ borderRight: '7px solid #E2B6CF' }}
              date={item.date}
              icon={
                <span className="text-2xl" role="img">
                  {typeIcons[item.type]}
                </span>
              }
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Image
                    src={item.logo}
                    alt={item.org}
                    width={40}
                    height={40}
                    className="rounded-md"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-charcoal">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.org}</p>
                    {item.location && (
                      <p className="text-xs text-gray-500">{item.location}</p>
                    )}
                  </div>
                </div>

                <p className="text-gray-700 mb-3">{item.description}</p>

                {/* Highlights */}
                {item.highlights && (
                  <ul className="list-disc ml-5 text-sm text-gray-600 space-y-1 mb-3">
                    {item.highlights.map((h, idx) => (
                      <li key={idx}>{h}</li>
                    ))}
                  </ul>
                )}

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {item.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        badgeColors[idx % badgeColors.length]
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* External link */}
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-rose-600 hover:underline"
                  >
                    🔗 Learn More
                  </a>
                )}
              </motion.div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  )
}