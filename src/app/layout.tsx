import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Melore Cookies — Co-Branded Premium Gifting | Freshler's Foods, Kerala",
  description:
    "Premium co-branded cookie tins for car-delivery gifting, festive corporate runs, and customer-experience moments. Four flavours. Pilot orders welcome. Built in Kerala.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="bg-ink-950 text-ivory-100 antialiased font-sans selection:bg-gold-500/30 selection:text-ivory-50 overflow-x-clip">
        {children}
      </body>
    </html>
  );
}
