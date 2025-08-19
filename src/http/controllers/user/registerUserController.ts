import type { FastifyReply, FastifyRequest } from "fastify";
import { userRegisterSchema } from "../../../schemas/user/userRegisterSchema.js";
import { registerUserUseCase } from "../../../../useCases/user/registerUserUseCase.js";
import  EmailService  from "../../../service/EmailService.js";

export async function registerUserController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const {
      email,
      password,
      name,
      birthdate,
      gender,
      phone,
      address,
      documentId,
    } = userRegisterSchema.parse(request.body);

    const result = await registerUserUseCase({
      email,
      password,
      name,
      birthdate,
      gender,
      phone,
      address,
      documentId,
    });

    if(!result){

      const emailService = new EmailService()
      try { 
        // TODO validation code:
        await emailService.sendVerificationEmail(email, "24852")
      } catch (error) {
        console.log("🔴 Error to send email in RegisterUserController" + error)
      }
      

      return reply.status(201).send({message: "Usuário criado com sucesso! Verifique seu email para ativar sua conta!"})
    }

    return reply.status(400).send({message: "Não foi possivel criar sua conta"})

  } catch (e) {
    return reply.status(400).send({ message: "Erro ao validar os dados" + e});
  }
}
