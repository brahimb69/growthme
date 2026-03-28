"use client";

interface LogoProps {
  size?: number;
  className?: string;
  showText?: boolean;
}

export default function Logo({
  size = 28,
  className = "",
  showText = true,
}: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Growth curve */}
        <path
          d="M4 26C4 26 8 24 12 20C16 16 18 10 22 7C24.5 5.2 27 4.5 28 4"
          stroke="var(--accent)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Leaf / sprout at the tip */}
        <path
          d="M28 4C25.5 4 24 5 24 5C24 5 24.5 3 26 1.5"
          stroke="var(--accent)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M28 4C28 6.5 27 8 27 8"
          stroke="var(--accent)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        {/* Subtle dot at origin */}
        <circle cx="4" cy="26" r="2" fill="var(--accent)" opacity="0.4" />
      </svg>
      {showText && (
        <span
          className="text-sm font-semibold tracking-tight"
          style={{ color: "var(--text)" }}
        >
          GrowthMe
        </span>
      )}
    </span>
  );
}

export function LogoIcon({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" rx="8" fill="#111110" />
      <path
        d="M5 25C5 25 9 23 13 19C17 15 19 9 23 6.5C25 5.2 27 4.5 28 4"
        stroke="#7db88e"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28 4C25.5 4 24 5 24 5C24 5 24.5 3 26 1.5"
        stroke="#7db88e"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M28 4C28 6.5 27 8 27 8"
        stroke="#7db88e"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="5" cy="25" r="1.8" fill="#7db88e" opacity="0.4" />
    </svg>
  );
}
