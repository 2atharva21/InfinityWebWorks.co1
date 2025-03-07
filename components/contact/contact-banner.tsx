'use client'

import { motion } from "framer-motion"

export default function ContactBanner() {
  return (
    <section className="relative pt-20 sm:pt-32 pb-16 sm:pb-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-56 sm:w-80 h-56 sm:h-80 bg-cyan-500/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Get in{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">Touch</span>
          </h1>
          <p className="text-lg sm:text-xl text-foreground/70">
            Have a project in mind or want to learn more about our services? We'd love to hear from you. Let's create
            something amazing together.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
