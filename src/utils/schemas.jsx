import { z } from "zod";
export const registerSchema = z
  .object({
    email: z.string().email("Email ไม่ถูกต้อง"),
    password: z.string().min(6, "Password ต้องมีอย่างน้อย 6 ตัวอักษร"),
    firstname: z.string().min(3, "Firstname ต้องมีอย่างน้อย 3 ตัวอักษร"),
    lastname: z.string().min(3, "Lastname ต้องมีอย่างน้อย 3 ตัวอักษร"),
    confirmPassword: z
      .string()
      .min(6, "Confirm Password ต้องมีอย่างน้อย 6 ตัวอักษร"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password และ Confirm Password ต้องตรงกัน",
    path: ["confirmPassword"], // ระบุ path ที่ error ควรแสดง
  });
export const loginSchema = z
  .object({
    email: z.string().email("Email ไม่ถูกต้อง"),
    password: z.string().min(6, "Password ต้องมีอย่างน้อย 6 ตัวอักษร"),
  })

