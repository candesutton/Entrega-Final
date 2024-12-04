import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Krona_One } from "next/font/google";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Providers } from './Providers';

const inter1 = Roboto({ subsets: ["latin"], weight: '400' }); 
const inter2 = Krona_One({ subsets: ["latin"], weight: '400' }); 
const inter3 = Montserrat({subsets: ["latin"], weight: ['400', '700']});

export const metadata: Metadata = {
  title: "Ciudades costeras",
  description: "Como el calentamiento global afecta a las ciuudades costeras",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter3.className} bg-[url('/fondo.svg')] bg-contain`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

