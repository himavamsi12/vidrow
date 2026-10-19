import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// the share preview for every page without its own: the Vidrow logo and the
// line from the homepage hero on the acid yellow, with the violet step mark
export const alt = "Vidrow: marketing partner behind the fastest-growing startups";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const [font, logo] = await Promise.all([
    readFile(join(process.cwd(), "public/font/StackSansNotch-Medium.ttf")),
    readFile(join(process.cwd(), "public/Logo.svg")),
  ]);
  const logoSrc = `data:image/svg+xml;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#F5FA5E",
          color: "#0B0B0D",
          fontFamily: "StackSansNotch",
          position: "relative",
        }}
      >
        <img src={logoSrc} width={210} height={210} />
        <div style={{ display: "flex", fontSize: 60, lineHeight: 1.1, letterSpacing: "-0.02em", maxWidth: 800 }}>
          Marketing partner behind the fastest-growing startups.
        </div>
        {/* the step mark, bottom right */}
        <svg
          width="132"
          height="132"
          viewBox="0 0 40 40"
          style={{ position: "absolute", right: 80, bottom: 72 }}
        >
          <path fill="#715BE4" d="M0 0 H40 V40 H26.667 V26.667 H13.333 V13.333 H0 Z" />
        </svg>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "StackSansNotch", data: font, weight: 500, style: "normal" }],
    }
  );
}
