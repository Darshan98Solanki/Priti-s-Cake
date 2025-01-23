import express from 'express'
import cors from 'cors'
import "dotenv/config"
import multer from 'multer';
import zod from 'zod'


const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
})

const storage = multer.diskStorage({
    // destination: './',
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const CakeSchema = zod.object({
    name: zod.string({message:"Cake is required"}).min(3, { message: "Cake name should be greater than 3 characters" }),
    halfKgPrice: zod.string({message:"Cake half kg price is required"}).min(1, { message: "Cake price should be greater than 0" }),
    oneKgPrice: zod.string({message:"Cake one kg price is required"}).min(1, { message: "Cake price should be greater than 0" })
})

const upload = multer({ storage });
const app = express()
const port = 3000


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post("/upload", upload.single('image'), async (req, res) => {

    const parseData = CakeSchema.safeParse(req.body)
    const image = req.file

    if(!parseData.success || !image){
        res.json({message: parseData.error?.errors[0].message})
        return
    }


    try {
        if (image) {
            const response = await cloudinary.uploader.upload(image.path, {
                folder: 'images',
            })
            res.status(201).json({ image: { public_id: response.public_id, url: response.secure_url } });
        } else {
            res.status(404).json({message:"Image not found"})
            return
        }
    } catch {
        res.status(500).json({ error: 'Internal Server Error' });
        return
    }
})

app.listen(port)