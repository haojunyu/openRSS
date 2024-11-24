import { serve } from '@hono/node-server';
import logger from '@/utils/logger';
import { Hono } from 'hono';

const app = new Hono();

app.get('/', (c) => c.text('Hello Hono!'));

const port = 3000;


logger.info(`🎉 OpenRSS is running on port ${port}! Cheers!`);
logger.info('💖 Can you help keep this open source project alive? Please sponsor 👉 https://docs.rsshub.app/sponsor');
logger.info(`🔗 Local: 👉 http://localhost:${port}`);

const server = serve({
    fetch: app.fetch,
    port,
});

export default server;
