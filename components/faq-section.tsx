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
    <section ref={sectionRef} className="py-20 sm:py-24 md:py-32 lg:py-40" id="faq">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`grid lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {/* Left Column - Header */}
          <div className="lg:col-span-4">
            <span className="inline-block px-4 py-1.5 rounded-lg text-xs font-black uppercase tracking-widest text-primary bg-secondary neu-border-primary mb-6">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-foreground leading-none">
              Common
              <span className="block text-primary mt-1">questions</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Everything you need to know before you begin.
            </p>
          </div>

          {/* Right Column - Accordion */}
          <div className="lg:col-span-8">
            <Accordion type="single" collapsible className="w-full space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-2 border-border rounded-xl px-6 bg-card data-[state=open]:border-primary data-[state=open]:bg-secondary/30 transition-all duration-300 data-[state=open]:neu-shadow-primary-xs"
                >
                  <AccordionTrigger className="text-left text-base sm:text-lg font-extrabold hover:text-primary transition-colors py-5 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5 pr-8 text-base">
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
