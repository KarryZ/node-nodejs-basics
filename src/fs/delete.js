import { rm  } from 'node:fs';

export const remove = async () => {
    const fileToRemovePath = './src/fs/files/fileToRemove.txt';
    await rm(fileToRemovePath, { recursive:true }, (err) => {
        if(err) throw  new Error("FS operation failed");
    });
};

remove();