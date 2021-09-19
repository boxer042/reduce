"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeToken = exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const { JWT_SECRET } = process.env;
async function generateToken(payload, options = {}) {
    if (!JWT_SECRET) {
        throw new Error('JWT_SECRET Enviroment Variable is no set');
    }
    const promise = new Promise((resolve, reject) => {
        jsonwebtoken_1.default.sign(payload, JWT_SECRET, options, (error, token) => {
            if (error) {
                reject(error);
                return;
            }
            if (!token) {
                reject(new Error('Failed to generate token'));
                return;
            }
            resolve(token);
        });
    });
    return promise;
}
exports.generateToken = generateToken;
async function decodeToken(token) {
    if (!JWT_SECRET) {
        throw new Error('JWT_SECRET Environment Variable is not set');
    }
    const promise = new Promise((resolve, reject) => {
        jsonwebtoken_1.default.verify(token, JWT_SECRET, (error, decoded) => {
            if (error) {
                reject(error);
                return;
            }
            if (!decoded) {
                reject(new Error('Token is empty'));
                return;
            }
            resolve(decoded);
        });
    });
    return promise;
}
exports.decodeToken = decodeToken;
//# sourceMappingURL=jwt.js.map