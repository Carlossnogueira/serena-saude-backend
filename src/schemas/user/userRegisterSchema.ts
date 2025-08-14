import { z } from "zod";

export const userRegisterSchema = z.object({
  email: z.email("Entre um email válido!"),
  password: z
    .string("A senha não pode ser nula")
    .min(8, "A senha deve conter 8 caracteres")
    .max(15, "A senha deve conter no maximo caracteres"),
  name: z
    .string("É nescessário o nome completo")
    .min(3, "o nome deve conter no minimo 3 caracteres")
    .max(50, "O nome deve ter no maximo 50 letras"),
  birthdate: z.coerce.date("Entre com sua data de nascimento"),
  gender: z.enum(
    ["MALE", "FEMALE", "PREFER_NOT_TO_SAY"],
    "O genêro é obrigatório"
  ),
  phone: z
    .string()
    .regex(
      /^\+55 \(\d{2}\) \d{5}-\d{4}$/,
      "Telefone inválido. Use o formato +55 (XX) 00000-0000"
    ),
    address: z.string("Endereço não pode ser nulo"),
    documentId: z.string("entre com o seu CPF")
});


export type userRegisterSchema = z.infer<typeof userRegisterSchema>;