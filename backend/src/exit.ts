import express, { Express } from "express";
import router from "./3-routes/router";
// Definições do Servidor
const server:Express = express()
const port = 3005
server.use(express.json())
server.use('/',router)
// Lancamento do Servidor 
server.listen(port, () => {
    console.log(`Servidor lançado e ativo na porta ${port}! Pronto pra receber requisições!`)
})
