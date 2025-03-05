import Link from "next/link"
import { Instagram, Facebook, Mail } from "lucide-react"

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-amber-950 to-amber-900 text-white/90 py-16 sm:py-20">
      {/* Decorative circles */}
      <div className="circle-element w-[150px] h-[150px] sm:w-[300px] sm:h-[300px] opacity-20 top-0 left-[10%]"></div>
      <div className="circle-element w-[100px] h-[100px] sm:w-[200px] sm:h-[200px] opacity-10 bottom-0 right-[5%]"></div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10 w-full box-border">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12">
          <div>
            <h3 className="text-lg sm:text-xl font-heading font-bold text-white mb-6 sm:mb-8">Adore Fashion</h3>
            <p className="mb-6 sm:mb-8 text-white/70 max-w-md text-sm sm:text-base leading-relaxed">
              Celebrating tradition with elegance. Exquisite Indian ethnic wear for every occasion, crafted with passion
              and an eye for detail.
            </p>
            <div className="flex gap-5">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-amber-300 transition-colors"
              >
                <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-amber-300 transition-colors"
              >
                <Facebook className="h-5 w-5 sm:h-6 sm:w-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="mailto:info@adorefashion.in" className="text-white/70 hover:text-amber-300 transition-colors">
                <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-semibold text-white mb-6 sm:mb-8">Collections</h3>
            <ul className="space-y-4 text-sm sm:text-base">
              <li>
                <Link
                  href="/collections?category=bridal"
                  className="text-white/70 hover:text-amber-300 transition-colors"
                >
                  Bridal Lehengas
                </Link>
              </li>
              <li>
                <Link
                  href="/collections?category=sarees"
                  className="text-white/70 hover:text-amber-300 transition-colors"
                >
                  Designer Sarees
                </Link>
              </li>
              <li>
                <Link
                  href="/collections?category=festive"
                  className="text-white/70 hover:text-amber-300 transition-colors"
                >
                  Festive Collection
                </Link>
              </li>
              <li>
                <Link
                  href="/collections?category=indo-western"
                  className="text-white/70 hover:text-amber-300 transition-colors"
                >
                  Indo-Western
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-semibold text-white mb-6 sm:mb-8">Quick Links</h3>
            <ul className="space-y-4 text-sm sm:text-base">
              <li>
                <Link href="/about" className="text-white/70 hover:text-amber-300 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-amber-300 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-amber-300 transition-colors">
                  Book Consultation
                </Link>
              </li>
              <li>
                <Link href="/collections" className="text-white/70 hover:text-amber-300 transition-colors">
                  Collections
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-semibold text-white mb-6 sm:mb-8">Contact Us</h3>
            <address className="not-italic text-white/70 space-y-4 text-sm sm:text-base">
              <p>123 Fashion Street</p>
              <p>Mumbai, Maharashtra 400001</p>
              <p>Phone: +91 98765 43210</p>
              <p>Email: info@adorefashion.in</p>
            </address>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 sm:mt-16 pt-8 sm:pt-10 text-center text-sm">
          <p className="text-white/50 mobile-text-wrap">
            &copy; {new Date().getFullYear()} Adore Fashion. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

