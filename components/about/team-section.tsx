"use client"

import { motion } from "framer-motion"

export default function TeamSection() {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">Team</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Our talented team of experts is passionate about creating exceptional digital experiences that drive
            results.
          </p>
        </motion.div>

        <div className="text-center">
          <p className="text-foreground/70">
            We have a dedicated team of professionals who are committed to delivering the best results for our clients.
          </p>
        </div>
      </div>
    </section>
  )
}

