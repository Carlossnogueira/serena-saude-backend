import { prisma } from '../lib/prisma.js'
import { Prisma } from '../../node_modules/@prisma/client/index.js'

export class PrismaUserReposity{
    async create(data: Prisma.UsersCreateInput){
        const user = await prisma.users.create({
            data,
        })

        return user;
    }
}