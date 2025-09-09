"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

type WhatsAppBookingProps = {
  isEventBooking?: boolean;
};



export default function WhatsAppBooking({ isEventBooking = false }: WhatsAppBookingProps) {

    const whatsappLink = isEventBooking
  ? "https://wa.me/916261427004?text=Hi%20We%20would%20like%20to%20invite%20Adore%20to%20our%20upcoming%20exhibition.%20Here%20are%20the%20details%3A..."
  : "https://wa.me/916261427004?text=Hi%20I%20am%20interested%20in%20booking%20a%20consultation...";

  const qrRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && qrRef.current) {
          qrRef.current.classList.add("animate-fade-in");
        }
      },
      { threshold: 0.3 }
    );

    if (qrRef.current) observer.observe(qrRef.current);

    return () => {
      if (qrRef.current) observer.unobserve(qrRef.current);
    };
  }, []);

  return (
    <div className="glassmorphism flex flex-col justify-between min-h-[300px] p-6 sm:p-10 rounded-xl bg-white/5 dark:bg-black/10 transition-all max-w-[90vw] sm:max-w-md mx-auto">
      <div>
        <h2 className="heading-sm text-gradient font-semibold text-amber-800 dark:text-amber-300 mb-4 text-center sm:text-left">
          Book a Consultation on WhatsApp
        </h2>
        <p className="text-lg text-muted-foreground mb-4 text-center sm:text-left">
          Prefer WhatsApp? No problem! Reach out to us instantly by clicking the
          button or scanning the QR code below.
        </p>
        <p className="text-lg text-muted-foreground mb-8 text-center sm:text-left">
          A pre-filled message will open. Just type your name and phone number
          to begin the conversation with Adore.
        </p>

        {/* QR code block with animation */}
        <div
          ref={qrRef}
          className="opacity-0 transition-opacity duration-1000 mt-6 mb-4 flex flex-col items-center"
        >
          <Image
            src="/assets/whatsappQR/whatsapp-qr.png"
            alt="WhatsApp QR Code"
            width={160}
            height={160}
            className="rounded-lg shadow-lg border border-amber-300 dark:border-amber-500"
            priority
          />
          <p className="text-sm text-muted-foreground mt-2 text-center">
            Scan with your phone’s camera
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center mt-4 sm:mt-6">
        <Link
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          passHref
        >
          <Button className="bg-amber-700 hover:bg-amber-800 text-white rounded-full px-6 py-3 w-full sm:w-auto text-center font-semibold text-lg">
            Chat on WhatsApp
          </Button>
        </Link>
        <p className="text-sm text-muted-foreground mt-3 text-center px-4 sm:px-0">
          Don’t have WhatsApp? Call us at{" "}
          <a href="tel:+917804009910" className="underline text-amber-600">
            +91 7804009910
          </a>
        </p>
      </div>
    </div>
  );
}
