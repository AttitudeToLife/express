const db = require('../db/index');
const { insertBillSQL, getBillByUseridSQL, getBillDetailByIdSQL, updateBillByIdSQL, deleteBillByIdSQL } = require('../db/sql');

const user_id = 1;

function add(req, res) {
  const { amount, type_id, type_name, date, pay_type, remark = '' } = req.body;
  if(!amount || !type_id || !type_name || !date || !pay_type) {
    res.send({
      code: 400,
      msg: '参数错误',
      data: null
    });
  }
  db.query(insertBillSQL,[pay_type, amount, date, type_id, type_name, user_id, remark],(err, result) => {
    if(err) {
      res.send({
        code: 500,
        msg: '请求错误',
        data: null
      })
    }
    res.send({
      code: 200,
      msg: '添加成功',
      data: null
    });
  })
}

function list(req, res) {
  db.query(getBillByUseridSQL,[user_id],(err, result) => {
    if(err) {
      res.send({
        code: 500,
        msg: '请求错误',
        data: null
      })
    }
    console.log(result)
    res.send({
      code: 200,
      msg: '查询成功',
      data: result
    });
  })
}

function detail(req, res){
  const { id } = req.query;
  db.query(getBillDetailByIdSQL,[id],(err, result) => {
    if(err) {
      res.send({
        code: 500,
        msg: '请求错误',
        data: null
      })
    }
    console.log(result)
    res.send({
      code: 200,
      msg: '查询成功',
      data: result
    });
  })
}

function update(req, res){
  const { amount, type_id, type_name, date, pay_type, remark = '', id } = req.body;
  if(!amount || !type_id || !type_name || !date || !pay_type) {
    res.send({
      code: 400,
      msg: '参数错误',
      data: null
    });
  }
  db.query(updateBillByIdSQL,[pay_type, amount, date, type_id, type_name, remark, id],(err, result) => {
    if(err) {
      res.send({
        code: 500,
        msg: '请求错误',
        data: null
      })
    }
    res.send({
      code: 200,
      msg: '修改成功',
      data: null
    });
  })
}

function $delete(req, res){
  const { id } = req.query;
  db.query(deleteBillByIdSQL,[id],(err, result) => {
    if(err) {
      res.send({
        code: 500,
        msg: '请求错误',
        data: null
      })
    }
    console.log(result)
    res.send({
      code: 200,
      msg: '删除成功',
      data: null
    });
  })
}

module.exports = {
  add,
  list,
  detail,
  update,
  $delete,
}

