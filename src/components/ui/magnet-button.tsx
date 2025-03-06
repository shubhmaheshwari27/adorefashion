"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";
import { Button, type ButtonProps } from "@/components/ui/button";

interface MagnetButtonProps extends ButtonProps {
  strength?: number;
}

const MagnetButton: React.FC<MagnetButtonProps> = ({
  children,
  strength = 0.5,
  className,
  ...props
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClient, setIsClient] = useState(false); // Check for client-side

  // Ensure the effect is only run client-side
  useEffect(() => {
    setIsClient(true); // Set to true after the initial render on the client-side
  }, []);

  useEffect(() => {
    if (!isClient) return; // Skip if not on the client

    const button = buttonRef.current;
    if (!button) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isHovered) return;

      const rect = button.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;

      setPosition({
        x: distanceX * strength,
        y: distanceY * strength,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isHovered, strength, isClient]); // Added isClient dependency to ensure we run the effect on the client only

  return (
    <Button
      ref={buttonRef}
      className={`transform transition-all duration-200 ${className}`}
      style={{
        transform: isHovered
          ? `translate(${position.x}px, ${position.y}px)`
          : "translate(0, 0)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setPosition({ x: 0, y: 0 });
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default MagnetButton;
