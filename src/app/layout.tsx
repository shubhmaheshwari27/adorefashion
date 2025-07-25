"use client"
import type React from "react";
// import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import CustomCursor from "@/components/ui/custom-cursor";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { useEffect } from "react";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

// export const metadata: Metadata = {
//   title: "Adore Fashion - Elegant Indian Ethnic Wear",
//   description:
//     "Discover exquisite Indian ethnic wear at Adore Fashion. Handcrafted bridal lehengas, designer sarees, and festive collections blending tradition with contemporary elegance.",
//   keywords:
//     "Indian ethnic wear, bridal lehengas, designer sarees, traditional Indian clothing, festive wear, Indian boutique, handcrafted clothing",
//   authors: [{ name: "Adore Fashion" }],
//   creator: "Adore Fashion",
//   publisher: "Adore Fashion",
//   formatDetection: {
//     email: false,
//     address: false,
//     telephone: false,
//   },
//   metadataBase: new URL("https://adorefashion.in"),
//   alternates: {
//     canonical: "/",
//   },
//   openGraph: {
//     title: "Adore Fashion - Elegant Indian Ethnic Wear Boutique",
//     description:
//       "Discover exquisite Indian ethnic wear crafted with passion, tradition, and contemporary elegance at Adore Fashion.",
//     url: "https://adorefashion.in",
//     siteName: "Adore Fashion",
//     locale: "en_US",
//     type: "website",
//     images: [
//       {
//         url: "/og-image.jpg",
//         width: 1200,
//         height: 630,
//         alt: "Adore Fashion - Elegant Indian Ethnic Wear",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Adore Fashion - Elegant Indian Ethnic Wear Boutique",
//     description:
//       "Discover exquisite Indian ethnic wear crafted with passion, tradition, and contemporary elegance at Adore Fashion.",
//     images: ["/twitter-image.jpg"],
//   },
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       "max-video-preview": -1,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//     },
//   },
//   // viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0",
//   // themeColor: [
//   //   { media: "(prefers-color-scheme: light)", color: "#ffffff" },
//   //   { media: "(prefers-color-scheme: dark)", color: "#78350f" },
//   // ],
//   appleWebApp: {
//     capable: true,
//     title: "Adore Fashion",
//     statusBarStyle: "default",
//   },
//   manifest: "/manifest.json",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // This will run only on the client-side
    if (typeof window !== "undefined") {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Tablet|Mobile/i.test(
          navigator.userAgent
        ) ||
        window.innerWidth <= 1024
      ) {
        document.documentElement.classList.add("touch-device");
      }
    }
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
      </head>
      <body
        className={cn(
          inter.variable,
          montserrat.variable,
          "font-sans antialiased overflow-x-hidden w-full"
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <CustomCursor />
          {children}
          <WhatsAppFloatingButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
