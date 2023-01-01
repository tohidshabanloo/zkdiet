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
        <body className="max-w-7xl mx-auto">
          <Header />
          {children}
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  );
}
