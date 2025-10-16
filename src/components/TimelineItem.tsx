'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ReactNode } from 'react'

interface TimelineItemProps {
  title: string
  institution: string
  duration: string
  description?: string
  score?: string
  coursework?: string
  logo?: string
  link?: string
  children?: ReactNode
}

export function TimelineItem({
  title,
  institution,
  duration,
  description,
  score,
  coursework,
  logo,
  link,
  children
}: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative pl-10 pb-10 border-l-2 border-rose/30"
    >
      <div className="absolute left-0 top-4 w-4 h-4 bg-rose rounded-full border-2 border-white shadow" />

      <div className="bg-lilac/30 rounded-2xl shadow-lg p-5 hover:shadow-xl transition duration-300">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {logo && (
            <div className="w-20 h-20 shrink-0 rounded-xl overflow-hidden">
              <Image
                src={logo}
                alt={`${institution} logo`}
                width={64}
                height={64}
                className="object-contain w-full h-full"
              />
            </div>
          )}

          <div className="flex-1 space-y-1">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <h4 className="text-lg md:text-xl font-semibold text-charcoal">{title}</h4>
              <span className="text-md text-muted-foreground">{duration}</span>
            </div>

            <p className="text-md text-charcoal">
              {institution}
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-charcoal underline text-md"
                >
                  View Institution
                </a>
              )}
            </p>

            {description && <p className="text-md text-muted-foreground">{description}</p>}

            {score && (
              <p className="text-md text-charcoal font-medium">
                <span className="font-semibold">Score:</span> {score}
              </p>
            )}

            {coursework && (
              <p className="text-md text-charcoal">
                <span className="font-semibold">Coursework:</span> {coursework}
              </p>
            )}

            {children && <div className="pt-2">{children}</div>}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
