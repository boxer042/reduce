/// <reference types="node" />
declare const _default: import("fastify").FastifyPluginAsync<unknown, import("http").Server>;
export default _default;
declare module 'fastify' {
    interface FastifyRequest {
        manager: null | {
            id: string;
        };
    }
}
export declare type ManagerTokenDecoded = {
    subject: string;
    managerId: string;
    iat: number;
    exp: number;
};
