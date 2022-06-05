import { createHash } from 'crypto';
import { readFile } from 'node:fs/promises';
import { createWriteStream } from 'fs';


export const calculateHash = async () => {
    const path = './src/hash/files/fileToCalculateHashFor.txt'
    const oFile = await readFile(path);
    const hash = createHash('sha256');
    const writableStream = createWriteStream(path, 'utf-8');
    writableStream.write(hash.update(oFile).digest('hex'));
};

calculateHash();