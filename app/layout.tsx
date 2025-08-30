import type { Metadata } from "next";
import "./globals.css";
import CyberpunkBackground from "@/components/main/CyberpunkBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import { TestResultsProvider } from "./context/TestResultsContext";

export const metadata: Metadata = {
  title: "Next Computer Genius",
  description: "India's next challenge for aspiring tech geniuses. An initiative by a Moradabad native.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-cyber-bg text-gray-200 overflow-y-scroll overflow-x-hidden">
        <TestResultsProvider> {/* Wrap everything with the provider */}
          <CyberpunkBackground />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </TestResultsProvider>
      </body>
    </html>
  );
}