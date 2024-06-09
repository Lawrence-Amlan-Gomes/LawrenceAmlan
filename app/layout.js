import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav/Nav";

export const metadata = {
  title: "Lawrence Amlan",
  description: "Personal Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black">
        <Nav/>
        {children}
        </body>
    </html>
  );
}
