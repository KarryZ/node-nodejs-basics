import process from 'node:process';

export const parseArgs = () => {
// If args send with '=' like:  node args.js --propName=value --prop2Name=value2
//    process.argv.slice(2).forEach((val) => {
//         const text = val.split('=').join(' is ');
//         console.log(`${text}`);
//     });

// If args send without '=' like:  node args.js --propName value --prop2Name value2
    const res = process.argv.slice(2).join(',').split('--').slice(1);
    res.forEach( i => {
        let text = i.replace(/,\s*$/, "").split(',').join(' is ');
        console.log(`${text}`);
    })
};

parseArgs()