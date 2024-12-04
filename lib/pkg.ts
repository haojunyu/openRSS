import { setConfig } from '@/config';
import { Hono } from 'hono';
import logger from '@/utils/logger';

let app: Hono;

export const init = async (conf) => {
    setConfig(
        Object.assign(
            { IS_PACKAGE: true}, conf
        )
    );
    app =  (await import('@/app')).default;
};

export const request = async (path) => {
    const res = await app.request(path);
    logger.error("pkg.ts" + res);
    return res.json();
};
