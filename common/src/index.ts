import zod from 'zod'

// init zod schema for cake
export const cakeSchema = zod.object({
    name: zod.string({ message: "Cake is required" }).min(3, { message: "Cake name should be greater than 3 characters" }),
    halfKgPrice: zod.string({ message: "Cake half kg price is required" }).min(1, { message: "Cake price should be greater than 0" }),
    oneKgPrice: zod.string({ message: "Cake one kg price is required" }).min(1, { message: "Cake price should be greater than 0" })
})

export const updateCakeSchema = zod.object({
    id: zod.string({ message: "Cake id is required" }),
    name: zod.string({ message: "Cake name is required" }).min(3, { message: "Cake name should be greater than 3 characters" }),
    halfKgPrice: zod.string({ message: "Cake half kg price is required" }).min(1, { message: "Cake price should be greater than 0" }),
    oneKgPrice: zod.string({ message: "Cake one kg price is required" }).min(1, { message: "Cake price should be greater than 0" }),
    publicId: zod.string({ message: "Cake image id is required" })
})

export const removeCakeSchema = zod.object({
    id: zod.string({ message: "Cake id is required" }),
    publicId: zod.string({ message: "Cake image id is required" })
})

export type CakeSchema = zod.infer<typeof cakeSchema> 
export type UpdateCakeSchema = zod.infer<typeof updateCakeSchema> 
export type RemoveCakeSchema = zod.infer<typeof removeCakeSchema> 