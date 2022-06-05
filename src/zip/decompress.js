import { createReadStream, createWriteStream } from "fs";
import { createGunzip } from "zlib";

export const decompress = async () => {
    try {
        const readableStream = await createReadStream('./src/zip/files/archive.gz');
        const writableStream = await createWriteStream('./src/zip/files/fileToCompress.txt');
        const unzip = createGunzip();
        
        readableStream.pipe(unzip).pipe(writableStream);
    } catch (err) {
        throw new Error('FS operation failed')
    }
};

decompress()