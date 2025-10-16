import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import LotusBackground from "@/components/LotusBackground";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Padmini | Portfolio",
  description: "Full-stack Developer | Projects, Experience & Blog",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-smoke text-charcoal">
        <Navbar/>
        {children}
        <LotusBackground/>
        {/* <Footer /> */}
      </body>
    </html>
  )
}
