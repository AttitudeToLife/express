const { login } = require('./login');
const { getUserInfo, editUserInfo } = require('./user');
const { add, list, detail, update, $delete } = require('./bill');

module.exports = {
  login,
  getUserInfo,
  editUserInfo,
  add,
  list,
  detail,
  update,
  $delete,
}