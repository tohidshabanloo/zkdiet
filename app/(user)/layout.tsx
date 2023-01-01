"use client";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ThemeChanger from "../../components/ThemeChanger";
import { ThemeProvider } from "next-themes";
import "../../styles/globals.css";
import "../../styles/font.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html dir="rtl">
      <ThemeProvider attribute="class">
        <head />
        <body className="">
          <Header />
          <main className="max-w-3xl mx-auto  xl:max-w-5xl xl:px-0 pt-4 md:pt-0">
            {children}
          </main>
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  );
}
