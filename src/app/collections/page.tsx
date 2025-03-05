"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import AnimatedScroll from "@/components/ui/animated-scroll";
import ParallaxImage from "@/components/ui/parallax-image";
import HorizontalScroll from "@/components/ui/horizontal-scroll";
import ProductInquiryForm from "@/components/ui/product-inquiry-form";
import { ArrowRight, ChevronRight } from "lucide-react";
import Script from "next/script";
import { generateProductStructuredData } from "@/components/structured-data";
import { generateMetadata } from "@/app/collections/metadata";

// export async function generateMetadata({ params, searchParams }: { params: any; searchParams: { category?: string } }) {
//   const category = searchParams?.category || "all"

//   const categoryTitles: Record<string, string> = {
//     all: "All Collections",
//     bridal: "Bridal Collection",
//     sarees: "Designer Sarees",
//     festive: "Festive Collection",
//     "indo-western": "Indo-Western Collection",
//   }

//   const title = categoryTitles[category] || "Collections"

//   return {
//     title: `${title} | Adore Boutique - Indian Ethnic Wear`,
//     description: `Explore our exquisite ${title.toLowerCase()} of Indian ethnic wear, each piece telling a story of tradition and craftsmanship.`,
//     alternates: {
//       canonical: `/collections${category !== "all" ? `?category=${category}` : ""}`,
//     },
//   }
// }

