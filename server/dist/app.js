"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const path_1 = require("path");
const fastify_autoload_1 = __importDefault(require("fastify-autoload"));
const fastify_cors_1 = __importDefault(require("fastify-cors"));
const fastify_cookie_1 = __importDefault(require("fastify-cookie"));
const app = async (fastify, opts) => {
    fastify.register(fastify_cookie_1.default);
    fastify.register(fastify_cors_1.default, {
        origin: (origin, callback) => {
            if (!origin) {
                return callback(null, true);
            }
            const host = origin.split('://')[1];
            const allowedHost = [
                'localhost:3000',
                'boxer042.github.io',
                'boxer042.github.io/reduce',
                'https://boxer042.github.io',
                'boxer042.github.io/reduce/',
                'https://boxer042.github.io/reduce/',
            ];
            const allowed = allowedHost.includes(host);
            callback(null, allowed);
        },
        credentials: true,
    });
    void fastify.register(fastify_autoload_1.default, {
        dir: path_1.join(__dirname, 'plugins'),
        options: opts,
    });
    void fastify.register(fastify_autoload_1.default, {
        dir: path_1.join(__dirname, 'routes'),
        options: opts,
    });
};
exports.app = app;
exports.default = app;
//# sourceMappingURL=app.js.map