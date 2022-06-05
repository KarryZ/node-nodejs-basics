import { createWriteStream } from 'fs';

export const write = async () => {
    const writableStream = createWriteStream('./src/streams/files/fileToWrite.txt', 'utf-8');
    process.stdin.on('data', function(data) {
        writableStream.write(data);
    });
};

write();