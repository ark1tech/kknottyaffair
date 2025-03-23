import "../globals.css";
import {
  Barlow,
  Geist_Mono,
  Cinzel,
  La_Belle_Aurore,
  EB_Garamond,
  Crimson_Pro,
} from "next/font/google";
import localFont from "next/font/local";
import type { Metadata } from "next";

// TAN Memories

const workSans = Barlow({
  variable: "--font-body-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const cedarvilleCursive = La_Belle_Aurore({
  variable: "--font-body-cursive",
  subsets: ["latin"],
  weight: "400",
});

const garamondSerif = EB_Garamond({
  variable: "--font-body-serif",
  subsets: ["latin"],
});

const crimsonSerif = Crimson_Pro({
  variable: "--font-body-serif-2",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-body-mono",
  subsets: ["latin"],
});

const titleCustom = localFont({
  src: "../../../public/fonts/Eyesome Script.otf",
  variable: "--font-title-fancy",
});

const titleCursive = localFont({
  src: "../../../public/fonts/Eyesome Script.otf",
  variable: "--font-title-cursive",
});

const titleGothic = Cinzel({
  subsets: ["latin"],
  variable: "--font-title-gothic",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kim & King's Wedding",
  description: "Wedding of Kim & King",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${workSans.variable} ${geistMono.variable} ${titleCursive.variable} ${titleGothic.variable} ${cedarvilleCursive.variable} ${garamondSerif.variable} ${crimsonSerif.variable} ${titleCustom.variable}antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
