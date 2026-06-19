import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Bashir — Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const SITE_DOMAIN = "bash-resume.vercel.app";

const theme = {
  bgPrimary: "#05060a",
  bgPrimaryEnd: "#0b0d17",
  textPrimary: "#f8fafc",
  textSecondary: "#94a3b8",
  accentBlue: "#3b82f6",
  accentCyan: "#22d3ee",
  accentPurple: "#a78bfa",
  badgeBg: "rgba(16, 185, 129, 0.10)",
  badgeBorder: "rgba(16, 185, 129, 0.30)",
  badgeText: "#34d399",
  gridLine: "rgba(255, 255, 255, 0.06)",
};

export default async function Image() {
  const fontsDir = join(process.cwd(), "app", "fonts");
  const [extraBold, bold, semiBold, medium, regular] = await Promise.all([
    readFile(join(fontsDir, "Inter-ExtraBold.ttf")),
    readFile(join(fontsDir, "Inter-Bold.ttf")),
    readFile(join(fontsDir, "Inter-SemiBold.ttf")),
    readFile(join(fontsDir, "Inter-Medium.ttf")),
    readFile(join(fontsDir, "Inter-Regular.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          background: `linear-gradient(135deg, ${theme.bgPrimary} 0%, ${theme.bgPrimaryEnd} 100%)`,
        }}
      >
        {/* Grid background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            backgroundImage: `linear-gradient(${theme.gridLine} 1px, transparent 1px), linear-gradient(90deg, ${theme.gridLine} 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
            opacity: 0.6,
          }}
        />

        {/* Glow wash — full-bleed gradient avoids Satori's hard radial-edge seams */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background: `radial-gradient(ellipse 1100px 700px at 78% 8%, rgba(59,130,246,0.20) 0%, rgba(59,130,246,0) 60%),
                         radial-gradient(ellipse 1000px 700px at 5% 100%, rgba(167,139,250,0.14) 0%, rgba(167,139,250,0) 60%)`,
          }}
        />

        {/* Top-right faint code bracket accent */}
        <div
          style={{
            position: "absolute",
            top: 56,
            right: 64,
            display: "flex",
            fontSize: 220,
            fontWeight: 800,
            color: "rgba(255,255,255,0.045)",
            fontFamily: "Inter",
          }}
        >
          {"</>"}
        </div>

        {/* Content */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
            padding: "76px 84px",
            justifyContent: "center",
          }}
        >

          {/* Headline */}
          <div
            style={{
              display: "flex",
              fontSize: 100,
              fontWeight: 800,
              fontFamily: "Inter",
              lineHeight: 1.05,
              letterSpacing: -3,
              color: theme.textPrimary,
            }}
          >
            <span
              style={{
                display: "flex",
                backgroundImage: `linear-gradient(90deg, ${theme.accentBlue} 0%, ${theme.accentPurple} 55%, ${theme.accentCyan} 100%)`,
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Bash Digital
            </span>
          </div>

          {/* Subtitle */}
          <div
            style={{
              display: "flex",
              fontSize: 48,
              fontWeight: 600,
              fontFamily: "Inter",
              color: theme.textSecondary,
              marginTop: 16,
              marginBottom: 30,
            }}
          >
            Full-Stack Developer
          </div>

          {/* Description */}
          <div
            style={{
              display: "flex",
              fontSize: 27,
              fontWeight: 400,
              fontFamily: "Inter",
              lineHeight: 1.55,
              color: theme.textSecondary,
              maxWidth: 860,
            }}
          >
            I build scalable web applications using modern technologies
            including Next.js, NestJS, TypeScript, and PostgreSQL.
          </div>

          {/* Bottom brand row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              position: "absolute",
              bottom: 66,
              left: 84,
            }}
          >
            <span
              style={{
                display: "flex",
                fontSize: 32,
                fontWeight: 800,
                fontFamily: "Inter",
                letterSpacing: -0.5,
                backgroundImage: `linear-gradient(90deg, ${theme.accentBlue} 0%, ${theme.accentPurple} 100%)`,
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              BASH ?:
            </span>
          </div>

          {/* Bottom-right URL tag */}
          <div
            style={{
              display: "flex",
              position: "absolute",
              bottom: 66,
              right: 84,
              fontSize: 22,
              fontWeight: 500,
              fontFamily: "Inter",
              color: theme.textSecondary,
            }}
          >
            {SITE_DOMAIN}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Inter", data: extraBold, weight: 800, style: "normal" },
        { name: "Inter", data: bold, weight: 700, style: "normal" },
        { name: "Inter", data: semiBold, weight: 600, style: "normal" },
        { name: "Inter", data: medium, weight: 500, style: "normal" },
        { name: "Inter", data: regular, weight: 400, style: "normal" },
      ],
    }
  );
}