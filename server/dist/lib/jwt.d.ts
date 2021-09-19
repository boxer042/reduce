/// <reference types="node" />
import { SignOptions } from 'jsonwebtoken';
export declare function generateToken(payload: string | object | Buffer, options?: SignOptions): Promise<string>;
export declare function decodeToken<T>(token: string): Promise<T>;
