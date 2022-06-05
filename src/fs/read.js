import { readFile } from 'node:fs/promises';
export const read = async () => {
    try {
        const path = './src/fs/files/fileToRead.txt'
        const oFile = await readFile(path,'binary');
        console.log(oFile);
    } catch (err) {
        throw new Error('FS operation failed')
    }
};
read()