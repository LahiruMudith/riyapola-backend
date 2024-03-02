const connection = require("../db/db-connection");

const registerAdmin = (req, res) => {
    connection.query('insert into admin values(?,?)',[req.body.email, req.body.password], (err, rows) => {
        if (err) throw err
        res.send(rows)
      })
}

const loginAdmin = (req, res) => {
    connection.query('select * from admin where email=? && password=? ',[req.body.email, req.body.password], (err, rows) => {
        if (err) throw err
        res.send(rows.body.email)
      })
}

module.exports = {registerAdmin,loginAdmin}