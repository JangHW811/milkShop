import MilkIcon from "@/images/milk-logo-white.svg";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "제주우유",
  description: "about",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <header className="pt-5 flex justify-center opacity-70 fixed z-10 w-screen">
          <MilkIcon />
        </header>
        {children}
      </body>
    </html>
  );
}
