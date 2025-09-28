import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "CourseMate - Download the App",
  description: "Golf scoring made simple and social. Download CourseMate from the App Store and start tracking your rounds with friends.",
  keywords: "golf, scoring, app, CourseMate, golf app, golf scoring, multiplayer golf",
  openGraph: {
    title: "CourseMate - Download the App",
    description: "Golf scoring made simple and social. Download CourseMate from the App Store.",
    type: "website",
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
        className={`${montserrat.variable} font-montserrat antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
