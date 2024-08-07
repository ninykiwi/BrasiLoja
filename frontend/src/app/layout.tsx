import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PrismicPreview } from "@prismicio/next";
import clsx from "clsx";
import { UserProvider } from "@/contexts/UserContext";
import { FilterProvider } from "@/contexts/FilterContexts";


const inter = Inter({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], display:'swap', variable:'--font-inter' });
const roboto = Roboto({ subsets: ["latin"], weight: ["100", "300", "400", "500", "700", "900"], display:'swap', variable:'--font-roboto' });


export const metadata: Metadata = {
  title: "BrasiLoja",
  description: "A melhor loja chamada 'BrasiLoja' do Brasil!",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={clsx(roboto.variable, inter.variable)}>
        <UserProvider>
          <FilterProvider>
          <body className="w-screen" >
            <Header />
            
              <main className='flex flex-col w-[calc(100vw-50px)] mx-[20px] px-[15px] bg-[#F3F3F3]'>
                {children}
              </main>

            <Footer />
          </body>
          </FilterProvider>
        </UserProvider>

    </html>
  );
}
