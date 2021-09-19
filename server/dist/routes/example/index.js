"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const checkAdmin_1 = __importDefault(require("../../lib/checkAdmin"));
const prisma = new client_1.PrismaClient();
const example = async (fastify, opts) => {
    fastify.get('/', {
        preHandler: checkAdmin_1.default,
    }, async function (request, reply) {
        return 'this is an example1';
    });
    fastify.post('/create', async function (request, reply) {
        const { name, parentId } = request.body;
        try {
            const createLocaion = await prisma.location.create({
                data: {
                    name: name,
                    parentId: parentId,
                },
            });
            reply.send(createLocaion);
        }
        catch (error) {
            reply.send(error);
        }
    });
    fastify.get('/list', async function (request, reply) {
        const locations = await prisma.location.findMany({
            include: {
                parent: true,
                children: {
                    include: {
                        children: true,
                    },
                },
            },
        });
        reply.send(locations);
    });
};
exports.default = example;
//# sourceMappingURL=index.js.map