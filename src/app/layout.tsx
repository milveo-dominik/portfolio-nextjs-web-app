import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shopify Experte & Full Stack Developer",
  description:
    "Mein Name ist Dominik Lössl und mit meiner Expertise in Shopify (Plus) und als Full-Stack-Entwickler, mit mehr als 10 Jahren Erfahrung, helfe ich Unternehmen dabei, ihre Online-Präsenz zu optimieren und ihre Umsätze zu steigern.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
