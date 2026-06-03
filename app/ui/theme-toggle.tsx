"use client";

import { useTheme } from "next-themes";
import { Monitor, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

const themes = [
  { value: "system", label: "System", icon: Monitor },
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
] as const;

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={`flex items-center gap-1 rounded-full border border-[var(--border)] bg-transparent p-1`}
      style={{ boxShadow: "0 2px 12px var(--accent-glow)" }}
    >
      {themes.map(({ value, label, icon: Icon }) => {
        const isActive = theme === value;
        return (
          <motion.button
           whileHover={{ scale: 1.108 }}
            whileTap={{ scale: 0.93 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            key={value}
            onClick={() => setTheme(value)}
            aria-label={`Switch to ${label} theme`}
            aria-pressed={isActive}
            className={clsx(
              "flex items-center justify-center w-8 h-8 rounded-full transition-all duration-150",
              isActive
                ? "bg-[var(--bg-card)] text-[var(--accent-blue)] shadow-sm"
                : "text-[var(--text-muted)] hover:text-[var(--text-secondary)]"
            )}
          >
            <Icon size={14} />
          </motion.button>
        );
      })}
    </div>
  );
}