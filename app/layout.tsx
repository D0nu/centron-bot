// app/layout.tsx
import "./globals.css";
import type { ReactNode } from "react";



export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-black font-sans">
        <main className="min-h-screen ">{children}</main>
      </body>
    </html>
  );
}

export const metadata = {
  title: "CENTRON-BOT",
  description: "BOT",
};