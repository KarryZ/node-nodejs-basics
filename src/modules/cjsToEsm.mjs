
import * as path from 'node:path';
import { release, version } from 'os';
import { createServer as createServerHttp }from 'http';
import { fileURLToPath } from 'url';
import { readFile } from 'fs/promises';
import All from './files/c.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
All();

const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject = JSON.parse(
        await readFile(
          new URL('./files/a.json', import.meta.url)
        )
      );
} else {
    unknownObject = JSON.parse(
        await readFile(
          new URL('./files/b.json', import.meta.url)
        )
      );
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

export const createMyServer = async () => { 
    await createServerHttp((_, res) => {
       res.end('Request accepted'); // http://localhost:3000/
    }).listen(3000, 'localhost', () => {
        console.log('server started');
    })
};

export { unknownObject };
   
console.log(unknownObject);
createMyServer();


