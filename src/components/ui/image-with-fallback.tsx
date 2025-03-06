"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";

interface ImageWithFallbackProps extends Omit<ImageProps, "onError"> {
  fallbackSrc?: string;
}

const ImageWithFallback = ({
  src,
  alt,
  fallbackSrc = "/assets/placeholders/adore_placeholder.jpg?height=400&width=400",
  ...rest
}: ImageWithFallbackProps) => {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      {...rest}
      src={imgSrc || "/assets/placeholders/adore_placeholder.jpg"}
      alt={alt}
      onError={() => {
        setImgSrc(fallbackSrc);
      }}
    />
  );
};

export default ImageWithFallback;
