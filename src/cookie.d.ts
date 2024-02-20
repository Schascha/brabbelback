export function getCookie(name: string): boolean | string;
export function setCookie(name: string, value: string, days?: number): void;
export function removeCookie(name: string): void;
export declare function clearCookies(whitelist?: string[]): void;
