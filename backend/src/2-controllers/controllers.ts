import prisma from './../prisma'
import { Response, Request } from 'express'
import upload from './multer'
/*  Funções do Servidor - Protocolo HTTP ---> Por enquanto são apenas as funções CRUD dos Produtos. 
    Feito (E por enquanto mantido) por Cristiano Santos Ribeiro Filho A.K.A. Cris - Find me on @cristiano-s-r-filho in Github 
    1 - Rota de Post de um Produto: */
export async function make_product(req:Request, res:Response){
    try {
        const {prod_name, prod_price, prod_quant, prod_cat, prod_brand} = req.body
        // Validação - Nome, Preço, Quantidade, Categoria, Marca 
        
        /* if(String(prod_price).match(/[A-Z,a-z,*]/)){
            throw new Error('O preço deve ser um valor numerico')
        }
        if(String(prod_quant).match(/[A-Z,a-z,*]/)){
            throw new Error('O preço deve ser um valor numerico')
        } */
        // Validação - Existência do Produto :
        /*const CheckProduct = await prisma.product.findMany({where:{name:prod_name, brand:prod_brand, category:prod_cat}})
        if(CheckProduct !== null) {
            throw new Error ('Produto já foi cadastrado!')
        } */
        // Resposta padrão: 
        const MakeProduct = await prisma.product.create({
            data:{
                name: prod_name,
                price: Number(prod_price),
                quantity: Number(prod_quant),
                category: prod_cat,
                brand: prod_brand
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
        // Validação - Existência do produto
        /*const DoesNameCounts = await prisma.product.findFirst({where:{name:prod_name}})
        if(DoesNameCounts == null){
            throw new Error('Não há entrada deste produto na database')
        }*/
        // Resposta Padrão 
        const GetProduct = await prisma.product.findMany({where:{name:prod_name}})
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
        // Validação - Existência do Registro
        /*const DoesRegisterExist = await prisma.product.findFirst({where:{id:prod_id}})
        if(DoesRegisterExist == null){
            throw new Error('Registro de produto inexistente!')
        }*/
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
        //Validação - Existência do Registro 
        /* const DoesRegisterExist = await prisma.product.findFirst({where:{id:prod_id}})
        if(DoesRegisterExist == null){
            throw new Error('Registro do produto inexistente!')
        }*/ 
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
        //Validação - Existência da categoria 
        /* const CategoryList = await prisma.product.findMany({select:{category:true}})
        const DoesCategoryExists = CategoryList.find((category) => category == prod_cat)
        if (DoesCategoryExists?.category == undefined){
            throw new Error('Categoria Inexistente!')
        }*/
        // Resposta Padrão 
        const GetProductList = await prisma.product.findMany({where:{category:prod_cat}})
        res.status(200).json({msg:`Segue abaixo a lista de todos os produtos da categoria ${prod_cat}`, list: GetProductList})
    } catch (error:any) {
        console.log(error)
        res.status(400).json({msg:'ERRO! Ocorreu um erro ao tentar pegar os produtos da categoria', err: error})
    }
}


