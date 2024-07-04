import express, { Router, json } from "express"
import cors from 'cors'
import { get_product_by_name, get_product_by_category, make_product, delete_product,edit_product} from "../2-controllers/controllers"
// Roteamento dos processos 
const router = Router()
router.use(json())
router.use(cors())
// Definir rotas dos produtos abaixo ->
router.post('/make_product', make_product) 
router.get('/search_by_name', get_product_by_name)
router.get('/filter_by_tag', get_product_by_category)
router.put('/edit_product', edit_product)
router.delete('/delete_product', delete_product)

export default router
