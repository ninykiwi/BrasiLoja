import './criarproduto.css';


export default function CriarProduto () {
  return (
    <div className="criar_produto">
      <form className='bg-[#F0EFEF] flex flex-col rounded-[10px] w-[1224px] h-[2566px]'>

        <img src='./images/close.png' className='w-[45px] h-[45px] self-end mr-5 mt-[45.9px] cursor-pointer'/>
        <p className='px-8 mb-[74px] text-[40px] font-black self-start'>Criar Produto</p>

        <div className="flex px-10 mb-[100px]">
            <div className="criar_produto_imagens">
                <div className='flex flex-col gap-8 mr-[63px] mr-[39px]'>
                    <label>
                        <div className="upload_area">
                            <img src="./images/camera.png" alt="UploadIcon" />
                            <input id="fileUpload1" type="file" accept="image/*" className="hidden" />
                        </div>
                    </label>

                    <label>
                        <div className="upload_area">
                            <img src="./images/camera.png" alt="UploadIcon"  />
                            <input id="fileUpload2" type="file" accept="image/*" className="hidden" />
                        </div>
                    </label>

                    <label>
                        <div className="upload_area">
                            <img src="./images/camera.png" alt="UploadIcon" />
                            <input id="fileUpload3" type="file" accept="image/*" className="hidden" />
                        </div>
                    </label>

                    <label>
                        <div className="upload_area">
                            <img src="./images/camera.png" alt="UploadIcon" />
                            <input id="fileUpload4" type="file" accept="image/*" className="hidden" />
                        </div>
                    </label>
                </div>

                <label>
                    <div className="main_upload_area rounded-[10px]">
                        <img src="./images/camera.png" alt="UploadIcon" />
                        <input id="fileUploadMain" type="file" accept="image/*" className="hidden" />
                    </div>
                </label>
            </div>



            <div className='flex flex-col gap-8 ml-6'>
                <div className='flex flex-col'>
                    <label>Nome do produto</label>
                    <input type="text" className='w-[392px] h-[62px] rounded-[10px] px-2'/>
                </div>

                <div className='flex flex-col'>
                    <label>Preço do produto</label>
                    <div className='relative w-[184px]'>
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                            R$
                        </span>
                        <input type="text" className='h-[62px] w-[184px] rounded-[10px] pl-10 pr-2'/>
                    </div>
                </div>

                <div className='flex flex-col'>
                    <label>Quantidade disponivel</label>
                    <input type="number" className='h-[51px] w-[104px] rounded-[10px] px-2'/>
                </div>

                <select name="product-category" className='w-[392px] h-[62px] rounded-[10px] px-2'>
                    <option value="">Categorias</option>
                    <option value="hardware">Hardware</option>
                    <option value="celular_e_smartphone">Celular e Smartphone</option>
                    <option value="perifericos">Periféricos</option>
                    <option value="teclado_e_mouse">Teclado e Mouse</option>
                    <option value="computadoress">Computadores</option>
                    <option value="placa_de_video">Placa de Vídeo</option>
                    <option value="monitores">Monitores</option>
                    <option value="consoles_e_games">Consoles e Games</option>
                    <option value="eletrodomesticos">Eletrodomésticos</option>
                    <option value="eletroportateis">Eletroportáteis</option>
                    <option value="smart_home">Smart Home</option>
                    <option value="ferramentas">Ferramentas</option>
                    <option value="ar_e_ventilacao">Ar e Ventilação</option>
                    <option value="seguranca">Segurança</option>
                    <option value="notebook">Notebook</option>
                    <option value="cameras_e_drones">Câmeras e Drone</option>
                    <option value="conectividade">Conectividade</option>
                    <option value="processadores">Processadores</option>
                    <option value="geek">Geek</option>
                    <option value="espaco_gamer">Espaço Gamer</option>
                    <option value="escritorio">Escritório</option>
                    <option value="audio">Áudio</option>
                    <option value="tv">TV</option>
                </select>
                
                <div className='flex flex-col'>
                    <label>Marca:</label>
                    <input type="text" className='w-[392px] h-[62px] rounded-[10px] px-2' placeholder='Marca...'/>
                </div>
            </div>
        </div>

        <div className='p2form_criar_produto'>
            <div className='flex flex-col'>
                <label>Descrição do produto</label>
                <textarea className='w-full h-[143px] rounded-[10px] py-2 px-2'placeholder='Escreva aqui...'/>
            </div>

            <div className='flex flex-col'>
                <label>Especificações Técnicas</label>
                <textarea className='w-full h-[449px] rounded-[10px] px-2 py-2' placeholder='Escreva aqui...'/>
            </div>
        </div>

        <button type='submit' className='self-center w-[369px] h-[81px] text-[32px] font-black bg-blue-600 mt-[134px] py-[22px] px-[63px] text-[#ffffff] rounded-[10px] cursor-pointer'>
            CRIAR PRODUTO
        </button>
      </form>
    </div>
  );
};
