"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Shield, Zap } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-[92vh] flex flex-col" id="hero">
      {/* Announcement Banner */}
      <div className="border-b-2 border-foreground/8 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3 py-3 text-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
            </span>
            <span className="text-foreground font-bold tracking-wide uppercase text-xs">The Inner Light Experience</span>
            <span className="hidden sm:inline text-foreground/20 font-bold">|</span>
            <span className="hidden sm:inline text-primary font-bold hover:underline cursor-pointer text-xs uppercase tracking-wide">
              Discover your permanent state of clarity
            </span>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="flex-1 flex items-center justify-center relative">
        {/* Background - geometric wireframe shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-[10%] w-64 h-64 border-2 border-primary/10 rounded-full" />
          <div className="absolute bottom-32 left-[5%] w-40 h-40 border-2 border-primary/8 rotate-45" />
          <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-primary/20 rounded-full" />
          <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-primary/30 rounded-full" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left - Copy */}
            <div className={`${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full neu-border-primary bg-secondary text-primary text-sm font-extrabold mb-8">
                <Zap className="h-3.5 w-3.5 fill-current" />
                10 min experience
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter text-foreground leading-[0.95]">
                <span className="block">One honest</span>
                <span className="block">answer from</span>
                <span className="inline-block mt-2 relative">
                  <span className="text-primary">your best self.</span>
                  <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 300 8" fill="none">
                    <path d="M2 6C60 2 120 2 180 5C240 8 270 3 298 5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-primary/50 animate-draw-line" />
                  </svg>
                </span>
              </h1>

              <p className="mt-8 text-lg sm:text-xl text-muted-foreground max-w-lg leading-relaxed">
                You already know what that version feels like. The clarity.
                The complete aliveness in your best moments.
              </p>

              {/* CTA Form */}
              <div className="mt-10 max-w-md">
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
                <p className="mt-4 text-sm text-muted-foreground flex items-center gap-2 font-medium">
                  <Shield className="h-4 w-4 shrink-0 text-primary/60" />
                  Private and secure. No credit card required.
                </p>
              </div>

              {/* Social proof */}
              <div className="mt-10 inline-flex items-center gap-4 px-5 py-3 rounded-2xl border-2 border-foreground/10 bg-card">
                <div className="flex -space-x-2.5">
                  {[1,2,3,4,5].map(i => (
                    <div key={i} className="h-9 w-9 rounded-full border-2 border-card bg-primary/10 flex items-center justify-center text-[10px] font-black text-primary">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <span className="font-black text-foreground">2,400+</span>
                  <span className="text-muted-foreground font-medium"> leaders found clarity</span>
                </div>
              </div>
            </div>

            {/* Right - Image */}
            <div className={`relative ${isVisible ? 'animate-fade-in-right delay-200' : 'opacity-0'}`}>
              <div className="relative rounded-2xl overflow-hidden neu-border neu-shadow-lg img-hover-zoom">
                <Image
                  src="/images/hero-collab.jpg"
                  alt="Team collaborating on insights and clarity"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover aspect-4/3"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
              </div>

              {/* Floating stat card */}
              <div className="absolute -bottom-5 -left-5 p-4 rounded-xl bg-card neu-border neu-shadow-sm hidden lg:block">
                <p className="text-3xl font-black text-primary leading-none">10</p>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide mt-1">Minutes</p>
              </div>

              {/* Decorative shapes */}
              <div className="absolute -top-3 -right-3 w-20 h-20 border-2 border-primary/20 rounded-xl -z-10 hidden lg:block" />
              <div className="absolute -bottom-3 -right-3 w-14 h-14 bg-primary/10 -z-10 hidden lg:block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
