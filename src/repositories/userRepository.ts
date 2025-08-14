import { prisma } from '../lib/prisma.js'
import { Prisma } from '../../prisma/generated/prisma/client.js'

export class PrismaUserReposity{
    async create(data: Prisma.UsersCreateInput){
        const user = await prisma.users.create({
            data,
        })

        return user;
    }
}