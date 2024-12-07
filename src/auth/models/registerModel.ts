import { z } from "zod";


export const registerModel = z.object({
    name: z.string().min(3, `Name is required`),
    email: z.string().email(`Insert valid email`),
    password: z.string().min(6, `Password must be 6 chrs min`)
});

export type registerModelType = z.infer<typeof registerModel>;