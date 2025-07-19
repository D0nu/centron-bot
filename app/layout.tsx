// app/layout.tsx
import "./globals.css";
import type { ReactNode } from "react";
import Header from "@/components/header";

export const metadata = {
  title: "Centron Bot",
  description: "BOT",
  icons: {
    icon: "/favicon.ico", // Correct way to link favicon in App Router
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-black font-sans">
        <Header />
        <main className="h-[calc(100vh-4rem)] lg:overflow-hidden min-h-screen pt-7">
          {children}
        </main>
      </body>
    </html>
  );
}
