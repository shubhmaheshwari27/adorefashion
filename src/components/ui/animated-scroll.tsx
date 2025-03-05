"use client"

import type React from "react"
import { useEffect, useRef } from "react"

interface AnimatedScrollProps {
  children: React.ReactNode
  direction?: "up" | "down" | "left" | "right"
  delay?: number
  duration?: number
  once?: boolean
  className?: string
}

const AnimatedScroll: React.FC<AnimatedScrollProps> = ({
  children,
  direction = "up",
  delay = 0,
  duration = 1000,
  once = true,
  className = "",
}) => {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Immediately make content visible
    if (elementRef.current) {
      elementRef.current.classList.add("animate-reveal")
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate-reveal")
            }, delay)

            if (once) {
              observer.unobserve(entry.target)
            }
          } else if (!once) {
            // Don't remove the class to keep content visible
            // entry.target.classList.remove("animate-reveal")
          }
        })
      },
      { threshold: 0.15 },
    )

    const element = elementRef.current
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [delay, once])

  // Remove the initial styles that hide content
  const initialStyles = ""

  return (
    <div
      ref={elementRef}
      className={`transition-all ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: "cubic-bezier(0.33, 1, 0.68, 1)",
        opacity: 1, // Force opacity to 1
        transform: "translate(0, 0)", // Force transform to neutral position
      }}
    >
      {children}
    </div>
  )
}

export default AnimatedScroll

