"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Shield, Play } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-[90vh] flex flex-col" id="hero">
      {/* Announcement Banner */}
      <div className="border-b-2 border-foreground/10 bg-primary/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 py-3 text-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-muted-foreground font-semibold tracking-wide uppercase text-xs">The Inner Light Experience</span>
            <span className="hidden sm:inline text-border">|</span>
            <span className="hidden sm:inline text-primary font-semibold hover:underline cursor-pointer text-xs uppercase tracking-wide">
              Discover your permanent state of clarity
            </span>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="flex-1 flex items-center justify-center relative">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left - Copy */}
            <div className={`${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full neu-border-primary bg-primary/5 text-primary text-sm font-bold mb-6">
                <Play className="h-3 w-3 fill-current" />
                10 min experience
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-foreground leading-[1.05]">
                <span className="block">One honest</span>
                <span className="block">answer away from</span>
                <span className="inline-block mt-1 text-primary relative">
                  your best self.
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                    <path d="M2 8C50 2 100 2 150 6C200 10 250 4 298 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-primary/40" />
                  </svg>
                </span>
              </h1>
              
              <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                You already know what that version feels like. The edge. The clarity. 
                The complete aliveness that shows up in your best moments.
              </p>

              {/* CTA Form */}
              <div className="mt-8 sm:mt-10 max-w-md">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input 
                    placeholder="Enter your email" 
                    type="email"
                    className="h-12 sm:h-14 text-base bg-background border-2 border-foreground/20 focus:border-primary rounded-xl"
                  />
                  <Button size="lg" className="h-12 sm:h-14 px-6 sm:px-8 text-base font-bold whitespace-nowrap rounded-xl neu-shadow hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all duration-200">
                    Begin Experience
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <p className="mt-4 text-sm text-muted-foreground flex items-center gap-2">
                  <Shield className="h-4 w-4 shrink-0" />
                  Private and secure. No credit card required.
                </p>
              </div>

              {/* Social proof */}
              <div className="mt-8 sm:mt-10 flex items-center gap-4 flex-wrap">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="h-8 w-8 rounded-full border-2 border-background bg-primary/10 flex items-center justify-center text-[10px] font-bold text-primary">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  <span className="font-bold text-foreground">2,400+</span> leaders have experienced clarity
                </p>
              </div>
            </div>

            {/* Right - Image + Preview Card */}
            <div className={`relative ${isVisible ? 'animate-fade-in-right delay-200' : 'opacity-0'}`}>
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden neu-border-primary neu-shadow-lg img-hover-zoom">
                <Image
                  src="/images/hero-collab.jpg"
                  alt="Team collaborating on insights and clarity"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover aspect-4/3"
                  priority
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
                
                {/* Floating Preview Card */}
                {/* <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6 sm:bottom-6">
                  <div className="p-4 sm:p-5 rounded-xl bg-background/95 backdrop-blur-sm border-2 border-foreground/10 shadow-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                        </span>
                        Question 1 of 5
                      </div>
                    </div>
                    <p className="text-sm sm:text-base font-semibold text-foreground leading-snug">
                      When you are at your best, what does the world feel like?
                    </p>
                    <div className="mt-3 flex gap-2 flex-wrap">
                      {["Clear & effortless", "Fully alive", "In flow"].map(opt => (
                        <span key={opt} className="px-3 py-1.5 text-xs rounded-lg border-2 border-border bg-muted/50 text-muted-foreground hover:border-primary hover:text-primary transition-colors cursor-pointer font-medium">
                          {opt}
                        </span>
                      ))}
                    </div>
                  </div>
                </div> */}
              </div>

              {/* Decorative element */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-xl -z-10 hidden lg:block" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/20 rounded-lg -z-10 hidden lg:block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
