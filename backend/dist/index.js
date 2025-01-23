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
const zod_1 = __importDefault(require("zod"));
const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});
const storage = multer_1.default.diskStorage({
    // destination: './',
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
const CakeSchema = zod_1.default.object({
    name: zod_1.default.string({ message: "Cake is required" }).min(3, { message: "Cake name should be greater than 3 characters" }),
    halfKgPrice: zod_1.default.string({ message: "Cake half kg price is required" }).min(1, { message: "Cake price should be greater than 0" }),
    oneKgPrice: zod_1.default.string({ message: "Cake one kg price is required" }).min(1, { message: "Cake price should be greater than 0" })
});
const upload = (0, multer_1.default)({ storage });
const app = (0, express_1.default)();
const port = 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.post("/upload", upload.single('image'), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const parseData = CakeSchema.safeParse(req.body);
    const image = req.file;
    if (!parseData.success || !image) {
        res.json({ message: (_a = parseData.error) === null || _a === void 0 ? void 0 : _a.errors[0].message });
        return;
    }
    try {
        if (image) {
            const response = yield cloudinary.uploader.upload(image.path, {
                folder: 'images',
            });
            res.status(201).json({ image: { public_id: response.public_id, url: response.secure_url } });
        }
        else {
            console.log("no image found");
        }
    }
    catch (_b) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
    finally {
        // fs.unlinkSync(image.path);
    }
}));
app.listen(port);
