"use client";
import Image from 'next/image'
import heart from '@/public/icons/heart.svg'
import share from '@/public/icons/share.svg'
import frete from '@/public/icons/frete.svg'
import addCart from '@/public/icons/addCart.svg'
import Link from 'next/link';

import nintendo0 from '@/public/images/nintendo0.png'
import nintendo1 from '@/public/images/nintendo1.png'
import nintendo2 from '@/public/images/nintendo2.png'
import nintendo3 from '@/public/images/nintendo3.png'
import nintendo4 from '@/public/images/nintendo4.png'
import nintendo5 from '@/public/images/nintendo5.png'
import nintendo6 from '@/public/images/nintendo6.png'
import nintendo7 from '@/public/images/nintendo7.png'
import { useEffect, useState } from 'react';
import { getProductById } from '@/services/product';
import { Icons } from '@/components/Icons';
import { icon } from '@/lib/icons';
import ListSection from '@/containers/ListSection';
import ItemsCarousel from '@/components/ItemsCarousel';


export default function Page({ params }: { params: { id: string } }) {
  const [cart, setCart] = useState<any>([])
  const [product, setProduct] = useState<any>([])
  const id = Number(params.id)

  const addToTheCart = (prodId: number) => {
    setCart([...cart, prodId])
  }

  // useEffect(() => {
  //   getProductById(id, setProduct)
  // }, [id])

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

  useEffect(() => {
    setProduct([{
      id: 1,
      name: 'Console Nintendo Switch Oled 64 GB',
      mainImg: nintendo0,
      img1: nintendo1,
      img2: nintendo2,
      img3: nintendo3,
      img4: nintendo4,
      img5: nintendo5,
      img6: nintendo6,
      img7: nintendo7,
      price: 'R$ 2.253,60',
      description: 'Equipado com uma tela OLED vibrante de 7 polegadas, o console oferece cores mais ricas e um contraste nítido para uma experiência visual incrível. Com um armazenamento interno de 64 GB, suporte a modo portátil, mesa e TV, e um dock com porta LAN integrada, o Nintendo Switch OLED é perfeito para jogar em qualquer lugar e a qualquer momento. Aproveite ao máximo seus jogos favoritos com gráficos deslumbrantes e um som aprimorado.',
      spec: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor, nunc non ullamcorper pellentesque, massa turpis hendrerit ligula, a euismod nisi leo ut tortor. Integer a augue nec nulla lacinia interdum. Aenean venenatis, nisi nec fermentum aliquam, enim felis feugiat lectus, non ultrices ex augue at justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus elementum magna in neque pretium, ut egestas nisl sollicitudin. Integer mollis, dolor non bibendum scelerisque, velit nunc fermentum nisi, sit amet vulputate purus orci non lectus. Cras ac ex vitae nisi eleifend tincidunt. Aenean dapibus leo a ex efficitur, et hendrerit risus ultricies.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor, nunc non ullamcorper pellentesque, massa turpis hendrerit ligula, a euismod nisi leo ut tortor. Integer a augue nec nulla lacinia interdum. Aenean venenatis, nisi nec fermentum aliqua'
    }])
  }, [])


  return (
    <section className='w-full pt-[24px] lg:pt-[76px]'>
      <h3 className='mb-[24px] font-black lg:hidden'> Console Nintendo Switch Oled 64gb </h3>

      <section className='flex flex-col lg:flex-row items-center lg:justify-between'>
        <div className='flex flex-col lg:flex-row lg:max-w-[calc(100%-400px)] items-center gap-[7px] lg:gap-[54px] lg:order-first'>
          <Image className='lg:w-[600px] lg:h-[602px] rounded-[8px] lg:rounded-[10px]' src={nintendo0} alt={`Imagem principal do produto`} width={211} height={216} />

          <div className='flex lg:flex-col gap-[6px] lg:gap-[26px] lg:order-first'>
            <Image className='lg:w-[123px] lg:h-[86px] rounded-[4px]' src={nintendo0} alt={`Imagem do produto`} width={64} height={45} />
            <Image className='lg:w-[123px] lg:h-[86px] rounded-[4px]' src={nintendo1} alt={`Imagem do produto`} width={64} height={45} />
            <Image className='lg:w-[123px] lg:h-[86px] rounded-[4px]' src={nintendo2} alt={`Imagem do produto`} width={64} height={45} />
            <Image className='lg:w-[123px] lg:h-[86px] rounded-[4px]' src={nintendo3} alt={`Imagem do produto`} width={64} height={45} />
          </div>
        </div>

        <div className='flex flex-col lg:max-w-[380px] mt-[14px] mb-[14px]'>
          <h3 className='hidden my-[24px] font-black lg:flex'> Console Nintendo Switch Oled 64gb </h3>

          <form>
            <div className='flex items-center justify-between w-full'>
              <legend className='w-fit h1 font-black'> R$ 2.253,60 </legend>
              <fieldset className='flex flex-col gap-0'>
                <label className='font-display font-light text-[12px] leading-[2px]'> Quantidade: </label>
                <input className='w-[64px] h-[32px] py-[14px] px-[8px] rounded-[10px] text-[12px]' type="number" placeholder='1' />
              </fieldset>
            </div>

            <legend className='font-display font-light text-[12px]'>Modelos:</legend>
            <fieldset className='flex gap-[20px] mt-[9px]'>
              <label>
                <Image src={product.img5} alt={`Imagem do produto`} width={54} height={44} />
                <input className='hidden' type="radio" name="model" value={product.img5} />
              </label>
              <label>
                <Image src={product.img5} alt={`Imagem do produto`} width={54} height={44} />
                <input className='hidden' type="radio" name="model" value={product.img5} />
              </label>
              <label>
                <Image src={product.img5} alt={`Imagem do produto`} width={54} height={44} />
                <input className='hidden' type="radio" name="model" value={product.img5} />
              </label>
            </fieldset>

            <div className='flex gap-[23px]'>
              <button className='flex items-center justify-center w-[205px] h-[44px] bg-blue-500 rounded-[10px] text-[20px] font-black text-white hover:bg-blue-600' type='submit'>COMPRAR</button>
              <Icons className='flex items-center justify-center w-[50px] h-[46px] bg-yellow-500 rounded-[10px] hover:bg-yellow-600' src={icon.addCart}  width={36} onClick={() => setCart(product.id)} />
            </div>
          </form>

          <form className='flex flex-col mt-[16px]'>
            <label className='font-display text-[12px] font-light'>Calcular frente:</label>

            <div className='flex'>
              <input className='flex w-[225px] h-[42px] p-[12px] rounded-l-[10px]' type='text' placeholder='CEP...' minLength={10} maxLength={10} />
              <button className='flex items-center justify-center w-[53px] h-[42px] bg-gray-500 rounded-r-[10px] text-[20px] font-semibold text-white hover:bg-gray-600' type='submit'> OK </button>
            </div>

            <Link className='mt-[6px] underline text-[12px] hover:text-blue-500' href=''> Não lembro meu CEP </Link>

          </form>
          
          <div className='flex flex-col mt-[19px] mb-[60px] gap-[30px]'>
            <p> Frete grátis para compras acima de R$199,99 </p>
            <div className='flex justify-evenly'>
              <Icons src={icon.heart} width={26} />
              <Icons src={icon.share} width={26} />
            </div>
          </div>

        </div>
      </section>


      <ItemsCarousel tipo="ProdutosSimilares" />


      <section className='flex flex-col mt-[60px] gap-[10px]'>
        <h3 className='text-[14px] lg:text-[20px] font-bold'>Descrição do Produto</h3>
        <div className='flex p-[16px] bg-white rounded-[8px]'>
          <p> Equipado com uma tela OLED vibrante de 7 polegadas, o console oferece cores mais ricas e um contraste nítido para uma experiência visual incrível. Com um armazenamento interno de 64 GB, suporte a modo portátil, mesa e TV, e um dock com porta LAN integrada, o Nintendo Switch OLED é perfeito para jogar em qualquer lugar e a qualquer momento. Aproveite ao máximo seus jogos favoritos com gráficos deslumbrantes e um som aprimorado. </p>
        </div>
      </section>


      <section className='flex flex-col mt-[60px] gap-[10px]'>
        <h3 className='text-[14px] lg:text-[20px] font-bold'>Especificações Técnicas</h3>
        <div className='block p-[16px] bg-white rounded-[8px] lg:columns-2'>
          <p className='whitespace-pre-wrap'>
            - Nintendo Switch OLED  
            Resolução: 1280 x 720 (HD)
            Tela OLED de 7 polegadas
            <br/><br/>
            - Armazenamento Interno: 64 GB (expansível via cartão microSD)
            <br/><br/>
            - Modos de Jogo:
            Modo TV: Conecta-se à TV via dock
            Modo Mesa: Suporte traseiro ajustável para jogatina em superfícies planas
            Modo Portátil: Jogue em qualquer lugar com controles acoplados
            <br/><br/>
            Controles: Joy-Con destacáveis
            Inclui controles Joy-Con (L) e Joy-Con (R)
            <br/><br/>
            Bateria: Íon-lítio (4310mAh)
            Duração da bateria: Aproximadamente 4,5 a 9 horas (varia conforme o uso e os jogos)    
            <br/><br/>
            Conectividade:
            Wi-Fi (IEEE 802.11 a/b/g/n/ac)
            Bluetooth 4.1
            Dock com porta LAN integrada para conexão com fio à internet
            <br/><br/>
            Áudio:
            Alto-falantes integrados aprimorados
            Saída de áudio estéreo
            <br/><br/>
            Portas:
            1x USB Type-C (para carregamento e conexão com o dock)
            3x USB (na base do dock)
            Slot para cartão microSD (compatível com microSDXC)
            <br/><br/>
            Dimensões:
            Console: 102 mm x 242 mm x 13,9 mm (com Joy-Con acoplados)          
            Dock: 104 mm x 173 mm x 54 mm
            <br/><br/>
            Peso:
            Console: Aproximadamente 320g
            Com Joy-Con acoplados: Aproximadamente 420g
            <br/><br/>
            Conteúdo da Embalagem:
            Console Nintendo Switch OLED
            Joy-Con (L) e Joy-Con (R)
            Suporte para Joy-Con
            Dock do Nintendo Switch com porta LAN
            Adaptador AC
            Cabo HDMI
            Alças para Joy-Con
          </p>
        </div>
      </section>

      <section className='flex flex-col mt-[60px] mb-[60px] gap-[10px]'>
        <h3 className='text-[14px] lg:text-[20px] font-bold'>Avaliação dos clientes</h3>

        <ul className='lg:columns-2'>
          <li className='flex flex-col lg:w-[520px] lg:h-[89px] p-[10px] gap-[8px] bg-white rounded-[8px] overflow-hidden'>
            <div className='flex justify-between text-[12px] font-medium'>
              <div className='flex gap-[40px]'>
                <h4 className='text-[12px] lg:text-[16px] font-medium'>Luís H.</h4>
                <h4 className='text-[12px] lg:text-[16px] font-medium'>24 de março de 2023</h4>
              </div>
              <h4 className='text-[12px] lg:text-[16px] font-medium'>stars</h4>
            </div>

            <p> Melhor compra da minha vida. Chegou antes do prazo e tudo certinho.</p>
          </li>
        </ul>

        <Link className='self-center underline text-[11px] font-bold  hover:text-blue-500' href={`/Produtos/${id}/comentários`}>Ver mais</Link>
      </section>


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
