"use client"

import { Quote } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const testimonials = [
  {
    quote: "I have been to retreats. I have had coaches. I have done the work. What this showed me in ten minutes I had not seen in years of trying. Not because it was smarter — because it was more precise.",
    author: "Founder",
    company: "Technology Company",
    location: "London",
    highlight: true,
  },
  {
    quote: "I arrived thinking I knew what was holding me back. What surfaced was something completely different — and completely obvious once I saw it. That is the only way I can describe it.",
    author: "Managing Director",
    company: "Investment Firm",
    location: "Dubai",
    highlight: false,
  },
  {
    quote: "I am not someone who does quizzes or assessments. This is not that. It is the closest thing to a conversation with the clearest version of yourself that I have found.",
    author: "Operator",
    company: "Scaling Consumer Brand",
    location: "New York",
    highlight: false,
  },
  {
    quote: "The experience alone was worth it. What came after was something I was not expecting.",
    author: "Founder",
    company: "12 Years in Business",
    location: "Singapore",
    highlight: true,
  },
]

export function TestimonialsSection() {
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
    <section ref={sectionRef} className="py-16 sm:py-20 md:py-28 lg:py-32 bg-muted/30" id="testimonials">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`max-w-3xl mx-auto text-center mb-12 sm:mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 neu-border-primary mb-6">
            Testimonials
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-foreground">
            What leaders say after
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            Real experiences from real leaders.
          </p>
        </div>

        {/* Testimonials Bento Grid */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group p-6 sm:p-8 rounded-2xl border-2 bg-background transition-all duration-300 hover:-translate-y-1 ${
                testimonial.highlight 
                  ? 'border-primary neu-shadow hover:neu-shadow-lg' 
                  : 'border-foreground/10 hover:border-primary hover:neu-shadow'
              } ${isVisible ? `animate-fade-in-up delay-${(index + 1) * 100}` : 'opacity-0'}`}
            >
              <Quote className={`h-8 w-8 sm:h-10 sm:w-10 mb-4 sm:mb-6 transition-colors ${
                testimonial.highlight ? 'text-primary' : 'text-primary/20 group-hover:text-primary/40'
              }`} />
              <blockquote className="text-foreground text-base sm:text-lg leading-relaxed font-medium">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t-2 border-foreground/5 flex items-center justify-between flex-wrap gap-3">
                <div>
                  <p className="font-bold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
                <span className="text-xs font-bold text-primary px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                  {testimonial.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
