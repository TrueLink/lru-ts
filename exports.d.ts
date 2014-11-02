export declare function MakeLRUCache(limit: any): ILRUCache;
export interface ILRUCache {
    put: (key: string, value: any) => void;
    get: (key: string, Entry: boolean) => any;
}
