const getAllUsersSQL = 'SELECT * FROM user';
const getUserByUsernameSQL = 'SELECT * FROM user WHERE username = ?';
const getUserByUseridSQL = 'SELECT * FROM user WHERE id = ?';
const insertUserSQL = 'INSERT INTO user (username, password, avatar, ctime) VALUES (?, ?, ?, ?)';
const updateUserSignatureSQL = 'UPDATE user SET signature = ? WHERE id = ?';
const getBillByUseridSQL = 'SELECT * FROM bill WHERE user_id = ?';
const insertBillSQL = 'INSERT INTO bill (pay_type, amount, date, type_id, type_name, user_id, remark) VALUES (?, ?, ?, ?, ?, ?, ?)';
const getBillDetailByIdSQL = 'SELECT * FROM bill b WHERE id = ?';
const updateBillByIdSQL = 'UPDATE bill SET pay_type = ?, amount = ?, date = ?, type_id = ?, type_name = ?, remark = ? WHERE id = ?';
const deleteBillByIdSQL = 'DELETE FROM bill WHERE id = ?';

module.exports = {
  getAllUsersSQL,
  getUserByUsernameSQL,
  getUserByUseridSQL,
  insertUserSQL,
  updateUserSignatureSQL,
  getBillByUseridSQL,
  insertBillSQL,
  getBillDetailByIdSQL,
  updateBillByIdSQL,
  deleteBillByIdSQL,
};
