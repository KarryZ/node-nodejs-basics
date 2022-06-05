import { Worker } from 'worker_threads';
import { cpus } from 'os';

export const performCalculations = async () => {
    const aCpus = cpus();
    const aWorkers = [];
    aCpus.forEach((item, indx) => {
        const oPromise = new Promise((resolve, rejects) => {
            const worker = new Worker('./src/wt/worker.js', { workerData: indx + 10 });
            worker.on('message', resolve);
        })
        aWorkers.push(oPromise);
    })

    const data = await Promise.all(aWorkers);
    console.log(data);
};

performCalculations();