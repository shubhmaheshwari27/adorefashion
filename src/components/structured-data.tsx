interface Product {
  name: string;
  description?: string;
  image: string;
  price?: string;
}

export function generateProductStructuredData(products: Product[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: product.name,
        description: product.description || "",
        image: product.image,
        offers: {
          "@type": "Offer",
          price: product.price?.replace("₹", "").replace(",", "") || "",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
        },
      },
    })),
  };
}

export function generateLocalBusinessStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "ClothingStore",
    name: "Adore Fashion",
    description:
      "Exquisite Indian ethnic wear boutique offering bridal lehengas, designer sarees, and festive collections.",
    url: "https://adorefashion.in",
    telephone: "+91 7804009910",
    email: "info@adorefashion.in",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Gufa Mandir Road",
      addressLocality: "Lalghati Road",
      addressRegion: "Bhopal, Madhya Pradesh",
      postalCode: "462030",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "18.9220",
      longitude: "72.8347",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
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
    sameAs: [
      "https://www.instagram.com/adorefashion",
      "https://www.facebook.com/adorefashion",
      "https://twitter.com/adorefashion",
    ],
  };
}
