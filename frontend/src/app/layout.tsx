import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PrismicPreview } from "@prismicio/next";
import clsx from "clsx";


const inter = Inter({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], display:'swap', variable:'--font-inter' });
const roboto = Roboto({ subsets: ["latin"], weight: ["100", "300", "400", "500", "700", "900"], display:'swap', variable:'--font-roboto' });


export const metadata: Metadata = {
  title: "BrasiLoja",
  description: "...",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={clsx(roboto.variable, inter.variable)}>

        <body >
          <Header />
          
          <main>

                {children}
          </main>

          <Footer />
        </body>

    </html>
  );
}
