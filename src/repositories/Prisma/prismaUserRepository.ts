import type { Prisma } from '@prisma/client';
import { prisma } from '../../lib/prisma.js'

import type { UserRepository } from '../user-repository.js';

export class PrismaUserReposity implements UserRepository{
    async create(data: Prisma.UsersCreateInput){
        const user = await prisma.users.create({
            data,
        })

        return user;
    }
}