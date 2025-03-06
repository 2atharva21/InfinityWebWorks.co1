import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <header className="bg-background/50 backdrop-blur-sm border-b border-border/50 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
          <span className="text-xl font-bold text-foreground">InfinityWebWorks.co</span>
        </Link>
        {/* ...existing code... */}
      </div>
    </header>
  )
}
