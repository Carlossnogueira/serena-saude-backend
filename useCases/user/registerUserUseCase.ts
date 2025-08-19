import { PrismaUserReposity } from "../../src/repositories/userRepository.js";
import type { userRegisterSchema } from "../../src/schemas/user/userRegisterSchema.js";
import { EncryptPasswordService } from "../../src/service/EncryptService.js";

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
    const encryptService = new EncryptPasswordService();

    const user = {
        email,
        passwordHash: await encryptService.generateHash(password),
        name,
        birthDate: birthdate,
        gender,
        phone,
        address,
        documentId
    }

    // FIXME  validation if documentId your phone, and password is used
    try {
        const result = userRepository.create(user)
        if (!result) return true;
        return false;
    } catch (error) {
        console.log("🔴 Error on: RegisterUserUseCase.")
        return false;
    }

}
