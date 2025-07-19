// app/layout.tsx
import "./globals.css";
import type { ReactNode } from "react";
import Header from "@/components/header";

export const metadata = {
  title: "Centron Bot",
  description: "BOT",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon link */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {/* Optional: Add title and meta description here too */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className="antialiased bg-black font-sans">
        <Header />
        <main className="h-[calc(100vh-4rem)] lg:overflow-hidden min-h-screen pt-7">
          {children}
        </main>
      </body>
    </html>
  );
}
