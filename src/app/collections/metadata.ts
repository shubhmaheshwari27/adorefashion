export async function generateMetadata({ params, searchParams }: { params: any; searchParams: { category?: string } }) {
    const category = searchParams?.category || "all";
  
    const categoryTitles: Record<string, string> = {
      all: "All Collections",
      bridal: "Bridal Collection",
      sarees: "Designer Sarees",
      festive: "Festive Collection",
      "indo-western": "Indo-Western Collection",
    };
  
    const title = categoryTitles[category] || "Collections";
  
    return {
      title: `${title} | Adore Boutique - Indian Ethnic Wear`,
      description: `Explore our exquisite ${title.toLowerCase()} of Indian ethnic wear, each piece telling a story of tradition and craftsmanship.`,
      alternates: {
        canonical: `/collections${category !== "all" ? `?category=${category}` : ""}`,
      },
    };
  }