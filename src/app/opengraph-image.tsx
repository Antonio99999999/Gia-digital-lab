import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "Gia Digital Lab — Dalla strategia ai contenuti: raccontiamo chi sei, sui social.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const fraunces = readFile(
  join(process.cwd(), "src/app/og-fonts/Fraunces-Variable.ttf")
);
const logoData = readFile(join(process.cwd(), "public/images/logo.png"));
const photoData = readFile(
  join(process.cwd(), "public/images/team-hero.png")
);

export default async function Image() {
  const [frauncesData, logo, photo] = await Promise.all([
    fraunces,
    logoData,
    photoData,
  ]);
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;
  const photoSrc = `data:image/png;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#121935",
          padding: "72px",
          fontFamily: "Fraunces",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: 620,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            {/* eslint-disable-next-line @next/next/no-img-element -- satori (next/og) renders its own JSX tree, not the DOM; next/image doesn't work here */}
            <img
              src={logoSrc}
              width={56}
              height={56}
              alt=""
              style={{ borderRadius: 999 }}
            />
            <span
              style={{
                fontSize: 20,
                letterSpacing: 4,
                textTransform: "uppercase",
                color: "#F2C9D8",
              }}
            >
              Gia Digital Lab
            </span>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 32,
              fontSize: 50,
              lineHeight: 1.18,
              color: "#F9F4EA",
            }}
          >
            <div style={{ display: "flex" }}>Dalla strategia ai contenuti:</div>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <div style={{ display: "flex", marginRight: 16 }}>
                raccontiamo
              </div>
              <div
                style={{ display: "flex", marginRight: 16, color: "#C2568A" }}
              >
                chi sei,
              </div>
              <div style={{ display: "flex" }}>sui social.</div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 22,
              color: "rgba(249,244,234,0.7)",
            }}
          >
            Social media management · Torino e dintorni
          </div>
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element -- satori (next/og) renders its own JSX tree, not the DOM; next/image doesn't work here */}
        <img
          src={photoSrc}
          width={385}
          height={486}
          alt=""
          style={{
            borderRadius: 28,
            objectFit: "cover",
            border: "1px solid rgba(249,244,234,0.15)",
          }}
        />
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Fraunces", data: frauncesData, style: "normal", weight: 400 },
      ],
    }
  );
}
