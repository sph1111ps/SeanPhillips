import Link from 'next/link'
import { useRouter } from 'next/router'
import { cn } from '@/lib/utils'

const Navigation = () => {
  const router = useRouter()

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
  ]

  return (
    <nav className="sticky top-0 z-50 border-b border-clay-200/50 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-x-10 bottom-0 h-px bg-gradient-to-r from-transparent via-accent-200 to-transparent" />
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center space-x-12">
            <Link
              href="/"
              className="relative text-2xl font-bold text-clay-900"
            >
              <span className="absolute inset-0 -z-10 rounded-full bg-accent-500/10 blur-2xl" aria-hidden />
              <span className="bg-clay-gradient bg-clip-text text-transparent">Sean Phillips</span>
            </Link>
            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item) => {
                const isActive = router.pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-clay",
                      isActive 
                        ? "text-accent-600 bg-accent-50" 
                        : "text-clay-600 hover:text-accent-600 hover:bg-accent-50/50"
                    )}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <a 
              href="mailto:sean@seanphillips.net"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-accent-500 to-accent-600 rounded-clay hover:from-accent-600 hover:to-accent-700 transition-all duration-200 shadow-clay"
            >
              <span className="h-2 w-2 rounded-full bg-white animate-pulse" aria-hidden />
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
