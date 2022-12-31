import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "../../styles/globals.css";
import "../../styles/font.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html dir="rtl">
      <head />
      <body className="max-w-7xl mx-auto">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
