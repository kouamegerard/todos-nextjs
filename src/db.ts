import { PrismaClient } from "@prisma/client";

const globalForPisma = global as unknown as {
    prisma: PrismaClient | undefined
}

export const prisma = 
    globalForPisma.prisma ?? 
    new PrismaClient( {
        log: ["query"]
    } )

if ( process.env.NODE_ENV !== "production" ) globalForPisma.prisma = prisma