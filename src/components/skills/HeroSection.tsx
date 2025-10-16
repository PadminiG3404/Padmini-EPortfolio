'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const techWords = [
  'Python', 'TensorFlow', 'FastAPI', 'React', 'HuggingFace',
  'OpenAI', 'SQL', 'HTML', 'NLP', 'RAG', 'DL', 'ML', 'Java'
]

export default function HeroSection() {
  return (
    <section className="w-full py-16 px-4 sm:px-8 md:px-16 lg:px-24 bg-gradient-to-br from-[#fdfbff] to-[#f4f6fc]">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:w-1/2 space-y-6"
        >
          <h1 className="mt-12 text-4xl sm:text-5xl font-bold text-charcoal leading-snug">
            Skills & Tools that Shape My Tech Journey
          </h1>
          <blockquote className="text-muted-foreground italic border-l-4 border-lilac pl-4">
            “Technology is my canvas, and every skill is a brushstroke — together they paint meaningful, scalable digital experiences.”
          </blockquote>
          <p className="text-lg text-gray-700">
            As an aspiring AIML developer and software builder, I focus on mastering tools that solve real-world problems with purpose and precision. From machine learning to full-stack dev, my stack is constantly evolving to meet both user needs and innovation standards.
          </p>
          <div className="flex flex-wrap gap-6">
            <Button
              variant="default"
              size="lg"
              className="bg-rose text-white hover:bg-lilac/90 transition"
              onClick={() => {
                document.getElementById('skills-section')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              See Full Stack →
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-charcoal text-charcoal hover:bg-charcoal/10"
              onClick={() => window.location.href = '/projects'}
            >
              View My Projects →
            </Button>
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm self-center">
              🌱 Lifelong Learner
            </span>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative w-full lg:w-1/2 h-[420px] flex items-center justify-center"
        >
          {/* Decorative SVG background (lotus style) */}
          <div className="absolute w-72 h-72 bg-gradient-radial from-pink-100 to-transparent rounded-full blur-3xl opacity-30 -z-10" />

          {/* Floating Tech Words*/}
          <div className="relative w-full h-full mt-12">
            <div className="relative w-full h-[400px]">
              {techWords.map((word, i) => (
                <motion.div
                  key={word}
                  className={`absolute px-3 py-1 text-sm font-medium rounded-full shadow-sm whitespace-nowrap
                    ${
                      [
                        'bg-rose', // rose
                        'bg-lilac', // lilac
                        'bg-gold', // gold
                        'bg-light-gold', // light-gold
                        'bg-smoke'  // smoke
                      ][i % 5]
                    } text-charcoal`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: 1,
                    y: [0, -10, 0],
                  }}
                  transition={{
                    delay: i * 0.15,
                    duration: 3 + (i % 2),
                    repeat: Infinity,
                    repeatType: 'mirror',
                  }}
                  style={{
                    top: `${i * 36}px`,                // vertically stacked with spacing
                    left: `${(i % 3) * 90 + 20}px`,     // slight left offset per row
                  }}
                >
                  {word}
                </motion.div>
              ))}
            </div>
          </div>



          {/* Soft Illustration */}
          <Image
            src="/images/about2.jpg"
            alt="Tech Mind"
            width={250}
            height={250}
            className="absolute bottom-0 right-4 opacity-90 rounded-lg shadow-lg"
          />
        </motion.div>

      </div>
    </section>
  )
}
