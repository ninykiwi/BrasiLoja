import express, { Router, json } from "express"
import cors from 'cors'
import { get_product_by_name, get_product_by_category, make_product, delete_product,edit_product, get_product_by_id, get_all_products } from "../2-controllers/controllers"
// Roteamento dos processos 
const router = Router()
router.use(json())
router.use(cors())
// Definir rotas dos produtos abaixo ->
router.get('/get_all_products', get_all_products)
router.get('/get_product_by_id/:id', get_product_by_id)
router.get('/search_by_name', get_product_by_name)
router.get('/filter_by_tag', get_product_by_category)
router.post('/make_product', make_product) 
router.put('/edit_product', edit_product)
router.delete('/delete_product', delete_product)

export default router
