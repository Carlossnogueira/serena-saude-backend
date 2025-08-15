import { compare, hash } from "bcryptjs";

export class EncryptPasswordService {
  async generateHash(password: string) {
    const hashPassword = await hash(password, 6)
    return hashPassword
  }

  async compareHashPassword(password:string, hash:string) {
    return await compare(password,hash);
  } 
}
