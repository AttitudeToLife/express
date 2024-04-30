const db = require('../db/index');
const {
  getUserByUsernameSQL,
  getUserByUseridSQL,
  updateUserSignatureSQL
} = require('../db/sql');

function getUserInfo(req, res) {
  const { name } = req.query;
  db.query(getUserByUsernameSQL,[name], (err, result) => {
    if(err) {
      console.log(err);
      res.send({
        code: 500,
        msg: '请求错误',
        data: null
      })
    }
    if(result && result[0]?.username) {
      const { id, username, password,signature, avatar } = result[0];
      res.send({
        code: 200,
        msg: '请求成功',
        data: {
          id,
          username,
          password,
          signature,
          avatar,
        }
      });
    } else {
      res.send({
        code: 200,
        msg: '请求失败',
        data: null
      });
    }
  });
}

function editUserInfo(req, res) {
  const { signature } = req.body;
  
  db.query(updateUserSignatureSQL,[signature, [6]],(err, result) => {
    if(err) {
      res.send({
        code: 500,
        msg: '请求错误',
        data: null
      })
    }
    db.query(getUserByUseridSQL,[6], (err, result) => {
      const { id, username, password,signature, avatar } = result[0];
      res.send({
        code: 200,
        msg: '修改成功',
        data: {
          id,
          username,
          password,
          signature,
          avatar,
        }
      })
    })
  })
}

module.exports = {
  getUserInfo,
  editUserInfo,
}