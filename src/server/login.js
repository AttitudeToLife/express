const db = require('../db/index');
const {
  getUserByUsernameSQL,
  insertUserSQL,
} = require('../db/sql');

function login(req, res) {
  const { name, password} = req.query;
  if (!name || !password) {
    res.send({
      code: 500,
      msg: '账号密码不能为空',
      data: null
    });
  }

  db.query(getUserByUsernameSQL,[name], (err, result) => {
    if(err) {
      res.send({
        code: 500,
        msg: '请求错误',
        data: null
      })
    }
    if(result && result[0]?.username) {
      res.send({
        code: 500,
        msg: '账户名已被注册，请重新输入',
        data: null
      });
    } else {
      const defaultAvatar = 'http://s.yezgea02.com/1615973940679/WeChat77d6d2ac093e247c361f0b8a7aeb6c2a.png';
      db.query(insertUserSQL, [name,password,defaultAvatar,'20240428'], (err, result) => {
        if(err) {
          console.log(err);
          res.send({
            code: 500,
            msg: '请求错误',
            data: null
          })
        }
        res.send({
          code: 200,
          msg: '注册成功',
          data: null
        });
      })
    }
  })
}

module.exports = {
  login,
}