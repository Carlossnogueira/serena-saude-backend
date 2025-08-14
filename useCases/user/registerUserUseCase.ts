import { PrismaUserReposity } from "../../src/repositories/userRepository.js";
import type { userRegisterSchema } from "../../src/schemas/user/userRegisterSchema.js";

export async function registerUserUseCase({
  email,
  password,
  name,
  birthdate,
  gender,
  phone,
  address,
  documentId,
}: userRegisterSchema) {

    const userRepository = new PrismaUserReposity();

    const user = {
        email,
        passwordHash: password,
        name,
        birthDate: birthdate,
        gender,
        phone,
        address,
        documentId
    }

    try {
        const result = userRepository.create(user)
        if (!result) return true;

        return false;
    } catch (error) {
        console.log("🔴 Error when create an user!")
        return false;
    }

}
