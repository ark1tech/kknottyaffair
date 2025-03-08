import "../globals.css";
import { Work_Sans, Geist_Mono, Cinzel } from "next/font/google";
import localFont from "next/font/local";
import type { Metadata } from "next";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
        className={`${workSans.variable} ${geistMono.variable} ${titleCursive.variable} 
          ${titleGothic.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
