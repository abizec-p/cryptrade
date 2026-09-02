import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./components/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CrypTrade",
  description: "App for real time crypto prices and check your holding",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="h-full w-screen ">
        <div className="flex h-full">
        <div className="flex">
          <Nav />
        </div>
        <div className="flex flex-1  min-w-0  h-full">{children}</div>
        </div>
      </body>
    </html> 
  );
}
