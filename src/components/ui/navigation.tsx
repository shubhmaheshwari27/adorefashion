"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { isMobileDevice } from "@/app/mobile-utils"
import { ThemeToggle } from "./theme-toggle"

const Navigation = () => {
  const router = useRouter()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const lastScrollY = useRef(0)
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)

  // Handle client-side logic for scroll and window resizing
  useEffect(() => {
    if (typeof window === "undefined") return // Prevent SSR issues

    setIsMobile(isMobileDevice())

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      // Determine header visibility based on scroll direction
      if (isMobile && !isMobileMenuOpen) {
        if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
          setIsHeaderVisible(false)
        } else {
          setIsHeaderVisible(true)
        }
      } else {
        setIsHeaderVisible(true)
      }

      lastScrollY.current = currentScrollY
      setIsScrolled(currentScrollY > 50)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isMobile, isMobileMenuOpen])

  // Toggle header visibility when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      setIsHeaderVisible(true)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  const handleConsultationClick = () => {
    router.push("/contact")
    setIsMobileMenuOpen(false)
    setIsHeaderVisible(true)
  }

  const handleShopNowClick = () => {
    router.push("/collections")
    setIsMobileMenuOpen(false)
    setIsHeaderVisible(true)
  }

  const handleNavLinkClick = () => {
    setIsMobileMenuOpen(false)
    setIsHeaderVisible(true)
  }

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          isMobile || isScrolled
            ? "bg-white/10 dark:bg-amber-950/10 backdrop-blur-md border-b border-white/10 dark:border-amber-800/10 py-2 sm:py-3"
            : "py-3 sm:py-6"
        } ${isHeaderVisible ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between w-full box-border">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-heading text-xl sm:text-2xl font-bold text-amber-600 dark:text-amber-400 group-hover:text-amber-500 dark:group-hover:text-amber-300 transition-colors">
              Adore
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 lg:gap-10">
            <Link
              href="/"
              className="text-sm font-medium text-amber-800 dark:text-amber-200 hover:text-amber-600 dark:hover:text-amber-300 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-amber-600 dark:after:bg-amber-400 after:transition-all hover:after:w-full"
            >
              Home
            </Link>
            <Link
              href="/collections"
              className="text-sm font-medium text-amber-800 dark:text-amber-200 hover:text-amber-600 dark:hover:text-amber-300 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-amber-600 dark:after:bg-amber-400 after:transition-all hover:after:w-full"
            >
              Collections
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-amber-800 dark:text-amber-200 hover:text-amber-600 dark:hover:text-amber-300 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-amber-600 dark:after:bg-amber-400 after:transition-all hover:after:w-full"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-amber-800 dark:text-amber-200 hover:text-amber-600 dark:hover:text-amber-300 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-amber-600 dark:after:bg-amber-400 after:transition-all hover:after:w-full"
            >
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Button
              variant="outline"
              className="border-amber-700 text-amber-700 dark:border-amber-400 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-900/30 rounded-full px-4 lg:px-6"
              onClick={handleConsultationClick}
            >
              Book Consultation
            </Button>
            <Button
              className="bg-amber-700 hover:bg-amber-800 dark:bg-amber-600 dark:hover:bg-amber-700 rounded-full px-4 lg:px-6"
              onClick={handleShopNowClick}
            >
              Shop Now
            </Button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              className="p-2 text-amber-800 dark:text-amber-200 touch-target tap-highlight"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed top-0 left-0 w-full h-full bg-amber-50/95 dark:bg-amber-950/95 backdrop-blur-md z-40 overflow-y-auto"
          style={{ paddingTop: headerRef.current ? headerRef.current.offsetHeight + 20 : "5rem" }}
        >
          <nav className="container mx-auto px-4 sm:px-6 flex flex-col items-center gap-8 py-10 w-full box-border">
            <Link
              href="/"
              className="mobile-nav-item text-amber-800 dark:text-amber-200 hover:text-amber-600 dark:hover:text-amber-300 transition-colors tap-highlight"
              onClick={handleNavLinkClick}
            >
              Home
            </Link>
            <Link
              href="/collections"
              className="mobile-nav-item text-amber-800 dark:text-amber-200 hover:text-amber-600 dark:hover:text-amber-300 transition-colors tap-highlight"
              onClick={handleNavLinkClick}
            >
              Collections
            </Link>
            <Link
              href="/about"
              className="mobile-nav-item text-amber-800 dark:text-amber-200 hover:text-amber-600 dark:hover:text-amber-300 transition-colors tap-highlight"
              onClick={handleNavLinkClick}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="mobile-nav-item text-amber-800 dark:text-amber-200 hover:text-amber-600 dark:hover:text-amber-300 transition-colors tap-highlight"
              onClick={handleNavLinkClick}
            >
              Contact
            </Link>

            <div className="flex flex-col gap-5 mt-8 w-full">
              <Button
                variant="outline"
                className="border-amber-700 text-amber-700 dark:border-amber-400 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-900/30 rounded-full w-full py-4 text-base touch-target"
                onClick={handleConsultationClick}
              >
                Book Consultation
              </Button>
              <Button
                className="bg-amber-700 hover:bg-amber-800 dark:bg-amber-600 dark:hover:bg-amber-700 rounded-full w-full py-4 text-base touch-target"
                onClick={handleShopNowClick}
              >
                Shop Now
              </Button>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}

export default Navigation
