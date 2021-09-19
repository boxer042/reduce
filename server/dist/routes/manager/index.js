"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const jwt_1 = require("../../lib/jwt");
const body_json_1 = __importDefault(require("../../schema/manager/googleRegister/body.json"));
const prisma = new client_1.PrismaClient();
const manager = async (fastify, opts) => {
    fastify.get('/official/me', async function (request, reply) {
        if (!request.manager) {
            reply.status(401);
            const error = new Error('Unauthorized');
            error.name = 'UnauthorizedError';
            throw error;
        }
        const manager = await prisma.manager.findUnique({
            where: {
                id: request.manager.id,
            },
        });
        reply.send(manager);
    });
    fastify.post('/official/register', async function (request, reply) {
        const { email, name } = request.body;
        try {
            const registerManager = await prisma.manager.create({
                data: {
                    email: email,
                    name: name,
                },
            });
            reply.send(registerManager);
        }
        catch (error) {
            reply.send(error);
        }
    });
    fastify.post('/official/signin', async function (request, reply) {
        const { email } = request.body;
        try {
            const manager = await prisma.manager.findUnique({
                where: {
                    email: email,
                },
            });
            if (!manager) {
                reply.status(401);
                reply.send('Manager is not registered');
            }
            if (!(manager === null || manager === void 0 ? void 0 : manager.isCertified)) {
                reply.send('아직 허용되지 않은 매니저입니다.');
                return;
            }
            const managerAccessToken = await jwt_1.generateToken({
                suject: 'accessToken',
                managerId: manager.id,
            }, {
                expiresIn: '15d',
            });
            reply.setCookie('accessToken', managerAccessToken, {
                path: '/',
                maxAge: 60 * 60 * 24 * 15,
                httpOnly: true,
                sameSite: 'none',
            });
            reply.send({ manager: manager, accessToken: managerAccessToken });
        }
        catch (error) {
            reply.send(error);
        }
    });
    fastify.post('/google/register', {
        schema: {
            body: body_json_1.default,
        },
    }, async function (request, reply) {
        const { accessToken, profile } = request.body;
        try {
            reply.send({
                accessToken: accessToken,
                profile: profile,
            });
        }
        catch (error) { }
    });
    fastify.post('/google/signin', async function (request, reply) { });
    fastify.post('/google/check', async function (request, reply) { });
};
exports.default = manager;
//# sourceMappingURL=index.js.map