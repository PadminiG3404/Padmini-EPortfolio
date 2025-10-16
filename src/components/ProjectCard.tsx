'use client'

import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Github, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { ProjectCategory, Project} from '@/app/projects/ProjectDetails'

const categoryColors: Record<ProjectCategory, string> = {
  software: 'bg-lilac/20',
  aiml: 'bg-rose/20',
  datascience: 'bg-gold/20',
  research: 'bg-blue-100/20',
}

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.03 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className={`rounded-2xl shadow-xl overflow-hidden flex flex-col justify-between ${categoryColors[project.categories[0]]} p-4`}
      >
        <div>
          <div className="relative w-full h-40 mb-4 rounded-xl overflow-hidden">
            <Image
              src={project.image || '/images/projects/placeholder.png'}
              alt={project.title}
              fill
              className="object-cover rounded-xl"
            />
          </div>
          <h3 className="text-xl font-semibold text-charcoal mb-1">{project.title}</h3>
          <p className="text-muted-foreground text-sm mb-2 line-clamp-2">{project.description}</p>

          <div className="flex flex-wrap gap-2 mt-2">
            {project.technologies?.map((tech, idx) => (
              <Badge key={idx} className="bg-white text-charcoal border border-gray-200">
                {tech}
              </Badge>
            ))}
          </div>

          {project.status && (
            <div className="mt-3">
              <Badge className="text-xs px-2 py-1 bg-muted-foreground text-white">
                {project.status}
              </Badge>
            </div>
          )}
        </div>

        <div className="mt-4 flex flex-wrap gap-3">
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-700 hover:underline"
            >
              <Github className="w-4 h-4 mr-1" /> GitHub
            </Link>
          )}
          <button
            onClick={() => setShowDetails(true)}
            className="inline-flex items-center text-rose hover:underline"
          >
            View Details <ArrowRight className="ml-1 w-4 h-4" />
          </button>
        </div>
      </motion.div>

      {/* Modal Section */}
      <AnimatePresence>
        {showDetails && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center"
            onClick={() => setShowDetails(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              transition={{ duration: 0.3 }}
              onClick={e => e.stopPropagation()}
              className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-xl p-6 relative"
            >
              <button
                className="absolute top-4 right-4 text-muted-foreground hover:text-rose"
                onClick={() => setShowDetails(false)}
              >
                <X className="w-6 h-6" />
              </button>

              <h2 className="text-2xl font-bold text-charcoal mb-4">{project.title}</h2>

              <Image
                src={project.image || '/images/projects/placeholder.png'}
                alt={project.title}
                width={600}
                height={300}
                className="rounded-xl mb-4 object-cover w-full max-h-64"
              />

              <div className="space-y-4 text-sm text-gray-700">
                {project.detailedDescription?.problemStatement && (
                  <div>
                    <h3 className="font-semibold text-base">Problem Statement</h3>
                    <p>{project.detailedDescription.problemStatement}</p>
                  </div>
                )}
                {project.detailedDescription?.overview && (
                  <div>
                    <h3 className="font-semibold text-base">Overview</h3>
                    <p>{project.detailedDescription.overview}</p>
                  </div>
                )}
                {project.detailedDescription?.keyFeatures?.length && (
                  <div>
                    <h3 className="font-semibold text-base">Key Features</h3>
                    <ul className="list-disc list-inside space-y-1">
                      {project.detailedDescription.keyFeatures.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {project.detailedDescription?.challenges?.length && (
                  <div>
                    <h3 className="font-semibold text-base">Challenges</h3>
                    <ul className="list-disc list-inside space-y-1">
                      {project.detailedDescription.challenges.map((challenge, idx) => (
                        <li key={idx}>{challenge}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {project.detailedDescription?.additionalInfo && (
                  <div>
                    <h3 className="font-semibold text-base">Additional Info</h3>
                    <p>{project.detailedDescription.additionalInfo}</p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
