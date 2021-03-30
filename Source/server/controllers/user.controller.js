var db = require('../routes/database');

// get all user in app
module.exports.findAll = async function (req, res) {
    var result = await db.promise().query('SELECT * FROM user');
    return res.status(200).send(result[0]);
  }

// create or update user in app
module.exports.AddOrUpdate = async function(req, res) {
    let user = req.body;
    let sql = `Update Users set Name = '${user.Name}',Email = '${user.Email}', Avatar = '${user.Avatar}' where Id = '${user.Id}'`;
    
    if (user.Id == 0) {
        sql = `Insert Users(Name,Email,Avatar) value ('${user.Name}','${user.Email}','${user.Avatar}')`;
    }

    let query = await db.promise().query(sql);
    let check = query[0]["affectedRows"];
    res.send(check==1?true:false);
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
    return res.status(200).send(result[0]);
}