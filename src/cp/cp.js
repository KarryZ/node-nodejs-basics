import { fork } from 'child_process';

export const spawnChildProcess = async (args) => {
    const child = fork('./src/cp/files/script.js', args);
    child.send(process.stdin)
    child.on('message', data => {
        process.stdout.pipe(data);
    });
};

const arr = process.argv.slice(2);
spawnChildProcess(arr);