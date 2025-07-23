// src/components/ReviewsWrapper.tsx
import Testimonials from "./Testimonials";

export default async function ReviewsWrapper() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/fetch-reviews`, {
    cache: "force-cache", // Cache the response to reduce API usage
  });

  const json = await res.json();

  return <Testimonials reviews={json.reviews ?? []} />;
}
