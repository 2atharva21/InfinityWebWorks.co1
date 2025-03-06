"use client"

import { motion } from "framer-motion"
import { Code, Palette, Rocket, Search, Zap } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: <Code className="h-10 w-10" />,
      title: "Web Development",
      description: "Custom websites built with cutting-edge technologies for optimal performance and user experience.",
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: "AI-Powered Websites",
      description: "Intelligent solutions that leverage AI to create dynamic, personalized user experiences.",
    },
    {
      icon: <Rocket className="h-10 w-10" />,
      title: "Automation",
      description: "Streamline your business processes with custom automation solutions that save time and resources.",
    },
    {
      icon: <Search className="h-10 w-10" />,
      title: "SEO Optimization",
      description: "Boost your online visibility with our comprehensive SEO strategies tailored to your business.",
    },
    {
      icon: <Palette className="h-10 w-10" />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces designed to engage users and enhance brand perception.",
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
    <section id="services" className="py-20 relative">
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
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">Services</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            We offer a comprehensive range of digital services to help your business thrive in the digital landscape.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative bg-background/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.1)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="mb-4 text-primary group-hover:text-primary/80 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-foreground/70">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

