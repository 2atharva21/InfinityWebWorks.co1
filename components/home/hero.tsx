'use client'

import { useEffect, useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const [text, setText] = useState("")
  const fullText = "Building the Future of Web with AI & Innovation"
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  useEffect(() => {
    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(interval)
      }
    }, 50)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current.querySelectorAll(".gsap-hero-element"),
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
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

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center pt-16 px-4 md:px-6" aria-labelledby="hero-heading">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          style={{ y, opacity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-glow"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]), opacity }}
          className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-glow"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "25%"]), opacity }}
          className="absolute top-1/2 right-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-glow"
        />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div className="space-y-6 md:space-y-8 gsap-hero-element">
            <div>
              <motion.div className="text-sm md:text-base font-medium text-primary mb-4">
                
              </motion.div>
              <h1 id="hero-heading" className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400">
                  {text}
                </span>
                <span className="animate-pulse">|</span>
              </h1>
            </div>

            <motion.p className="text-base md:text-lg text-foreground/80 max-w-xl">
              We craft cutting-edge digital experiences that transform businesses. Our team of experts combines
              innovative technology with stunning design to create websites that stand out in the digital landscape.
            </motion.p>

            <motion.div className="flex flex-wrap gap-4">
              <Button size="lg" className="group" asChild>
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/portfolio">Our Work</Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div className="relative gsap-hero-element hidden md:block">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Neon Glowing Border (Without Blinking) */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-500/40 to-cyan-500/40 rounded-2xl backdrop-blur-lg animate-glow"
              />
              <motion.div
                className="absolute inset-4 bg-background/40 backdrop-blur-lg rounded-xl overflow-hidden"
              >
                {/* Image with a glowing neon border, no blinking effect */}
                <div className="w-full h-full bg-[url('/favicon.ico?height=600&width=600')] bg-cover bg-center border-8 border-transparent rounded-xl neon-border animate-pulse" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
