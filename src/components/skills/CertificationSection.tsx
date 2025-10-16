'use client'

import { motion } from 'framer-motion'
import { certifications } from '@/app/skills/certifications'

export default function CertificationSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-pink-50 to-white" id="certifications">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-charcoal mb-4">🎓 Certifications</h2>
        <p className="text-center text-muted-foreground mb-12">
          Certifications that shaped my understanding across AI, Web Dev, Cloud, Ethics, and more.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-muted rounded-xl shadow-md p-5 flex flex-col justify-between hover:shadow-lg transition duration-300"
            >
              <div className="flex items-center gap-4">
                <img src={cert.logo} alt={cert.title} className="w-12 h-12 object-contain" />
                <div>
                  <h3 className="text-lg font-semibold text-charcoal flex items-center gap-1">
                    <span>{cert.icon}</span> {cert.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {cert.institute} • {cert.date}
                  </p>
                </div>
              </div>

              <div className="mt-4">
                <p className="text-sm text-charcoal font-medium mb-2">Skills Acquired:</p>
                <ul className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, idx) => (
                    <li
                      key={idx}
                      className="text-xs px-3 py-1 bg-pink-100 text-charcoal rounded-full border hover:bg-pink-200 transition"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
