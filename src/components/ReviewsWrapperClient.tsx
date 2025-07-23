"use client";
import { useEffect, useState } from "react";
import Testimonials from "./Testimonials";

export default function ReviewsWrapperClient() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const res = await fetch(
          // "https://raw.githubusercontent.com/<your-username>/<your-repo>/main/data/reviews.json"
          "https://github.com/shubhmaheshwari27/adorefashion/main/data/reviews.json"
        );
        const json = await res.json();
        setReviews(json.reviews ?? []);
      } catch (err) {
        console.error("Failed to load reviews:", err);
      }
    }

    fetchReviews();
  }, []);

  return <Testimonials reviews={reviews} />;
}


// "use client";

// import { useEffect, useState } from "react";
// import TestimonialsClient from "./TestimonialsClient";
// import Testimonials from "./Testimonials";

// export default function ReviewsWrapperClient() {
//   const [reviews, setReviews] = useState([]);

//   useEffect(() => {
//     async function fetchReviews() {
//       try {
//         const res = await fetch('/api/fetch-reviews');
//         const data = await res.json();
//         setReviews(data.reviews ?? []);
//       } catch (error) {
//         console.error("Failed to fetch reviews:", error);
//       }
//     }

//     fetchReviews();
//   }, []);

//   // return <TestimonialsClient reviews={reviews} />;
//   return <Testimonials reviews={reviews} />;
// }