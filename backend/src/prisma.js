"use strict";
exports.__esModule = true;
var client_1 = require("@prisma/client");
// Definir ponto de acesso ao Prisma Client
var prisma = new client_1.PrismaClient();
exports["default"] = prisma;
var dotenv_1 = require("dotenv");
(0, dotenv_1.config)(); // Carrega as variáveis de ambiente do arquivo .env
