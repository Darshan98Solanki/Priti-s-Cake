import express from 'express'
import cors from 'cors'
import "dotenv/config"
import multer from 'multer';
import zod from 'zod'
import { Prisma, PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate'

// init cloudinary data
const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
})

// set-up multer storage
const storage = multer.diskStorage({
    // destination: './',
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

// init zod schema for cake
const CakeSchema = zod.object({
    name: zod.string({ message: "Cake is required" }).min(3, { message: "Cake name should be greater than 3 characters" }),
    halfKgPrice: zod.string({ message: "Cake half kg price is required" }).min(1, { message: "Cake price should be greater than 0" }),
    oneKgPrice: zod.string({ message: "Cake one kg price is required" }).min(1, { message: "Cake price should be greater than 0" })
})

const UpdateCakeSchema = zod.object({
    id: zod.string({ message: "Cake is id required" }),
    name: zod.string({ message: "Cake is required" }).min(3, { message: "Cake name should be greater than 3 characters" }),
    halfKgPrice: zod.string({ message: "Cake half kg price is required" }).min(1, { message: "Cake price should be greater than 0" }),
    oneKgPrice: zod.string({ message: "Cake one kg price is required" }).min(1, { message: "Cake price should be greater than 0" }),
    publicId: zod.string({ message: "Cake image id is required" })
})

// some extra stuff
const upload = multer({ storage });
const app = express()
const port = 3000


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// add cake 
app.post("/cake", upload.single('image'), async (req, res) => {

    const parseData = CakeSchema.safeParse(req.body)
    const image = req.file

    if (!parseData.success || !image) {
        res.json({ message: parseData.error?.errors[0].message })
        return
    } else {
        const prisma = new PrismaClient({
            datasourceUrl: process.env.DATABASE_URL,
        }).$extends(withAccelerate())

        try {
            if (image) {
                const response = await cloudinary.uploader.upload(image.path, {
                    folder: 'images',
                })

                try {
                    await prisma.cake.create({
                        data: {
                            name: parseData.data.name,
                            halfKgPrice: Number(parseData.data.halfKgPrice),
                            OneKgPrice: Number(parseData.data.oneKgPrice),
                            publicId: response.public_id,
                            Image: response.secure_url
                        }
                    })
                    res.status(201).json({ message: "cake added successfully" });
                } catch (err) {
                    if (err instanceof Prisma.PrismaClientKnownRequestError) {
                        // The .code property can be accessed in a type-safe manner
                        if (err.code === 'P2002') {
                            await cloudinary.uploader.destroy(response.public_id);
                            res.status(409).json({ message: 'Cake name should be unique' });
                            return
                        }
                    }
                }
            } else {
                res.status(404).json({ message: "Image not found" })
                return
            }
        } catch {
            res.status(500).json({ error: 'Internal Server Error' });
            return
        }
    }
})

// update the cake
app.put('/cake', upload.single('image'),(req, res)=>{



})

// get all cakes
app.get("/cakes", upload.single('image'), async (req, res) => {

    const filter = req.query.filter as string || ""

    try {
        const prisma = new PrismaClient({
            datasourceUrl: process.env.DATABASE_URL,
        }).$extends(withAccelerate())

        const cakes = await prisma.cake.findMany({
            where: {
                name: {
                    contains: filter,
                    mode: 'insensitive'
                },
            }
        })

        res.status(200).json({
            data: cakes
        })
        return

    } catch {

        res.status(500).json({ error: 'Internal Server Error' });
        return

    }

})

// get cake by id
app.get("/cake/:id", async (req, res) => {

    const cakeId = req.params.id;

    try {
        const prisma = new PrismaClient({
            datasourceUrl: process.env.DATABASE_URL,
        }).$extends(withAccelerate())

        const cakes = await prisma.cake.findMany({
            where: {
                id: cakeId
            }
        })

        res.status(200).json({
            data: cakes
        })
        return

    } catch {

        res.status(500).json({ error: 'Internal Server Error' });
        return

    }

})

app.listen(port)