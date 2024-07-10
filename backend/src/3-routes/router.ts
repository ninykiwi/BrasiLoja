import express, { Router, json } from "express"
import cors from 'cors'
import { get_product_by_name, get_product_by_category, make_product, delete_product,edit_product, get_all, add_main_img} from "../2-controllers/controllers"
import upload from "../2-controllers/multer"

// Roteamento dos processos 
const router = Router()
router.use(json())
router.use(cors())
// Definir rotas dos produtos abaixo ->
// Rotas Post
router.post('/make_product', make_product) 
// Rotas Get 
router.get('/get_product_by_id/:id', get_product_by_id)
router.get('/search_by_name', get_product_by_name)
router.get('/filter_by_tag', get_product_by_category)
router.get('/get_all',get_all)
// Rotas Put
router.put('/add_main', upload.single('image'),add_main_img )
router.put('/edit_product', edit_product)
// Rotas Delete
router.delete('/delete_product', delete_product)

export default router
