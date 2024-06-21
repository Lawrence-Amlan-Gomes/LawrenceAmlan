import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import Nav from "@/components/nav/Nav";

export const metadata = {
  title: "Lawrence Amlan",
  description: "Personal Portfolio",
  icons:{
    icon:['/favicon.ico?v=4'],
    apple:['/apple-touch-icon.png?v=4'],
    shortcut:['/apple-touch-icon.png']
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href='/icon.png' />
      </Head>
      <body className="bg-neutral-950 relative">
        <Nav/>
        {children}
        </body>
    </html>
  );
}
