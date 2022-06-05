import { createReadStream } from 'fs';

export const read = async () => {
    try {
        const readableStream = await createReadStream('./src/streams/files/fileToRead.txt', 'utf-8');
        readableStream.on('data', chunk => process.stdout.write(chunk)); 
    } catch (err) {
        throw new Error('FS operation failed')
    }
    
};

read();