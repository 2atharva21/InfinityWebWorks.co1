"use client"

import { motion } from "framer-motion"
import { Code, Palette, Zap, Shield } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function FeaturedServices() {
  const services = [
    {
      icon: <Code className="h-8 w-8 md:h-10 md:w-10" />,
      title: "Web Development",
      description: "Custom websites built with cutting-edge technologies for optimal performance and user experience.",
    },
    {
      icon: <Zap className="h-8 w-8 md:h-10 md:w-10" />,
      title: "AI-Powered Websites",
      description: "Intelligent solutions that leverage AI to create dynamic, personalized user experiences.",
    },
    {
      icon: <Palette className="h-8 w-8 md:h-10 md:w-10" />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces designed to engage users and enhance brand perception.",
    },
    {
      icon: <Shield className="h-8 w-8 md:h-10 md:w-10" />,
      title: "Cybersecurity",
      description: "Protect your digital assets with our comprehensive cybersecurity solutions.",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="py-12 md:py-20 relative" aria-labelledby="services-heading">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 id="services-heading" className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">Services</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-sm md:text-base">
            We offer a comprehensive range of digital services to help your business thrive in the digital landscape.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative bg-background/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.1)]"
              aria-label={`Service: ${service.title}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="mb-4 text-primary group-hover:text-primary/80 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-foreground/70 text-sm md:text-base">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center">
          <Button size="lg" asChild>
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

