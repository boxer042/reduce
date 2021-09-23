"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function checkAdmin(request, reply) {
    if (!request.manager) {
        reply.status(401);
        throw new Error('unauthorized');
    }
    const manager = await prisma.manager.findUnique({
        where: {
            id: request.manager.id,
        },
    });
    if (!manager) {
        reply.status(401);
        throw new Error('Not Sign in');
    }
    if (!manager.isCertified || manager.role !== 'ADMIN') {
        reply.status(401);
        throw new Error('Not Allowed Manager');
    }
}
exports.default = checkAdmin;
//# sourceMappingURL=checkAdmin.js.map