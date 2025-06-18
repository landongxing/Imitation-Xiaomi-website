const mysql = require('mysql2/promise');
let connection;
module.exports = {
    async initDB() {
        // 数据库连接
        connection = await mysql.createConnection({
            host: '127.0.0.1',// 地址
            // port: 3306,// 端口
            user: 'qianduan',// 用户名
            password: '123456',// 密码
            database: 'kkb_phone'// 数据库名
        })
    },
    getDB() {
        return connection;
    }
}