// Mobile utility functions to enhance mobile experience

// Fix for mobile viewport height issues (iOS Safari)
export function setupMobileViewportHeight(): void {
  if (typeof window !== "undefined") {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);

      // Also fix text wrapping when viewport changes
      fixTextWrapping();
    };

    // Set initial value
    setVh();

    // Update on resize and orientation change
    window.addEventListener("resize", setVh);
    window.addEventListener("orientationchange", setVh);
  }
}

// Improve touch response by removing delay
export function improveTouchResponse(): void {
  if (typeof window !== "undefined") {
    document.addEventListener("touchstart", () => {}, { passive: true });
  }
}

// Prevent pull-to-refresh on mobile browsers when not needed
export function preventPullToRefresh(): void {
  if (typeof window !== "undefined") {
    let startY: number;

    document.addEventListener(
      "touchstart",
      (e) => {
        startY = e.touches[0].clientY;
      },
      { passive: true }
    );

    document.addEventListener(
      "touchmove",
      (e) => {
        const y = e.touches[0].clientY;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Prevent pull-to-refresh only when at the top of the page and pulling down
        if (scrollTop === 0 && y > startY) {
          e.preventDefault();
        }
      },
      { passive: false }
    );
  }
}

// Detect if device is mobile or tablet
export function isMobileDevice(): boolean {
  if (typeof window !== "undefined") {
    // Check for mobile or tablet user agent
    const mobileTabletRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Tablet|Mobile/i;

    // Check for screen width (common tablet breakpoint is 1024px)
    const isSmallScreen = window.innerWidth <= 1024;

    return mobileTabletRegex.test(navigator.userAgent) || isSmallScreen;
  }
  return false;
}

// Detect specifically if device is a tablet
export function isTabletDevice(): boolean {
  if (typeof window !== "undefined") {
    // Check for tablet-specific user agents
    const tabletRegex = /iPad|Tablet|Android(?!.*Mobile)/i;

    // Check for typical tablet dimensions (between 768px and 1024px)
    const isTabletSize = window.innerWidth >= 768 && window.innerWidth <= 1024;

    return tabletRegex.test(navigator.userAgent) || isTabletSize;
  }
  return false;
}

// Optimize images based on device
export function getOptimizedImageSize(): { width: number; height: number } {
  if (typeof window !== "undefined") {
    const isMobile = window.innerWidth <= 768;
    const isTablet = window.innerWidth > 768 && window.innerWidth <= 1024;

    if (isMobile) {
      return { width: 640, height: 360 };
    } else if (isTablet) {
      return { width: 1024, height: 576 };
    } else {
      return { width: 1920, height: 1080 };
    }
  }
  return { width: 1920, height: 1080 }; // Default fallback if no window
}

// Improve form usability on mobile
export function enhanceMobileFormExperience(): void {
  if (typeof window !== "undefined") {
    const inputs = document.querySelectorAll("input, textarea, select");

    inputs.forEach((input) => {
      // Ensure proper font size to prevent zoom
      (input as HTMLElement).style.fontSize = "16px";

      // Add better focus styles for touch
      input.addEventListener("focus", () => {
        input.classList.add("mobile-focus");
      });

      input.addEventListener("blur", () => {
        input.classList.remove("mobile-focus");
      });
    });
  }
}

// Add a function to fix text wrapping issues
export function fixTextWrapping(): void {
  if (typeof window !== "undefined") {
    // Apply proper text wrapping to all text elements
    const textElements = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, span, div");

    textElements.forEach((element) => {
      if (window.innerWidth <= 640) {
        element.classList.add("mobile-text-wrap");

        // Ensure no fixed widths are causing problems
        const style = window.getComputedStyle(element);
        const width = style.getPropertyValue("width");

        // If element has a fixed width that's too large, reset it
        if (width.includes("px") && !width.includes("calc") && Number.parseInt(width) > window.innerWidth) {
          (element as HTMLElement).style.width = "100%";
          (element as HTMLElement).style.maxWidth = "100%";
        }
      }
    });
  }
}

// Detect if we should disable custom cursor (mobile or tablet)
export function shouldDisableCustomCursor(): boolean {
  if (typeof window !== "undefined") {
    // Check for mobile or tablet user agent
    const mobileTabletRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Tablet|Mobile/i;

    // Check for screen width (disable on screens <= 1024px)
    const isSmallScreen = window.innerWidth <= 1024;

    return mobileTabletRegex.test(navigator.userAgent) || isSmallScreen;
  }
  return false;
}
