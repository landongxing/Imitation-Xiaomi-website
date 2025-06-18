const { getDB } = require('../lib/db');
const jwt = require('jsonwebtoken');
const { SECRET } = require('../lib/config');

module.exports = async ctx => {
    const { LoginUsername, LoginPassword } = ctx.request.body;
    const sql = `select * from users where username=? and password=?`;
    // 通过Vue发送过来的账号密码在数据库中查询是否存在
    const [rows] = await getDB().execute(sql, [LoginUsername, LoginPassword]);
    const userInfo = rows[0];
    if (userInfo) {// 如果存在，则返回用户信息
        const token = jwt.sign({ uId: userInfo.id }, SECRET, {// 第一个参数是要加密的数据，第二个参数是加密的密钥，第三个参数是加密的配置(时间)
            expiresIn: '2h'
        })
        ctx.body = {
            state: 1,
            msg: '登录成功',
            data:{
                token: token
            }
        }
    } else {// 如果不存在，则返回错误信息
        ctx.status = 401;
        ctx.body = {
            state: 0,
            msg: '用户名或密码错误',
            data: {
                token: ''
            }
        }
    }
}