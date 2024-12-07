import { z } from "zod";


export const loginModel = z.object({
    email: z.string().email(`Insert valid email`),
    password: z.string().min(6, `Password must be 6 chrs min`)
});

export type LoginModelType = z.infer<typeof loginModel>;