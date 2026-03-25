"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function CtaBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 md:py-28 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-primary/10 to-primary/5" />
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {/* Left - Image */}
          <div className="relative rounded-2xl overflow-hidden neu-border-primary neu-shadow-lg img-hover-zoom order-2 lg:order-1">
            <Image
              src="/images/handshake.jpg"
              alt="Beginning your journey to permanent clarity"
              width={600}
              height={450}
              className="w-full h-auto object-cover aspect-4/3"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
              <p className="text-white text-sm sm:text-base font-bold drop-shadow-md">
                Your commitment to clarity starts here
              </p>
            </div>
          </div>

          {/* Right - Copy */}
          <div className="order-1 lg:order-2">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 neu-border-primary mb-6">
              Start now
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-foreground leading-[1.1]">
              Your highest level
              <span className="block text-primary mt-2">is closer than you think.</span>
            </h2>
            
            <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
              Ten minutes. Five honest questions. A mirror — not a test, not a tool.
            </p>

            <div className="mt-8 sm:mt-10">
              <Button size="lg" className="h-12 sm:h-14 px-8 sm:px-10 text-base font-bold rounded-xl neu-shadow-lg hover:translate-x-0.75 hover:translate-y-0.75 hover:shadow-none transition-all duration-200">
                Begin the experience
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <p className="mt-5 sm:mt-6 text-sm text-muted-foreground flex items-center gap-2">
              <Shield className="h-4 w-4 shrink-0" />
              Private and secure. Your answers are never shared. No card required.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
