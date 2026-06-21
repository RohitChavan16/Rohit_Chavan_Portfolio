import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BackgroundDots from "@/components/BackgroundDots";
import CursorGlow from "@/components/CursorGlow";
import CursorParticles from "@/components/CursorParticles";
import NeuralNetwork from "@/components/animations/NeuralNetwork";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";
import AnalyticsTracker from "@/components/AnalyticsTracker";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rohitchavan.dev"), // Assuming domain, user can change this
  title: {
    default: "Rohit Chavan | Software Engineer Portfolio",
    template: "%s | Rohit Chavan",
  },
  description:
    "Full stack software engineer portfolio of Rohit Chavan featuring modern web projects, skills in Next.js, React, Node.js, and MongoDB, experience, and contact information.",
  keywords: [
    "Rohit Chavan",
    "Software Engineer",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Web Development",
    "Portfolio",
  ],
  authors: [{ name: "Rohit Chavan", url: "https://rohitchavan.dev" }],
  creator: "Rohit Chavan",
  openGraph: {
    title: "Rohit Chavan | Software Engineer Portfolio",
    description:
      "Full stack software engineer portfolio of Rohit Chavan featuring modern web projects, skills, and experience.",
    url: "https://rohitchavan.dev",
    siteName: "Rohit Chavan Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rohit Chavan | Software Engineer Portfolio",
    description:
      "Full stack software engineer portfolio of Rohit Chavan featuring modern web projects, skills, and experience.",
  },
  alternates: {
    canonical: "https://rohitchavan.dev",
  },
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
        <NeuralNetwork/>
        <BackgroundDots />
        <CursorGlow />
        <CursorParticles />
        {children}
        <Toaster 
          position="bottom-right"
          toastOptions={{
            style: {
              background: '#0a1128',
              color: '#fff',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            },
          }}
        />
        <Analytics />
        <AnalyticsTracker />
      </body>
    </html>
  );
}
