import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abhishek Benni | AI/ML Enthusiast | Python Developer",
  description:
    "Abhishek Ningappa Benni — Computer Science & Engineering student (AIML) building practical AI/ML, NLP, OCR, ASR and LLM-based solutions with Python, PyTorch and FastAPI.",
  keywords: [
    "Abhishek Benni",
    "Abhishek Ningappa Benni",
    "AI/ML Enthusiast",
    "Python Developer",
    "Machine Learning",
    "NLP",
    "LLM",
    "Portfolio",
  ],
  authors: [{ name: "Abhishek Ningappa Benni" }],
  icons: {
    icon: "/images/abhishek.png",
  },
  openGraph: {
    title: "Abhishek Benni | AI/ML Enthusiast | Python Developer",
    description:
      "Computer Science & Engineering student specializing in Artificial Intelligence and Machine Learning — building practical LLM, NLP, OCR and ASR based solutions.",
    siteName: "Abhishek Benni Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhishek Benni | AI/ML Enthusiast",
    description:
      "CSE (AIML) student building practical AI/ML, NLP, OCR, ASR and LLM-based solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${dmSans.variable} ${spaceGrotesk.variable} antialiased pf-body`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
