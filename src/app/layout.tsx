import type { Metadata } from "next";
import { Fraunces, Caveat, Plus_Jakarta_Sans } from "next/font/google";
import { MotionProvider } from "@/components/MotionProvider";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Gia Digital Lab — Social media management a Torino",
  description:
    "Gabi e Giulia, social media manager freelance a Torino. Strategia social, creazione contenuti e copertura eventi per raccontare chi sei, sui social.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="it"
      className={`${fraunces.variable} ${caveat.variable} ${jakarta.variable}`}
    >
      <body className="min-h-screen bg-cream font-sans text-ink antialiased">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
