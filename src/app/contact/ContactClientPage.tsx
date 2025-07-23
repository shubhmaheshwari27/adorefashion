"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import AnimatedScroll from "@/components/ui/animated-scroll";
import ParallaxImage from "@/components/ui/parallax-image";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  ChevronRight,
} from "lucide-react";

export default function ContactClientPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.result === "success") {
        setStatus("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("Something went wrong. Try again later.");
      }
    } catch (error) {
      console.error("Submit Error:", error);
      setStatus("Error sending message.");
    }
  };

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

  // Contact page structured data
  const contactPageStructuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Adore Fashion",
    description:
      "Get in touch with Adore Fashion. Book a consultation, visit our store, or send us a message.",
    mainEntity: {
      "@type": "Organization",
      name: "Adore Fashion",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Gufa Mandir Road",
        addressLocality: "Lalghati Road",
        addressRegion: "Bhopal, Madhya Pradesh",
        postalCode: "462030",
        addressCountry: "IN",
      },
      telephone: "+91 7804009910",
      email: "info@adorefashion.in",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "10:00",
          closes: "20:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Sunday",
          opens: "11:00",
          closes: "18:00",
        },
      ],
    },
  };

  return (
    <div className="min-h-screen">
      <Script
        id="contact-page-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactPageStructuredData),
        }}
      />

      <Navigation />

      <main>
        {/* Hero Banner */}
        <section className="relative h-[60vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <ParallaxImage
              src="/assets/placeholders/adore_placeholder.jpg?height=600&width=1920"
              alt="Contact Adore Boutique - Get in Touch"
              priority
              speed={0.3}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-amber-900/90 via-amber-800/70 to-transparent z-10" />
          </div>

          <div className="container mx-auto px-6 md:px-12 relative z-20">
            <AnimatedScroll>
              <div className="max-w-xl space-y-5">
                <span className="text-amber-300 font-medium">GET IN TOUCH</span>
                <h1 className="heading-lg text-white">Contact Us</h1>
                <p className="text-xl text-white/90">
                  We{"'"}d love to hear from you. Reach out to us for any
                  queries or to book a consultation.
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

        {/* Contact Information and Form */}
        <section className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-2 gap-16">
              {/* Contact Information */}
              <AnimatedScroll direction="right">
                <div className="space-y-10">
                  <div>
                    <span className="text-amber-600 font-medium">
                      REACH OUT TO US
                    </span>
                    <h2 className="heading-sm text-gradient mt-2 mb-6">
                      Get in Touch
                    </h2>
                    <p className="text-muted-foreground text-lg">
                      Whether you{"'"}re looking for a specific outfit, want to
                      book a consultation, or have any questions about our
                      collections, we{"'"}re here to help.
                    </p>
                  </div>

                  <div className="space-y-8">
                    <div className="flex items-start gap-6">
                      <div className="p-4 bg-amber-100 rounded-full text-amber-700">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-amber-800 mb-2">
                          Visit Our Boutique
                        </h3>
                        <address className="not-italic text-muted-foreground">
                          Adore by Kavya, Gufa Mandir Road,
                          <br />
                          Lalghati Road, Bhopal, Madhya Pradesh 462030,
                          <br />
                          India
                        </address>
                      </div>
                    </div>

                    <div className="flex items-start gap-6">
                      <div className="p-4 bg-amber-100 rounded-full text-amber-700">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-amber-800 mb-2">
                          Call Us
                        </h3>
                        <p className="text-muted-foreground">+91 7804009910</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-6">
                      <div className="p-4 bg-amber-100 rounded-full text-amber-700">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-amber-800 mb-2">
                          Email Us
                        </h3>
                        <p className="text-muted-foreground">
                          info@adorefashion.in
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-6">
                      <div className="p-4 bg-amber-100 rounded-full text-amber-700">
                        <Clock className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-amber-800 mb-2">
                          Opening Hours
                        </h3>
                        <p className="text-muted-foreground">
                          Monday - Saturday: 10:00 AM - 8:00 PM
                        </p>
                        <p className="text-muted-foreground">
                          Sunday: 11:00 AM - 6:00 PM
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-amber-800 mb-4">
                      Follow Us
                    </h3>
                    <div className="flex gap-4">
                      <a
                        href="https://www.instagram.com/adore_by_kavya/"
                        className="p-4 bg-amber-100 rounded-full text-amber-700 hover:bg-amber-200 transition-colors"
                      >
                        <Instagram className="h-6 w-6" />
                        <span className="sr-only">Instagram</span>
                      </a>
                      <a
                        href="https://www.facebook.com/adorebykavya/"
                        className="p-4 bg-amber-100 rounded-full text-amber-700 hover:bg-amber-200 transition-colors"
                      >
                        <Facebook className="h-6 w-6" />
                        <span className="sr-only">Facebook</span>
                      </a>
                      {/* <a
                        href="#"
                        className="p-4 bg-amber-100 rounded-full text-amber-700 hover:bg-amber-200 transition-colors"
                      >
                        <Twitter className="h-6 w-6" />
                        <span className="sr-only">Twitter</span>
                      </a> */}
                    </div>
                  </div>
                </div>
              </AnimatedScroll>

              {/* Contact Form */}
              {/* https://script.google.com/macros/s/AKfycbx55K6HGBfQGrT6-mZUPaYn0RZkpQ3VCqlDWRsWYCFXvFYsOgArlxkwX9kUtlps4u7J/exec */}
              <AnimatedScroll direction="left">
                <div className="glassmorphism p-10 rounded-xl bg-white/5">
                  <h2 className="text-2xl font-bold text-amber-800 mb-8">
                    Send Us a Message
                  </h2>
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label
                          htmlFor="first-name"
                          className="text-sm font-medium"
                        >
                          First Name
                        </label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="Enter your first name"
                          className="rounded-lg border-amber-200 focus:border-amber-400 focus:ring-amber-400"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="last-name"
                          className="text-sm font-medium"
                        >
                          Last Name
                        </label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Enter your last name"
                          className="rounded-lg border-amber-200 focus:border-amber-400 focus:ring-amber-400"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="rounded-lg border-amber-200 focus:border-amber-400 focus:ring-amber-400"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Phone
                      </label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        className="rounded-lg border-amber-200 focus:border-amber-400 focus:ring-amber-400"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What is this regarding?"
                        className="rounded-lg border-amber-200 focus:border-amber-400 focus:ring-amber-400"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Enter your message"
                        rows={5}
                        className="rounded-lg border-amber-200 focus:border-amber-400 focus:ring-amber-400"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-amber-700 hover:bg-amber-800 rounded-full py-6"
                    >
                      Send Message
                    </Button>
                    <p className="text-sm text-gray-500">{status}</p>
                  </form>
                </div>
              </AnimatedScroll>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-24 relative overflow-hidden bg-amber-50">
          <div className="container mx-auto px-6 md:px-12">
            <AnimatedScroll>
              <h2 className="heading-sm text-gradient mb-10 text-center">
                Find Us
              </h2>
            </AnimatedScroll>

            <AnimatedScroll>
              <div className="h-[500px] rounded-xl overflow-hidden shadow-lg">
                {/* Google Map iframe */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.0760867116146!2d77.36999617582445!3d23.276684878996406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c6766d96c1ea5%3A0x2f0eb4d43d76974a!2sAdore%20by%20Kavya!5e0!3m2!1sen!2sin!4v1741250826710!5m2!1sen!2sin"
                  width="100%" // Ensure the iframe fills its container
                  height="100%" // Ensure the iframe fills its container height
                  style={{ border: "0" }} // Optional: remove border around the iframe
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </AnimatedScroll>
          </div>
        </section>

        {/* Book Consultation CTA */}
        <section className="py-24 relative overflow-hidden bg-gradient-to-r from-amber-900 to-amber-800 text-white">
          <div className="circle-element w-[400px] h-[400px] opacity-20 top-0 -right-32"></div>
          <div className="circle-element w-[300px] h-[300px] opacity-10 bottom-0 -left-32"></div>

          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <AnimatedScroll>
                <h2 className="heading-md mb-6">
                  Book a Personalized Consultation
                </h2>
                <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                  Our stylists are ready to help you find the perfect outfit for
                  your special occasion. Book a consultation at our boutique or
                  schedule a virtual appointment.
                </p>
                <Button
                  size="lg"
                  className="bg-white text-amber-900 hover:bg-amber-100 rounded-full py-6 px-8"
                >
                  Book Consultation
                </Button>
              </AnimatedScroll>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
