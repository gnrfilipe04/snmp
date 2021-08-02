declare module 'net-snmp' {

    interface IVarbindDTO {
        oid: string;
        value: string;
    }

    interface ISessionMethodsDTO {
        get: (oids: Array<string>, responseCb: (error: string, varbinds: Array<IOidDTO>) => void) => void;
    }

    function createSession(target: string, community: string, options?: object): ISessionMethodsDTO;

    function isVarbindError(varbind: IVarbindDTO): boolean;

    function varbindError(varbind: IVarbindDTO): string;

}
declare module 'node:net-snmp' {
    export * from 'net-snmp';
}

