import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
const archivo = Archivo({
  subsets: ["latin"],
  weight: "300",
});

export const metadata: Metadata = {
  title: "iOSFusion 7.0 | ADG",
  description: "iOS Fusion 7.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
       
      <body className={archivo.className}>{children}</body>
    </html>
  );
}
