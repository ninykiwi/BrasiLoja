"use client";
import Image from 'next/image'
import heart from '../../../../public/icons/heart.svg'
import share from '../../../../public/icons/share.svg'
import frete from '../../../../public/icons/frete.svg'
import addCart from '../../../../public/icons/addCart.svg'
import Link from 'next/link';

import nintendo0 from '../../../../public/images/nintendo0.png'
import nintendo1 from '../../../../public/images/nintendo1.png'
import nintendo2 from '../../../../public/images/nintendo2.png'
import nintendo3 from '../../../../public/images/nintendo3.png'
import nintendo4 from '../../../../public/images/nintendo4.png'
import nintendo5 from '../../../../public/images/nintendo5.png'
import nintendo6 from '../../../../public/images/nintendo6.png'
import nintendo7 from '../../../../public/images/nintendo7.png'
import { useEffect, useState } from 'react';
import { getProductById } from '@/services/product';
import { Icons } from '@/components/Icons';
import { icon } from '@/lib/icons';
import ListSection from '@/containers/ListSection';
import ItemsCarousel from '@/components/ItemsCarousel';


export default function Page({ params }: { params: { id: string } }) {
  const [cart, setCart] = useState<any>([])
  const [product, setProduct] = useState<any>(null)
  const id = Number(params.id)

  const addToTheCart = (prodId: number) => {
    setCart([...cart, prodId])
  }

  useEffect(() => {
    getProductById(id, setProduct)
  }, [id])

  const images = {
    imagem1: nintendo1,
    imagem2: nintendo2,
    imagem3: nintendo3,
    imagem4: nintendo4,
    mainImagem: nintendo0,
    imagem5: nintendo5,
    imagem6: nintendo6,
    imagem7: nintendo7,
  };

  const todosComentarios = [
    {
      id: 1,
      nome: 'João',
      dataCompleta: '01/07/2024',
      notaEstrelas: 5,
      comentario: 'Excelente produto, recomendo!'
    },
    {
      id: 2,
      nome: 'Maria',
      dataCompleta: '02/07/2024',
      notaEstrelas: 4,
      comentario: 'Muito bom, atendeu às minhas expectativas.'
    },
    {
      id: 3,
      nome: 'Carlos',
      dataCompleta: '03/07/2024',
      notaEstrelas: 3,
      comentario: 'Poderia ser melhor, algumas falhas.'
    },{
      id: 4,
      nome: 'Ana',
      dataCompleta: '04/07/2024',
      notaEstrelas: 5,
      comentario: 'Produto excelente, entrega rápida!'
    },
    {
      id: 5,
      nome: 'Pedro',
      dataCompleta: '05/07/2024',
      notaEstrelas: 4,
      comentario: 'Gostei muito, funcionou perfeitamente.'
    },
    {
      id: 6,
      nome: 'Mariana',
      dataCompleta: '06/07/2024',
      notaEstrelas: 3,
      comentario: 'Razoável, algumas funcionalidades deixam a desejar.'
    },
    {
      id: 7,
      nome: 'Fernanda',
      dataCompleta: '07/07/2024',
      notaEstrelas: 5,
      comentario: 'Adorei o produto, superou minhas expectativas.'
    },
    {
      id: 8,
      nome: 'Gabriel',
      dataCompleta: '08/07/2024',
      notaEstrelas: 4,
      comentario: 'Funciona muito bem, ótima qualidade.'
    },
    {
      id: 9,
      nome: 'Juliana',
      dataCompleta: '09/07/2024',
      notaEstrelas: 3,
      comentario: 'Bom produto, mas poderia ter mais opções de cores.'
    },
    {
      id: 10,
      nome: 'Lucas',
      dataCompleta: '10/07/2024',
      notaEstrelas: 5,
      comentario: 'Melhor compra que já fiz, recomendo a todos!'
    }
  ];

  const [comentariosVisiveis, setComentariosVisiveis] = useState(4);

  const handleVerMais = () => {
    setComentariosVisiveis(comentariosVisiveis + 2);
  };

  const handleVerMenos = () => {
    setComentariosVisiveis(4);
  };

  const comentariosExibidos = todosComentarios.slice(0, comentariosVisiveis);


  return (
    <section className='mx-[20px]'>
      <h2> {product.name} </h2>

      <section className='flex flex-col gap-[7px]'>

        <Image className='rounded-[8px]' src={product.mainImg} alt={`Imagem principal do produto`} width={211} height={216} />

        <div className='flex gap-[6px]'>
          <Image className='rounded-[4px]' src={product.img1} alt={`Imagem do produto`} width={64} height={45} />
          <Image className='rounded-[4px]' src={product.img2} alt={`Imagem do produto`} width={64} height={45} />
          <Image className='rounded-[4px]' src={product.img3} alt={`Imagem do produto`} width={64} height={45} />
          <Image className='rounded-[4px]' src={product.img4} alt={`Imagem do produto`} width={64} height={45} />
        </div>

        <form>
          <div>
            <h2> {product.price} </h2>

            <fieldset>
              <label> Quantidade: </label>
              <input type="number" value={1} min={1} />
            </fieldset>
          </div>

          <legend>Modelos:</legend>
          <fieldset>

            <label>
              <Image src={product.img5} alt={`Imagem do produto`} width={54} height={44} />
              <input type="radio" name="model" value={product.img5} />
            </label>
            <label>
              <Image src={product.img5} alt={`Imagem do produto`} width={54} height={44} />
              <input type="radio" name="model" value={product.img5} />
            </label>
            <label>
              <Image src={product.img5} alt={`Imagem do produto`} width={54} height={44} />
              <input type="radio" name="model" value={product.img5} />
            </label>
          </fieldset>

          <div className='flex justify-between'>
            <button className='criar-produto' type='submit'>COMPRAR</button>
            <Icons className='bg-yellow-500' src={icon.addCart}  width={36} onClick={() => setCart(product.id)} />
          </div>
        </form>

        <form>
          <label>Calcular frente:</label>

          <div>
            <input className='flex w-[260px] h-[42px] rounded-l-[10px]' type='number' placeholder='CEP...' minLength={8} maxLength={8} />
            <button className='flex items-center justify-center w-[27px] h-[23px] bg-gray-500 rounded-r-[10px]' type='submit'> OK </button>
          </div>

          <Link className='underline hover:text-blue-500' href=''> Não lembro meu CEP </Link>

        </form>
        
        <div className='flex gap-[2px]'>
          <img />
          <p> Frete grátis para compras acima de R$199,99 </p>
        </div>

        <div className='flex justify-evenly'>
          <Icons src={icon.heart} width={40} />
          <Icons src={icon.share} width={35} />
        </div>

      </section>


      <ItemsCarousel tipo="ProdutosSimilares" />


      {product.description && (
        <section>
          <h4>Descrição do Produto</h4>
          <div className='flex p-[16px] bg-white rounded-[8px]'>
            <p> {product.description} </p>
          </div>
        </section>
      )}


      {product.spec && (
        <section>
          <h4>Informações Técnicas </h4>
          <div className='flex p-[16px] bg-white rounded-[8px]'>
            <p> {product.spec} </p>
          </div>
        </section>
      )}


      {/* {todosComentarios.length > 0 && (
        <section>
          <h4>Avaliação dos Clientes</h4>

          <div className='flex flex-wrap gap-[20px]'>

            {comentariosExibidos.map((comentario) => (
              <div key={comentario.id} className='flex flex-col w-[520px] h-auto bg-white rounded-[10px] px-[12px] pb-[21px] pt-[14px]'>
                <div className='flex w-full'>
                  <p className='mr-5 font-medium'>{comentario.nome}</p>
                  <p className='font-medium'>{comentario.dataCompleta}</p>
                  <p className='ml-auto font-medium'>{`Nota ${comentario.notaEstrelas} estrelas`}</p>
                </div>

                <p className='font-light'>{comentario.comentario}</p>
              </div>
            )
          )}

          </div>

          <Link className='underline text-[1rem] lg:text-[16px]' href=''> Ver mais </Link>
        </section>
      )} */}


      <ItemsCarousel tipo="OutrosProdutos" />

    </section>
  )


  // return (
  //   <main>
  //     <div className='flex items-center justify-center w-full h-auto rounded-[20px] bg-white'>
  //       <div className='bg-[#F0EFEF] flex flex-col rounded-[10px] w-[1224px] h-auto pt-[76px]'>

  //         <div className='flex pl-10 mb-[95px]'>
  //             <div className='flex gap-[20px]'>
  //                 <div className='flex flex-col gap-8 mr-[54px]'>
  //                   {Object.keys(images).slice(0, 4).map((inputId) => (
  //                     <label key={inputId}>
  //                       <div className='upload_area'>
  //                         <Image 
  //                           src={images[inputId]} 
  //                           alt='Selected' 
  //                           width={106} 
  //                           height={81}
  //                           className='object-contain w-full h-full'
  //                            />
  //                       </div>
  //                     </label>
  //                   ))}
  //                 </div>

  //                 <label>
  //                     <div className='flex items-center justify-center w-[600px] h-[572px] bg-white rounded-[10px]'>
  //                       <Image 
  //                         src={images.mainImagem} 
  //                         alt='Selected' 
  //                         width={600} 
  //                         height={602}
  //                         className='object-contain w-full h-full'
  //                          />
  //                     </div>
  //                 </label>
  //             </div>



  //             <div className='flex flex-col ml-6'>
  //                 <div className='mb-10 font-black'>
  //                    <p className='text-[24px] h-[62px] items-center'>Console Nintendo Switch Oled 64 GB</p>
  //                    <p className='text-[40px]'>R$ 2.253,60</p>
  //                 </div>

  //                 <div className='flex flex-col w-[100%] gap-[5px] mb-[31px]'>
  //                   <p className='font-light text-[14px]'>Modelos:</p>
  //                   <div className='flex gap-6'>
  //                     {Object.keys(images).slice(5, 8).map((inputId) => (
  //                       <label key={inputId}>
  //                         <div className='upload_area'>
  //                           <div className='image_preview'>
  //                             <Image 
  //                               src={images[inputId]} 
  //                               alt='Selected' 
  //                               width={80} 
  //                               height={66}
  //                               className='object-contain w-full h-full'
  //                                />
  //                           </div>
  //                         </div>
  //                       </label>
  //                     ))}
  //                   </div>
  //                 </div>

  //                 <form>
  //                   <div className='flex flex-col mb-[38px]'>
  //                     <p className='font-light text-[14px]'>Quantidade:</p>
  //                     <input 
  //                       type='number' 
  //                       className='w-[104px] h-[51px] py-2 pl-[31px] pr-[7px] rounded-[10px] font-black text-[24px]' 
  //                         />
  //                   </div>

  //                   <div className='flex gap-6 mb-[21px]'>
  //                     <button className='w-[288px] h-[46px] rounded-[10px] items-center text-white bg-blue-500 font-black text-[24px]'>
  //                       COMPRAR
  //                     </button>
  //                     <button className='w-[50px] h-[46px] rounded-[10px] bg-yellow-500 py-[5px] px-[7px]'>
  //                       <Image
  //                       src={addCart}
  //                       alt='adicionar ao carrinho'
  //                       width={36}
  //                       height={36}
  //                        />
  //                     </button>
  //                   </div>
  //                 </form>

  //                 <div className='flex flex-col gap-[10px]'>
  //                   <p className='font-light text-[14px]'>Calcular frete:</p>
  //                   <div className='flex'>
  //                     <input 
  //                       type='text' 
  //                       placeholder='CEP...' 
  //                       className='w-[315px] h-[42px] py-[11.5px] pl-[30.5px] rounded-[10px]'
  //                         />
  //                       <button
  //                         type='submit'
  //                         className='w-[56px] h-[42px] text-white font-black bg-[#5D5D5D] rounded-[10px] items-center'
  //                         >OK</button>
  //                   </div>
                    
  //                   <Link 
  //                   className='underline text-[1rem] lg:text-[16px] mb-[29px]'
  //                   href='https://buscacepinter.correios.com.br/app/endereco/index.php'
  //                     >Não lembro meu CEP.</Link>

  //                   <div className='flex gap-[2px]'>
  //                     <Image 
  //                       src={frete}
  //                       alt='frete' 
  //                       width={25} 
  //                       height={23}
  //                        />
  //                     <p className='font-light'>Frete grátis para comprar acima de R$199,99</p>
  //                   </div>

  //                   <div className='flex gap-[63px] mt-[44px] justify-center'>
  //                     <Image 
  //                     src={heart} 
  //                     alt='heart'
  //                     width={40} 
  //                     height={35}
  //                      />

  //                     <Image 
  //                     src={share} 
  //                     alt='share'
  //                     width={35.63} 
  //                     height={34.33}
  //                      />
  //                   </div>
  //                 </div>
  //             </div>
  //         </div>

  //         <div className='flex flex-col gap-[60px]'>
  //           <p>produtos similares</p>

  //           <div className='flex flex-col'>
  //               <label className='text-[20px]'>Descrição do produto</label>
  //               <div className='w-full h-auto rounded-[10px] py-[37px] px-[27px] bg-white'>
  //                 <p className='text-justify font-regular text-4]'>Equipado com uma tela OLED vibrante de 7 polegadas, o console oferece cores mais ricas e um contraste nítido para uma experiência visual incrível. Com um armazenamento interno de 64 GB, suporte a modo portátil, mesa e TV, e um dock com porta LAN integrada, o Nintendo Switch OLED é perfeito para jogar em qualquer lugar e a qualquer momento. Aproveite ao máximo seus jogos favoritos com gráficos deslumbrantes e um som aprimorado.</p>
  //               </div>
  //           </div>

  //           <div className='flex flex-col'>
  //               <label className='text-[20px] mb-[20px]'>Especificações Técnicas</label>
  //               <div className='gap-x-[41px] md:columns-2 w-full h-auto rounded-[10px] pb-[48px] pt-[12px] px-[12px] bg-white'>
  //                 <p className='text-justify font-regular text-4'>
  //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor, 
  //                 nunc non ullamcorper pellentesque, massa turpis hendrerit ligula, a euismod 
  //                 nisi leo ut tortor. Integer a augue nec nulla lacinia interdum. Aenean 
  //                 venenatis, nisi nec fermentum aliquam, enim felis feugiat lectus, non 
  //                 ultrices ex augue at justo. Pellentesque habitant morbi tristique senectus 
  //                 et netus et malesuada fames ac turpis egestas. Vivamus elementum magna in 
  //                 neque pretium, ut egestas nisl sollicitudin. Integer mollis, dolor non 
  //                 bibendum scelerisque, velit nunc fermentum nisi, sit amet vulputate purus 
  //                 orci non lectus. Cras ac ex vitae nisi eleifend tincidunt. Aenean dapibus 
  //                 leo a ex efficitur, et hendrerit risus ultricies.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor, 
  //                 nunc non ullamcorper pellentesque, massa turpis hendrerit ligula, a euismod 
  //                 nisi leo ut tortor. Integer a augue nec nulla lacinia interdum. Aenean 
  //                 venenatis, nisi nec fermentum aliquam, enim felis feugiat lectus, non 
  //                 ultrices ex augue at justo. Pellentesque habitant morbi tristique senectus 
  //                 et netus et malesuada fames ac turpis egestas. Vivamus elementum magna in 
  //                 neque pretium, ut egestas nisl sollicitudin. Integer mollis, dolor non 
  //                 bibendum scelerisque, velit nunc fermentum nisi, sit amet vulputate purus 
  //                 orci non lectus. Cras ac ex vitae nisi eleifend tincidunt. Aenean dapibus 
  //                 leo a ex efficitur, et hendrerit risus ultricies.
  //                 </p>
  //               </div>
  //           </div>

  //           <div className='flex flex-col'>
  //               <label className='text-[20px] mb-[13px]'>Avaliação dos clientes</label>

  //               <div className='gap-x-[100px] md:columns-2 w-full px-[38px] flex flex-wrap'>
  //                 {comentariosExibidos.map((comentario) => (
  //                   <div key={comentario.id} className='mb-[21px] flex flex-col w-[520px] h-auto bg-white rounded-[10px] px-[12px] pb-[21px] pt-[14px]'>
  //                     <div className='flex w-full'>
  //                       <p className='mr-5 font-medium'>{comentario.nome}</p>
  //                       <p className='font-medium'>{comentario.dataCompleta}</p>
  //                       <p className='ml-auto font-medium'>{`Nota ${comentario.notaEstrelas} estrelas`}</p>
  //                     </div>
  //                     <p className='font-light'>{comentario.comentario}</p>
  //                   </div>
  //                 ))}
  //               </div>
                
  //               {comentariosVisiveis < todosComentarios.length ? (
  //                 <button onClick={handleVerMais} className='self-center mt-[31px] underline text-[1rem] lg:text-[16px]'>Ver mais</button>
  //               ) : (
  //                 <button onClick={handleVerMenos} className='self-center mt-[31px] underline text-[1rem] lg:text-[16px]'>Ver menos</button>
  //               )}
  //           </div>

  //           <p>outros produtos</p>
  //         </div>
  //         </div>
  //     </div>
  //   </main>
  // );
};


{/*<div className='flex flex-col gap-[91px] mt-[99px] items-center'>
  <div className='flex flex-col justfy-between h-[140px]'>
    <p className='font-bold text-[40px]'>Nenhum resultado encontrado para "NOME"</p>
    <p className='font-regular text-[20px]'>Consulte as páginas dos produtos para ver outras opções de compra.</p>
  </div>

  <p>voce pode gostar</p>
</div>*/}
