import { Buffer } from "buffer";

export async function getServers(text) {
    let Servers = [];
    
    let bytesOffset = 0;
    const data = Buffer.from(text)
    bytesOffset += 8
    const ServersCount = data.readUInt32LE(bytesOffset)

    for (let i = 0; i < ServersCount; i++) {
        const IPLength = data.readUInt32LE(bytesOffset += 4);
        const IP = data.slice(bytesOffset += 4, bytesOffset += IPLength).toString();

        const port = data.readUInt32LE(bytesOffset);

        const HostnameLength = data.readUInt32LE(bytesOffset += 4);
        const name = data.slice(bytesOffset += 4, bytesOffset += HostnameLength).toString();

        const PasswordLength = data.readUInt32LE(bytesOffset);
        const password = data.slice(bytesOffset += 4, bytesOffset += PasswordLength).toString();

        const RCONLength = data.readUInt32LE(bytesOffset);
        const RCON = data.slice(bytesOffset, bytesOffset += RCONLength).toString();

        Servers.push({IP, port, name, password, RCON});
    }
    return Servers;
}