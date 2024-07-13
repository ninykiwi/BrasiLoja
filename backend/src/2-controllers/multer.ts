import multer from "multer"
// Setup do Multer - Middleware de processar Arquivos e objetos
const storage = multer.diskStorage({
    destination: function(req,res,cb) {
        cb(null, 'uploads/')
    },
    filename: function(req,file,cb){
        cb(null, file.originalname)
    },
})
const upload = multer({ storage })
export default upload 