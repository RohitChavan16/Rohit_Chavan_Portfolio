import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  projectType: z.string().trim().max(120).optional().default(""),
  message: z.string().trim().min(10).max(2000),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;
