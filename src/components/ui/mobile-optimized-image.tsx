"use client";

import { useState, useEffect } from "react";
import Image, { type ImageProps } from "next/image";
import { getOptimizedImageSize } from "@/app/mobile-utils";

interface MobileOptimizedImageProps
  extends Omit<ImageProps, "src" | "width" | "height"> {
  src: string;
  mobileSrc?: string;
  tabletSrc?: string;
  desktopSrc?: string;
  fallbackSrc?: string;
  aspectRatio?: string;
  lowQualityPlaceholder?: boolean;
}

const MobileOptimizedImage = ({
  src,
  mobileSrc,
  tabletSrc,
  desktopSrc,
  fallbackSrc = "/placeholder.svg?height=400&width=400",
  alt,
  aspectRatio = "16/9",
  lowQualityPlaceholder = true,
  className = "",
  ...rest
}: MobileOptimizedImageProps) => {
  const [imgSrc, setImgSrc] = useState<string>(src);
  const [deviceType, setDeviceType] = useState<"mobile" | "tablet" | "desktop">(
    "desktop"
  );
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 640) {
        setDeviceType("mobile");
        if (mobileSrc) setImgSrc(mobileSrc);
      } else if (width <= 1024) {
        setDeviceType("tablet");
        if (tabletSrc) setImgSrc(tabletSrc || src);
      } else {
        setDeviceType("desktop");
        if (desktopSrc) setImgSrc(desktopSrc || src);
      }
    };

    // Set initial size
    handleResize();

    // Update on resize
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileSrc, tabletSrc, desktopSrc, src]);

  // Get optimized dimensions
  const { width, height } = getOptimizedImageSize();

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio }}
    >
      {lowQualityPlaceholder && !isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      <Image
        src={imgSrc || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        onError={() => setImgSrc(fallbackSrc)}
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        loading="lazy"
        {...rest}
      />
    </div>
  );
};

export default MobileOptimizedImage;
