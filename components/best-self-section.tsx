"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Cpu, FileText, Award, Users } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const credentials = [
  {
    icon: Cpu,
    label: "Powered by",
    value: "AIMerge",
  },
  {
    icon: FileText,
    label: "Published in",
    value: "Mensa Research Journal",
  },
  {
    icon: Award,
    label: "Patents",
    value: "4 in human-AI decision systems",
  },
  {
    icon: Users,
    label: "Used by",
    value: "Fortune 500 leaders",
  },
]

export function BestSelfSection() {
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
    <section ref={sectionRef} className="py-16 sm:py-20 md:py-28 lg:py-32 bg-muted/30 overflow-hidden" id="about">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`max-w-3xl ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 neu-border-primary mb-6">
            Why this works
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-foreground leading-[1.1]">
            Your best self is not occasional.
            <span className="block text-primary mt-1">It is your actual baseline.</span>
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="mt-12 sm:mt-16 grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left Column - Content + Image */}
          <div className={`space-y-6 ${isVisible ? 'animate-fade-in-left delay-200' : 'opacity-0'}`}>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              You have been there before. That morning when the thinking was clear and the decisions came easily and you moved through your day without the usual friction.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              That conversation where you saw exactly what needed to happen and everyone in the room felt it too.
            </p>

            {/* Image inline */}
            <div className="relative rounded-2xl overflow-hidden neu-border neu-shadow img-hover-zoom my-6 sm:my-8">
              <Image
                src="/images/corporate-meeting.jpg"
                alt="Leaders experiencing clarity in professional settings"
                width={600}
                height={380}
                className="w-full h-auto object-cover aspect-16/10"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white text-sm font-bold drop-shadow-md">
                  Leaders operating from complete clarity
                </p>
              </div>
            </div>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              That version of you is not a fluke. It is not luck. It is not the result of the right sleep or the right conditions.
            </p>
            <p className="text-base sm:text-lg font-bold text-foreground leading-relaxed border-l-4 border-primary pl-4">
              It is what you are capable of when everything unnecessary falls away.
            </p>

            <div className="pt-4">
              <Button size="lg" className="h-12 sm:h-14 px-8 text-base font-bold rounded-xl neu-shadow hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all duration-200">
                Begin the experience
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right Column - Credentials + Card */}
          <div className={`space-y-6 sm:space-y-8 ${isVisible ? 'animate-fade-in-right delay-300' : 'opacity-0'}`}>
            {/* Credentials Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {credentials.map((credential, index) => (
                <div
                  key={index}
                  className="group p-4 sm:p-5 rounded-xl border-2 border-foreground/10 bg-background hover:border-primary hover:neu-shadow-sm transition-all duration-300 cursor-default"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors">
                    <credential.icon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide font-semibold mb-1">{credential.label}</p>
                  <p className="text-sm font-bold text-foreground">{credential.value}</p>
                </div>
              ))}
            </div>

            {/* The Problem Card */}
            <div className="p-6 sm:p-8 rounded-2xl border-2 border-foreground/10 bg-background hover:border-primary/40 transition-colors">
              <h3 className="text-lg sm:text-xl font-black text-foreground">The problem is not finding it.</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
                Most leaders at your level have found it — in retreats, in rare moments, in the right conversations.
              </p>
              <p className="mt-3 text-muted-foreground leading-relaxed text-sm sm:text-base">
                The problem is <span className="text-foreground font-bold">making it stay.</span>
              </p>
              <div className="mt-6 pt-6 border-t-2 border-foreground/5">
                <p className="text-foreground leading-relaxed text-sm sm:text-base">
                  And when you make the decisions that come from that place — not from pressure, not from urgency, but from complete clarity — something else shifts too.
                </p>
                <p className="text-primary font-black mt-3 text-lg">
                  Not just the work. You.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
