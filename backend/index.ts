import express from 'express'
import cors from 'cors'
import "dotenv/config"
import multer from 'multer'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { Prisma, PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { cakeSchema, removeCakeSchema, updateCakeSchema } from '@darshan98solanki/pritis-cake'
import middlewear from './middlewear'

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

// some extra stuff
const upload = multer({ storage });
const app = express()
const port = 3000


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// add cake api
app.post("/cake", middlewear, upload.single('image'), async (req, res) => {

    const parseData = cakeSchema.safeParse(req.body)
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
                    return
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

// update cake api
app.put('/cake', middlewear, upload.single('image'), async (req, res) => {

    const parseData = updateCakeSchema.safeParse(req.body)

    if (!parseData.success) {
        res.json({ message: parseData.error?.errors[0].message })
        return
    } else {
        const image = req.file
        const id = parseData.data?.id

        const prisma = new PrismaClient({
            datasourceUrl: process.env.DATABASE_URL,
        }).$extends(withAccelerate())

        try {

            if (image) {

                await cloudinary.uploader.destroy(parseData.data.publicId);

                const response = await cloudinary.uploader.upload(image.path, {
                    public_id: parseData.data.publicId,
                    invalidate: true,
                    folder: 'images',
                })

                await prisma.cake.update({
                    data: {
                        name: parseData.data.name,
                        halfKgPrice: Number(parseData.data.halfKgPrice),
                        OneKgPrice: Number(parseData.data.oneKgPrice),
                        // publicId: response.public_id,
                        // Image: response.secure_url
                    },
                    where: {
                        id: parseData.data.id
                    }
                })
                res.status(201).json({ message: "cake details updated successfully" });
                return
            } else {

                await prisma.cake.update({
                    data: {
                        name: parseData.data.name,
                        halfKgPrice: Number(parseData.data.halfKgPrice),
                        OneKgPrice: Number(parseData.data.oneKgPrice),
                    },
                    where: {
                        id: parseData.data.id
                    }
                })

                res.json({ message: "Cake details updated successfully" })
                return
            }
        } catch {
            res.status(500).json({ error: 'Internal Server Error' });
            return
        }

    }

})

// get all cakes api
app.get("/cakes", async (req, res) => {

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

// get cake by id api
app.get("/cake/:id", async (req, res) => {

    const cakeId = req.params.id

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

// delete cake api
app.delete("/cake", middlewear, async (req, res) => {

    const id = req.query.id as string
    const publicId = req.query.publicId as string

    const parseData = removeCakeSchema.safeParse({
        id, publicId
    })

    if (!parseData.success) {
        console.log(parseData.error, req.body)
        res.json({ message: parseData.error?.errors[0].message })
        return
    } else {

        try {

            const prisma = new PrismaClient({
                datasourceUrl: process.env.DATABASE_URL,
            }).$extends(withAccelerate())

            await cloudinary.uploader.destroy(publicId);
            await prisma.cake.delete({
                where: {
                    id
                }
            })

            res.status(200).json({
                message: "Cake Delete Successfully"
            })

        } catch {
            res.status(500).json({ error: 'Internal Server Error' });
            return
        }

    }

})

// create user api
app.post("/user", async (req, res) => {

    const username = req.body.username
    const password = req.body.password


    if (!username || !password) {
        res.status(401).json({ message: "Please enter valid username and password" })
        return
    } else {

        try {

            const prisma = new PrismaClient({
                datasourceUrl: process.env.DATABASE_URL,
            }).$extends(withAccelerate())

            const encryptedPass = await bcrypt.hash(password, 10)
            const user = await prisma.user.create({
                data: {
                    email: username,
                    password: encryptedPass
                }
            })

            if (user) {
                res.status(200).json({ message: "User created successfully" })
                return
            }

        } catch {
            res.status(500).json({ message: "Internal Server Error" })
            return
        }
    }

})

app.post("/signin", async (req, res) => {

    const username = req.body.username
    const password = req.body.password


    if (!username || !password) {
        res.status(401).json({ message: "Please enter valid username and password" })
        return
    } else {

        try {

            const prisma = new PrismaClient({
                datasourceUrl: process.env.DATABASE_URL,
            }).$extends(withAccelerate())

            const user = await prisma.user.findFirst({
                where: {
                    email: username
                },
                select: {
                    password: true
                }
            })

            if (user) {

                bcrypt.compare(password, user.password, async (err, resJWT) => {

                    if (resJWT) {
                        const token = await jwt.sign({
                            email: username
                        }, process.env.JWT_SECRET)

                        res.status(200).json({ token })
                        return
                    } else {
                        res.status(401).json({ message:"Invalid password"})
                        return
                    }

                })

            } else {
                res.status(404).json({ message: "User not found" })
                return
            }

        } catch (e) {
            console.log(e)
            res.status(500).json({ message: "Internal serve error" })
            return
        }

    }

})

app.listen(port)