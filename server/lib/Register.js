const { getDB } = require('../lib/db');

module.exports = async ctx => {
    const { RegisterUsername, RegisterPassword, phone } = ctx.request.body;
    const sql = "insert into users(username,password,phone) values(?,?,?)";
    const rows = await getDB().execute(sql, [RegisterUsername, RegisterPassword, phone]);
    ctx.body = {
        data: rows[0]
    }
}