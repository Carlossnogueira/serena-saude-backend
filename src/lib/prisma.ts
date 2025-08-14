import { env } from '../lib/envconfig.js'

import { PrismaClient } from '../../prisma/generated/prisma/client.js'

export const prisma = new PrismaClient({
    log: env?.NODE_ENV === "development" ? ["query"] : [],
})

