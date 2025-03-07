import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import LoadingAnimation from "@/components/loading-animation"
import AmbientBackground from "@/components/ambient-background"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "InfinityWebWorks.co | Building the Future of Web",
  description:
    "Modern web development agency specializing in AI-powered websites, web development, UI/UX design, and more.",
  generator: "v0.dev",
  openGraph: {
    title: "InfinityWebWorks.co | Building the Future of Web",
    description:
      "Modern web development agency specializing in AI-powered websites, web development, UI/UX design, and more.",
    url: "https://www.infinitywebworks.co",
    images: ["/static/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "InfinityWebWorks.co | Building the Future of Web",
    description:
      "Modern web development agency specializing in AI-powered websites, web development, UI/UX design, and more.",
    images: ["/static/logo.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="InfinityWebWorks.co | Building the Future of Web" />
        <meta
          property="og:description"
          content="Modern web development agency specializing in AI-powered websites, web development, UI/UX design, and more."
        />
        <meta property="og:url" content="https://www.infinitywebworks.co" />
        <meta property="og:image" content="/static/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        {/* Structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "InfinityWebWorks.co",
              url: "https://www.infinitywebworks.co",
              logo: "/static/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+918459297080",
                contactType: "customer service",
                areaServed: "IN",
                availableLanguage: "English",
              },
            }),
          }}
        ></script>
      </head>
      <body
        className={`${inter.className} min-h-screen bg-gradient-to-br from-background to-background/90 text-foreground`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <LoadingAnimation />
          <AmbientBackground />
          <div className="flex flex-col min-h-screen relative z-10">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
