import Image from 'next/image'
import close from '@/public/icons/close.svg'
import camera from '@/public/images/camera.png'
import { useEffect, useState } from 'react';
import clsx from 'clsx';


interface EditarProdutoProps {
  onClick?: () => void
}
const EditarProduto = ({ onClick }: EditarProdutoProps) => {

    const [images, setImages] = useState({
        fileUpload1: null,
        fileUpload2: null,
        fileUpload3: null,
        fileUpload4: null,
        fileUploadMain: null,
      });

    useEffect(() => {
        const savedImages = {
          fileUpload1: localStorage.getItem('fileUpload1'),
          fileUpload2: localStorage.getItem('fileUpload2'),
          fileUpload3: localStorage.getItem('fileUpload3'),
          fileUpload4: localStorage.getItem('fileUpload4'),
          fileUploadMain: localStorage.getItem('fileUploadMain'),
        };
        setImages(savedImages);
      }, []);

    const handleImageUpload = (event: any, inputId: any) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const imageUrl = typeof reader.result === 'string' && reader.result;
          if (!imageUrl) return;
          setImages((prevImages) => ({
            ...prevImages,
            [inputId]: imageUrl,
          }));
          localStorage.setItem(inputId, imageUrl);
        };
        reader.readAsDataURL(file);
      }
    };

  return (
    <section className='z-30 flex inset-0 w-full justify-center'>
    <div className='flex top-0 absolute items-center justify-center w-[1440px] h-auto rounded-[20px] bg-white'>
      <form className='bg-[#F0EFEF] flex flex-col rounded-[10px] w-[1224px] h-[2566px]'>

        <Image 
        onClick={onClick}
        src={close} 
        className='self-end mr-[20px] mt-[45.9px] cursor-pointer' 
        alt='...' 
        width={45} 
        height={45}
         />
        <p className='px-8 mb-[74px] text-[40px] font-black self-start'>Editar Produto</p>

        <div className='flex px-10 mb-[100px]'>
            <div className='flex gap-[20px]'>
                <div className='flex flex-col gap-8 mr-[63px]'>
                {['fileUpload1', 'fileUpload2', 'fileUpload3', 'fileUpload4'].map((inputId) => (
                    <label key={inputId}>
                      <div className='upload_area'>
                        {images[inputId] ? (
                          <div className='image_preview'>
                            <Image src={images[inputId]} alt='Selected' width={106} height={81} />
                          </div>
                        ) : (
                          <Image src={camera} alt='UploadIcon' width={23} height={20} />
                        )}
                        <input
                          id={inputId}
                          type='file'
                          accept='image/*'
                          className='hidden'
                          onChange={(event) => handleImageUpload(event, inputId)}
                        />
                      </div>
                    </label>
                  ))}
                </div>

                <label>
                    <div className='flex items-center justify-center w-[600px] h-[572px] bg-white rounded-[10px]'>
                        {images.fileUploadMain ? (
                          <div className='image_preview'>
                            <Image src={images.fileUploadMain} alt='Selected' width={600} height={572} />
                          </div>
                        ) : (
                          <Image src={camera} alt='UploadIcon' width={45} height={39} />
                        )}
                        <input
                          id='fileUploadMain'
                          type='file'
                          accept='image/*'
                          className='hidden'
                          onChange={(event) => handleImageUpload(event, 'fileUploadMain')}
                        />
                    </div>
                </label>
            </div>



            <div className='flex flex-col gap-8 ml-6'>
                <div className='flex flex-col'>
                    <label>Nome do produto</label>
                    <input type='text' className='w-[392px] h-[62px] rounded-[10px] px-2'/>
                </div>

                <div className='flex flex-col'>
                    <label>Preço do produto</label>
                    <div className='relative w-[184px]'>
                        <span className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500'>
                            R$
                        </span>
                        <input type='text' className='h-[62px] w-[184px] rounded-[10px] pl-10 pr-2'/>
                    </div>
                </div>

                <div className='flex flex-col'>
                    <label>Quantidade disponivel</label>
                    <input type='number' className='h-[51px] w-[104px] rounded-[10px] px-2'/>
                </div>

                <select name='product-category' className='w-[392px] h-[62px] rounded-[10px] px-2'>
                    <option value=''>Categorias</option>
                    <option value='hardware'>Hardware</option>
                    <option value='celular_e_smartphone'>Celular e Smartphone</option>
                    <option value='perifericos'>Periféricos</option>
                    <option value='teclado_e_mouse'>Teclado e Mouse</option>
                    <option value='computadoress'>Computadores</option>
                    <option value='placa_de_video'>Placa de Vídeo</option>
                    <option value='monitores'>Monitores</option>
                    <option value='consoles_e_games'>Consoles e Games</option>
                    <option value='eletrodomesticos'>Eletrodomésticos</option>
                    <option value='eletroportateis'>Eletroportáteis</option>
                    <option value='smart_home'>Smart Home</option>
                    <option value='ferramentas'>Ferramentas</option>
                    <option value='ar_e_ventilacao'>Ar e Ventilação</option>
                    <option value='seguranca'>Segurança</option>
                    <option value='notebook'>Notebook</option>
                    <option value='cameras_e_drones'>Câmeras e Drone</option>
                    <option value='conectividade'>Conectividade</option>
                    <option value='processadores'>Processadores</option>
                    <option value='geek'>Geek</option>
                    <option value='espaco_gamer'>Espaço Gamer</option>
                    <option value='escritorio'>Escritório</option>
                    <option value='audio'>Áudio</option>
                    <option value='tv'>TV</option>
                </select>
                
                <div className='flex flex-col'>
                    <label>Marca:</label>
                    <input type='text' className='w-[392px] h-[62px] rounded-[10px] px-2' placeholder='Marca...'/>
                </div>
            </div>
        </div>

        <div className='flex flex-col w-[100%] gap-[20px]'>
            <div className='flex flex-col'>
                <label>Descrição do produto</label>
                <textarea className='w-full h-[143px] rounded-[10px] py-2 px-2'placeholder='Escreva aqui...'/>
            </div>

            <div className='flex flex-col'>
                <label>Especificações Técnicas</label>
                <textarea className='w-full h-[449px] rounded-[10px] px-2 py-2' placeholder='Escreva aqui...'/>
            </div>
        </div>

        <button type='submit' className='editar-produto'>
            EDITAR PRODUTO
        </button>
      </form>
    </div>
    </section>
  );
};

export default EditarProduto;
