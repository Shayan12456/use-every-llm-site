import type React from "react";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { FeedbackForm } from "@/components/ui/feedback-form";
import { Toaster } from "@/components/ui/sonner";
import { GoogleAnalytics } from '@next/third-parties/google'
import HotjarSnippet from "./providers/HotjarSnippet";
import { Suspense } from "react";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "use-every-llm - Using LLM APIs have never been easier",
  description:
    "Ship AI Apps with a single API that speaks Gemini and GPT today—Groq, Ollama, and more next. No lock-in, just ship.",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} antialiased`}>
      <body className="font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <FeedbackForm />
          <Toaster />
        </ThemeProvider>
        <HotjarSnippet />
      </body>
      <GoogleAnalytics gaId="G-EVB0ETS448" />
    </html>
  );
}
