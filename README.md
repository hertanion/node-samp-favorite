# node-samp-favorite
Module for getting servers from the SAMP favorites list

## Usage
```
import os from "os";
import { fs } from "fs";
import { getServers } from "samp-favorite";

const pathToDat = `${os.homedir()}\\Documents\\GTA San Andreas User Files\\SAMP\\USERDATA.DAT`;
fs.readFile(pathToDat, async (err, data) => {
  if (err) throw err;
  const servers = await getServers(data);
  console.log(servers);
});
```
