var db = require('../routes/database');

// get all user in app
module.exports.FindByRoom = async function (req, res) {
    var id = req.body.id;
    var result = await db.promise().query('SELECT UserIDCreate,IDChanel,MessageContent,CreateDate,NickName FROM chat_io.message join members'
    +' on IdChanel=IDGroup where UserIDCreate=IdUser AND IdChanel = '+id+' order by ID');
    return res.status(200).send(result[0]);
  }

// create or update user in app
module.exports.NewMessage = async function(userId, roomId,message) {
    let sql = `Insert into message(UserIDCreate,IDChanel,MessageContent) values(${userId},${roomId},N'${message}')`;
    let query = await db.promise().query(sql);
    let check = query[0]["affectedRows"];
    if(check==1){
        sql = 'select * from members where IdUser = '+userId+' And IDGroup = '+roomId;
        return await db.promise().query(sql);
    }
    else{
        return false;
    }
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