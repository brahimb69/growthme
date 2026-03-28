import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#111110",
          borderRadius: "40px",
        }}
      >
        <svg
          width="120"
          height="120"
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
      </div>
    ),
    { ...size }
  );
}
