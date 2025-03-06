"use client"

import React, { useRef, useState, useEffect, useCallback } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { isMobileDevice } from "@/app/mobile-utils"

interface HorizontalScrollProps {
  children: React.ReactNode
  className?: string
  itemClassName?: string
}

const HorizontalScroll: React.FC<HorizontalScrollProps> = ({ children, className = "", itemClassName = "" }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)
  const [isTouching, setIsTouching] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(isMobileDevice())
  }, [])

  const handleScroll = useCallback(() => {
    if (!scrollContainerRef.current) return

    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
    setShowLeftArrow(scrollLeft > 0)
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10)
  }, [])

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll)
      handleScroll()
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll)
      }
    }
  }, [handleScroll])

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return

    const { clientWidth } = scrollContainerRef.current
    const scrollAmount = clientWidth * 0.8

    scrollContainerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    })
  }

  // Touch handlers for better mobile experience
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scrollContainerRef.current) return

    setIsTouching(true)
    setStartX(e.touches[0].clientX)
    setScrollLeft(scrollContainerRef.current.scrollLeft)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isTouching || !scrollContainerRef.current) return

    const x = e.touches[0].clientX
    const walk = (x - startX) * 2 // Faster scroll speed
    scrollContainerRef.current.scrollLeft = scrollLeft - walk
  }

  const handleTouchEnd = () => {
    setIsTouching(false)
  }

  return (
    <div className="relative group max-w-full overflow-hidden">
      {showLeftArrow && !isMobile && (
        <button
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm text-amber-900 p-2 sm:p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity touch-target"
          onClick={() => scroll("left")}
          aria-label="Scroll left"
        >
          <ArrowLeft size={16} className="sm:h-5 sm:w-5" />
        </button>
      )}

      <div
        ref={scrollContainerRef}
        className={`horizontal-scroll-container smooth-scroll w-full max-w-full ${className}`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ maxWidth: "100vw", overflowX: "auto", boxSizing: "border-box", padding: "0 1rem" }}
      >
        {React.Children.map(children, (child, index) => (
          <div
            key={index}
            className={`horizontal-scroll-item ${itemClassName}`}
            style={{
              maxWidth: isMobile ? "calc(100vw - 2rem)" : undefined,
              minWidth: 0,
              flexShrink: 0,
            }}
          >
            {child}
          </div>
        ))}
      </div>

      {showRightArrow && !isMobile && (
        <button
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm text-amber-900 p-2 sm:p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity touch-target"
          onClick={() => scroll("right")}
          aria-label="Scroll right"
        >
          <ArrowRight size={16} className="sm:h-5 sm:w-5" />
        </button>
      )}
    </div>
  )
}

export default HorizontalScroll

