import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bash-resume.vercel.app"),

  alternates: {
    canonical: "/",
  },

  title: {
    default: "BASH | Web Developer in Lagos",
    template: "%s | BASH",
  },

  description:
    "Web developer in Lagos Nigeria building modern websites and web apps for businesses using Next.js and React.",

  keywords: ["Full-Stack Developer", "Web Developer", "Next.js", "NestJS", "TypeScript", "Reach", "PostgreSQ"],

  verification: {
    google: "ZNttGoLoHhwV2QDZ5m5EsS9-vLQU5qxgnN12a6yDWvw",
  },

  robots: {
    index: true,
    follow: true,
    googleBot:{
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    }

  },

  openGraph: {
    title: "BASH | Web Developer in Lagos",
    description:
      "Web developer in Lagos Nigeria building modern websites and web apps.",
    url: "https://bash-resume.vercel.app",
    siteName: "BASH Digital",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
