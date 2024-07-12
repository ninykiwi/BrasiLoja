import multer from "multer"
// Setup do Multer - Middleware de processar Arquivos e objetos
const myStorage = multer.diskStorage({
destination(req, file, callback) {
    callback(null,'uploads/')
}, 
filename(req, file, callback) {
    callback(null,file.originalname)
},})

const upload = multer({storage: myStorage})

export default upload 