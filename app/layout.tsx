// app/layout.tsx
import "./globals.css";
import type { ReactNode } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";



export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-black font-sans">
        <Header />
        <main className="min-h-screen pt-16">{children}</main>
        
      </body>
    </html>
  );
}

export const metadata = {
  title: "CENTRON-BOT",
  description: "BOT",
};