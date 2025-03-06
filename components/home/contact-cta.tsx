"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ContactCta() {
  return (
    <section className="py-20 relative" aria-labelledby="contact-cta-heading">
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
          className="bg-background/30 backdrop-blur-md border border-border/50 rounded-2xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 id="contact-cta-heading" className="text-3xl md:text-4xl font-bold">
                Ready to{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">
                  transform
                </span>{" "}
                your digital presence?
              </h2>
              <p className="text-foreground/70">
                Let's discuss how we can help your business thrive in the digital world. Our team is ready to bring your
                vision to life.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end">
              <Button size="lg" asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

