import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";
export const alt = "GrowthMe — See your money grow.";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "#111110",
          padding: "80px 100px",
        }}
      >
        {/* Logo mark + name */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "48px",
          }}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
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
          <span
            style={{
              color: "#6b6965",
              fontSize: "24px",
              fontWeight: 600,
              letterSpacing: "-0.02em",
            }}
          >
            GrowthMe.org
          </span>
        </div>

        {/* Main headline */}
        <h1
          style={{
            color: "#e8e6e1",
            fontSize: "72px",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            margin: 0,
            maxWidth: "800px",
          }}
        >
          See your money grow.
        </h1>

        {/* Subline */}
        <p
          style={{
            color: "#6b6965",
            fontSize: "28px",
            fontWeight: 400,
            lineHeight: 1.5,
            marginTop: "24px",
            maxWidth: "700px",
          }}
        >
          A compound interest calculator for global investors.
        </p>
      </div>
    ),
    { ...size }
  );
}
