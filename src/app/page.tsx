"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Script from "next/script";
import { Button } from "@/components/ui/button";
import MagnetButton from "@/components/ui/magnet-button";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import AnimatedScroll from "@/components/ui/animated-scroll";
import ParallaxImage from "@/components/ui/parallax-image";
import HorizontalScroll from "@/components/ui/horizontal-scroll";
import { ChevronRight, ArrowRight, Star } from "lucide-react";
import ProductInquiryForm from "@/components/ui/product-inquiry-form";
import { generateLocalBusinessStructuredData } from "@/components/structured-data";
import MobileOptimizedImage from "@/components/ui/mobile-optimized-image";
import {
  setupMobileViewportHeight,
  improveTouchResponse,
  isMobileDevice,
} from "@/app/mobile-utils";
import ReviewsWrapper from "@/components/ReviewsWrapper";
import dynamic from "next/dynamic";
import ReviewsWrapperClient from "@/components/ReviewsWrapperClient";

export default function Home() {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<{
    name: string;
    image: string;
  } | null>(null);

  // Generate structured data
  const structuredData = generateLocalBusinessStructuredData();
  // Dynamically load the server component
  // const ReviewsWrapper = dynamic(() => import("@/components/ReviewsWrapper"), {
  //   ssr: false, // Optional: if you want to avoid hydration mismatch warnings
  // });

  useEffect(() => {
    // Check if device is mobile
    setIsMobile(isMobileDevice());

    // Initialize mobile optimizations
    setupMobileViewportHeight();
    improveTouchResponse();

    // Disable custom cursor on mobile
    if (isMobileDevice()) {
      document.documentElement.classList.add("mobile-device");
    }

    // Initialize smooth scrolling
    const initSmoothScroll = async () => {
      try {
        const Lenis = (await import("@studio-freight/lenis")).default;
        const lenis = new Lenis({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: "vertical",
          gestureOrientation: "vertical",
          smoothWheel: true,
          touchMultiplier: 2, // Better touch response
        });

        function raf(time: number) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
      } catch (error) {
        console.error("Failed to initialize smooth scrolling:", error);
      }
    };

    initSmoothScroll();
  }, []);

  // Function to navigate to collections page with a specific category
  const navigateToCollection = (collectionId: string) => {
    router.push(`/collections?category=${collectionId}`);
  };

  // Function to handle consultation booking
  const handleBookConsultation = () => {
    setSelectedProduct({ name: "Consultation Request", image: "1080" });
    setModalOpen(true);
  };

  return (
    <>
      <Script
        id="local-business-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Navigation />

      {selectedProduct && (
        <ProductInquiryForm
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          productName={selectedProduct.name}
          productImage={`/assets/placeholders/adore_placeholder.jpg?height=${selectedProduct.image}&width=600`}
        />
      )}

      <main className="relative">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] md:h-screen flex items-center overflow-hidden">
          {/* Background image with parallax effect */}
          <div className="absolute inset-0 z-0">
            <ParallaxImage
              src="/assets/placeholders/adore_placeholder.jpg"
              alt="Adore Boutique - Elegant Indian Ethnic Wear"
              priority
              speed={isMobile ? 0 : 0.3} // Disable parallax on mobile for better performance
            />
            <div className="absolute inset-0 bg-gradient-to-r from-amber-900/90 via-amber-800/70 to-transparent dark:from-amber-950/90 dark:via-amber-900/70 z-10" />
          </div>

          {/* Decorative elements - reduced on mobile */}
          {!isMobile && (
            <>
              <div className="circle-element w-[150px] h-[150px] md:w-[300px] md:h-[300px] top-1/4 right-[10%] floating-element"></div>
              <div className="circle-element w-[100px] h-[100px] md:w-[200px] md:h-[200px] bottom-1/4 left-[5%]"></div>
            </>
          )}

          <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-20 w-full box-border">
            <div className="max-w-xl space-y-4 sm:space-y-8 mobile-text-wrap">
              <h1 className="heading-xl text-white">
                <span className="block animate-fade-in">Celebrating</span>
                <span
                  className="block animate-fade-in"
                  style={{ animationDelay: "300ms" }}
                >
                  Tradition with
                </span>
                <span
                  className="block animate-fade-in"
                  style={{ animationDelay: "600ms" }}
                >
                  Elegance
                </span>
              </h1>

              <p
                className="text-base sm:text-lg md:text-xl text-white/90 animate-slide-up mobile-text mobile-text-wrap dark:text-white/90"
                style={{ animationDelay: "900ms" }}
              >
                Discover exquisite Indian ethnic wear crafted with passion,
                tradition, and a touch of contemporary elegance.
              </p>

              <div
                className="flex flex-col sm:flex-row gap-4 animate-slide-up"
                style={{ animationDelay: "1200ms" }}
              >
                <Button
                  className="bg-amber-700 hover:bg-amber-800 dark:bg-amber-600 dark:hover:bg-amber-700 rounded-full px-6 sm:px-8 py-3 sm:py-6 text-base touch-target"
                  onClick={() => {
                    setSelectedProduct({
                      name: "Featured Collection",
                      image: "1080",
                    });
                    setModalOpen(true);
                  }}
                >
                  Shop Now
                </Button>
                <MagnetButton
                  size="lg"
                  variant="outline"
                  className="border-amber-700 text-amber-700 hover:bg-white/10 dark:border-amber-400 dark:text-amber-400 dark:hover:bg-amber-800/20 rounded-full py-3 sm:py-6 px-6 sm:px-8 text-base touch-target"
                  onClick={handleBookConsultation}
                  strength={isMobile ? 0 : 0.5} // Disable magnetic effect on mobile
                >
                  Book Consultation
                </MagnetButton>
              </div>
            </div>
          </div>

          {/* Scroll down indicator */}
          <div className="absolute bottom-10 left-0 right-0 flex flex-col items-center justify-center text-white animate-bounce">
            <p className="text-sm font-medium mb-2">Scroll Down</p>
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 rotate-90" />
          </div>
        </section>

        {/* Featured Collections - Horizontal Scroll */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden bg-gradient-to-b from-amber-50 to-white dark:from-amber-950/50 dark:to-amber-950 mobile-section">
          <div className="circle-element w-32 h-32 sm:w-64 sm:h-64 -top-32 left-1/4 opacity-40"></div>
          <div className="circle-element w-48 h-48 sm:w-96 sm:h-96 -bottom-48 right-1/3 opacity-30"></div>

          <div className="container mx-auto px-4 sm:px-6 md:px-12 mb-8 sm:mb-12 w-full box-border">
            <AnimatedScroll>
              <div className="flex flex-col items-center text-center mb-8 sm:mb-12">
                <span className="text-amber-600 dark:text-amber-400 font-medium mb-2">
                  DISCOVER OUR COLLECTIONS
                </span>
                <h2 className="heading-md text-gradient mb-4 sm:mb-6">
                  Featured Collections
                </h2>
                <div className="w-16 sm:w-20 h-1 bg-amber-600 dark:bg-amber-400 mb-4 sm:mb-6"></div>
                <p className="text-muted-foreground max-w-2xl text-base leading-relaxed mobile-text">
                  Explore our handpicked designs that blend traditional
                  craftsmanship with contemporary aesthetics.
                </p>
              </div>
            </AnimatedScroll>
          </div>

          <HorizontalScroll
            itemClassName={`w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-[40vw] ${
              isMobile ? "snap-center" : ""
            }`}
          >
            {[
              {
                title: "Bridal Lehengas",
                image: "1080",
                description: "Exquisite bridal wear for your special day",
                id: "bridal",
              },
              {
                title: "Designer Sarees",
                image: "1081",
                description: "Elegant sarees for every occasion",
                id: "sarees",
              },
              {
                title: "Festive Collection",
                image: "1082",
                description: "Celebrate festivals with our vibrant attire",
                id: "festive",
              },
              {
                title: "Modern Fusion",
                image: "1083",
                description: "Contemporary designs with traditional roots",
                id: "indo-western",
              },
            ].map((collection, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-xl h-[50vh] sm:h-[60vh] md:h-[70vh] shadow-xl mobile-card"
              >
                <div className="absolute inset-0 transition-scale">
                  <MobileOptimizedImage
                    src={`/assets/placeholders/adore_placeholder.jpg?height=${collection.image}&width=1080`}
                    mobileSrc={`/assets/placeholders/adore_placeholder.jpg?height=${collection.image}&width=640`}
                    tabletSrc={`/assets/placeholders/adore_placeholder.jpg?height=${collection.image}&width=1024`}
                    alt={`${collection.title} - Adore Boutique Collection`}
                    className="w-full h-full"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent dark:from-black/90 dark:via-black/50 flex flex-col justify-end p-4 sm:p-6 md:p-8">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-white mb-2 sm:mb-3">
                    {collection.title}
                  </h3>
                  <p className="text-white/80 mb-4 sm:mb-6 text-base leading-relaxed mobile-text">
                    {collection.description}
                  </p>
                  <Button
                    variant="outline"
                    className="border-amber-700 text-amber-700 hover:bg-white/20 dark:border-amber-400 dark:text-amber-400 dark:hover:bg-amber-800/20 self-start rounded-full group text-sm touch-target"
                    onClick={() => navigateToCollection(collection.id)}
                    aria-label={`View ${collection.title} collection`}
                  >
                    View Collection
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            ))}
          </HorizontalScroll>
        </section>

        {/* Our Story */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden mobile-section">
          <div className="container mx-auto px-4 sm:px-6 md:px-12 w-full box-border">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
              <AnimatedScroll direction="right">
                <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-xl overflow-hidden">
                  <MobileOptimizedImage
                    src="/assets/placeholders/adore_placeholder.jpg?height=1000&width=800"
                    mobileSrc="/assets/placeholders/adore_placeholder.jpg?height=600&width=480"
                    alt="About Adore Boutique"
                    className="w-full h-full"
                  />

                  {/* Floating decorative elements - reduced on mobile */}
                  {!isMobile && (
                    <>
                      <div className="absolute top-1/4 -right-10 w-20 h-20 sm:w-40 sm:h-40 bg-amber-500/20 dark:bg-amber-400/10 rounded-full backdrop-blur-md -z-10"></div>
                      <div className="absolute bottom-1/4 -left-12 w-12 h-12 sm:w-24 sm:h-24 bg-amber-500/30 dark:bg-amber-400/20 rounded-full backdrop-blur-md -z-10"></div>
                    </>
                  )}
                </div>
              </AnimatedScroll>

              <AnimatedScroll direction="left">
                <div className="space-y-4 sm:space-y-6 mobile-spacing">
                  <span className="text-amber-600 dark:text-amber-400 font-medium">
                    OUR JOURNEY
                  </span>
                  <h2 className="heading-md text-gradient">Our Story</h2>
                  <div className="w-16 sm:w-20 h-1 bg-amber-600 dark:bg-amber-400"></div>
                  <p className="text-muted-foreground text-base leading-relaxed mobile-text">
                    At Adore, we blend tradition and modernity to bring the
                    finest Indian clothing, perfect for every occasion. Our
                    journey began with a passion for preserving the rich
                    heritage of Indian textiles while embracing contemporary
                    design sensibilities.
                  </p>
                  <p className="text-muted-foreground text-base leading-relaxed mobile-text">
                    Each piece in our collection is carefully crafted by skilled
                    artisans who have inherited generations of knowledge in
                    traditional techniques like zardozi, chikankari, and
                    bandhani.
                  </p>
                  <p className="text-muted-foreground text-base leading-relaxed mobile-text">
                    We believe that clothing is not just about covering the
                    body, but about expressing one{"'"}s identity, culture, and
                    emotions. Our designs reflect this philosophy, offering you
                    not just garments, but stories woven in threads.
                  </p>
                  <Button
                    className="bg-amber-700 hover:bg-amber-800 dark:bg-amber-600 dark:hover:bg-amber-700 rounded-full px-6 sm:px-8 py-3 sm:py-6 mt-2 sm:mt-4 text-base touch-target"
                    onClick={() => router.push("/about")}
                  >
                    Learn More About Us
                  </Button>
                </div>
              </AnimatedScroll>
            </div>
          </div>
        </section>

        {/* Testimonials with parallax */}
        {/* <section className="py-24 relative overflow-hidden bg-amber-50 dark:bg-amber-950/50">
          <div className="absolute inset-0 -z-10">
            <ParallaxImage
              src="/assets/placeholders/adore_placeholder.jpg?height=1200&width=1920"
              alt="Background texture"
              speed={0.2}
            />
            <div className="absolute inset-0 bg-amber-50/90 dark:bg-amber-950/90 backdrop-blur-sm" />
          </div>

          <div className="container mx-auto px-6 md:px-12 w-full box-border">
            <AnimatedScroll>
              <div className="flex flex-col items-center text-center mb-16">
                <span className="text-amber-600 dark:text-amber-400 font-medium mb-2">
                  WHAT PEOPLE SAY
                </span>
                <h2 className="heading-md text-gradient mb-6">Customer Love</h2>
                <div className="w-20 h-1 bg-amber-600 dark:bg-amber-400 mb-6"></div>
                <p className="text-muted-foreground max-w-2xl">
                  Hear what our customers have to say about their experience
                  with Adore.
                </p>
              </div>
            </AnimatedScroll>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Priya Sharma",
                  image: "101",
                  text: "The lehenga I bought for my wedding day was simply stunning and incredibly comfortable. The craftsmanship is exceptional!",
                  delay: 0,
                },
                {
                  name: "Ananya Patel",
                  image: "102",
                  text: "I've been shopping at Adore for all my festive wear needs. Their collection is unique and the quality is unmatched.",
                  delay: 200,
                },
                {
                  name: "Meera Reddy",
                  image: "103",
                  text: "The team at Adore helped me find the perfect outfit for my sister's wedding. Their attention to detail and personalized service is commendable.",
                  delay: 400,
                },
              ].map((testimonial, index) => (
                <AnimatedScroll key={index} delay={testimonial.delay}>
                  <div className="glassmorphism p-8 rounded-xl hover:shadow-lg transition-all">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-amber-300 dark:border-amber-700">
                        <Image
                          src={`/assets/placeholders/adore_placeholder.jpg?height=${testimonial.image}&width=101`}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold dark:text-amber-200">
                          {testimonial.name}
                        </h3>
                        <div className="flex text-amber-500 dark:text-amber-400">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 fill-amber-500 dark:fill-amber-400"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{testimonial.text}</p>
                  </div>
                </AnimatedScroll>
              ))}
            </div>
          </div>
        </section> */}
        {/* <Testimonials reviews={reviews} /> */}
        <ReviewsWrapperClient />

        {/* Categories with 3D effect */}
        <section className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-6 md:px-12 w-full box-border">
            <AnimatedScroll>
              <div className="flex flex-col items-center text-center mb-16">
                <span className="text-amber-600 dark:text-amber-400 font-medium mb-2">
                  BROWSE BY CATEGORY
                </span>
                <h2 className="heading-md text-gradient mb-6">
                  Our Categories
                </h2>
                <div className="w-20 h-1 bg-amber-600 dark:bg-amber-400 mb-6"></div>
                <p className="text-muted-foreground max-w-2xl">
                  Explore our diverse range of categories to find the perfect
                  outfit for any occasion.
                </p>
              </div>
            </AnimatedScroll>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {[
                {
                  name: "Bridal",
                  image: "2001",
                  count: "24 items",
                  id: "bridal",
                },
                {
                  name: "Festive",
                  image: "2002",
                  count: "36 items",
                  id: "festive",
                },
                {
                  name: "Casual",
                  image: "2003",
                  count: "42 items",
                  id: "indo-western",
                },
                {
                  name: "Accessories",
                  image: "2004",
                  count: "18 items",
                  id: "sarees",
                },
              ].map((category, index) => (
                <AnimatedScroll key={index} delay={index * 100}>
                  <div
                    className="block group cursor-pointer"
                    onClick={() => navigateToCollection(category.id)}
                  >
                    <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden rounded-xl">
                      <Image
                        src={`/assets/placeholders/adore_placeholder.jpg?height=${category.image}&width=600`}
                        alt={category.name}
                        fill
                        className="object-cover transition-all duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 to-transparent dark:from-amber-950/90 dark:to-transparent/20 opacity-80 group-hover:opacity-90 transition-opacity" />

                      <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                        <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-1">
                          {category.name}
                        </h3>
                        <p className="text-white/80 text-sm sm:text-base">
                          {category.count}
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimatedScroll>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden bg-gradient-to-r from-amber-900 to-amber-800 dark:from-amber-950 dark:to-amber-900 text-white">
          <div className="circle-element w-[400px] h-[400px] opacity-20 top-0 -right-32"></div>
          <div className="circle-element w-[300px] h-[300px] opacity-10 bottom-0 -left-32"></div>

          <div className="container mx-auto px-6 md:px-12 w-full box-border">
            <div className="max-w-4xl mx-auto text-center">
              <AnimatedScroll>
                <h2 className="heading-md mb-6">
                  Ready to Find Your Perfect Outfit?
                </h2>
                <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                  Visit our boutique or book a virtual consultation with our
                  stylists to discover the perfect outfit for your special
                  occasion.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
                  <MagnetButton
                    size="lg"
                    className="bg-white text-amber-900 hover:bg-amber-100 dark:bg-amber-400 dark:text-amber-950 dark:hover:bg-amber-300 rounded-full py-3 sm:py-6 px-6 sm:px-8 text-sm sm:text-base"
                    onClick={handleBookConsultation}
                  >
                    Book Consultation
                  </MagnetButton>
                  <MagnetButton
                    size="lg"
                    variant="outline"
                    className="bg-amber-700 hover:bg-amber-800 hover:bg-white/20 dark:border-amber-400 dark:text-amber-400 dark:hover:bg-amber-800/30 rounded-full py-3 sm:py-6 px-6 sm:px-8 text-sm sm:text-base"
                    onClick={() => router.push("/collections")}
                  >
                    View Collections
                  </MagnetButton>
                </div>
              </AnimatedScroll>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
