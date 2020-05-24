// 用户相关的CRUD操作
const user = {
  queryAllInfo: 'select type,sname,title from information',
  queryContent: 'select ncontent from notice where ntitle = ?',
  queryAllNotice: 'select ntitle from notice order by ntime desc',
  queryNotice: 'select * from (select ntitle,ncontent from notice order by ntime desc)as a limit 1',
  insertNotice: 'insert into notice(ntitle, ncontent) values (?,?)',
  queryBySnumber: 'select snumber,sname,sgender,stestnumber,sidnumber,sdepartment,smajor,sbirthday from students where snumber=? and sname=?',
  login: 'select sname from user where snumber=? and spassword=?',
  insertInfo: 'insert into information(title,type,object,sname,content) values (?,?,?,?,?)',
  insertInfoBySnumber: 'insert into students(snumber, sname, sidnumber, stestnumber, sdepartment, smajor, sbirthday, sgender) values (?,?,?,?,?,?,?,?)',
  insertUserBySnumber: 'insert into user(snumber, spassword, sname) values (?,?,?)',
  updateInfoBySnumber: 'update students set stestnumber=?,sidnumber=?,sbirthday=? where snumber=? and sname=?',
  updateChargeBySnumber: "update charge set pay='true' where snumber=? and sname=?",
  selectPayBysnumber: 'select pay from charge where snumber=? and sname=?',
  selectFinishBysnumber: 'select finish from checkin where snumber=? and sname=?',
  selectInfoByfinish: "select snumber,sname,smajor,sdepartment from students where snumber in (select snumber from checkin where finish='true')",
  updateFinishBysnumber: "update checkin set finish='true' where snumber=? and sname=?"
};

module.exports = {
  user
}