"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useEffect, useRef, useState } from "react"

const faqs = [
  {
    question: "Is this a personality test?",
    answer: "No. This is not an assessment that categorizes you or gives you a label. It is a mirror — a series of questions designed to surface what is specifically between you and your best self. There are no scores, no types, no frameworks. Just clarity.",
  },
  {
    question: "I have tried coaching and retreats. How is this different?",
    answer: "Coaching and retreats work on you over time. This works with you in ten minutes. The difference is precision. Most approaches give you general insights. This gives you the specific thing that is creating the gap — named precisely enough that you recognize it immediately.",
  },
  {
    question: "Will I be sold something at the end?",
    answer: "There is nothing to buy during the experience. After you receive your reflection, you may be offered an opportunity to go deeper — but only if it is relevant to what surfaced. Many people find the initial experience is enough.",
  },
  {
    question: "How long does it actually take?",
    answer: "Ten minutes. Some people take longer because they want to sit with a question. That is fine. But the experience itself is designed to take ten minutes.",
  },
  {
    question: "Is my data safe?",
    answer: "Yes. Your answers are processed to generate your reflection and are never shared. We do not sell data. We do not use your answers for anything other than creating your mirror. Privacy is fundamental to the honesty this requires.",
  },
]

export function FaqSection() {
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
    <section ref={sectionRef} className="py-16 sm:py-20 md:py-28 lg:py-32" id="faq">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {/* Left Column - Header */}
          <div className="lg:col-span-4">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 neu-border-primary mb-6">
              FAQ
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-foreground">
              Common questions
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Everything you need to know before you begin.
            </p>
          </div>

          {/* Right Column - Accordion */}
          <div className="lg:col-span-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border-b-2 border-foreground/5 py-1 sm:py-2"
                >
                  <AccordionTrigger className="text-left text-sm sm:text-base md:text-lg font-bold hover:text-primary transition-colors py-4 sm:py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-4 sm:pb-5 pr-4 sm:pr-8 text-sm sm:text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
