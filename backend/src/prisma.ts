import { PrismaClient } from "@prisma/client";
// Definir ponto de acesso ao Prisma Client
const prisma = new PrismaClient()
export default prisma

import { config } from 'dotenv';
config(); // Carrega as variáveis de ambiente do arquivo .env
