import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Produto from '@/components/Produto'
import ContainerProdutos from '@/components/ContainerProdutos';
import { createClient } from '@/prismicio';
import { SliceZone } from '@prismicio/react';
import Hero from '@/slices/Hero';


export default async function Home() {
  const client = createClient()
  const home = await client.getSingle('home')

  return (
    <main>

      <section className='flex flex-col gap-[8px]'>
        {/* <Hero slice={home.data.slices} />
        <SliceZone slices={home.data.slices} components={Hero} /> */}
        <ContainerProdutos tipo='Ofertas' />
        <ContainerProdutos tipo='VejaTambem' />
        <ContainerProdutos tipo='VocePodeGostar' />
      </section>

    </main>
  );
}
