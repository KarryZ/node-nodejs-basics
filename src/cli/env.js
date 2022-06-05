import process from 'node:process';

export const parseEnv = () => {
    for(const env in process.env) {
        env.indexOf('RSS_') !=-1 && console.log(`${env}=${process.env[env]}`);
    }
};

parseEnv()