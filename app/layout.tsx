import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import Script from "next/script";
import { HatchPerimeter } from "@/components/frame/HatchPerimeter";
import "./globals.css";

const lexend = Lexend({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lexend",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://getabalewkemaw.dev"),
  title: "Getabalew Kemaw · Fullstack Software Engineer & AI Developer",
  description: "Fullstack software engineer, AI developer, and ML engineer specializing in RAG systems, intelligent automation, and distributed web applications.",
  keywords: [
    "Getabalew",
    "Getabalew Kemaw",
    "Getabalee",
    "getabalewkema",
    "GetabalewKemaw",
    "Fullstack Developer in Ethiopia",
    "Software Engineer in Ethiopia",
    "Software Engineer Addis Ababa",
    "Fullstack Developer Ethiopia",
    "Backend Engineer Ethiopia",
    "Next.js Developer Ethiopia",
    "React Developer Ethiopia",
    "AI Developer",
    "AI Engineer",
    "AI Developer Ethiopia",
    "AI Engineer Ethiopia",
    "Machine Learning",
    "Machine Learning Engineer",
    "ML",
    "ML Engineer Ethiopia",
    "RAG System",
    "RAG Systems",
    "Retrieval-Augmented Generation",
    "RAG Developer",
    "Chapa Payment Gateway",
    "Telebirr API Integration",
    "Python FastAPI Developer",
    "PostgreSQL Optimization",
    "AllCan Tech",
    "Hire Developer in Ethiopia",
    "Hire AI Developer",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
      { url: "/favicon.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  alternates: {
    types: {
      "text/plain": "/llms.txt",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${lexend.variable} ${lexend.className} h-full antialiased`}
    >
      <head />
      <body className={`${lexend.className} min-h-full flex flex-col font-sans text-theme-primary bg-theme-page`}>
        <Script
          id="theme-initializer"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const storedTheme = localStorage.getItem('theme');
                  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  const theme = storedTheme === 'dark' || (!storedTheme && systemPrefersDark) ? 'dark' : 'light';
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                    document.documentElement.setAttribute('data-theme', 'dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.setAttribute('data-theme', 'light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <HatchPerimeter>
          {children}
        </HatchPerimeter>
      </body>
    </html>
  );
}

