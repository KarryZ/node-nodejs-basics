import { createReadStream, createWriteStream,rm } from "fs";
import { createGzip } from "zlib";

export const compress = async () => {
    try {
        const readableStream = await createReadStream('./src/zip/files/fileToCompress.txt', 'utf-8');
        const oGZip = await createGzip();
        const writableStream = await createWriteStream('./src/zip/files/archive.gz');
        await rm('./src/zip/files/fileToCompress.txt', (err) => {
            if(err) throw  new Error("FS operation failed");
        });
        readableStream
            .pipe(oGZip)
            .pipe(writableStream)
            .on("finish", () =>
                
                console.log(`Successfully compressed the file at './files/archive.gz'`)
            );
    } catch (err) {
        throw new Error('FS operation failed')
    }

};

compress();