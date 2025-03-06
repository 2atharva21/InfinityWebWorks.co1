"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import Image from 'next/image'
import logo from '../public/logo.png' // Adjust the path to your logo file

export default function LoadingAnimation() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 1.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
    >
      <motion.div
        animate={{
          scale: [1, 1.5, 1.5, 1],
          rotate: [0, 0, 360, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          times: [0, 0.3, 0.6, 1],
          repeat: Number.POSITIVE_INFINITY,
          repeatDelay: 0.5,
        }}
        className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-400 flex items-center justify-center"
      >
        <Image src={logo} alt="Website Logo" className="w-12 h-12" />
      </motion.div>
    </motion.div>
  )
}

