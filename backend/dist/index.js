"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const multer_1 = __importDefault(require("multer"));
const edge_1 = require("@prisma/client/edge");
const extension_accelerate_1 = require("@prisma/extension-accelerate");
const pritis_cake_1 = require("@darshan98solanki/pritis-cake");
// init cloudinary data
const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});
// set-up multer storage
const storage = multer_1.default.diskStorage({
    // destination: './',
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
// some extra stuff
const upload = (0, multer_1.default)({ storage });
const app = (0, express_1.default)();
const port = 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// add cake api
app.post("/cake", upload.single('image'), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const parseData = pritis_cake_1.cakeSchema.safeParse(req.body);
    const image = req.file;
    if (!parseData.success || !image) {
        res.json({ message: (_a = parseData.error) === null || _a === void 0 ? void 0 : _a.errors[0].message });
        return;
    }
    else {
        const prisma = new edge_1.PrismaClient({
            datasourceUrl: process.env.DATABASE_URL,
        }).$extends((0, extension_accelerate_1.withAccelerate)());
        try {
            if (image) {
                const response = yield cloudinary.uploader.upload(image.path, {
                    folder: 'images',
                });
                try {
                    yield prisma.cake.create({
                        data: {
                            name: parseData.data.name,
                            halfKgPrice: Number(parseData.data.halfKgPrice),
                            OneKgPrice: Number(parseData.data.oneKgPrice),
                            publicId: response.public_id,
                            Image: response.secure_url
                        }
                    });
                    res.status(201).json({ message: "cake added successfully" });
                    return;
                }
                catch (err) {
                    if (err instanceof edge_1.Prisma.PrismaClientKnownRequestError) {
                        // The .code property can be accessed in a type-safe manner
                        if (err.code === 'P2002') {
                            yield cloudinary.uploader.destroy(response.public_id);
                            res.status(409).json({ message: 'Cake name should be unique' });
                            return;
                        }
                    }
                }
            }
            else {
                res.status(404).json({ message: "Image not found" });
                return;
            }
        }
        catch (_b) {
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
    }
}));
// update cake api
app.put('/cake', upload.single('image'), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const parseData = pritis_cake_1.updateCakeSchema.safeParse(req.body);
    if (!parseData.success) {
        res.json({ message: (_a = parseData.error) === null || _a === void 0 ? void 0 : _a.errors[0].message });
        return;
    }
    else {
        const image = req.file;
        const id = (_b = parseData.data) === null || _b === void 0 ? void 0 : _b.id;
        const prisma = new edge_1.PrismaClient({
            datasourceUrl: process.env.DATABASE_URL,
        }).$extends((0, extension_accelerate_1.withAccelerate)());
        try {
            if (image) {
                yield cloudinary.uploader.destroy(parseData.data.publicId);
                const response = yield cloudinary.uploader.upload(image.path, {
                    public_id: parseData.data.publicId,
                    invalidate: true,
                    folder: 'images',
                });
                yield prisma.cake.update({
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
                });
                res.status(201).json({ message: "cake details updated successfully" });
                return;
            }
            else {
                yield prisma.cake.update({
                    data: {
                        name: parseData.data.name,
                        halfKgPrice: Number(parseData.data.halfKgPrice),
                        OneKgPrice: Number(parseData.data.oneKgPrice),
                    },
                    where: {
                        id: parseData.data.id
                    }
                });
                res.json({ message: "Cake details updated successfully" });
                return;
            }
        }
        catch (_c) {
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
    }
}));
// get all cakes api
app.get("/cakes", upload.single('image'), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filter = req.query.filter || "";
    try {
        const prisma = new edge_1.PrismaClient({
            datasourceUrl: process.env.DATABASE_URL,
        }).$extends((0, extension_accelerate_1.withAccelerate)());
        const cakes = yield prisma.cake.findMany({
            where: {
                name: {
                    contains: filter,
                    mode: 'insensitive'
                },
            }
        });
        res.status(200).json({
            data: cakes
        });
        return;
    }
    catch (_a) {
        res.status(500).json({ error: 'Internal Server Error' });
        return;
    }
}));
// get cake by id api
app.get("/cake/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const cakeId = req.params.id;
    try {
        const prisma = new edge_1.PrismaClient({
            datasourceUrl: process.env.DATABASE_URL,
        }).$extends((0, extension_accelerate_1.withAccelerate)());
        const cakes = yield prisma.cake.findMany({
            where: {
                id: cakeId
            }
        });
        res.status(200).json({
            data: cakes
        });
        return;
    }
    catch (_a) {
        res.status(500).json({ error: 'Internal Server Error' });
        return;
    }
}));
// delete cake api
app.delete("/cake", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const id = req.query.id;
    const publicId = req.query.publicId;
    const parseData = pritis_cake_1.removeCakeSchema.safeParse({
        id, publicId
    });
    if (!parseData.success) {
        console.log(parseData.error, req.body);
        res.json({ message: (_a = parseData.error) === null || _a === void 0 ? void 0 : _a.errors[0].message });
        return;
    }
    else {
        try {
            const prisma = new edge_1.PrismaClient({
                datasourceUrl: process.env.DATABASE_URL,
            }).$extends((0, extension_accelerate_1.withAccelerate)());
            yield cloudinary.uploader.destroy(publicId);
            yield prisma.cake.delete({
                where: {
                    id
                }
            });
            res.status(200).json({
                message: "Cake Delete Successfully"
            });
        }
        catch (_b) {
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
    }
}));
app.listen(port);
