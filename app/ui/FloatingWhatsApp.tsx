"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

const WHATSAPP_NUMBER = "2348000000000"; // Replace with your WhatsApp number
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi BASH Digital! I'm interested in building a digital solution for my business."
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export default function FloatingWhatsApp() {
  const [tooltipVisible, setTooltipVisible] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {tooltipVisible && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative rounded-2xl px-4 py-3 shadow-xl max-w-[220px]"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
            }}
          >
            {/* Arrow */}
            <div
              className="absolute bottom-[-6px] right-5 w-3 h-3 rotate-45"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderTop: "none", borderLeft: "none" }}
            />
            <p className="text-xs font-semibold mb-0.5" style={{ color: "var(--text-primary)" }}>
              Chat with Me 👋
            </p>
            <p className="text-xs leading-snug" style={{ color: "var(--text-secondary)" }}>
              Usually reply within a few minutes.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact BASH Digital on WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 200, damping: 18 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={() => setTooltipVisible(true)}
        onMouseLeave={() => setTooltipVisible(false)}
        onFocus={() => setTooltipVisible(true)}
        onBlur={() => setTooltipVisible(false)}
        className="flex items-center justify-center w-14 h-14 rounded-full shadow-2xl"
        style={{
          background: "#25D366",
          boxShadow: "0 4px 24px rgba(37,211,102,0.40)",
        }}
      >
        <MessageCircle className="size-6 text-white" />
      </motion.a>
    </div>
  );
}
