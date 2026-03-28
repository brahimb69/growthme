"use client";

import { motion } from "framer-motion";

export default function DonateBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="mt-16 mb-8"
    >
      <div
        className="rounded-lg px-6 py-5 text-center"
        style={{
          background: "var(--accent-muted)",
          border: "1px solid var(--border)",
        }}
      >
        <p
          className="text-sm leading-relaxed mb-4"
          style={{ color: "var(--text-secondary)" }}
        >
          This tool is free and always will be. If it helped you think clearer
          about money, consider buying me a coffee.
        </p>
        <a
          href="https://buymeacoffee.com/growthme"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-medium transition-all duration-150 hover:opacity-90"
          style={{
            background: "var(--accent)",
            color: "var(--bg)",
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
            <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
            <line x1="6" y1="1" x2="6" y2="4" />
            <line x1="10" y1="1" x2="10" y2="4" />
            <line x1="14" y1="1" x2="14" y2="4" />
          </svg>
          Buy me a coffee
        </a>
      </div>
    </motion.div>
  );
}
