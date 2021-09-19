"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const edu = async (fastify, opts) => {
    fastify.get('/', async function (request, reply) {
        return 'this is an example1';
    });
    fastify.get('/create', async function (request, reply) {
        return 'this is an example2';
    });
};
exports.default = edu;
//# sourceMappingURL=index.js.map