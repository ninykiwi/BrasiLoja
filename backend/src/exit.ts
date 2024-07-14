import express, { Express } from "express";
import router from "./3-routes/router";
import path from 'path'
import upload from "./2-controllers/multer";
import { add_main_img } from "./2-controllers/controllers";

// Definições do Servidor
const server:Express = express()
const port = 3005
server.use(express.json())
server.use('/uploads', express.static(path.join(__dirname,'uploads')))
server.use('/',router)
// Lancamento do Servidor 
server.listen(port, () => {
    console.log(`Servidor lançado e ativo na porta ${port}! Pronto pra receber requisições!`)
})
