import { readdir } from 'node:fs/promises';
export const list = async () => {
    const path = './src/fs/files';
    try {
       var aFiles = await readdir(path);
       aFiles.forEach(i => console.log(i));
    } catch (err) {
        throw new Error('FS operation failed')
    }
};
list()