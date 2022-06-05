import { appendFile } from 'node:fs/promises';
export const create = async () => {
    try{
        const content = 'I am fresh and young';    
        await appendFile('./src/fs/files/fresh.txt', content, { flag: 'ax' });
    } catch (err) {
        throw new Error('FS operation failed')
    }
      
};
create()