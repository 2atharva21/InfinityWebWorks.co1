"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useAnimation } from "framer-motion"
import { Code, Palette, Rocket, Search, Zap, ArrowRight } from "lucide-react"
import AnimatedIcon from "@/components/animated-icon"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function ServicesList() {
  const [activeService, setActiveService] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()

  const services = [
    {
      icon: <Code className="h-10 w-10" />,
      title: "Web Development",
      description: "Custom websites built with cutting-edge technologies for optimal performance and user experience.",
      features: [
        "Responsive design for all devices",
        "Fast loading times and optimized performance",
        "Custom functionality and integrations",
        "Content management systems",
        "E-commerce solutions",
        "Progressive Web Apps (PWAs)",
      ],
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: "AI-Powered Websites",
      description: "Intelligent solutions that leverage AI to create dynamic, personalized user experiences.",
      features: [
        "Personalized user experiences",
        "AI-driven content recommendations",
        "Chatbots and virtual assistants",
        "Predictive analytics",
        "Natural language processing",
        "Machine learning integrations",
      ],
    },
    {
      icon: <Rocket className="h-10 w-10" />,
      title: "Automation",
      description: "Streamline your business processes with custom automation solutions that save time and resources.",
      features: [
        "Workflow automation",
        "Business process optimization",
        "Custom API integrations",
        "Data synchronization",
        "Automated reporting",
        "Task scheduling and management",
      ],
    },
    {
      icon: <Search className="h-10 w-10" />,
      title: "SEO Optimization",
      description: "Boost your online visibility with our comprehensive SEO strategies tailored to your business.",
      features: [
        "Keyword research and optimization",
        "On-page and off-page SEO",
        "Technical SEO audits",
        "Content strategy",
        "Local SEO",
        "Performance monitoring and reporting",
      ],
    },
    {
      icon: <Palette className="h-10 w-10" />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces designed to engage users and enhance brand perception.",
      features: [
        "User research and personas",
        "Wireframing and prototyping",
        "Visual design and branding",
        "Interaction design",
        "Usability testing",
        "Design systems",
      ],
    },
  ]

  useEffect(() => {
    if (containerRef.current && typeof window !== "undefined") {
      gsap.fromTo(
        containerRef.current.children,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }
  }, [])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-4"
              ref={containerRef}
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className={`cursor-pointer p-6 rounded-xl transition-all duration-300 ${
                    activeService === index
                      ? "bg-primary/10 border border-primary/50"
                      : "bg-background/50 border border-border/50 hover:border-primary/30"
                  }`}
                  onClick={() => setActiveService(index)}
                >
                  <div className="flex items-start gap-4">
                    <AnimatedIcon
                      icon={service.icon}
                      color={activeService === index ? "text-primary" : "text-primary/70"}
                    />
                    <div>
                      <h3
                        className={`text-xl font-bold mb-1 ${
                          activeService === index ? "text-primary" : "text-foreground"
                        }`}
                      >
                        {service.title}
                      </h3>
                      <p className="text-foreground/70 text-sm line-clamp-2">{service.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="lg:col-span-2">
            <motion.div
              key={activeService}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-xl p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <AnimatedIcon icon={services[activeService].icon} />
                <h2 className="text-3xl font-bold">{services[activeService].title}</h2>
              </div>

              <p className="text-foreground/80 text-lg mb-8">{services[activeService].description}</p>

              <h3 className="text-xl font-semibold mb-4">Key Features</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services[activeService].features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <ArrowRight className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-foreground/80">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-primary/5 rounded-lg border border-primary/20">
                <h4 className="text-lg font-semibold mb-2">Why Choose Our {services[activeService].title} Service?</h4>
                <p className="text-foreground/80">
                  Our team of experts brings years of experience and cutting-edge knowledge to every project. We focus
                  on delivering solutions that not only meet your current needs but are also scalable and future-proof.
                  With a commitment to quality and innovation, we ensure that your digital presence stands out in
                  today's competitive landscape.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

