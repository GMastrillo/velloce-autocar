import { z } from "zod";

export const vehicleSchema = z.object({
  title: z.string().min(3, "Título deve ter pelo menos 3 caracteres"),
  brand: z.string().min(1, "Marca é obrigatória"),
  model: z.string().min(1, "Modelo é obrigatório"),
  year: z.coerce.number().int().min(1990).max(new Date().getFullYear() + 1),
  yearModel: z.coerce.number().int().min(1990).max(new Date().getFullYear() + 1),
  price: z.coerce.number().positive("Preço deve ser maior que zero"),
  fipePrice: z.coerce.number().positive().optional().nullable(),
  mileage: z.coerce.number().int().min(0, "Quilometragem não pode ser negativa"),
  fuelType: z.enum(["GASOLINE", "ETHANOL", "FLEX", "DIESEL", "HYBRID", "ELECTRIC"]),
  transmission: z.enum(["MANUAL", "AUTOMATIC", "CVT", "DSG", "PDK", "SEQUENTIAL"]),
  color: z.string().min(1, "Cor é obrigatória"),
  doors: z.coerce.number().int().min(2).max(5),
  description: z.string().optional(),
  images: z.array(z.string().url("URL de imagem inválida")).min(1, "Pelo menos uma imagem é obrigatória"),
  features: z.array(z.string()).optional(),
  category: z.enum(["PREMIUM", "LEVE", "MOTOS"]).default("LEVE"),
  status: z.enum(["AVAILABLE", "RESERVED", "SOLD", "DRAFT"]).default("AVAILABLE"),
  location: z.string().default("BALNEÁRIO CAMBORIÚ, SC"),
  isFeatured: z.boolean().default(false),
});

export const leadSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  phone: z.string().min(10, "Telefone inválido").max(15),
  email: z.string().email("E-mail inválido").optional().or(z.literal("")),
  message: z.string().optional(),
  vehicleId: z.string().optional(),
  source: z.string().default("WEBSITE"),
});

export const loginSchema = z.object({
  email: z.string().email("E-mail inválido"),
  password: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
});

export const userSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("E-mail inválido"),
  password: z.string().min(8, "Senha deve ter pelo menos 8 caracteres"),
  role: z.enum(["ADMIN", "MANAGER"]).default("ADMIN"),
});

export type VehicleFormData = z.infer<typeof vehicleSchema>;
export type LeadFormData = z.infer<typeof leadSchema>;
export type LoginFormData = z.infer<typeof loginSchema>;
export type UserFormData = z.infer<typeof userSchema>;