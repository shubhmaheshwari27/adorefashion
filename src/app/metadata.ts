import { Metadata } from "next";

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
  appleWebApp: {
    capable: true,
    title: "Adore Fashion",
    statusBarStyle: "default",
  },
  manifest: "/manifest.json",
};
