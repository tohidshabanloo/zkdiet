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

      <body>{children}</body>
    </html>
  );
}
