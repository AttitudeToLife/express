const mysql = require('mysql2')

// 注意：这里要根据自己数据库中的配置来填写！
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '622622622',
  database: 'juejue-cost'
})
connection.connect()

module.exports = connection;
