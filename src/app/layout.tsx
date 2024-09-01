import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import { Raleway } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
// const raleway = Raleway({ subsets: ["latin"], weight: ["400", "700", "600"] });

export const metadata: Metadata = {
  title: "iOSFusion | ADG",
  description: "iOS Fusion 7.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
