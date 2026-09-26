import { ImageResponse } from "next/og";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";
export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#111827",
          color: "#FF6F91",
          fontSize: 300,
          fontWeight: 800,
          letterSpacing: "-0.06em",
        }}
      >
        a
      </div>
    ),
    { ...size }
  );
}
