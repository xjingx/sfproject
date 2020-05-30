// 用户相关的CRUD操作
const user = {
  queryAllInfo: 'select type,sname,title from information',
  queryContent: 'select ncontent from notice where ntitle = ?',
  queryAllNotice: 'select ntitle from notice order by ntime desc',
  queryNotice: 'select * from (select ntitle,ncontent from notice order by ntime desc)as a limit 1',
  insertNotice: 'insert into notice(ntitle, ncontent) values (?,?)',
  queryBySnumber: 'select snumber,sname,sgender,stestnumber,sidnumber,sdepartment,smajor,sbirthday from students where snumber=? and sname=?',
  Studentslogin: 'select sname,snumber from user where snumber=? and spassword=?',
  Adminlogin: 'select aname,anumber from admin where anumber=? and apassword=?',
  insertInfo: 'insert into information(title,type,object,sname,content) values (?,?,?,?,?)',
  insertInfoBySnumber: 'insert into students(snumber, sname, sidnumber, stestnumber, sdepartment, smajor, sbirthday, sgender) values (?,?,?,?,?,?,?,?)',
  insertUserBySnumber: 'insert into user(snumber, spassword, sname) values (?,?,?)',
  insertchargeBySnumber: 'insert into charge(snumber, sname, pay) values (?,?,?)',
  insertCheckinBySnumber: 'insert into checkin(snumber, sname, active, finish, department, major) values (?,?,?,?,?,?)',
  updateInfoBySnumber: 'update students set stestnumber=?,sidnumber=?,sbirthday=? where snumber=? and sname=?',
  updateChargeBySnumber: "update charge set pay='true' where snumber=? and sname=?",
  selectPayBysnumber: 'select pay from charge where snumber=? and sname=?',
  selectFinishBysnumber: 'select finish from checkin where snumber=? and sname=?',
  selectInfoByfinish: "select snumber,sname,major,department,finish from checkin",
  selectStudentInfo: "select snumber,sname,sidnumber,stestnumber,sdepartment,smajor,sbirthday,sgender from students",
  updateStudentsBySnumber: "update students set sname=?,sdepartment=?,smajor=?,stestnumber=?,sbirthday=?,sgender=? where snumber=?",
  deleteStudentsBySnumber: "delete from students where snumber=?",
  updateFinishBysnumber: "update checkin set finish='true' where snumber=? and sname=?",
  queryPayOffBysnumber: "select tuition, hotelExpense, basicMedical, oneCard, administration, textbook from payoff where department in (select sdepartment from students where snumber=? and sname=?)",
  insertGreenChanneldk: "insert into greenchannel(snumber, sname, sclass, major, department, greentype, serialnumber, reason) values (?,?,?,?,?,?,?,?)",
  insertGreenChannelhj: "insert into greenchannel(snumber, sname, sclass, major, department, greentype, delaymoney, delaydate, reason) values (?,?,?,?,?,?,?,?,?)",
  queryGreenInfo: "select snumber,sname,sclass,major,department,greentype,serialnumber,delaymoney,delaydate,reason from greenchannel"
};

module.exports = {
  user
}