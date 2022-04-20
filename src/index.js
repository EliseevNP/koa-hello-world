const Koa = require('koa');
const Router = require('koa-router');

const router = new Router();

router.get('/health', (ctx) => { ctx.body = { status: 'OK' } });
router.get('/', (ctx) => { ctx.body = 'Hello world' });

const app = new Koa();

app.use(router.routes());

const APP_PORT = process.env.APP_PORT || 3000;

app.listen(APP_PORT, () => {
  console.log(`Server listening on port: ${APP_PORT}`);
});
