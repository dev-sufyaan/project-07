"use client"

import { useState, useEffect, useRef } from "react"
import { Circle, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"
import { Inter } from "next/font/google"

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

// Use fixed thumbnail instead of random images
const COURSE_THUMBNAIL = "/course-thumbnail.jpg"

export default function LandingPage() {
  const [showLoginDropdown, setShowLoginDropdown] = useState(false)
  const [activeCardIndex, setActiveCardIndex] = useState(0)
  const isMobile = useMobile()
  const loginRef = useRef<HTMLDivElement>(null)
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: "A Halal Roadmap To $10,000/Month for Muslim Developers",
      description: "If you are a dev wanting to make an extra $3-10k/mo selling AI implementations, go here...",
      image: "/thumbnail1.jpg",
    },
    {
      id: 2,
      title: "I Taught 6 Beginners To Build an AI Project (with no experience)",
      description: "🔑 Get my FREE 'Noob to AI Developer' roadmap: https://lastcodebender.com/ai-dev-roadmap",
      image: "/thumbnail2.jpg",
    },
    {
      id: 3,
      title: "I am starting the Last Codebender Nation",
      description: "code·bend·er: [Definition] Unique individual who has unlocked the ability to read the code...",
      image: "/thumbnail3.jpg",
    },
  ])

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (loginRef.current && !loginRef.current.contains(event.target as Node)) {
        setShowLoginDropdown(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleCardClick = () => {
    // Just rotate active card without changing images
    setActiveCardIndex((prevIndex) => (prevIndex + 1) % courses.length)
  }

  // Reorder cards based on active index
  const reorderedCourses = [...courses.slice(activeCardIndex), ...courses.slice(0, activeCardIndex)]

  return (
    <div className={`min-h-screen text-white ${inter.className} relative`}>
      {/* Background elements */}
      <div className="bg-gradient-deep"></div>
      <div className="noise-overlay"></div>
      
      {/* Custom radial gradient spotlight */}
      <div className="absolute top-[20%] left-[50%] w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 bg-gradient-radial from-purple-900/20 via-transparent to-transparent opacity-30 blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] right-[20%] w-[600px] h-[600px] bg-gradient-radial from-blue-900/10 via-transparent to-transparent opacity-20 blur-[80px] pointer-events-none"></div>

      <div className="relative z-10">
        {/* Header - Search bar removed */}
        <header className="w-full border-b border-[#222222]/50 py-4 px-6 backdrop-blur-sm bg-[#0a0a0a]/70">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-xl font-medium tracking-wide glow-text">LOGO</div>

            <div className="flex items-center gap-4">
              <button className="px-4 py-2 rounded-md bg-[#1A1A1A]/80 hover:bg-[#252525]/80 transition-colors text-sm backdrop-blur-sm border border-[#333]/30">
                Who we are?
              </button>
              <div className="relative" ref={loginRef}>
                <button
                  className="px-4 py-2 rounded-md bg-[#1A1A1A]/80 hover:bg-[#252525]/80 transition-colors text-sm backdrop-blur-sm border border-[#333]/30"
                  onClick={() => setShowLoginDropdown(!showLoginDropdown)}
                >
                  Login
                </button>
                <AnimatePresence>
                  {showLoginDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-48 bg-[#121212]/90 backdrop-blur-md rounded-md shadow-lg border border-[#2A2A2F]/50 overflow-hidden z-10"
                    >
                      <div className="py-1">
                        <button className="w-full text-left px-4 py-2 hover:bg-[#1A1A1F] transition-colors">
                          As Admin
                        </button>
                        <button className="w-full text-left px-4 py-2 hover:bg-[#1A1A1F] transition-colors">
                          As Student
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content - Side by Side Layout */}
        <main className="container mx-auto px-6 py-12 md:py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left Side - Text Content */}
            <div className="w-full lg:w-1/2 lg:pr-8">
              {/* Tagline */}
              <div className="mb-8">
                <div className="inline-flex items-center px-4 py-1.5 rounded-full interactive-tag">
                  <Circle className="w-4 h-4 mr-2 fill-current text-amber-500" />
                  <span className="text-sm font-medium text-amber-500">Interactive learning platform</span>
                </div>
              </div>

              <div className="mb-12">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
                  <span className="gradient-heading inline-block mb-2">Turn passive video watching</span>
                  <span className="gradient-heading inline-block mb-2">into an active, search-driven,</span>
                  <span className="gradient-heading inline-block mb-2">practice-oriented</span>
                  <span className="gradient-heading inline-block mb-2">learning journey</span>
                </h1>

                <div className="mt-10">
                  <button className="cta-button group relative overflow-hidden px-8 py-3 rounded-md text-[#EAEAEA] uppercase text-sm tracking-wider glow-button">
                    <span className="flex items-center relative z-10">
                      START LEARNING <ArrowRight className="ml-2 w-5 h-5" />
                    </span>
                    {/* Continuous light reflection animation */}
                    <span className="absolute inset-0 overflow-hidden">
                      <span className="animate-shimmer-continuous absolute inset-0 w-[200%] -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></span>
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side - Card Stack */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative h-[480px] w-full max-w-[500px]">
                {reorderedCourses.map((course, index) => (
                  <motion.div
                    key={course.id}
                    className="absolute top-0 left-0 w-full"
                    initial={false}
                    animate={{
                      zIndex: reorderedCourses.length - index,
                      x: index === 0 ? 0 : `${index * 15}px`,
                      y: index === 0 ? 0 : `${index * 15}px`,
                      scale: 1 - index * 0.05,
                      opacity: 1 - index * 0.15,
                      rotateZ: index * 2, // More pronounced rotation
                      filter: `blur(${index * 1}px)`, // Subtle blur for depth
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 25,
                      mass: 0.8,
                    }}
                    onClick={index === 0 ? handleCardClick : undefined}
                    style={{
                      cursor: index === 0 ? "pointer" : "default",
                      transformOrigin: "center center",
                      willChange: "transform", // Add will-change for better performance
                    }}
                    whileHover={
                      index === 0
                        ? {
                            scale: 1.03,
                            y: -8,
                            rotateZ: 0, // Remove rotation on hover to prevent text glitchiness
                            transition: { duration: 0.2 },
                          }
                        : {}
                    }
                  >
                    <div className="bg-black rounded-xl overflow-hidden shadow-lg border border-[#2A2A2F]/50 relative card-glow">
                      {/* Enhanced card glow effect */}
                      {index === 0 && (
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#333] via-[#555] to-[#333] opacity-30 blur-sm rounded-xl animate-pulse"></div>
                      )}
                      <div className="relative">
                        <div className="h-64 bg-black overflow-hidden">
                          <motion.img
                            src={course.image}
                            alt={course.title}
                            className="w-full h-full object-cover"
                            initial={{ scale: 1.1 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5 }}
                            onError={(e) => {
                              // Fallback if image fails to load
                              const target = e.target as HTMLImageElement
                              target.src = "/placeholder.svg?height=250&width=400"
                            }}
                          />
                        </div>
                        <div className="p-6 bg-black">
                          <h3 className="text-xl font-bold mb-2 will-change-auto">{course.title}</h3>
                          <p className="text-[#AAAAAA] will-change-auto">{course.description}</p>
                        </div>

                        {/* Interactive indicator for front card */}
                        {index === 0 && (
                          <motion.div
                            className="absolute bottom-3 right-3"
                            initial={{ opacity: 0.9 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                          >
                            <div className="flex items-center text-xs text-white bg-black px-2 py-1 rounded">
                              <span>Click to shuffle</span>
                              <ArrowRight className="ml-1 w-3 h-3" />
                            </div>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

