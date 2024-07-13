import express, { Router, json } from "express"
import cors from 'cors'
import { get_product_by_name, get_product_by_category, make_product, delete_product,edit_product,get_product_by_id, get_all, add_main_img, get_img_1,get_img_2,get_img_3,get_img_4,get_main_img,add_img_first,add_img_fourth,add_img_second,add_img_third, get_all_products, add_to_shopcar,delete_from_shopcar,get_from_shopcar} from "../2-controllers/controllers"
import upload from "../2-controllers/multer"
const path = require('path')
// Roteamento dos processos 
const router = Router()
router.use(json())
router.use(cors())
router.use('/uploads', express.static(path.join(__dirname,'uploads/')))
// Definir rotas dos produtos abaixo ->
router.post('/make_product', make_product) 
router.post('/add_product_to_shopcar',add_to_shopcar)
router.get('/get_product_by_id/:id', get_product_by_id)
router.get('/get_shopcar', get_from_shopcar)
router.get('/search_by_name', get_product_by_name)
router.get('/filter_by_tag', get_product_by_category) 
router.get('/search_by_name/:name', get_product_by_name)
router.get('/filter_by_category/:category', get_product_by_category) 
router.get('/get_all', get_all)
router.get('/get_main_img',get_main_img)
router.get('/get_img_1',get_img_1)
router.get('/get_img_2',get_img_2)
router.get('/get_img_3',get_img_3)
router.get('/get_img_4',get_img_4)
// Rotas Put
router.put('/add_main', upload.single('image'), add_main_img )
router.put('/add_img_1',upload.single('image'), add_img_first)
router.put('/add_img_2',upload.single('image'), add_img_second)
router.put('/add_img_3',upload.single('image'), add_img_third)
router.put('/add_img_4',upload.single('image'), add_img_fourth)
router.put('/edit_product', edit_product)
// Rotas Delete
router.delete('/delete_product', delete_product)
router.delete('/delete_from_shopcar', delete_from_shopcar)

export default router
