"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import {
  Sparkles,
  RotateCcw,
  Mic,
  Lock,
  Shield,
  Lightbulb,
  Target,
  ArrowLeft,
  Square,
  Loader2,
  Copy,
  Check,
  Eye,
  EyeClosed,
  ArrowRight,
  Compass,
  Brain,
  Route,
  Focus,
} from "lucide-react"
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion"
import { useToast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"
import { TextEffect } from "@/components/ui/text-effect"
import Image from "next/image"

interface FormData {
  lifeJourney: string
  currentStruggles: string
  goodThingsPast: string
  deepestDesires: string
  futureDescription: string
}

function PasswordProtection({ onAuthenticated }: { onAuthenticated: () => void }) {
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [focusedInput, setFocusedInput] = useState<string | null>(null)
  
  const { toast } = useToast()

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useTransform(mouseY, [-300, 300], [10, -10])
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10])

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left - rect.width / 2)
    mouseY.set(e.clientY - rect.top - rect.height / 2)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    setTimeout(() => {
      const correctPassword = process.env.NEXT_PUBLIC_APP_PASSWORD || "yourfuture2026"
      if (password === correctPassword) {
        onAuthenticated()
        toast({
          title: "Access granted!",
          description: "Welcome to the AI Merge Self-Identity Preview.",
        })
      } else {
        setError("Incorrect password. Please try again.")
        setPassword("")
        setIsLoading(false)
      }
    }, 1000)
  }

  return (
    <div className="min-h-screen w-full bg-black relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-linear-to-b from-blue-500/40 via-blue-700/50 to-black" />
      
      <div className="absolute inset-0 opacity-[0.03] mix-blend-soft-light" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}
      />

      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[120vh] h-[60vh] rounded-b-[50%] bg-blue-400/20 blur-[80px]" />
      <motion.div 
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[100vh] h-[60vh] rounded-b-full bg-blue-300/20 blur-[60px]"
        animate={{ opacity: [0.15, 0.3, 0.15], scale: [0.98, 1.02, 0.98] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div 
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[90vh] h-[90vh] rounded-t-full bg-blue-400/20 blur-[60px]"
        animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "mirror", delay: 1 }}
      />

      <div className="absolute left-1/4 top-1/4 w-96 h-96 bg-white/5 rounded-full blur-[100px] animate-pulse opacity-40" />
      <div className="absolute right-1/4 bottom-1/4 w-96 h-96 bg-white/5 rounded-full blur-[100px] animate-pulse delay-1000 opacity-40" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-sm relative z-10 px-4"
        style={{ perspective: 1500 }}
      >
        <motion.div
          className="relative"
          style={{ rotateX, rotateY }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          whileHover={{ z: 10 }}
        >
          <div className="relative group">
            <motion.div 
              className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-700"
              animate={{
                boxShadow: [
                  "0 0 10px 2px rgba(255,255,255,0.03)",
                  "0 0 15px 5px rgba(255,255,255,0.05)",
                  "0 0 10px 2px rgba(255,255,255,0.03)"
                ],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }}
            />

            <div className="absolute -inset-px rounded-2xl overflow-hidden pointer-events-none">
              <motion.div 
                className="absolute top-0 left-0 h-[3px] w-[50%] bg-linear-to-r from-transparent via-white to-transparent opacity-70"
                initial={{ filter: "blur(2px)" }}
                animate={{ left: ["-50%", "100%"], opacity: [0.3, 0.7, 0.3], filter: ["blur(1px)", "blur(2.5px)", "blur(1px)"] }}
                transition={{ left: { duration: 2.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 }, opacity: { duration: 1.2, repeat: Infinity, repeatType: "mirror" }, filter: { duration: 1.5, repeat: Infinity, repeatType: "mirror" } }}
              />
              <motion.div 
                className="absolute top-0 right-0 h-[50%] w-[3px] bg-linear-to-b from-transparent via-white to-transparent opacity-70"
                initial={{ filter: "blur(2px)" }}
                animate={{ top: ["-50%", "100%"], opacity: [0.3, 0.7, 0.3], filter: ["blur(1px)", "blur(2.5px)", "blur(1px)"] }}
                transition={{ top: { duration: 2.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 1, delay: 0.6 }, opacity: { duration: 1.2, repeat: Infinity, repeatType: "mirror", delay: 0.6 }, filter: { duration: 1.5, repeat: Infinity, repeatType: "mirror", delay: 0.6 } }}
              />
              <motion.div 
                className="absolute bottom-0 right-0 h-[3px] w-[50%] bg-linear-to-r from-transparent via-white to-transparent opacity-70"
                initial={{ filter: "blur(2px)" }}
                animate={{ right: ["-50%", "100%"], opacity: [0.3, 0.7, 0.3], filter: ["blur(1px)", "blur(2.5px)", "blur(1px)"] }}
                transition={{ right: { duration: 2.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 1, delay: 1.2 }, opacity: { duration: 1.2, repeat: Infinity, repeatType: "mirror", delay: 1.2 }, filter: { duration: 1.5, repeat: Infinity, repeatType: "mirror", delay: 1.2 } }}
              />
              <motion.div 
                className="absolute bottom-0 left-0 h-[50%] w-[3px] bg-linear-to-b from-transparent via-white to-transparent opacity-70"
                initial={{ filter: "blur(2px)" }}
                animate={{ bottom: ["-50%", "100%"], opacity: [0.3, 0.7, 0.3], filter: ["blur(1px)", "blur(2.5px)", "blur(1px)"] }}
                transition={{ bottom: { duration: 2.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 1, delay: 1.8 }, opacity: { duration: 1.2, repeat: Infinity, repeatType: "mirror", delay: 1.8 }, filter: { duration: 1.5, repeat: Infinity, repeatType: "mirror", delay: 1.8 } }}
              />
              
              <motion.div className="absolute top-0 left-0 h-[5px] w-[5px] rounded-full bg-white/40 blur-[1px]" animate={{ opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }} />
              <motion.div className="absolute top-0 right-0 h-[8px] w-[8px] rounded-full bg-white/60 blur-[2px]" animate={{ opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 2.4, repeat: Infinity, repeatType: "mirror", delay: 0.5 }} />
              <motion.div className="absolute bottom-0 right-0 h-[8px] w-[8px] rounded-full bg-white/60 blur-[2px]" animate={{ opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 2.2, repeat: Infinity, repeatType: "mirror", delay: 1 }} />
              <motion.div className="absolute bottom-0 left-0 h-[5px] w-[5px] rounded-full bg-white/40 blur-[1px]" animate={{ opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 2.3, repeat: Infinity, repeatType: "mirror", delay: 1.5 }} />
            </div>

            <div className="absolute -inset-[0.5px] rounded-2xl bg-linear-to-r from-white/3 via-white/7 to-white/3 opacity-0 group-hover:opacity-70 transition-opacity duration-500 pointer-events-none" />
            
            <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-white/5 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                style={{
                  backgroundImage: `linear-gradient(135deg, white 0.5px, transparent 0.5px), linear-gradient(45deg, white 0.5px, transparent 0.5px)`,
                  backgroundSize: '30px 30px'
                }}
              />

              <div className="text-center space-y-1 mb-6 mt-2 relative z-10">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", duration: 0.8 }}
                  className="mx-auto flex items-center justify-center relative overflow-hidden mb-6"
                >
                  <div className="bg-white/10 p-3 rounded-2xl backdrop-blur-md border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                    <Image src="/images/ai-merge-logo.png" alt="AI Merge" width={200} height={60} className="h-8 w-auto brightness-0 invert" />
                  </div>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl font-bold bg-clip-text text-transparent bg-linear-to-b from-white to-white/80"
                >
                  AI Merge Access
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-white/60 text-xs"
                >
                  Enter the password to access the Self-Identity Preview
                </motion.p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                <motion.div className="space-y-3">
                  <motion.div 
                    className={`relative ${focusedInput === "password" ? 'z-10' : ''}`}
                    whileFocus={{ scale: 1.02 }}
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <div className="absolute -inset-[0.5px] bg-linear-to-r from-white/10 via-white/5 to-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none" />
                    
                    <div className="relative flex items-center overflow-hidden rounded-lg">
                      <Lock className={`absolute left-3 w-4 h-4 transition-all duration-300 ${
                        focusedInput === "password" ? 'text-white' : 'text-white/40'
                      }`} />
                      
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                          setError("");
                        }}
                        onFocus={() => setFocusedInput("password")}
                        onBlur={() => setFocusedInput(null)}
                        className={`w-full bg-white/5 border border-transparent focus:border-white/20 text-white placeholder:text-white/30 h-10 transition-all duration-300 pl-10 pr-10 focus:bg-white/10 outline-none text-sm ${error ? 'border-red-500/50 bg-red-500/5' : ''}`}
                      />
                      
                      <div 
                        onClick={() => setShowPassword(!showPassword)} 
                        className="absolute right-3 cursor-pointer"
                      >
                        {showPassword ? (
                          <Eye className="w-4 h-4 text-white/40 hover:text-white transition-colors duration-300" />
                        ) : (
                          <EyeClosed className="w-4 h-4 text-white/40 hover:text-white transition-colors duration-300" />
                        )}
                      </div>
                      
                      {focusedInput === "password" && (
                        <motion.div 
                          layoutId="input-highlight"
                          className="absolute inset-0 bg-white/5 -z-10"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </div>
                  </motion.div>
                  
                  {error && (
                    <motion.p 
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-xs text-red-400 text-center"
                    >
                      {error}
                    </motion.p>
                  )}
                </motion.div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isLoading}
                  className="w-full relative group/button mt-6"
                >
                  <div className="absolute inset-0 bg-white/10 rounded-lg blur-lg opacity-0 group-hover/button:opacity-70 transition-opacity duration-300 pointer-events-none" />
                  
                  <div className="relative overflow-hidden bg-white text-black font-medium h-10 rounded-lg transition-all duration-300 flex items-center justify-center">
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 }}
                      style={{ opacity: isLoading ? 1 : 0, transition: 'opacity 0.3s ease' }}
                    />
                    
                    <AnimatePresence mode="wait">
                      {isLoading ? (
                        <motion.div
                          key="loading"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center justify-center"
                        >
                          <div className="w-4 h-4 border-2 border-black/70 border-t-transparent rounded-full animate-spin" />
                        </motion.div>
                      ) : (
                        <motion.span
                          key="button-text"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center justify-center gap-1 text-sm font-medium"
                        >
                          Access Preview
                          <ArrowRight className="w-3 h-3 group-hover/button:translate-x-1 transition-transform duration-300" />
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

import { WavyBackground } from "@/components/ui/wavy-background"

function EULAScreen({ onAccepted }: { onAccepted: () => void }) {
  const [hasScrolledToBottom, setHasScrolledToBottom] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const { toast } = useToast()

  const handleScroll = () => {
    const el = scrollRef.current
    if (!el) return
    const threshold = 20
    if (el.scrollHeight - el.scrollTop - el.clientHeight < threshold) {
      setHasScrolledToBottom(true)
    }
  }

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    if (el.scrollHeight <= el.clientHeight) {
      setHasScrolledToBottom(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("aimerge_eula_accepted", "true")
    onAccepted()
    toast({
      title: "Terms accepted",
      description: "Welcome to AI Merge Preview!",
    })
  }

  const handleCancel = () => {
    toast({
      title: "Terms declined",
      description: "You must accept the terms to continue.",
      variant: "destructive",
    })
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-linear-to-b from-blue-500/40 via-blue-700/50 to-black" />
      <div className="absolute inset-0 opacity-[0.03] mix-blend-soft-light" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}
      />
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[120vh] h-[60vh] rounded-b-[50%] bg-blue-400/20 blur-[80px]" />
      <WavyBackground containerClassName="absolute inset-0 h-full pointer-events-none z-[1]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="relative z-10 w-full max-w-lg mx-4"
      >
        <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden max-h-[calc(100vh-2rem)] sm:max-h-[calc(100vh-4rem)] flex flex-col">
          <div className="flex items-center justify-between px-4 sm:px-6 pt-4 sm:pt-5 pb-3 sm:pb-4 shrink-0">
            <h2 className="text-base sm:text-lg font-semibold text-white">Terms & Conditions</h2>
            <button
              onClick={handleCancel}
              className="text-white/40 hover:text-white transition-colors rounded-sm p-1"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 1L13 13M1 13L13 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="px-4 sm:px-6 overflow-y-auto eula-scroll flex-1 min-h-0"
          >
            <div className="space-y-4 sm:space-y-5 text-xs sm:text-sm text-white/60 leading-relaxed pb-4">
              <div>
                <h3 className="text-xs sm:text-sm font-semibold text-white mb-1.5 sm:mb-2">Acceptance of Terms</h3>
                <p>
                  By accessing and using this website, users agree to comply with and be bound by these Terms of Service. Users who do not agree with these terms should discontinue use of the website immediately.
                </p>
              </div>

              <div>
                <h3 className="text-xs sm:text-sm font-semibold text-white mb-1.5 sm:mb-2">User Account Responsibilities</h3>
                <p>
                  Users are responsible for maintaining the confidentiality of their account credentials. Any activities occurring under a user's account are the sole responsibility of the account holder. Users must notify the website administrators immediately of any unauthorized account access.
                </p>
              </div>

              <div>
                <h3 className="text-xs sm:text-sm font-semibold text-white mb-1.5 sm:mb-2">Content Usage and Restrictions</h3>
                <p>
                  The website and its original content are protected by intellectual property laws. Users may not reproduce, distribute, modify, create derivative works, or commercially exploit any content without explicit written permission from the website owners.
                </p>
              </div>

              <div>
                <h3 className="text-xs sm:text-sm font-semibold text-white mb-1.5 sm:mb-2">Limitation of Liability</h3>
                <p>
                  The website provides content "as is" without any warranties. The website owners shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of the website.
                </p>
              </div>

              <div>
                <h3 className="text-xs sm:text-sm font-semibold text-white mb-1.5 sm:mb-2">Your Privacy</h3>
                <p>
                  Your personal stories stay between you and the AI. We don't collect, store, or have access to the content you create. This is designed to be a private, personal experience.
                </p>
              </div>

              <div>
                <h3 className="text-xs sm:text-sm font-semibold text-white mb-1.5 sm:mb-2">Usage Guidelines</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Use this tool for personal growth and self-reflection</li>
                  <li>Don't use it for anything illegal or harmful</li>
                  <li>The AI-generated content is for inspiration, not professional advice</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xs sm:text-sm font-semibold text-white mb-1.5 sm:mb-2">Changes to Terms</h3>
                <p>
                  We reserve the right to modify these terms at any time. Continued use of the website after changes constitutes acceptance of the new terms.
                </p>
              </div>

              <p className="text-xs text-white/40 pt-2">
                Effective Date: October 23, 2025 | TetraNoodle Technologies
              </p>
            </div>
          </div>

          {!hasScrolledToBottom && (
            <div className="px-4 sm:px-6 py-1.5 sm:py-2 shrink-0">
              <p className="text-xs text-white/40 text-center">Scroll to the bottom to enable "I agree"</p>
            </div>
          )}

          <div className="flex items-center justify-end gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 border-t border-white/10 shrink-0">
            <button
              onClick={handleCancel}
              className="px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium text-white/70 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all"
            >
              Cancel
            </button>
            <button
              onClick={handleAccept}
              disabled={!hasScrolledToBottom}
              className="px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all disabled:opacity-30 disabled:cursor-not-allowed bg-white text-black hover:bg-white/90"
            >
              I agree
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

function InstructionsFeatureSection() {
  const features = [
    {
      title: "Stop Drifting, Start Designing",
      description:
        "Most futures are shaped by habit, pressure, and other people's expectations. This tool helps you consciously decide where you're actually going.",
      icon: <Compass className="h-5 w-5" />,
    },
    {
      title: "More Than Daydreaming",
      description:
        "Future pacing is a structured technique from psychology and performance coaching. Your brain begins treating a vividly imagined future as real and achievable.",
      icon: <Brain className="h-5 w-5" />,
    },
    {
      title: "Clarity Over Motivation",
      description:
        "The real benefit isn't feeling inspired. It's direction. When you clearly see the future you're building, decisions get simpler and distractions lose their power.",
      icon: <Focus className="h-5 w-5" />,
    },
    {
      title: "Break Out of Autopilot",
      description:
        "Without a clear mental model of your future, goals shift, motivation fluctuates, and progress feels misaligned. One story can interrupt years of drift.",
      icon: <Route className="h-5 w-5" />,
    },
    {
      title: "Turn Ambition Into Vision",
      description:
        "Vague desires become a concrete picture. You'll define the life you genuinely want and the person you need to become to live it.",
      icon: <Target className="h-5 w-5" />,
    },
    {
      title: "A Safe Space to Explore",
      description:
        "Thinking about the future can surface hard questions. This creates a private, judgment-free space to explore them honestly.",
      icon: <Shield className="h-5 w-5" />,
    },
    {
      title: "Align Actions With Direction",
      description:
        "You start behaving like the person who already lives that future. How you prioritize time, notice opportunities, and make decisions all shift.",
      icon: <Sparkles className="h-5 w-5" />,
    },
    {
      title: "Just Try It Once",
      description:
        "You don't need to believe in this process. You only need to be curious. A single clear picture of your future can change how you approach the next ten years.",
      icon: <Lightbulb className="h-5 w-5" />,
    },
  ]

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 relative z-10">
      {features.map((feature, index) => {
        const col2 = index % 2
        const row2 = Math.floor(index / 2)
        const col4 = index % 4
        const row4 = Math.floor(index / 4)
        const totalRows2 = 4
        const totalRows4 = 2

        return (
          <div
            key={feature.title}
            className={cn(
              "flex flex-col py-4 sm:py-6 lg:py-8 relative group/feature border-white/10",
              col2 === 1 && "max-lg:border-l",
              col4 > 0 && "lg:border-l",
              row2 < totalRows2 - 1 && "max-lg:border-b",
              row4 < totalRows4 - 1 && "lg:border-b",
            )}
          >
            {row4 === 0 && (
              <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-linear-to-t from-white/5 to-transparent pointer-events-none" />
            )}
            {row4 === 1 && (
              <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-linear-to-b from-white/5 to-transparent pointer-events-none" />
            )}
            <div className="mb-2 sm:mb-3 lg:mb-4 relative z-10 px-3 sm:px-5 lg:px-8 text-blue-400">
              {feature.icon}
            </div>
            <div className="text-xs sm:text-sm lg:text-base font-bold mb-1 sm:mb-2 relative z-10 px-3 sm:px-5 lg:px-8">
              <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-white/20 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
              <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-white">
                {feature.title}
              </span>
            </div>
            <p className="text-[11px] sm:text-xs lg:text-sm text-white/60 relative z-10 px-3 sm:px-5 lg:px-8 leading-relaxed">
              {feature.description}
            </p>
          </div>
        )
      })}
    </div>
  )
}

function InstructionsScreen({ onContinue, onBack }: { onContinue: () => void; onBack: () => void }) {
  const { toast } = useToast()

  const handleContinue = () => {
    localStorage.setItem("aimerge_instructions_viewed", "true")
    onContinue()
    toast({
      title: "Let's begin!",
      description: "Time to connect with your future self.",
    })
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden flex flex-col">
      <div className="absolute inset-0 bg-linear-to-b from-blue-500/40 via-blue-700/50 to-black" />
      <div className="absolute inset-0 opacity-[0.03] mix-blend-soft-light" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}
      />
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[120vh] h-[60vh] rounded-b-[50%] bg-blue-400/20 blur-[80px]" />
      
      <WavyBackground containerClassName="absolute inset-0 h-full pointer-events-none z-[1]" />
      
      <div className="relative z-10 flex flex-col items-center lg:justify-center min-h-screen px-3 sm:px-4 py-4 sm:py-8">
        <div className="flex items-center justify-between w-full max-w-6xl mb-4 sm:mb-6">
          <Button variant="ghost" size="sm" onClick={onBack} className="gap-1.5 text-white/60 hover:text-white hover:bg-white/10">
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Back</span>
          </Button>
          <Image src="/images/ai-merge-logo.png" alt="AI Merge" width={120} height={36} className="h-6 sm:h-7 w-auto brightness-0 invert" />
          <div className="w-8 sm:w-[68px]" />
        </div>

        <div className="text-center mb-4 sm:mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 sm:mb-2"
          >
            Meet Your Future Self
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-xs sm:text-sm md:text-base"
          >
            Self-Identity Preview from the AI Merge Framework
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="w-full max-w-6xl bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden"
        >
          <InstructionsFeatureSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-4 sm:mt-8 w-full max-w-6xl text-center space-y-3 sm:space-y-4 pb-4"
        >
          <Button onClick={handleContinue} size="lg" className="bg-white text-black hover:bg-white/90 px-10">
            Start
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

export default function AIPromptGenerator() {
  const { toast } = useToast()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [hasAcceptedEULA, setHasAcceptedEULA] = useState(false)
  const [hasViewedInstructions, setHasViewedInstructions] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedStory, setGeneratedStory] = useState("")
  const [storyCopied, setStoryCopied] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [showStory, setShowStory] = useState(false)
  const [stepDirection, setStepDirection] = useState(1)

  const questions = [
    {
      field: "lifeJourney" as keyof FormData,
      title: "Tell us your life story",
      subtitle: "From childhood to now — major events, milestones, challenges, victories",
      placeholder: "I was born in... grew up in... went to school... my first job was...",
      stepLabel: "Your Story",
    },
    {
      field: "currentStruggles" as keyof FormData,
      title: "What are you struggling with right now?",
      subtitle: "The challenges and obstacles you're facing today",
      placeholder: "Right now I'm struggling with... I find it difficult to...",
      stepLabel: "Struggles",
    },
    {
      field: "goodThingsPast" as keyof FormData,
      title: "What good things have happened recently?",
      subtitle: "The bright spots, wins, and things you're grateful for",
      placeholder: "Recently I... I'm grateful for... Something good that happened...",
      stepLabel: "Gratitude",
    },
    {
      field: "deepestDesires" as keyof FormData,
      title: "Describe your dream life, multiplied by ten",
      subtitle: "Your best possible life — dream bigger than feels comfortable",
      placeholder: "My dream life would be... I want to experience... Beyond that, I want...",
      stepLabel: "Dreams",
    },
    {
      field: "futureDescription" as keyof FormData,
      title: "One year from now, where are you?",
      subtitle: "What are you doing? Who are you with? What have you accomplished?",
      placeholder: "One year from now, I am... I wake up and... I spend my days...",
      stepLabel: "Future",
    },
  ]

  useEffect(() => {
    const eulaAccepted = localStorage.getItem("aimerge_eula_accepted")
    const instructionsViewed = localStorage.getItem("aimerge_instructions_viewed")
    if (eulaAccepted === "true") {
      setHasAcceptedEULA(true)
    }
    if (instructionsViewed === "true") {
      setHasViewedInstructions(true)
    }
  }, [])

  const [formData, setFormData] = useState<FormData>({
    lifeJourney: "",
    currentStruggles: "",
    goodThingsPast: "",
    deepestDesires: "",
    futureDescription: "",
  })

  const [isListening, setIsListening] = useState<string | null>(null)
  const recognitionRef = useRef<SpeechRecognition | null>(null)
  const activeFieldRef = useRef<string | null>(null)
  const accumulatedTextRef = useRef<string>("")

  if (!isAuthenticated) {
    return <PasswordProtection onAuthenticated={() => setIsAuthenticated(true)} />
  }

  if (!hasAcceptedEULA) {
    return <EULAScreen onAccepted={() => setHasAcceptedEULA(true)} />
  }

  if (!hasViewedInstructions) {
    return (
      <InstructionsScreen onContinue={() => setHasViewedInstructions(true)} onBack={() => setHasAcceptedEULA(false)} />
    )
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const startVoiceRecognition = (field: keyof FormData) => {
    const hasWebkit = "webkitSpeechRecognition" in window
    const hasNative = "SpeechRecognition" in window

    if (!hasWebkit && !hasNative) {
      toast({
        title: "Not supported",
        description: "Speech recognition is not supported in this browser. Try Chrome or Edge.",
        variant: "destructive",
      })
      return
    }

    if (recognitionRef.current) {
      recognitionRef.current.stop()
      recognitionRef.current = null
    }

    const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition
    const recognition = new SpeechRecognitionAPI()

    const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    recognition.continuous = !mobile
    recognition.interimResults = true
    recognition.lang = "en-US"

    accumulatedTextRef.current = formData[field]
    activeFieldRef.current = field

    recognition.onstart = () => {
      setIsListening(field)
    }

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      let finalTranscript = ""
      let interimTranscript = ""

      for (let i = 0; i < event.results.length; i++) {
        const result = event.results[i]
        if (result.isFinal) {
          finalTranscript += result[0].transcript + " "
        } else {
          interimTranscript += result[0].transcript
        }
      }

      // accumulatedTextRef holds the text that existed BEFORE voice started.
      // event.results already contains ALL finals + current interim cumulatively,
      // so we just concatenate base + finals + interim — no re-accumulation.
      const baseText = accumulatedTextRef.current
      const displayText = [baseText, finalTranscript.trim(), interimTranscript].filter(Boolean).join(" ")

      handleInputChange(field, displayText.trim())
    }

    recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
      if (event.error === "no-speech" && mobile) return

      activeFieldRef.current = null
      setIsListening(null)
      if (event.error !== "aborted") {
        toast({
          title: "Voice recognition error",
          description: event.error === "not-allowed"
            ? "Microphone access denied. Please allow mic permissions."
            : `Error: ${event.error}`,
          variant: "destructive",
        })
      }
    }

    recognition.onend = () => {
      if (mobile && activeFieldRef.current) {
        setTimeout(() => {
          if (activeFieldRef.current && recognitionRef.current) {
            try {
              recognitionRef.current.start()
            } catch {
              setIsListening(null)
            }
          }
        }, 100)
      } else {
        activeFieldRef.current = null
        setIsListening(null)
        accumulatedTextRef.current = ""
      }
    }

    recognitionRef.current = recognition
    try {
      recognition.start()
    } catch (e) {
      toast({
        title: "Voice recognition failed",
        description: `Could not start: ${e}`,
        variant: "destructive",
      })
    }
  }

  const stopVoiceRecognition = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop()
      recognitionRef.current = null
    }
    activeFieldRef.current = null
    setIsListening(null)
    accumulatedTextRef.current = ""
  }

  const generateStory = async () => {
    // Stop voice recognition before generating
    if (isListening) {
      stopVoiceRecognition()
    }
    const currentDate = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
    const futureDate = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })

    const prompt = `${formData.lifeJourney}

The current date is: ${currentDate}

I remember: ${formData.currentStruggles}

But the good things which happened: ${formData.goodThingsPast}

But now I wanted more: ${formData.deepestDesires} 

Now here I am on: ${futureDate}. ${formData.futureDescription}

I have accomplished so much.

I am building my dream life. I am so happy and content.

Write a detailed story about how you were able to achieve this goal. Use Hero's journey framework to write the story. 

# Instructions for writing the story

### **Writing Style:**
- Write in short, clear sentences.
- Absolutely NO EMOJIS
- Absolutely no formatting like bold, italics etc. Just plain text
- Keep sentence length between **10-20 words**.
- Use **common, everyday words** that an 8th grader can easily understand.
- **Prefer simple words** over complex ones.
- Only use technical terms when absolutely needed.
- **Avoid words** with more than **four syllables** whenever possible.
- If you must use a long word, keep the surrounding text simple.
- **Do not use** these words:  
  *indeed, furthermore, thus, moreover, notwithstanding, ostensibly, consequently, specifically, notably, alternatively.*
- **Never** use business clichés or jargon, such as:  
  *delve, digital age, cutting-edge, leverage, proactive, pivotal, seamless, fast-paced, game-changer, quest, realm, landscape, evolve, resilient, thrill, unravel, embark, world.*

You are narrating this story to yourself. So it is like a dialogue between you and your soul. But write the story in first person. Use first-person pronouns to write this dialogue with myself.
Keep the tone conversational. I want the reader to feel as if they are in a conversation not reading something. Add plenty of filler words to make it sound even more conversational.
You do not need to use bullet points or markers for various phases of the Hero's journey. Be more descriptive in your narrative. The dialogue needs to pierce your soul. Creating a nostalgic but detailed narrative of how your life has unfolded. Use an emotionally captivating tone. Describe the emotions and feelings in excruciating detail. Ensure you highlight your core values, priorities, thought process, decision-making approach, and life goals. Use a very conversational tone as if you are narrating the story to a dear friend. Feel free to add plenty of filler words to make it sound more conversational. Describe in excruciating detail the emotions and feelings you are experiencing after achieving this goal. Write out details like the places, people, and city names to describe the entire experience. Describe the positive outcomes you are experiencing due to this endeavor. Write the entire story in the first person. Use a very conversational tone as if you are speaking directly to the listener. Write the whole story in 1st person. When you write the story, use this date as your current date and write the story as if you are in the current date as stated above.`

    setIsGenerating(true)
    setGeneratedStory("")
    setShowStory(true)

    try {
      const response = await fetch("/api/generate-story", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      })

      if (!response.ok) {
        throw new Error("Failed to generate story")
      }

      const reader = response.body?.getReader()
      const decoder = new TextDecoder()

      if (!reader) {
        throw new Error("Failed to read response")
      }

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        const text = decoder.decode(value)
        setGeneratedStory((prev) => prev + text)
      }
    } catch (error) {
      console.error("[v0] Error generating story:", error)
      toast({
        title: "Error generating story",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsGenerating(false)
    }
  }

  const resetForm = () => {
    // Stop voice recognition before resetting
    if (isListening) {
      stopVoiceRecognition()
    }
    setFormData({
      lifeJourney: "",
      currentStruggles: "",
      goodThingsPast: "",
      deepestDesires: "",
      futureDescription: "",
    })
    setGeneratedStory("")
    setCurrentStep(0)
    setShowStory(false)
  }

  const copyStory = async () => {
    try {
      await navigator.clipboard.writeText(generatedStory)
      setStoryCopied(true)
      toast({
        title: "Story copied!",
        description: "Your future self story has been copied to clipboard.",
      })
      setTimeout(() => setStoryCopied(false), 3000)
    } catch {
      toast({
        title: "Failed to copy",
        description: "Please try selecting and copying the text manually.",
        variant: "destructive",
      })
    }
  }

  const isFormValid = Object.values(formData).every((value) => value.trim() !== "")

  const VoiceButton = ({ field, isActive }: { field: keyof FormData; isActive: boolean }) => {
    return (
      <button
        type="button"
        disabled={isListening !== null && !isActive}
        className={`absolute bottom-2 right-2 z-10 flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-medium transition-all cursor-pointer ${
          isActive 
            ? "bg-red-500 hover:bg-red-600 text-white" 
            : "bg-white/10 hover:bg-white/20 text-white/70 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed"
        }`}
        onMouseDown={(e) => {
          e.preventDefault()
          e.stopPropagation()
        }}
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          if (isActive) {
            stopVoiceRecognition()
          } else {
            startVoiceRecognition(field)
          }
        }}
      >
        {isActive ? (
          <>
            <Square className="h-3 w-3 fill-current" />
            <span>Stop</span>
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white"></span>
            </span>
          </>
        ) : (
          <>
            <Mic className="h-3 w-3" />
            <span>Voice</span>
          </>
        )}
      </button>
    )
  }

  const goToStep = (step: number) => {
    // Stop voice recognition when navigating away from current step
    if (isListening) {
      stopVoiceRecognition()
    }
    setStepDirection(step > currentStep ? 1 : -1)
    setCurrentStep(step)
  }

  const currentQuestion = questions[currentStep]
  const isLastStep = currentStep === questions.length - 1
  const currentFieldFilled = currentQuestion ? formData[currentQuestion.field].trim() !== "" : false

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -80 : 80,
      opacity: 0,
    }),
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <div className="fixed inset-0 bg-linear-to-b from-blue-500/40 via-blue-700/50 to-black pointer-events-none z-0" />
      <div className="fixed inset-0 opacity-[0.03] mix-blend-soft-light pointer-events-none z-0" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}
      />
      <div className="fixed top-0 left-1/2 transform -translate-x-1/2 w-[120vh] h-[60vh] rounded-b-[50%] bg-blue-400/20 blur-[80px] pointer-events-none z-0" />
      <WavyBackground containerClassName="fixed inset-0 pointer-events-none z-[1]" />

      <div className="relative z-10 min-h-screen flex flex-col">
        <div className="px-3 sm:px-6 pt-4 sm:pt-6 max-w-3xl mx-auto w-full">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                // Stop voice if active before any navigation
                if (isListening) {
                  stopVoiceRecognition()
                }
                if (showStory && !isGenerating) {
                  setShowStory(false)
                  setGeneratedStory("")
                  setCurrentStep(questions.length - 1)
                } else if (currentStep > 0) {
                  goToStep(currentStep - 1)
                } else {
                  setHasViewedInstructions(false)
                }
              }}
              className="gap-1.5 text-white/60 hover:text-white hover:bg-white/10"
              disabled={isGenerating}
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="hidden sm:inline">Back</span>
            </Button>
            <Image src="/images/ai-merge-logo.png" alt="AI Merge" width={120} height={36} className="h-6 sm:h-7 w-auto brightness-0 invert" />
            <div className="w-14 sm:w-[68px]" />
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center px-3 sm:px-6 py-6 sm:py-10">
          <div className="w-full max-w-3xl">
            <AnimatePresence mode="wait" custom={stepDirection}>
              {showStory ? (
                <motion.div
                  key="story"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="space-y-6"
                >
                  <div className="text-center space-y-3">
                    <TextEffect
                      as="h1"
                      per="word"
                      preset="blur"
                      className="text-xl sm:text-2xl md:text-3xl font-bold text-white"
                    >
                      Your Future Self Story
                    </TextEffect>
                    {isGenerating && (
                      <TextEffect
                        as="p"
                        per="word"
                        preset="fade"
                        delay={0.6}
                        className="text-white/50 text-sm"
                      >
                        Writing your story...
                      </TextEffect>
                    )}
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden"
                  >
                    <div className="p-4 sm:p-8 max-h-[50vh] sm:max-h-[60vh] overflow-y-auto eula-scroll">
                      <p className="text-white/80 leading-relaxed sm:leading-loose whitespace-pre-wrap text-sm sm:text-base">
                        {generatedStory}
                        {isGenerating && (
                          <motion.span
                            className="inline-block w-0.5 h-4 sm:h-5 bg-blue-400 ml-0.5 align-middle"
                            animate={{ opacity: [1, 0] }}
                            transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                          />
                        )}
                      </p>
                    </div>

                    {!isGenerating && generatedStory && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="border-t border-white/10 p-4 sm:p-6 space-y-4"
                      >
                        <div className="flex flex-wrap gap-2 sm:gap-3">
                          <Button
                            onClick={copyStory}
                            variant="outline"
                            size="sm"
                            className={`gap-2 text-xs sm:text-sm ${storyCopied ? "bg-green-500/20 border-green-500/50 text-green-400" : "border-white/20 text-white hover:bg-white/10 hover:text-white bg-transparent"}`}
                          >
                            {storyCopied ? <><Check className="h-3.5 w-3.5" /> Copied</> : <><Copy className="h-3.5 w-3.5" /> Copy Story</>}
                          </Button>
                          <Button
                            onClick={resetForm}
                            variant="outline"
                            size="sm"
                            className="gap-2 border-white/20 text-white hover:bg-white/10 hover:text-white bg-transparent text-xs sm:text-sm"
                          >
                            <RotateCcw className="h-3.5 w-3.5" /> Start Over
                          </Button>
                        </div>

                        <div className="pt-3 border-t border-white/10 space-y-3">
                          <div className="flex flex-wrap gap-2">
                            <a href="https://www.linkedin.com/in/manujaggarwal/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0A66C2]/10 border border-[#0A66C2]/20 text-[#0A66C2] hover:bg-[#0A66C2]/20 transition-all text-xs">
                              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                              Connect with Manuj on LinkedIn
                            </a>
                            <a href="mailto:manuj@tetranoodle.com" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#EA4335]/10 border border-[#EA4335]/20 text-[#EA4335] hover:bg-[#EA4335]/20 transition-all text-xs">
                              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                              Email Manuj
                            </a>
                            <a href="https://tetranoodle.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#22C55E]/10 border border-[#22C55E]/20 text-[#22C55E] hover:bg-[#22C55E]/20 transition-all text-xs">
                              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                              Visit TetraNoodle Website
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div
                  key={`step-${currentStep}`}
                  custom={stepDirection}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                >
                  <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl p-5 sm:p-8 space-y-5 sm:space-y-6">
                    <div className="space-y-3 sm:space-y-4">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.05 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/50 text-xs"
                      >
                        <span>Question {currentStep + 1} of {questions.length}</span>
                        <span className="text-white/30">|</span>
                        <span className="text-white/70">{currentQuestion.stepLabel}</span>
                      </motion.div>

                      <TextEffect
                        key={`title-${currentStep}`}
                        as="h2"
                        per="word"
                        preset="blur"
                        delay={0.1}
                        className="text-lg sm:text-xl md:text-2xl font-bold text-white"
                      >
                        {currentQuestion.title}
                      </TextEffect>

                      <TextEffect
                        key={`sub-${currentStep}`}
                        as="p"
                        per="word"
                        preset="fade"
                        delay={0.5}
                        className="text-white/40 text-xs sm:text-sm"
                      >
                        {currentQuestion.subtitle}
                      </TextEffect>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7, duration: 0.4 }}
                      className="relative"
                    >
                      <Textarea
                        id={currentQuestion.field}
                        placeholder={currentQuestion.placeholder}
                        value={formData[currentQuestion.field]}
                        onChange={(e) => handleInputChange(currentQuestion.field, e.target.value)}
                        className="min-h-28 sm:min-h-36 bg-black/30 border-white/10 text-white placeholder:text-white/25 focus:border-white/30 pb-12 resize-none text-sm sm:text-base rounded-lg"
                        autoFocus
                      />
                      <VoiceButton field={currentQuestion.field} isActive={isListening === currentQuestion.field} />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 }}
                      className="flex items-center justify-between pt-1"
                    >
                      <div className="flex gap-1.5">
                        {questions.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => goToStep(i)}
                            className={cn(
                              "h-1.5 rounded-full transition-all duration-300",
                              i === currentStep
                                ? "w-6 sm:w-8 bg-white"
                                : formData[questions[i].field].trim()
                                  ? "w-1.5 bg-blue-400/70"
                                  : "w-1.5 bg-white/20"
                            )}
                          />
                        ))}
                      </div>

                      <div className="flex gap-2">
                        {isLastStep ? (
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={generateStory}
                            disabled={!isFormValid || isGenerating}
                            className="flex items-center gap-2 px-5 sm:px-6 py-2.5 bg-white text-black text-sm font-medium rounded-lg disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                          >
                            {isGenerating ? (
                              <Loader2 className="h-4 w-4 animate-spin" />
                            ) : (
                              <Sparkles className="h-4 w-4" />
                            )}
                            <span className="hidden sm:inline">{isGenerating ? "Generating..." : "Generate My Story"}</span>
                            <span className="sm:hidden">{isGenerating ? "..." : "Generate"}</span>
                          </motion.button>
                        ) : (
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => goToStep(currentStep + 1)}
                            disabled={!currentFieldFilled}
                            className="flex items-center gap-2 px-5 sm:px-6 py-2.5 bg-white text-black text-sm font-medium rounded-lg disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                          >
                            Next
                            <ArrowRight className="h-4 w-4" />
                          </motion.button>
                        )}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="px-3 sm:px-6 pb-4 sm:pb-6 max-w-3xl mx-auto w-full flex flex-col items-center gap-2">
          <div className="flex items-center justify-center gap-4">
            <a href="https://www.linkedin.com/in/manujaggarwal/" target="_blank" rel="noopener noreferrer" className="text-[#0A66C2] hover:brightness-125 transition-all" aria-label="LinkedIn">
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="mailto:manuj@tetranoodle.com" className="text-[#EA4335] hover:brightness-125 transition-all" aria-label="Email">
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </a>
            <a href="https://tetranoodle.com" target="_blank" rel="noopener noreferrer" className="text-[#22C55E] hover:brightness-125 transition-all" aria-label="Website">
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            </a>
          </div>
          <p className="text-[10px] text-white/30 text-center">AI Merge Framework &middot; Published in Mensa Research Journal</p>
        </div>
      </div>
    </div>
  )
}
