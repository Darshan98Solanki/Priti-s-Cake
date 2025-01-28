"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const default_index_1 = require("@prisma/client/scripts/default-index");
const extension_accelerate_1 = require("@prisma/extension-accelerate");
const prisma = new default_index_1.PrismaClient({
    datasourceUrl: process.env.DATABASE_URL,
}).$extends((0, extension_accelerate_1.withAccelerate)());
exports.default = prisma;
