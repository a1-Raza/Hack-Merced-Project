import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
  
export const metadata: Metadata = {
  title: "HackMerced Project 2024",
  description: "Created by TC UCM Group"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}></body>
    </html>
  );
}
