const multer = require('multer')
const armazenamento = multer.diskStorage(
    {
        destination:(req,file,cb)=>{
            cb(null,'./assets/image/')
        },
        filename:(req,file,cb)=>{
            cb(null,Date.now()+file.originalname)
        }
    }
)

var upload = multer({storage:armazenamento})

module.exports = upload