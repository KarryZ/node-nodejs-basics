import { rename as changeName, access  } from 'node:fs';

export const rename = async () => {
    const oldPath = './src/fs/files/wrongFilename.txt';
    const newPath = './src/fs/files/properFilename.md';

    await access(newPath, (err) => {
        if(err) return true;
        throw  new Error("FS operation failed"); 
    });

    await changeName(oldPath, newPath, (err) => {
        if (err) throw err;
         console.log('Rename complete!');
    });  
};

rename()