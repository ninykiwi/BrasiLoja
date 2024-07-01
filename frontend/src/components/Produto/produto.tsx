import './produto.css';


export default function Produto () {
  return (
    <div className="card_produto">
      <img className='fav' src='./images/heart.png'/>
      <div className="produto">
        <img className='img_produto' src='./images/fone.png'/>
        <div className="main_produto">
            <div className="info_produto">
                <p className='nome_produto roboto'>Fone de ouvido</p>
                <p className='preco_produto'>R$ 59,90</p>
            </div>
            <div className="botoes_produto">
                <button className='comprar'>COMPRAR</button>
                <button className='addcarrinho'><img src='./images/addcarrinho.png'/></button>
            </div>
        </div>
      </div>
    </div>
  );
};
