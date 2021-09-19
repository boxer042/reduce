"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_plugin_1 = __importDefault(require("fastify-plugin"));
exports.default = fastify_plugin_1.default(async (fastify, opts) => {
    fastify.decorate('someSupport', function () {
        return 'hugs';
    });
});
//# sourceMappingURL=support.js.map