import type React from "react"
import type { Metadata } from "next"
import { Inter, Montserrat } from "next/font/google"
import { cn } from "@/lib/utils"
import CustomCursor from "@/components/ui/custom-cursor"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Adore Fashion - Elegant Indian Ethnic Wear",
  description:
    "Discover exquisite Indian ethnic wear at Adore Fashion. Handcrafted bridal lehengas, designer sarees, and festive collections blending tradition with contemporary elegance.",
  keywords:
    "Indian ethnic wear, bridal lehengas, designer sarees, traditional Indian clothing, festive wear, Indian boutique, handcrafted clothing",
  authors: [{ name: "Adore Fashion" }],
  creator: "Adore Fashion",
  publisher: "Adore Fashion",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://adorefashion.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Adore Fashion - Elegant Indian Ethnic Wear Boutique",
    description:
      "Discover exquisite Indian ethnic wear crafted with passion, tradition, and contemporary elegance at Adore Fashion.",
    url: "https://adorefashion.in",
    siteName: "Adore Fashion",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Adore Fashion - Elegant Indian Ethnic Wear",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adore Fashion - Elegant Indian Ethnic Wear Boutique",
    description:
      "Discover exquisite Indian ethnic wear crafted with passion, tradition, and contemporary elegance at Adore Fashion.",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#78350f" media="(prefers-color-scheme: dark)" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="robots" content="index, follow" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </head>
      <body className={cn(inter.variable, montserrat.variable, "font-sans antialiased overflow-x-hidden w-full")}>
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}
