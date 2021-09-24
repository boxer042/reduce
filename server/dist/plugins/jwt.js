"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_plugin_1 = __importDefault(require("fastify-plugin"));
const jwt_1 = require("../lib/jwt");
exports.default = fastify_plugin_1.default(async (fastify, opts) => {
    fastify.decorateRequest('user', null);
    fastify.addHook('preHandler', async (request, reply) => {
        const accessToken = request.cookies.accessToken;
        console.log(request.cookies.accessToken);
        try {
            const decoded = await jwt_1.decodeToken(accessToken);
            console.log(decoded.userId);
            request.user = {
                id: decoded.userId,
            };
        }
        catch (error) {
            console.log(error);
        }
    });
});
//# sourceMappingURL=jwt.js.map