import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import formasPagamento from '@/public/images/formasPagamento.svg'
import { createClient } from '@/prismicio'
import { departmentsList } from '@/lib/lists'

export default async function Footer() {
  const client = createClient()
  const settings = await client.getSingle('settings')

  if (settings === undefined) {
    return (
      <div>Error</div>
    )

  } else {
    return (
      <section className='footer' style={{backgroundColor: `${settings.data.header_color}` }}>
        <nav>
          <legend> Departamentos </legend>
          <ul>

            {departmentsList.map((item, index) => {
              const link = item.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s/g, '-')

              return (
                <li key={index}> 
                  <Link className='hover:underline hover:underline-offset-4 transition-all duration-500' href={`/departamentos/${link}`}> {item} </Link>
                </li>
              )
            })}
            
          </ul>
        </nav>
        
        <div className='flex flex-col gap-[22px]'>
          <ul>
            <legend> Formas de Pagamento </legend>
            <li> <Image src={formasPagamento} alt='Formas de Pagamento' width={250} height={60}/> </li>
          </ul>
          <nav>
            <legend> Deixe-nos ajudar você </legend>
            <ul>
              <li><Link className='hover:underline hover:underline-offset-4' href='/conta'> Sua conta </Link></li>
              <li><Link className='hover:underline hover:underline-offset-4' href='/Frete&Entrega'> Frete e prazo de entrega </Link></li>
              <li><Link className='hover:underline hover:underline-offset-4' href='/Devoluções&Reembolsos'> Devoluções e reembolsos </Link></li>
              <li><Link className='hover:underline hover:underline-offset-4' href='/Conteúdo&Dispositivos'> Gerencie seu conteúdo e dispositivos </Link></li>

              <li> <ul>
                <li><Link className='hover:underline hover:underline-offset-4' href='/FAQ'> FAQ </Link></li>
                <li><Link className='hover:underline hover:underline-offset-4' href='/Orientações'> Orientações </Link></li>
              </ul> </li>
            </ul>
          </nav>
        </div>

        <div className='flex flex-col gap-[31px] lg:gap-[77px]'>
          <ul className='flex flex-col gap-[20px]'>
            {settings.data.contact_info &&
              settings.data.contact_info.map((item, index) => (
                <li key={index}>
                  <table>
                    <thead>
                      <tr>
                        <th className='font-bold'> {item.info_type}: </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td> {item.info} </td>
                      </tr>
                    </tbody>
                  </table>
                </li>
              ))
            }
          </ul>
          <Link className='underline font-black text-[1rem] lg:text-[32px]' href='/criarproduto'> CRIAR PRODUTO </Link>
        </div>
      </section>
    )
  }
}