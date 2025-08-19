import { PrismaUserReposity } from "../../src/repositories/Prisma/prismaUserRepository.js";
import type { userRegisterSchema } from "../../src/schemas/user/userRegisterSchema.js";
import { EncryptPasswordService } from "../../src/service/EncryptService.js";
import { type UserRepository } from "../../src/repositories/user-repository.js";

export class RegisterUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async Execute({
    email,
    password,
    name,
    birthdate,
    gender,
    phone,
    address,
    documentId,
  }: userRegisterSchema) {
    
    // TODO Dependence
    const encryptService = new EncryptPasswordService();

    const user = {
      email,
      passwordHash: await encryptService.generateHash(password),
      name,
      birthDate: birthdate,
      gender,
      phone,
      address,
      documentId,
    };

    // FIXME  validation if documentId your phone, and password is used
    try {
      const result = this.userRepository.create(user);
      if (!result) return true;
      return false;
    } catch (error) {
      console.log("🔴 Error on: RegisterUserUseCase.");
      return false;
    }
  }
}
