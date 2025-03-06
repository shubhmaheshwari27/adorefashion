"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure the component only renders after the client-side mount
  useEffect(() => {
    setMounted(true);
  }, []);

  // If the component hasn't mounted yet, we render null to avoid hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="relative rounded-full border-amber-700/20 bg-white/80 backdrop-blur-sm dark:bg-amber-950/80 dark:border-amber-400/20"
        >
          {/* Conditionally render Sun or Moon icon based on the current theme */}
          <Sun
            className={`h-[1.5rem] w-[1.5rem] transition-all text-amber-700 dark:text-amber-400 ${
              theme === "dark" ? "opacity-100 scale-100" : "opacity-0 scale-0"
            }`}
          />
          <Moon
            className={`absolute h-[1.5rem] w-[1.5rem] transition-all text-amber-700 dark:text-amber-400 ${
              theme !== "dark" ? "opacity-100 scale-100" : "opacity-0 scale-0"
            }`}
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="bg-white/90 backdrop-blur-md dark:bg-amber-950/90 border-amber-700/20 dark:border-amber-400/20"
      >
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className="cursor-pointer hover:bg-amber-100 dark:hover:bg-amber-900/50 text-amber-800 dark:text-amber-200"
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className="cursor-pointer hover:bg-amber-100 dark:hover:bg-amber-900/50 text-amber-800 dark:text-amber-200"
        >
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className="cursor-pointer hover:bg-amber-100 dark:hover:bg-amber-900/50 text-amber-800 dark:text-amber-200"
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
