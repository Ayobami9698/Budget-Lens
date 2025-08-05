import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // Optional: if you want to use it as a CSS variable
});

export const metadata: Metadata = {
  title: "Budget Lens",
  description:
    " See Your Finances Clearly, Live Smarter. Developed by: Ayobami Aina. Inspired by: Leo Ojigbo",

  icons: {
    icon: "icon.png", // Place this file in the /public folder
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
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
