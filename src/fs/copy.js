import { readdir, mkdir, copyFile } from 'node:fs/promises';

export const copy = async () => {
        const path = './src/fs/files';
        const files = await readdir(path);
        const newFolder = await mkdir('./src/fs/files_copy');
        for (const file of files){
            console.log(file);
            await copyFile(path + "/" + file, './src/fs/files_copy/' + file); 
        }     
};

copy()