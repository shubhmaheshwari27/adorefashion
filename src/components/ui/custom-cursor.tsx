"use client"

import { useState, useEffect, useRef } from "react"
import { shouldDisableCustomCursor } from "@/app/mobile-utils"

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [cursorHover, setCursorHover] = useState(false)
  const [shouldDisable, setShouldDisable] = useState(true) // Default to true to prevent flash
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Check if we should disable the cursor (mobile or tablet)
    const disableCursor = shouldDisableCustomCursor()
    setShouldDisable(disableCursor)

    // Only enable custom cursor on desktop devices
    if (!disableCursor) {
      // Handle cursor movement
      const handleMouseMove = (e: MouseEvent) => {
        setCursorPosition({ x: e.clientX, y: e.clientY })
      }

      // Add cursor listeners
      document.addEventListener("mousemove", handleMouseMove)

      // Add hover effect to buttons and links
      const interactiveElements = document.querySelectorAll("a, button")

      const handleMouseEnter = () => setCursorHover(true)
      const handleMouseLeave = () => setCursorHover(false)

      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", handleMouseEnter)
        el.addEventListener("mouseleave", handleMouseLeave)
      })

      return () => {
        document.removeEventListener("mousemove", handleMouseMove)
        interactiveElements.forEach((el) => {
          el.removeEventListener("mouseenter", handleMouseEnter)
          el.removeEventListener("mouseleave", handleMouseLeave)
        })
      }
    }
  }, [])

  useEffect(() => {
    // Update cursor position
    if (cursorRef.current && !shouldDisable) {
      cursorRef.current.style.transform = `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`
    }
  }, [cursorPosition, shouldDisable])

  // Don't render anything on mobile or tablet devices
  if (shouldDisable || document.documentElement.classList.contains("touch-device")) return null

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor ${cursorHover ? "hover" : ""}`}
      style={{ transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)` }}
    />
  )
}

export default CustomCursor

