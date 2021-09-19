"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function checkCurrentManager(request, reply) {
    if (request.manager) {
        const error = new Error('있어');
        throw error;
    }
}
exports.default = checkCurrentManager;
//# sourceMappingURL=checkCurrentManager.js.map