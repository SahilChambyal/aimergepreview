"use client"

import { Quote, Star } from "lucide-react"
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
    quote: "I arrived thinking I knew what was holding me back. What surfaced was something completely different — and completely obvious once I saw it.",
    author: "Managing Director",
    company: "Investment Firm",
    location: "Dubai",
    highlight: false,
  },
  {
    quote: "I am not someone who does quizzes or assessments. This is not that. It is the closest thing to a conversation with the clearest version of yourself.",
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
    <section ref={sectionRef} className="py-20 sm:py-24 md:py-32 lg:py-40 bg-secondary/30" id="testimonials">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`max-w-3xl mx-auto text-center mb-16 sm:mb-20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="inline-block px-4 py-1.5 rounded-lg text-xs font-black uppercase tracking-widest text-primary bg-secondary neu-border-primary mb-6">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-foreground">
            What leaders say after
          </h2>
          <div className="flex items-center justify-center gap-1 mt-4">
            {[1,2,3,4,5].map(i => (
              <Star key={i} className="h-5 w-5 fill-primary text-primary" />
            ))}
          </div>
        </div>

        {/* Testimonials Grid - asymmetric bento layout */}
        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group relative p-7 sm:p-8 rounded-2xl border-3 bg-card transition-all duration-300 ${
                testimonial.highlight
                  ? 'border-primary neu-shadow-primary-sm neu-card-hover'
                  : 'border-foreground/10 neu-card-hover'
              } ${isVisible ? `animate-fade-in-up delay-${(index + 1) * 100}` : 'opacity-0'}`}
            >
              {/* Quote icon */}
              <Quote className={`h-10 w-10 mb-5 transition-colors duration-300 ${
                testimonial.highlight ? 'text-primary' : 'text-foreground/10 group-hover:text-primary/40'
              }`} />

              {/* Quote text */}
              <blockquote className="text-foreground text-base sm:text-lg leading-relaxed font-medium">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="mt-8 pt-6 border-t-3 border-foreground/5 flex items-center justify-between flex-wrap gap-3">
                <div>
                  <p className="font-extrabold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground font-medium">{testimonial.company}</p>
                </div>
                <span className="text-xs font-black text-primary px-3 py-1.5 rounded-lg bg-secondary border-2 border-primary/20">
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
