import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Produto from '@/components/Produto'
import ContainerProdutos from '@/components/ContainerProdutos';

export default function Home() {
  return (
    <main>
      <Header />

      <section className='flex flex-col gap-[8px]'>
        <ContainerProdutos tipo='Ofertas' />
        <ContainerProdutos tipo='VejaTambem' />
        <ContainerProdutos tipo='VocePodeGostar' />
      </section>

      <Footer />
    </main>
  );
}