export default function Collections() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get("category")

  const [activeCategory, setActiveCategory] = useState("all")
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<{
    name: string
    image: string
  } | null>(null)

  useEffect(() => {
    // Set active category from URL parameter if available
    if (categoryParam) {
      setActiveCategory(categoryParam)

      // Scroll to the category section if it exists
      const categorySection = document.getElementById(categoryParam)
      if (categorySection) {
        setTimeout(() => {
          categorySection.scrollIntoView({ behavior: "smooth" })
        }, 500)
      }
    }

    // Initialize smooth scrolling
    const initSmoothScroll = async () => {
      try {
        const Lenis = (await import("@studio-freight/lenis")).default
        const lenis = new Lenis({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: "vertical",
          gestureOrientation: "vertical",
          smoothWheel: true,
        })

        function raf(time: number) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
      } catch (error) {
        console.error("Failed to initialize smooth scrolling:", error)
      }
    }

    initSmoothScroll()
  }, [categoryParam])

  const handleProductClick = (productName: string, productImage: string) => {
    setSelectedProduct({ name: productName, image: productImage })
    setModalOpen(true)
  }

  const categories = [
    {
      id: "bridal",
      title: "Bridal Collection",
      description: "Exquisite bridal wear for your special day",
      image: "1001",
      items: [
        {
          name: "Royal Red Lehenga",
          price: "₹75,000",
          image: "2001",
          description: "Stunning royal red bridal lehenga with intricate gold embroidery",
        },
        {
          name: "Gold Embroidered Lehenga",
          price: "₹85,000",
          image: "2002",
          description: "Luxurious gold embroidered lehenga with traditional motifs",
        },
        {
          name: "Pastel Pink Bridal Set",
          price: "₹65,000",
          image: "2003",
          description: "Elegant pastel pink bridal set with delicate silver work",
        },
        {
          name: "Maroon Velvet Lehenga",
          price: "₹95,000",
          image: "2004",
          description: "Rich maroon velvet lehenga with heritage zardozi embroidery",
        },
      ],
    },
    {
      id: "sarees",
      title: "Designer Sarees",
      description: "Elegant sarees for every occasion",
      image: "1002",
      items: [
        {
          name: "Banarasi Silk Saree",
          price: "₹25,000",
          image: "3001",
          description: "Traditional Banarasi silk saree with intricate gold work",
        },
        {
          name: "Kanjivaram Silk Saree",
          price: "₹35,000",
          image: "3002",
          description: "Authentic Kanjivaram silk saree in vibrant colors",
        },
        {
          name: "Embroidered Georgette Saree",
          price: "₹18,000",
          image: "3003",
          description: "Lightweight georgette saree with delicate embroidery",
        },
        {
          name: "Designer Chiffon Saree",
          price: "₹22,000",
          image: "3004",
          description: "Contemporary chiffon saree with designer border",
        },
      ],
    },
    {
      id: "festive",
      title: "Festive Collection",
      description: "Celebrate festivals with our vibrant attire",
      image: "1003",
      items: [
        {
          name: "Diwali Special Anarkali",
          price: "₹15,000",
          image: "4001",
          description: "Vibrant Anarkali suit perfect for Diwali celebrations",
        },
        {
          name: "Navratri Chaniya Choli",
          price: "₹12,000",
          image: "4002",
          description: "Traditional Chaniya Choli for Navratri festivities",
        },
        {
          name: "Holi Celebration Kurta Set",
          price: "₹8,000",
          image: "4003",
          description: "Comfortable and stylish kurta set for Holi celebrations",
        },
        {
          name: "Eid Special Sharara",
          price: "₹18,000",
          image: "4004",
          description: "Elegant sharara set designed for Eid celebrations",
        },
      ],
    },
    {
      id: "indo-western",
      title: "Indo-Western",
      description: "Perfect blend of traditional and contemporary styles",
      image: "1004",
      items: [
        {
          name: "Fusion Dhoti Jumpsuit",
          price: "₹12,000",
          image: "5001",
          description: "Modern dhoti jumpsuit combining traditional and western elements",
        },
        {
          name: "Contemporary Jacket Lehenga",
          price: "₹22,000",
          image: "5002",
          description: "Innovative jacket lehenga with contemporary design",
        },
        {
          name: "Modern Draped Saree",
          price: "₹16,000",
          image: "5003",
          description: "Pre-draped saree with modern styling for easy wear",
        },
        {
          name: "Designer Palazzo Set",
          price: "₹14,000",
          image: "5004",
          description: "Stylish palazzo set with designer embellishments",
        },
      ],
    },
  ]

  // Get all products for structured data
  const allProducts = categories.flatMap((category) =>
    category.items.map((item) => ({
      ...item,
      image: `https://adorefashion.in/placeholder.svg?height=${item.image}&width=600`,
    })),
  )

  // Generate structured data
  const structuredData = generateProductStructuredData(allProducts)

  return (
    <div className="min-h-screen">
      <Script
        id="product-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Navigation />

      {/* Inquiry Form Modal */}
      {selectedProduct && (
        <ProductInquiryForm
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          productName={selectedProduct.name}
          productImage={`/placeholder.svg?height=${selectedProduct.image}&width=600`}
        />
      )}

      <main>
        {/* Hero Banner */}
        <section className="relative h-[70vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <ParallaxImage
              src="/placeholder.svg?height=800&width=1920"
              alt="Adore Boutique Collections - Indian Ethnic Wear"
              priority
              speed={0.3}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-amber-900/90 via-amber-800/70 to-transparent z-10" />
          </div>

          <div className="container mx-auto px-6 md:px-12 relative z-20">
            <AnimatedScroll>
              <div className="max-w-xl space-y-5">
                <span className="text-amber-300 font-medium">EXPLORE OUR DESIGNS</span>
                <h1 className="heading-lg text-white">Our Collections</h1>
                <p className="text-xl text-white/90">
                  Explore our exquisite range of Indian ethnic wear, each piece telling a story of tradition and
                  craftsmanship.
                </p>
              </div>
            </AnimatedScroll>
          </div>

          {/* Scroll down indicator - Add if needed */}
          <div className="absolute bottom-10 left-0 right-0 flex flex-col items-center justify-center text-white animate-bounce">
            <p className="text-sm font-medium mb-2">Scroll Down</p>
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 rotate-90" />
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-6 sm:py-8 md:py-12 sticky top-16 z-30 bg-white shadow-md">
          <div className="container mx-auto px-4 sm:px-6 md:px-12">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
              <button
                onClick={() => setActiveCategory("all")}
                className={`px-3 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm rounded-full ${
                  activeCategory === "all" ? "bg-amber-600 text-white" : "bg-amber-50 text-amber-800 hover:bg-amber-100"
                } transition-colors`}
                aria-label="View all collections"
              >
                All Collections
              </button>

              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-3 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm rounded-full ${
                    activeCategory === category.id
                      ? "bg-amber-600 text-white"
                      : "bg-amber-50 text-amber-800 hover:bg-amber-100"
                  } transition-colors`}
                  aria-label={`View ${category.title}`}
                >
                  {category.title}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Collections Display */}
        {categories
          .filter((category) => activeCategory === "all" || category.id === activeCategory)
          .map((category, index) => (
            <section
              key={category.id}
              id={category.id}
              className={`py-20 ${index % 2 === 0 ? "bg-white" : "bg-amber-50"}`}
            >
              <div className="container mx-auto px-6 md:px-12">
                <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center mb-8 sm:mb-16">
                  <AnimatedScroll direction={index % 2 === 0 ? "right" : "left"}>
                    <div className="space-y-4 sm:space-y-6">
                      <span className="text-amber-600 font-medium">COLLECTION</span>
                      <h2 className="heading-md text-gradient">{category.title}</h2>
                      <div className="w-16 sm:w-20 h-1 bg-amber-600"></div>
                      <p className="text-muted-foreground text-sm sm:text-lg">{category.description}</p>
                      <Button
                        className="bg-amber-700 hover:bg-amber-800 rounded-full group mt-2 sm:mt-4 text-xs sm:text-sm"
                        onClick={() => handleProductClick(category.title, category.image)}
                        aria-label={`Inquire about ${category.title}`}
                      >
                        Inquire About This Collection
                        <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </AnimatedScroll>

                  <AnimatedScroll direction={index % 2 === 0 ? "left" : "right"}>
                    <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-xl overflow-hidden">
                      <Image
                        src={`/placeholder.svg?height=${category.image}&width=800`}
                        alt={`${category.title} - Adore Boutique Collection`}
                        fill
                        className="object-cover transition-scale"
                      />

                      {/* Decorative elements */}
                      <div className="absolute top-1/4 -right-10 w-16 h-16 sm:w-32 sm:h-32 bg-amber-500/20 rounded-full backdrop-blur-md -z-10"></div>
                      <div className="absolute bottom-1/4 -left-10 w-10 h-10 sm:w-20 sm:h-20 bg-amber-500/30 rounded-full backdrop-blur-md -z-10"></div>
                    </div>
                  </AnimatedScroll>
                </div>

                <HorizontalScroll itemClassName="w-[85vw] sm:w-[45vw] md:w-[30vw] lg:w-[22vw]">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="group">
                      <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] overflow-hidden rounded-xl mb-4">
                        <Image
                          src={`/placeholder.svg?height=${item.image}&width=600`}
                          alt={`${item.name} - ${category.title} - Adore Boutique`}
                          fill
                          className="object-cover transition-all duration-700 group-hover:scale-110"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                          <Button
                            className="w-full bg-amber-600 hover:bg-amber-700 rounded-full text-xs sm:text-sm"
                            onClick={() => handleProductClick(item.name, item.image)}
                            aria-label={`View details for ${item.name}`}
                          >
                            View Details
                          </Button>
                        </div>
                      </div>
                      <h3 className="font-medium text-base sm:text-lg">{item.name}</h3>
                      <p className="text-amber-700 font-semibold text-sm sm:text-base">{item.price}</p>
                    </div>
                  ))}
                </HorizontalScroll>
              </div>
            </section>
          ))}

        {/* Custom Orders CTA */}
        <section className="py-24 relative overflow-hidden bg-gradient-to-r from-amber-900 to-amber-800 text-white">
          <div className="circle-element w-[400px] h-[400px] opacity-20 top-0 -right-32"></div>
          <div className="circle-element w-[300px] h-[300px] opacity-10 bottom-0 -left-32"></div>

          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <AnimatedScroll>
                <h2 className="heading-md mb-6">Looking for Something Special?</h2>
                <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                  We offer custom design services to create the perfect outfit for your special occasion. Our designers
                  will work closely with you to bring your vision to life.
                </p>
                <Button
                  size="lg"
                  className="bg-white text-amber-900 hover:bg-amber-100 rounded-full py-6 px-8"
                  onClick={() => handleProductClick("Custom Design", "6001")}
                  aria-label="Inquire about custom orders"
                >
                  Inquire About Custom Orders
                </Button>
              </AnimatedScroll>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
