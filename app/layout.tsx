import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lichi's portofolio",
  description: "Web portofolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
        <head>
        {/* If not using metadata.icons, you can put this manually: */}
        <link rel="icon" href="/icons/witcherIcons/favicon.png" type="image/png" />
      </head>
      <body className="font-inter text-foreground">
        {children}
      </body>
    </html>
  );
}