"use client";
type Review = {
  author_name: string;
  profile_photo_url?: string;
  text: string;
  rating?: number;
};

export default function TestimonialsClient({ reviews }: { reviews: Review[] }) {
  // const [someState, setSomeState] = useState(false);

  return (
    <div>
      {reviews.map((review: Review, i: number) => (
        <div key={i}>{review.text}</div>
      ))}
    </div>
  );
}
