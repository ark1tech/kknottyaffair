import "../globals.css";
import {
  Work_Sans,
  Geist_Mono,
  Cinzel,
  Cedarville_Cursive,
  EB_Garamond,
  Crimson_Pro,
} from "next/font/google";
import localFont from "next/font/local";
import type { Metadata } from "next";

const workSans = Work_Sans({
  variable: "--font-body-sans",
  subsets: ["latin"],
});

const cedarvilleCursive = Cedarville_Cursive({
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
        className={`${workSans.variable} ${geistMono.variable} ${titleCursive.variable} ${titleGothic.variable} ${cedarvilleCursive.variable} ${garamondSerif.variable} ${crimsonSerif.variable} antialiased`}
      > 
        {children}
      </body>
    </html>
  );
}
