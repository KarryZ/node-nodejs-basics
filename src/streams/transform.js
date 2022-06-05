import { Transform } from 'stream';

export const transform = async () => {
    const transformStream = new Transform();
    transformStream._transform = (chunk, encoding, callback) => {
        const res = chunk.toString().split("").reverse().join("");
        transformStream.push(res);
        callback();
      };
    process.stdin.pipe(transformStream).pipe(process.stdout);
};

transform();