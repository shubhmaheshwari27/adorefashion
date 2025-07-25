"use client";
import { useEffect, useState } from "react";
import Testimonials from "./Testimonials";

export default function ReviewsWrapperClient() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const res = await fetch("/api/get-reviews");
        const json = await res.json();
        setReviews(json.reviews ?? []);
      } catch (err) {
        console.error("❌ Failed to load reviews:", err);
      }
    }

    fetchReviews();
  }, []);

  return <Testimonials reviews={reviews} />;
}
