import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import ScrollToTop from "./components/layout/scroll-to-top";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata: Metadata = {
  title: "Eiman Kalsoom | Public Health Researcher",
  description: "Public Health and Nutrition Professional with experience supporting community-based projects in underserved settings.",
  icons: {
    icon: [
      { url: `${basePath}/images/logo/logo-img.png`, sizes: "any", type: "image/png" },
      { url: `${basePath}/images/logo/logo-img.png`, sizes: "32x32", type: "image/png" },
      { url: `${basePath}/images/logo/logo-img.png`, sizes: "16x16", type: "image/png" },
    ],
    shortcut: `${basePath}/images/logo/logo-img.png`,
    apple: `${basePath}/images/logo/logo-img.png`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={bricolageGrotesque.className}>
        <Header />
        {children}
        <Footer/>
        <ScrollToTop />
      </body>
    </html>
  );
}
