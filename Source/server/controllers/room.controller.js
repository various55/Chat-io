var db = require('../routes/database');

// get all user in app
module.exports.FindByUser = async function (req, res) {
    var id = req.body.id;
    var result = await db.promise().query('SELECT IDGroup,Name,LastUpdate FROM chat_io.members as m Join groupchat as g on g.id = m.idgroup where m.idUser = '+id);
    return res.status(200).send(result[0]);
  }

// create or update user in app
module.exports.CreateRoom = async function(req, res) {
    const reqBody = req.body;
    const name = reqBody.Name;
    const createBy = reqBody.CreateBy;
    const users = reqBody.Users;
    const username = reqBody.Username;
    const usersAdd = [createBy,...users];
    // Created group
    let sql1 = `Insert into groupchat(IdUserCreate,Name) values(${createBy},N'${name}');`
    await db.promise().query(sql1);
    // Get Id room
    let sql2 = `SELECT LAST_INSERT_ID();`;
    let query =  await db.promise().query(sql2);
    let id = query[0][0]["LAST_INSERT_ID()"];
    // Add Member
    var values = 
        usersAdd.map((item)=>{
            return [
                item, id,username,createBy
            ]
        })
      ;
    console.log(values)
    let sql3 = 'INSERT into members(IdUser,IDGroup,NickName,IdModAdd) VALUES ?';
    var check = await db.promise().query(sql3,[values]);
    res.send(check==0?false:true);
}

// create or update user in app
module.exports.Delete = async function(req, res) {
    let user = req.body;
    let query = await db.promise().query(`delete from Users where Id = ${user.Id}`);
    let check = query[0]["affectedRows"];
    res.send(check==1?true:false);
}

module.exports.Login = async function(req, res) {
    console.log(req.body)
    let user = req.body;
    let email = user.Email;
    let password = user.Password;
    let sql = `select * from user where Email=N'${email}' && Password='${password}'`;
    var result = await db.promise().query(sql);
    console.log(result[0]);
    return res.status(200).send(result[0]);
}