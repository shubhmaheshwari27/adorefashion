"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
  showCloseButton?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  className,
  showCloseButton = true,
}) => {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 300); // Match the duration in the CSS transition
  };

  if (!isOpen && !isClosing) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${
        isClosing ? "animate-fade-out" : "animate-fade-in"
      }`}
      onClick={handleClose}
    >
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" />

      <div
        className={cn(
          "relative max-h-[90vh] w-full max-w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl overflow-auto rounded-xl bg-white p-4 sm:p-6 shadow-lg",
          isClosing ? "animate-scale-out" : "animate-scale-in",
          className
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {showCloseButton && (
          <button
            className="absolute right-2 sm:right-4 top-2 sm:top-4 rounded-full p-1 text-gray-500 hover:bg-gray-100"
            onClick={handleClose}
          >
            <X className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="sr-only">Close</span>
          </button>
        )}
        {children}
      </div>
    </div>
  );
};

export default Modal;
