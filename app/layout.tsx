import type { Metadata } from "next";
import "./globals.css";
import { Lato } from 'next/font/google';

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
  variable: '--font-lato',
});

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
    <html lang="en" className={lato.variable}>
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
