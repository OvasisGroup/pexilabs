import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pexipay Payment Gateway",
  description: "This payment processing platform has revolutionized how we handle transactions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
