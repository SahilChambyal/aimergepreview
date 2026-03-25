"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sun, Moon, Menu, X, ArrowRight } from "lucide-react"
import { useTheme } from "next-themes"
import { useState } from "react"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQ" },
  { href: "#research", label: "Research" },
]

export function Header() {
  const { theme, setTheme } = useTheme()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b-2 border-foreground/10 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 sm:h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Colored%20%28Transparent%29-i3BIGX38o1jOu8WEN9AsCy09XzplWy.png"
                alt="AIMerge"
                width={120}
                height={28}
                className="dark:hidden"
                style={{ height: 28, width: 'auto' }}
                priority
                unoptimized
              />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/White%20%28Transparent%29-ch7lxVfW4eNHZNaDbk70Bpfil2XuOt.png"
                alt="AIMerge"
                width={120}
                height={28}
                className="hidden dark:block"
                style={{ height: 28, width: 'auto' }}
                priority
                unoptimized
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 xl:px-4 py-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors rounded-md hover:bg-primary/5"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              {/* CTA */}
              <Button className="hidden sm:flex ml-1 sm:ml-2 font-bold text-sm rounded-lg neu-shadow-sm hover:translate-x-px hover:translate-y-px hover:shadow-none transition-all duration-200">
                Begin Experience
              </Button>

              {/* Mobile Menu Toggle */}
              <button
                aria-label="Open menu"
                onClick={() => setMobileOpen(true)}
                className="lg:hidden flex h-10 w-10 items-center justify-center rounded-xl border-2 border-foreground/10 hover:border-primary hover:bg-primary/5 transition-all duration-200 ml-1"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu - Full Screen Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-100 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in-up"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />

          {/* Menu Panel */}
          <div className="absolute inset-x-0 top-0 bg-background border-b-2 border-primary/20 shadow-2xl animate-fade-in-up [animation-duration:0.3s]">
            {/* Header row */}
            <div className="flex items-center justify-between px-4 sm:px-6 h-14 sm:h-16 border-b-2 border-foreground/5">
              <Link href="/" className="flex items-center" onClick={() => setMobileOpen(false)}>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Colored%20%28Transparent%29-i3BIGX38o1jOu8WEN9AsCy09XzplWy.png"
                  alt="AIMerge"
                  width={120}
                  height={28}
                  className="dark:hidden"
                  style={{ height: 28, width: 'auto' }}
                  unoptimized
                />
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/White%20%28Transparent%29-ch7lxVfW4eNHZNaDbk70Bpfil2XuOt.png"
                  alt="AIMerge"
                  width={120}
                  height={28}
                  className="hidden dark:block"
                  style={{ height: 28, width: 'auto' }}
                  unoptimized
                />
              </Link>
              <button
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-foreground/10 hover:border-primary hover:bg-primary/5 transition-all duration-200"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Nav Links */}
            <nav className="px-4 sm:px-6 py-6 space-y-1">
              {navLinks.map((link, i) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between px-4 py-3.5 text-lg font-bold text-foreground hover:text-primary hover:bg-primary/5 rounded-xl transition-all duration-200"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  {link.label}
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="px-4 sm:px-6 pb-6">
              <Button
                onClick={() => setMobileOpen(false)}
                className="w-full h-14 text-base font-bold rounded-xl neu-shadow hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all duration-200"
              >
                Begin Experience
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <p className="text-center text-xs text-muted-foreground mt-4">
                10 minutes. Private & secure.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
