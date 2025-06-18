const koa = require('koa');
const koaRouter = require('koa-router');
const koaStaticCache = require('koa-static-cache');
const { koaBody } = require('koa-body');
const db = require('./lib/db');
const login = require('./lib/login');
const koaJwt = require('koa-jwt');// 验证token
const { SECRET } = require('./lib/config');// 密钥
const register =require('./lib/Register');

const app = new koa();
const router = new koaRouter();

// 初始化数据库连接
db.initDB();

app.use(koaBody({
    multipart: true, // 是否支持文件上传
}))
app.use(koaStaticCache(__dirname + 'static'));// 静态资源缓存

app.use(koaJwt({ secret: SECRET }).unless({ path: [/^\/login/,/^\/register/] }));// 除login外的接口都需要验证token

router.post('/login', login);
router.post ('/register', register);

app.use(router.routes());

app.listen(5201, () => {
    console.log("node服务器启动成功 端口号为5201");
})