import prisma from './../prisma'
import { Response, Request } from 'express' 
const path = require('path')
/*  Funções do Servidor - Protocolo HTTP ---> Por enquanto são apenas as funções CRUD dos Produtos. 
    Feito (E por enquanto mantido) por Cristiano Santos Ribeiro Filho A.K.A. Cris - Find me on @cristiano-s-r-filho in Github 
    1 - Rota de Post de um Produto: */
export async function make_product(req:Request, res:Response){
    try {
        const {prod_name, prod_price, prod_quant, prod_cat, prod_brand, main_img, img_1, img_2, img_3, img_4} = req.body 
        // Resposta padrão: 
        const MakeProduct = await prisma.product.create({
            data:{
                name: prod_name,
                price: Number(prod_price),
                quantity: Number(prod_quant),
                category: prod_cat,
                brand: prod_brand,
                mainImg: main_img,
                img1: img_1,
                img2: img_2,
                img3: img_3,
                img4: img_4,
        }})
        res.status(200).json({msg:'Produto cadastrado na Database', product: MakeProduct})
    } catch (error:any) {
        console.log(error)
        res.status(400).json({msg:"ERRO! Ocorreu um erro ao cadastrar seu produto", err: error})
    }
}
//  2 - Rota de retornar um produto pelo nome 
export async function get_product_by_name(req:Request, res:Response){
    try {
        const {prod_name} = req.body
        // Resposta Padrão 
        const GetProduct = await prisma.product.findMany({where:{name:{contains:String(prod_name)}}})
        res.status(200).json({msg:"Aqui estão os produtos com esse nome", list: GetProduct})
    } catch (error:any) {
        console.log(error)
        res.status(400).json({msg:'ERRO! Ocorreu um erro ao pegar o seu produto na database', err:error })
    }
}
//  3 - Rota de Editar um Produto 
export async function edit_product(req:Request,res:Response) {
    try {
        const {prod_id, prod_name,prod_price,prod_quant,prod_cat,prod_brand} = req.body
        // Validação - Nome, Preço, Quantidade, Categoria, Marca 
        if(String(prod_name).match(/[*,!,@,#,$,%]/) != null ){
            throw new Error('Nome do produto não pode conter Caracteres Especiais')
        }
        if(String(prod_price).match(/[A-Z,a-z,*]/)){
            throw new Error('O preço deve ser um valor numerico')
        }
        if(String(prod_quant).match(/[A-Z,a-z,*]/)){
            throw new Error('O preço deve ser um valor numerico')
        }
        // Resposta Padrão 
        const UpdateProductRegister = await prisma.product.update({where:{id:prod_id},
            data:{
                name:prod_name,
                category:prod_cat,
                brand:prod_brand,
                price:prod_price,
                quantity:prod_quant
            }})
        res.status(200).json({msg:'Produto Atualizado com Sucesso!', register:UpdateProductRegister})
    } catch (error:any) {
        console.log(error)
        res.status(400).json({msg:'ERRO! Ocorreu um erro ao tentar atualizar o seu produto na database', err:error })
    }
}
// 4 - Rota para deletar um registro :
export async function delete_product (req:Request, res:Response){
    try {
        const {prod_id} = req.body
        // Resposta Padrão 
        const DeleteRegister = await prisma.product.delete({ where:{ id: Number(prod_id) } })
        res.status(200).json({msg:'Registro de Produto deletado com sucesso', register: DeleteRegister})
    } catch (error:any) {
        console.log(error)
        res.status(400).json({msg:'ERRO! Ocorreu um erro ao tentar deletar o registro deste produto', err:error})
    }
}
// 5 - Rota para retornar produtos por Categoria: 
export async function get_product_by_category(req:Request, res:Response) {
    try {
        const {prod_cat} = req.body
        // Resposta Padrão 
        const GetProductList = await prisma.product.findMany({where:{category:prod_cat}})
        res.status(200).json({msg:`Segue abaixo a lista de todos os produtos da categoria ${prod_cat}`, list: GetProductList})
    } catch (error:any) {
        console.log(error)
        res.status(400).json({msg:'ERRO! Ocorreu um erro ao tentar pegar os produtos da categoria', err: error})
    }
}
// Rota 6 - Fetch em todos os produtos da database 
export async function get_all(req:Request,res:Response) {
    try {
        const GetAll = await prisma.product.findMany()
        if (!GetAll) {
          return console.log('Nenhum produto no banco de dados')
        }
        res.status(200).send(GetAll)
    } catch (error:any) {
        console.log(error)
        res.status(400).json({msg: "ERRO! Ocorreu um erro ao tentar pegar os produtos da categoria", err: error})
    }
}
// Rota de adicionar imagem a um produto pelo Multer 
export async function add_main_img(req:Request, res: Response) {
    try {
        const id_for_edit = req.body.id 
        const imagePathMain = String(req.file?.path)
        const InjectImageonDB = await prisma.product.update({where:{id:Number(id_for_edit)}, data:{
            mainImg:imagePathMain
        }})
        res.status(200).json({msg:'Imagem Principal adicionada', obj:InjectImageonDB })
    } catch (error:any) {
        console.log(error)
        res.status(400).json({msg:'ERRO! A imagem não pode ser colocada no server!', err:error})
    }
}

// On Test - Rota de adicionar imagem N1
export async function add_img_first(req:Request, res: Response) {
    try {
        const id_for_edit = req.body.id
        const imagePathFst = req.file?.path
        const InjectImageonDB = await prisma.product.update({where:{id:Number(id_for_edit)}, data:{
             img1:imagePathFst
        }})
        res.status(200).json({msg:'Imagem Principal adicionada', obj:InjectImageonDB })
    } catch (error:any) {
        console.log(error)
        res.status(400).json({msg:'ERRO! A imagem não pode ser colocada no server!', err:error})
    }
}
// On Test - Rota de adicionar imagem N2 
export async function add_img_second(req:Request, res: Response) {
    try {
        const id_for_edit = req.body
        const imagePathSec = req.file?.path
        const InjectImageonDB = await prisma.product.update({where:{id:Number(id_for_edit)}, data:{
            img2:imagePathSec
        }})
        res.status(200).json({msg:'Imagem Principal adicionada', obj:InjectImageonDB })
    } catch (error:any) {
        console.log(error)
        res.status(400).json({msg:'ERRO! A imagem não pode ser colocada no server!', err:error})
    }
}
// On Test - Rota de adicionar imagem N3 
export async function add_img_third(req:Request, res: Response) {
    try {
        const id_for_edit = req.body
        const imagePathTrd = req.file?.path
        const InjectImageonDB = await prisma.product.update({where:{id:Number(id_for_edit)}, data:{
            img3:imagePathTrd
        }})
        res.status(200).json({msg:'Imagem Principal adicionada', obj:InjectImageonDB })
    } catch (error:any) {
        console.log(error)
        res.status(400).json({msg:'ERRO! A imagem não pode ser colocada no server!', err:error})
    }
}
// On Test - Rota de adicionar imagem N4 
export async function add_img_fourth(req:Request, res: Response) {
    try {
        const id_for_edit = req.body
        const imagePathFth = req.file?.path
        const InjectImageonDB = await prisma.product.update({where:{id:Number(id_for_edit)}, data:{
            img4:imagePathFth
        }})
        res.status(200).json({msg:'Imagem Principal adicionada', obj:InjectImageonDB })
    } catch (error:any) {
        console.log(error)
        res.status(400).json({msg:'ERRO! A imagem não pode ser colocada no server!', err:error})
    }
}
// On test - Rota de pegar a imagem Principal 
export async function get_main_img (req:Request,res:Response) {
    try {
        const id_for_get = req.body
        const GetMainImg = await prisma.product.findFirst({where:{id:id_for_get}, select:{mainImg:true}})
        const ImagePath = path.join('/', GetMainImg)
        res.status(200).send(ImagePath)
    } catch (error:any) {
        console.log(error)
        res.status(400).json({msg:'ERRO! A imagem não pode ser retornada do servidor', err: error})
    }
}
// On test - Rota de Pegar a IMG 1: 
export async function get_img_1 (req:Request,res:Response) {
    try {
        const id_for_get = req.body
        const GetImgFst = await prisma.product.findFirst({where:{id:id_for_get}, select:{img1:true}})
        const ImagePath = path.join('/', GetImgFst)
        res.status(200).send(ImagePath)
    } catch (error:any) {
        console.log(error)
        res.status(400).json({msg:'ERRO! A imagem não pode ser retornada do servidor', err: error})
    }
}
// On test - Rota de pegar a IMG 2: 
export async function get_img_2 (req:Request,res:Response) {
    try {
        const id_for_get = req.body
        const GetImgSec = await prisma.product.findFirst({where:{id:id_for_get}, select:{img2:true}})
        const ImagePath = path.join('/', GetImgSec)
        res.status(200).send(ImagePath)
    } catch (error:any) {
        console.log(error)
        res.status(400).json({msg:'ERRO! A imagem não pode ser retornada do servidor', err: error})
    }
}
// On teste - Rota de pegar a IMG 3: 
export async function get_img_3 (req:Request,res:Response) {
    try {
        const id_for_get = req.body
        const GetImgTrd = await prisma.product.findFirst({where:{id:id_for_get}, select:{img3:true}})
        const ImagePath = path.join('/', GetImgTrd)
        res.status(200).send(ImagePath)
    } catch (error:any) {
        console.log(error)
        res.status(400).json({msg:'ERRO! A imagem não pode ser retornada do servidor', err: error})
    }
}
// On teste - Rota de pegar a IMG 4: 
export async function get_img_4 (req:Request,res:Response) {
    try {
        const id_for_get = req.body
        const GetImgFth = await prisma.product.findFirst({where:{id:id_for_get}, select:{img4:true}})
        const Imgpath = path.join(__dirname,'1-model/uploads',GetImgFth)
        const ImagePath = path.join('/', GetImgFth)
        res.status(200).send(ImagePath)
    } catch (error:any) {
        console.log(error)
        res.status(400).json({msg:'ERRO! A imagem não pode ser retornada do servidor', err: error})
    }
}


export async function get_product_by_id (req:Request, res:Response) {
  try {
    const { id } = req.params

    const idExists = await prisma.product.findUnique({
      where: { id: Number(id) }
    })

    if (!idExists) {
      return console.log('Id de produto inválida')
    }
    
    return res.send(idExists)
  } catch (error: any) {
    console.error('Deu ruim na recuperação do produto pelo id: ', error)
  }
}

export async function get_all_products (req:Request, res:Response) {
  try {
    const allProducts = await prisma.product.findMany()

    if (!allProducts) {
      return console.log('Não há produtos cadastrados')
    }

    return res.send(allProducts)
  } catch (error: any) {
    console.error('Deu ruim na recuperação de todos os produtos: ', error)
  }
}
// Rota do Carrinho
export async function add_to_shopcar (req:Request, res: Response) { 
    try{
        const id = req.body.id
        const quant = req.body.quant
        const GetProduct = await prisma.product.findFirst({where:{id:Number(id)}})
        const productStock = GetProduct?.quantity
        const prodName = String(GetProduct?.name)
        const prodPrice = Number(GetProduct?.price)
        if(quant > Number(productStock)){
            throw new Error(`O estoque do produto é limitado, temos apenas ${productStock} unidades`)
        }
        const AddProdToShopCar = await prisma.carrinho.create({data:{
            name:prodName,
            quantity:quant,
            price:prodPrice
        }})
        res.status(200).send(AddProdToShopCar)
    }catch(error:any){
        console.log(error)
        res.status(400).send(error)
    }
}

export async function get_from_shopcar (req:Request, res:Response){
    try {
        const QueryList = await prisma.carrinho.findMany()
        res.status(200).send(QueryList)
    } catch (error:any) {
        console.log(error)
        res.status(400).send(error)
    }
}

export async function delete_from_shopcar (req:Request, res:Response){
    try {
        const prod_id = req.body.id
        const DelProdFromShopCar = await prisma.carrinho.delete({where:{id: prod_id}})
        res.status(200).send(DelProdFromShopCar)
    } catch (error:any) {
        console.log(error)
        res.status(400).send(error)
    }
}