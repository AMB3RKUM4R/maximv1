import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarCanvas from "@/components/main/StarCanvas";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maxim",
  description: "Your platform for Web 2.0, 2.5, and 3.0 website templates.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
        <StarCanvas />
        <Navbar />
        <main className="pt-[65px]"> {/* Add padding to prevent content from hiding behind the fixed navbar */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
