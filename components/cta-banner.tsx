"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Shield } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function CtaBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 sm:py-24 md:py-32 lg:py-40 relative overflow-hidden bg-secondary/30">
      {/* Decorative borders */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-primary/15" />
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary/15" />

      {/* Background shapes */}
      <div className="absolute top-10 right-[10%] w-48 h-48 border-2 border-primary/8 rounded-full" />
      <div className="absolute bottom-10 left-[5%] w-32 h-32 border-2 border-primary/6 rotate-12" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {/* Left - Image */}
          <div className="relative rounded-2xl overflow-hidden neu-border neu-shadow-lg img-hover-zoom order-2 lg:order-1">
            <Image
              src="/images/handshake.jpg"
              alt="Beginning your journey to permanent clarity"
              width={600}
              height={450}
              className="w-full h-auto object-cover aspect-4/3"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6">
              <p className="text-white text-sm sm:text-base font-black drop-shadow-md">
                Your commitment to clarity starts here
              </p>
            </div>
          </div>

          {/* Right - Copy + CTA */}
          <div className="order-1 lg:order-2">
            <span className="inline-block px-4 py-1.5 rounded-lg text-xs font-black uppercase tracking-widest text-primary bg-secondary neu-border-primary mb-6">
              Start now
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-foreground leading-none">
              Your highest level
              <span className="block text-primary mt-2">is closer than you think.</span>
            </h2>

            <p className="mt-6 sm:mt-8 text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Ten minutes. Five honest questions. A mirror — not a test, not a tool.
            </p>

            {/* CTA Form */}
            <div className="mt-8 sm:mt-10 max-w-md">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  placeholder="Enter your email"
                  type="email"
                  className="h-12 sm:h-14 text-base bg-card border-2 border-foreground/20 focus:border-primary rounded-xl px-4 font-medium placeholder:text-muted-foreground/60"
                />
                <Button size="lg" className="h-12 sm:h-14 px-7 text-base font-extrabold whitespace-nowrap rounded-xl neu-border-primary neu-shadow-primary-sm neu-btn-press">
                  Begin
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            <p className="mt-5 text-sm text-muted-foreground flex items-center gap-2 font-medium">
              <Shield className="h-4 w-4 shrink-0 text-primary/60" />
              Private and secure. Your answers are never shared. No card required.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
