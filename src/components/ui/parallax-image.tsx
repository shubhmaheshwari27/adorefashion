"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface ParallaxImageProps {
  src: string;
  alt: string;
  speed?: number;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  width?: number;
  height?: number;
}

const ParallaxImage: React.FC<ParallaxImageProps> = ({
  src,
  alt,
  speed = 0.5,
  className = "",
  priority = false,
  fill = true,
  width,
  height,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        // Remove `top` and `scrollPosition` since they are not used
        const elementPosition =
          containerRef.current.offsetTop +
          containerRef.current.offsetHeight / 2;

        // Calculate how far the element is from the viewport center
        const distanceFromCenter =
          window.scrollY + window.innerHeight / 2 - elementPosition;

        // Apply parallax effect based on this distance
        setOffset(distanceFromCenter * speed);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div ref={containerRef} className={`overflow-hidden relative ${className}`}>
      <div
        style={{ transform: `translateY(${offset}px)` }}
        className="absolute inset-0 transition-transform duration-300 ease-out"
      >
        <Image
          src={src || "/assets/placeholders/adore_placeholder.jpg"}
          alt={alt}
          fill={fill}
          width={width}
          height={height}
          className="object-cover w-full h-full"
          priority={priority}
        />
      </div>
    </div>
  );
};

export default ParallaxImage;

// "use client"

// import type React from "react"
// import { useEffect, useRef, useState } from "react"
// import Image from "next/image"

// interface ParallaxImageProps {
//   src: string
//   alt: string
//   speed?: number
//   className?: string
//   priority?: boolean
//   fill?: boolean
//   width?: number
//   height?: number
// }

// const ParallaxImage: React.FC<ParallaxImageProps> = ({
//   src,
//   alt,
//   speed = 0.5,
//   className = "",
//   priority = false,
//   fill = true,
//   width,
//   height,
// }) => {
//   const containerRef = useRef<HTMLDivElement>(null)
//   const [offset, setOffset] = useState(0)

//   useEffect(() => {
//     const handleScroll = () => {
//       if (containerRef.current) {
//         const { top } = containerRef.current.getBoundingClientRect()
//         const scrollPosition = window.innerHeight + window.scrollY
//         const elementPosition = containerRef.current.offsetTop + containerRef.current.offsetHeight / 2

//         // Calculate how far the element is from the viewport center
//         const distanceFromCenter = window.scrollY + window.innerHeight / 2 - elementPosition

//         // Apply parallax effect based on this distance
//         setOffset(distanceFromCenter * speed)
//       }
//     }

//     window.addEventListener("scroll", handleScroll)
//     handleScroll()

//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [speed])

//   return (
//     <div ref={containerRef} className={`overflow-hidden relative ${className}`}>
//       <div
//         style={{ transform: `translateY(${offset}px)` }}
//         className="absolute inset-0 transition-transform duration-300 ease-out"
//       >
//         <Image
//           src={src || "/assets/placeholders/adore_placeholder.jpg"}
//           alt={alt}
//           fill={fill}
//           width={width}
//           height={height}
//           className="object-cover w-full h-full"
//           priority={priority}
//         />
//       </div>
//     </div>
//   )
// }

// export default ParallaxImage
