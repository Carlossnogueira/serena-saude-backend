import type { Prisma, Users } from "@prisma/client";

export interface UserRepository{
    create(data: Prisma.UsersCreateInput): Promise<Users | null>
}