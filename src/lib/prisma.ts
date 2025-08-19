import { env } from '../lib/envconfig.js'

import { PrismaClient } from '../../node_modules/@prisma/client/index.js'

export const prisma = new PrismaClient({
    log: env?.NODE_ENV === "development" ? ["query"] : [],
})

