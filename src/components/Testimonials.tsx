"use client";

import { Star } from "lucide-react";
import Image from "next/image";
import AnimatedScroll from "@/components/ui/animated-scroll";
import ParallaxImage from "@/components/ui/parallax-image";

type Review = {
  author_name: string;
  profile_photo_url?: string;
  text: string;
  rating?: number;
};

export default function Testimonials({ reviews }: { reviews: Review[] }) {
  return (
    <section className="py-24 relative overflow-hidden bg-amber-50 dark:bg-amber-950/50">
      <div className="absolute inset-0 -z-10">
        <ParallaxImage
          src="/assets/placeholders/adore_placeholder.jpg?height=1200&width=1920"
          alt="Background texture"
          speed={0.2}
        />
        <div className="absolute inset-0 bg-amber-50/90 dark:bg-amber-950/90 backdrop-blur-sm" />
      </div>

      <div className="container mx-auto px-6 md:px-12 w-full box-border">
        <AnimatedScroll>
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-amber-600 dark:text-amber-400 font-medium mb-2">
              WHAT PEOPLE SAY
            </span>
            <h2 className="heading-md text-gradient mb-6">Customer Love</h2>
            <div className="w-20 h-1 bg-amber-600 dark:bg-amber-400 mb-6"></div>
            <p className="text-muted-foreground max-w-2xl">
              Hear what our customers have to say about their experience with
              Adore.
            </p>
          </div>
        </AnimatedScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.length === 0 ? (
            <p className="text-muted-foreground text-center col-span-full">
              No reviews available at the moment.
            </p>
          ) : (
            reviews.slice(0, 3).map((review, index) => (
              <AnimatedScroll key={index} delay={index * 200}>
                <div className="glassmorphism p-8 rounded-xl hover:shadow-lg transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-amber-300 dark:border-amber-700">
                      {review.profile_photo_url ? (
                        <Image
                          src={review.profile_photo_url}
                          alt={review.author_name}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="h-full w-full bg-gray-200 dark:bg-gray-700 rounded-full" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold dark:text-amber-200">
                        {review.author_name}
                      </h3>
                      <div className="flex text-amber-500 dark:text-amber-400">
                        {[...Array(review.rating ?? 0)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-amber-500 dark:fill-amber-400"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{review.text}</p>
                </div>
              </AnimatedScroll>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
