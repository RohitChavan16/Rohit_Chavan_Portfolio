import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BackgroundDots from "@/components/BackgroundDots";
import CursorGlow from "@/components/CursorGlow";
import CursorParticles from "@/components/CursorParticles";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rohit Chavan | Portfolio",
  description:
    "Full stack portfolio of Rohit Chavan featuring projects, skills, experience, and contact.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <BackgroundDots />
        <CursorGlow />
        <CursorParticles />
        {children}
      </body>
    </html>
  );
}
