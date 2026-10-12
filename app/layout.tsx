import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lexend",
});

export const metadata: Metadata = {
  title: "Getabalew Kemaw · Fullstack Software Engineer",
  description: "Fullstack software engineer specializing in AI-integrated platforms, RAG systems, and distributed web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lexend.variable} ${lexend.className} h-full antialiased`}>
      <body className={`${lexend.className} min-h-full flex flex-col font-sans text-[var(--foreground)]`}>
        {children}
      </body>
    </html>
  );
}
