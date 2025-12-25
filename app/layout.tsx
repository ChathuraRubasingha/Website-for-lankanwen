import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "./components/layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "WebCraft - Professional Web Design & Development Agency",
    template: "%s | WebCraft",
  },
  description:
    "WebCraft is a leading web design and development agency specializing in creating stunning, high-performance websites that drive business growth. Custom solutions for modern businesses.",
  keywords: [
    "web design",
    "web development",
    "website design",
    "web agency",
    "custom websites",
    "responsive design",
    "e-commerce development",
    "SEO optimization",
    "UI/UX design",
  ],
  authors: [{ name: "WebCraft" }],
  creator: "WebCraft",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "WebCraft",
    title: "WebCraft - Professional Web Design & Development Agency",
    description:
      "Transform your online presence with WebCraft. We create stunning, high-performance websites tailored to your business needs.",
  },
  twitter: {
    card: "summary_large_image",
    title: "WebCraft - Professional Web Design & Development Agency",
    description:
      "Transform your online presence with WebCraft. We create stunning, high-performance websites tailored to your business needs.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
