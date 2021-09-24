/// <reference types="node" />
declare const _default: import("fastify").FastifyPluginAsync<unknown, import("http").Server>;
export default _default;
declare module 'fastify' {
    interface FastifyRequest {
        user: null | {
            id: string;
        };
    }
}
export declare type UserTokenDecoded = {
    subject: string;
    userId: string;
    iat: number;
    exp: number;
};
