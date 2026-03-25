"use client"

import { Clock, Eye, Target, Compass, Sparkles, Check } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const outcomes = [
  {
    icon: Target,
    text: "What is actually creating the gap — named precisely",
  },
  {
    icon: Eye,
    text: "Why the right conditions have not been enough",
  },
  {
    icon: Compass,
    text: "What your best self looks like as your permanent state",
  },
  {
    icon: Check,
    text: "What becomes possible when it is",
  },
]

export function MirrorSection() {
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
    <section ref={sectionRef} className="py-16 sm:py-20 md:py-28 lg:py-32" id="how-it-works">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`max-w-3xl mx-auto text-center mb-12 sm:mb-16 md:mb-20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 neu-border-primary mb-6">
            How it works
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-foreground leading-[1.1]">
            A mirror. Not a test.
            <span className="block text-primary mt-1">Not a tool.</span>
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Most things designed for people at your level deliver information. Frameworks. Assessments. Methodologies.
          </p>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg font-bold text-foreground">
            This does something different.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {/* Time Card */}
          <div className={`group p-6 sm:p-8 rounded-2xl border-2 border-foreground/10 bg-background hover:border-primary hover:neu-shadow transition-all duration-300 hover:-translate-y-1 ${isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}>
            <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-primary/10 mb-5 sm:mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <Clock className="h-6 w-6 sm:h-7 sm:w-7 text-primary group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-lg sm:text-xl font-black text-foreground">Ten minutes. Five questions.</h3>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
              In ten minutes — through five honest questions — the mirror clears. No lengthy assessments. No complex frameworks.
            </p>
          </div>

          {/* Reflection Card */}
          <div className={`group p-6 sm:p-8 rounded-2xl border-2 border-foreground/10 bg-background hover:border-primary hover:neu-shadow transition-all duration-300 hover:-translate-y-1 ${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
            <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-primary/10 mb-5 sm:mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <Eye className="h-6 w-6 sm:h-7 sm:w-7 text-primary group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-lg sm:text-xl font-black text-foreground">Not new information.</h3>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
              What surfaces is a precise reflection of the specific thing between you and the version of yourself you already know is possible.
            </p>
          </div>

          {/* Precision Card */}
          <div className={`group p-6 sm:p-8 rounded-2xl border-2 border-foreground/10 bg-background hover:border-primary hover:neu-shadow transition-all duration-300 hover:-translate-y-1 sm:col-span-2 md:col-span-1 ${isVisible ? 'animate-fade-in-up delay-300' : 'opacity-0'}`}>
            <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-primary/10 mb-5 sm:mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <Sparkles className="h-6 w-6 sm:h-7 sm:w-7 text-primary group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-lg sm:text-xl font-black text-foreground">Precise clarity.</h3>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
              The more honest your answers — the sharper the reflection. What you receive is uniquely yours.
            </p>
          </div>
        </div>

        {/* Outcomes Section */}
        <div className={`mt-12 sm:mt-16 md:mt-20 p-6 sm:p-8 md:p-12 rounded-2xl border-2 border-primary/20 bg-primary/5 ${isVisible ? 'animate-fade-in-up delay-400' : 'opacity-0'}`}>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-black text-foreground text-center mb-8 sm:mb-10">
              What surfaces
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              {outcomes.map((outcome, index) => (
                <div key={index} className="flex items-start gap-3 sm:gap-4 group">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-background border-2 border-primary/30 shrink-0 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                    <outcome.icon className="h-5 w-5 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-sm sm:text-base text-foreground leading-relaxed pt-2 font-medium">{outcome.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
