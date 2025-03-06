"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { CheckCircle } from "lucide-react"

export default function AboutContent() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  const features = [
    "Expert team of developers and designers",
    "Cutting-edge technologies and frameworks",
    "Agile development methodology",
    "Focus on performance and scalability",
    "Dedicated support and maintenance",
    "Continuous innovation and improvement",
  ]

  return (
    <section className="py-20 relative" ref={ref}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Our{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">
                Mission
              </span>
            </h2>

            <p className="text-foreground/80">
              InfinityWebWorks.co is a forward-thinking web development agency dedicated to creating exceptional digital
              experiences. We combine technical expertise with creative innovation to deliver websites and applications
              that exceed expectations.
            </p>

            <p className="text-foreground/80">
              Our mission is to empower businesses with cutting-edge web solutions that drive growth and enhance user
              engagement. We believe in pushing the boundaries of what's possible in web development, constantly
              exploring new technologies and methodologies to stay ahead of the curve.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground/80">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            style={{ y }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-2xl backdrop-blur-sm border border-white/10 transform rotate-3" />
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl backdrop-blur-sm border border-white/10 transform -rotate-3" />
              <div className="absolute inset-4 bg-background/40 backdrop-blur-md rounded-xl overflow-hidden">
                <div className="w-full h-full bg-[url('/infinity-work-3.jpg?height=600&width=600')] bg-cover bg-center" />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            style={{ y: useTransform(scrollYProgress, [0, 1], [50, -50]) }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative w-full aspect-video max-w-md mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl backdrop-blur-sm border border-white/10" />
              <div className="absolute inset-4 bg-background/40 backdrop-blur-md rounded-xl overflow-hidden">
                <div className="w-full h-full bg-[url('/image.jpg?height=400&width=600')] bg-cover bg-center" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6 order-1 lg:order-2"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Our{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">Vision</span>
            </h2>

            <p className="text-foreground/80">
              We envision a digital landscape where businesses of all sizes can harness the power of technology to
              connect with their audience in meaningful ways. Our goal is to be at the forefront of this transformation,
              leading the way with innovative solutions that set new standards in the industry.
            </p>

            <p className="text-foreground/80">
              By combining creativity with technical excellence, we aim to create digital experiences that not only meet
              the current needs of our clients but are also adaptable to future technological advancements. We believe
              that the best digital solutions are those that evolve with the changing landscape, and we're committed to
              helping our clients stay ahead of the curve.
            </p>

            <div className="p-6 bg-primary/5 rounded-lg border border-primary/20">
              <h3 className="text-xl font-bold mb-2">Our Core Values</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span className="text-foreground/80">
                    Innovation: Constantly exploring new technologies and methodologies
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span className="text-foreground/80">
                    Excellence: Delivering high-quality solutions that exceed expectations
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span className="text-foreground/80">
                    Collaboration: Working closely with clients to understand their needs
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span className="text-foreground/80">Integrity: Building trust through transparency and honesty</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

