import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import formasPagamento from '../../public/images/formasPagamento.svg'

export default function Footer() {

  return (
    <section className='flex flex-col lg:flex-row lg:justify-center py-[48px] pl-[23.5vw] lg:pl-0 gap-[46px] lg:gap-[78px] bg-gray-700 text-white'>
      <nav>
        <legend className='mb-[20px] text-[1rem] lg:text-[1.5rem] lg:font-bold'> Departamentos </legend>
        <ul>
          <li> <Link href='/departamentos/hardware'> Hardware </Link> </li>
          <li> <Link href='/departamentos/Celular e Smartphone'> Celular e Smartphone </Link> </li>
          <li> <Link href='/departamentos/Periféricos'> Periféricos </Link> </li>
          <li> <Link href='/departamentos/Teclado e Mouse'> Teclado e Mouse </Link> </li>
          <li> <Link href='/departamentos/Computadores'> Computadores </Link> </li>
          <li> <Link href='/departamentos/Placa de Vídeo'> Placa de Vídeo </Link> </li>
          <li> <Link href='/departamentos/Monitores'> Monitores </Link> </li>
          <li> <Link href='/departamentos/Consoles e Games'> Consoles e Games </Link> </li>
          <li> <Link href='/departamentos/Audio'> Áudio </Link> </li>
          <li> <Link href='/departamentos/TV'> TV </Link> </li>
          <li> <Link href='/departamentos/Eletrodomesticos'> Eletrodomésticos </Link> </li>
          <li> <Link href='/departamentos/Eletroportateis'> Eletroportáteis </Link> </li>
          <li> <Link href='/departamentos/SmartHome'> Smart Home </Link> </li>
          <li> <Link href='/departamentos/Ferramentas'> Ferramentas </Link> </li>
          <li> <Link href='/departamentos/Ar&Ventilação'> Ar e Ventilação </Link> </li>
          <li> <Link href='/departamentos/Segurança'> Segurança </Link> </li>
          <li> <Link href='/departamentos/Notebook'> Notebook </Link> </li>
          <li> <Link href='/departamentos/Câmeras&Drones'> Câmeras e Drones </Link> </li>
          <li> <Link href='/departamentos/Conectividade'> Conectividade </Link> </li>
          <li> <Link href='/departamentos/Processadores'> Processadores </Link> </li>
          <li> <Link href='/departamentos/Geek'> Geek </Link> </li>
          <li> <Link href='/departamentos/EspacoGamer'> Espaço Gamer </Link> </li>
          <li> <Link href='/departamentos/Escritorio'> Escritório </Link> </li>
        </ul>
      </nav>
      
      <div className='flex flex-col gap-[22px]'>
        <ul>
          <legend className='mb-[20px] text-[1rem] lg:text-[1.5rem] lg:font-bold'> Formas de Pagamento </legend>
          <li> <Image src={formasPagamento} alt='Formas de Pagamento' width={250} height={60}/> </li>
        </ul>
        <nav>
          <legend className='mb-[20px] text-[1rem] lg:text-[1.5rem] lg:font-bold'> Deixe-nos ajudar você </legend>
          <ul>
            <li><Link href='/conta'> Sua conta </Link></li>
            <li><Link href='/Frete&Entrega'> Frete e prazo de entrega </Link></li>
            <li><Link href='/Devoluções&Reembolsos'> Devoluções e reembolsos </Link></li>
            <li><Link href='/Conteúdo&Dispositivos'> Gerencie seu conteúdo e dispositivos </Link></li>

            <li> <ul>
              <li><Link href='/FAQ'> FAQ </Link></li>
              <li><Link href='/Orientações'> Orientações </Link></li>
            </ul> </li>
          </ul>
        </nav>
      </div>

      <div className='flex flex-col gap-[31px] lg:gap-[77px]'>
        <ul className='flex flex-col gap-[20px]'>
          <li>
              <strong> Endereço: </strong>
              <br/>
              Rua Em Algum Lugar, 1321 - Centro
              <br/>
              Salvador/BA- CEP: 13480-010
          </li>
          <li>
              <strong> Central SAC: </strong>
              <br/>
              (71) 3144-5678 
          </li>
          <li>
              <strong> E-mail: </strong>
              <br/>
              faleconosco@brasiloja.com.br
          </li>
        </ul>
        <Link className='underline font-black text-[1rem] lg:text-[32px]' href='/criarproduto'> CRIAR PRODUTO </Link>
      </div>
    </section>
  )
}
