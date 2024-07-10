import React, { useState } from 'react'
import Image from 'next/image'
import { departmentsList } from '@/lib/lists'
import { icon } from '@/lib/icons'
import { Icons } from '@/components/Icons'
import camera from '@/public/images/camera.png'


export default function CriarProdutoMob() {
  const [CreateProductModal, setCreateProductModal] = useState<boolean>(false)

  const toggleCreateProductModal: () => void = () => {
    setCreateProductModal(!CreateProductModal)
  }

  const [images, setImages] = useState<any>({
    fileUpload1: null,
    fileUpload2: null,
    fileUpload3: null,
    fileUpload4: null,
    fileUploadMain: null,
  });

  const handleImageUpload = (event: any, inputId: any) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages((prevImages: any) => ({
          ...prevImages,
          [inputId]: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className='criar-produtomod z-30 flex flex-col w-full p-[7%] bg-[#5D5D5D]'>
      <Icons className='self-end m-[16px]' src={icon.close} width={24} onClick={toggleCreateProductModal} />

      <h2>Criar Produto</h2>


      <form className='flex flex-col w-[90%]'>
        <div className='flex flex-col lg:flex-row w-[85%]'>
          <fieldset className='flex flex-col'>
            <label htmlFor="productName"> Nome do produto: </label>
            <input id='productName' type="text" />
          </fieldset>

          <fieldset>

            <div className='imagem-principal'>
              <label className='flex w-[234px] h-[229px] rounded-[10px]' htmlFor="inputID">
                <Image src={camera} alt='UploadIcon' width={23} height={20} />
              </label>
              <input
              id='inputID'
                type="file"
                accept='image/*'
                className='hidden'
              />
            </div>

            <div >
              <label className='' htmlFor="inputID">
                <Image src={camera} alt='UploadIcon' width={23} height={20} />
              </label>
              <input
              id='inputID'
                type="file"
                accept='image/*'
                className='hidden'
              />
            </div>

          </fieldset>

          <fieldset>

            <label htmlFor="productPrice"> Preço do produto: </label>
            <input id='productPrice' type="number" />
            
            <label htmlFor="productQuantity"> Quantidade: </label>
            <input id='productQuantity' type="number" />
          </fieldset>


          <fieldset>
            <label htmlFor="productCategory"> Categoria: </label>
            <select id='productCategory' name='productCategory'>
              <option value=''>Categorias</option>

              {departmentsList.map((item, index) => {
                return (
                  <option key={index} value={item}> {item} </option>
                )
              })}
            </select>

            <label htmlFor="productBrand"> Marca: </label>
            <input id='productBrand' type="text" placeholder='Marca...' />
          </fieldset>


          <fieldset>
            <label htmlFor="productDescription"> Descrição do produto: </label>
            <textarea id='productDescription' placeholder='Escreva aqui...'></textarea>
            
            <label htmlFor="productInfo"> Informações técnicas: </label>
            <textarea id='productInfo'></textarea>
          </fieldset>


          <button>
            Criar Produto
          </button>

        </div>

      </form>
      
    </section>
  )
}
