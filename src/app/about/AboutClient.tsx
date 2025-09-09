"use client";

import { useEffect } from "react";
import Image from "next/image";
import Script from "next/script";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import AnimatedScroll from "@/components/ui/animated-scroll";
import ParallaxImage from "@/components/ui/parallax-image";
import { ChevronRight, Star } from "lucide-react";
import ExhibitionSection from "@/components/ExhibitionSection";

export default function AboutClient() {
  useEffect(() => {
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

  // About page structured data
  const aboutPageStructuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Adore Fashion",
    description:
      "Discover the passion and craftsmanship behind Adore, where tradition meets contemporary elegance.",
    mainEntity: {
      "@type": "Organization",
      name: "Adore Fashion",
      foundingDate: "2010",
      founder: {
        "@type": "Person",
        name: "Priya Sharma",
      },
      description:
        "Adore was born out of a deep love for Indian textiles and a vision to create clothing that celebrates the rich heritage of Indian craftsmanship while embracing contemporary design sensibilities.",
    },
  };

  return (
    <div className="min-h-screen">
      <Script
        id="about-page-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutPageStructuredData),
        }}
      />

      <Navigation />

      <main>
        {/* Hero Banner */}
        <section className="relative h-[70vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <ParallaxImage
              src="/assets/placeholders/adore_placeholder.jpg?height=700&width=1920"
              alt="About Adore Boutique - Our Story"
              priority
              speed={0.3}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-amber-900/90 via-amber-800/70 to-transparent z-10" />
          </div>

          <div className="container mx-auto px-6 md:px-12 relative z-20">
            <AnimatedScroll>
              <div className="max-w-xl space-y-5">
                <span className="text-amber-300 font-medium">OUR STORY</span>
                <h1 className="heading-lg text-white">Our Story</h1>
                <p className="text-xl text-white/90">
                  Discover the passion and craftsmanship behind Adore, where
                  tradition meets contemporary elegance.
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

        {/* Our Journey */}
        <section className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <AnimatedScroll direction="right">
                <div className="space-y-6">
                  <span className="text-amber-600 font-medium">
                    OUR JOURNEY
                  </span>
                  <h2 className="heading-md text-gradient">
                    The Adore Journey
                  </h2>
                  <div className="w-20 h-1 bg-amber-600"></div>
                  <p className="text-muted-foreground text-lg">
                    Adore was born out of a deep love for Indian textiles and a
                    vision to create clothing that celebrates the rich heritage
                    of Indian craftsmanship while embracing contemporary design
                    sensibilities.
                  </p>
                  <p className="text-muted-foreground text-lg">
                    Founded in 2010 by Priya Sharma, a textile designer with
                    over 15 years of experience, Adore started as a small
                    boutique in Bhopal with a handful of artisans. Today, we
                    have grown into a beloved brand that works with over 100
                    skilled craftspeople across India.
                  </p>
                  <p className="text-muted-foreground text-lg">
                    Our journey has been one of discovery, learning, and a
                    constant pursuit of excellence. We have traveled to remote
                    villages to learn traditional techniques, collaborated with
                    master artisans, and continuously evolved our designs to
                    create pieces that are both timeless and contemporary.
                  </p>
                </div>
              </AnimatedScroll>

              <AnimatedScroll direction="left">
                <div className="relative h-[600px] rounded-xl overflow-hidden">
                  <Image
                    src="/assets/placeholders/adore_placeholder.jpg?height=1000&width=800"
                    alt="Our Journey"
                    fill
                    className="object-cover transition-scale"
                  />

                  {/* Decorative elements */}
                  <div className="absolute top-1/4 -right-10 w-32 h-32 bg-amber-500/20 rounded-full backdrop-blur-md -z-10"></div>
                  <div className="absolute bottom-1/4 -left-10 w-20 h-20 bg-amber-500/30 rounded-full backdrop-blur-md -z-10"></div>
                </div>
              </AnimatedScroll>
            </div>
          </div>
        </section>

        <ExhibitionSection />

        {/* Our Philosophy with animated counters */}
        <section className="py-24 relative overflow-hidden bg-amber-50">
          <div className="container mx-auto px-6 md:px-12">
            <AnimatedScroll>
              <div className="text-center mb-16">
                <span className="text-amber-600 font-medium">OUR BELIEFS</span>
                <h2 className="heading-md text-gradient mb-6">
                  Our Philosophy
                </h2>
                <div className="w-20 h-1 bg-amber-600 mx-auto mb-6"></div>
                <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
                  At Adore, we believe that clothing is not just about covering
                  the body, but about expressing one{"'"}s identity, culture,
                  and emotions. Our designs reflect this philosophy, offering
                  you not just garments, but stories woven in threads.
                </p>
              </div>
            </AnimatedScroll>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  title: "Tradition",
                  description:
                    "We honor traditional craftsmanship and techniques passed down through generations, preserving the rich heritage of Indian textiles.",
                  icon: "🧵",
                  delay: 0,
                },
                {
                  title: "Innovation",
                  description:
                    "While respecting tradition, we continuously innovate and experiment with designs, silhouettes, and techniques to create pieces that are relevant to today's world.",
                  icon: "💡",
                  delay: 200,
                },
                {
                  title: "Sustainability",
                  description:
                    "We are committed to ethical practices, fair trade, and sustainable production methods that respect both our artisans and the environment.",
                  icon: "🌱",
                  delay: 400,
                },
              ].map((value, index) => (
                <AnimatedScroll key={index} delay={value.delay}>
                  <div className="glassmorphism p-10 rounded-xl text-center hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300">
                    <div className="text-6xl mb-6">{value.icon}</div>
                    <h3 className="text-2xl font-heading font-bold mb-4 text-amber-800">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </AnimatedScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-6 md:px-12">
            <AnimatedScroll>
              <div className="text-center mb-16">
                <span className="text-amber-600 font-medium">
                  THE FACES BEHIND ADORE
                </span>
                <h2 className="heading-md text-gradient mb-6">Meet Our Team</h2>
                <div className="w-20 h-1 bg-amber-600 mx-auto mb-6"></div>
                <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
                  Behind every beautiful garment is a team of passionate
                  individuals dedicated to bringing our vision to life.
                </p>
              </div>
            </AnimatedScroll>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {[
                {
                  name: "Priya Sharma",
                  role: "Founder & Creative Director",
                  image: "201",
                  delay: 0,
                },
                {
                  name: "Arjun Mehta",
                  role: "Head Designer",
                  image: "202",
                  delay: 200,
                },
                {
                  name: "Neha Kapoor",
                  role: "Textile Specialist",
                  image: "203",
                  delay: 400,
                },
                {
                  name: "Raj Patel",
                  role: "Master Craftsman",
                  image: "204",
                  delay: 600,
                },
              ].map((member, index) => (
                <AnimatedScroll key={index} delay={member.delay}>
                  <div className="text-center group">
                    <div className="relative h-64 w-64 mx-auto mb-6 overflow-hidden rounded-full">
                      <Image
                        src={`/assets/placeholders/adore_placeholder.jpg?height=${member.image}&width=200`}
                        alt={member.name}
                        fill
                        className="object-cover transition-all duration-500 group-hover:scale-110"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-amber-800">
                      {member.name}
                    </h3>
                    <p className="text-amber-600">{member.role}</p>
                  </div>
                </AnimatedScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Our Artisans */}
        <section className="py-24 relative overflow-hidden bg-amber-50">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <AnimatedScroll direction="right">
                <div className="relative h-[600px] rounded-xl overflow-hidden">
                  <Image
                    src="/assets/placeholders/adore_placeholder.jpg?height=1001&width=800"
                    alt="Our Artisans"
                    fill
                    className="object-cover transition-scale"
                  />

                  {/* Decorative elements */}
                  <div className="absolute top-1/4 -right-10 w-32 h-32 bg-amber-500/20 rounded-full backdrop-blur-md -z-10"></div>
                  <div className="absolute bottom-1/4 -left-10 w-20 h-20 bg-amber-500/30 rounded-full backdrop-blur-md -z-10"></div>
                </div>
              </AnimatedScroll>

              <AnimatedScroll direction="left">
                <div className="space-y-6">
                  <span className="text-amber-600 font-medium">
                    THE HANDS BEHIND THE CRAFT
                  </span>
                  <h2 className="heading-md text-gradient">Our Artisans</h2>
                  <div className="w-20 h-1 bg-amber-600"></div>
                  <p className="text-muted-foreground text-lg">
                    The heart and soul of Adore are our skilled artisans who
                    bring our designs to life with their exceptional
                    craftsmanship. Many of them have been with us since our
                    inception, and their dedication to their craft is what makes
                    our garments truly special.
                  </p>
                  <p className="text-muted-foreground text-lg">
                    We work with artisans from various regions of India, each
                    bringing their unique skills and traditional techniques to
                    our collections. From the intricate zardozi embroiderers of
                    Lucknow to the bandhani tie-dye artists of Gujarat, our
                    network of craftspeople represents the diverse textile
                    traditions of India.
                  </p>
                  <p className="text-muted-foreground text-lg">
                    We believe in fair trade practices and ensuring that our
                    artisans receive fair compensation for their work. We also
                    invest in their skill development and provide them with a
                    safe and supportive working environment.
                  </p>
                </div>
              </AnimatedScroll>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-6 md:px-12">
            <AnimatedScroll>
              <div className="text-center mb-16">
                <span className="text-amber-600 font-medium">TESTIMONIALS</span>
                <h2 className="heading-md text-gradient mb-6">
                  What Our Customers Say
                </h2>
                <div className="w-20 h-1 bg-amber-600 mx-auto mb-6"></div>
                <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
                  Don{"'"}t just take our word for it. Here{"'"}s what our
                  customers have to say about their experience with Adore.
                </p>
              </div>
            </AnimatedScroll>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  name: "Ananya Patel",
                  image: "301",
                  text: "I've been shopping at Adore for all my festive wear needs. Their collection is unique and the quality is unmatched. The team is always helpful and makes the shopping experience so enjoyable.",
                  delay: 0,
                },
                {
                  name: "Meera Reddy",
                  image: "302",
                  text: "The team at Adore helped me find the perfect outfit for my sister's wedding. Their attention to detail and personalized service is commendable. I received so many compliments on my outfit!",
                  delay: 200,
                },
                {
                  name: "Priya Sharma",
                  image: "303",
                  text: "The lehenga I bought for my wedding day was simply stunning and incredibly comfortable. The craftsmanship is exceptional! I felt like a queen on my special day.",
                  delay: 400,
                },
              ].map((testimonial, index) => (
                <AnimatedScroll key={index} delay={testimonial.delay}>
                  <div className="glassmorphism p-8 rounded-xl hover:shadow-lg transition-all">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-amber-300">
                        <Image
                          src={`/assets/placeholders/adore_placeholder.jpg?height=${testimonial.image}&width=301`}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold">{testimonial.name}</h3>
                        <div className="flex text-amber-500">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-amber-500" />
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
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden bg-gradient-to-r from-amber-900 to-amber-800 text-white">
          <div className="circle-element w-[400px] h-[400px] opacity-20 top-0 -right-32"></div>
          <div className="circle-element w-[300px] h-[300px] opacity-10 bottom-0 -left-32"></div>

          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <AnimatedScroll>
                <h2 className="heading-md mb-6">Visit Our Boutique</h2>
                <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                  Experience the beauty and craftsmanship of our collections in
                  person. Visit our boutique or book a virtual consultation with
                  our stylists.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <Button
                    size="lg"
                    className="bg-white text-amber-900 hover:bg-amber-100 rounded-full py-6 px-8"
                  >
                    Book Consultation
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-amber-700 hover:bg-amber-800 hover:bg-white/20 rounded-full py-6 px-8"
                  >
                    Contact Us
                  </Button>
                </div>
              </AnimatedScroll>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
