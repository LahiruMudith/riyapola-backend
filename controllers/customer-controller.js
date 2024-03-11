const connection = require('../db/db-connection');
// var { expressjwt: jwt } = require("express-jwt");
var jwt = require('jsonwebtoken');


const saveCustomer = (req, res) => {
    connection.query('insert into customer values(?,?,?,?,?,?)',[req.body.name, req.body.nic, req.body.address, req.body.contactNumber, req.body.password, req.body.contactNumber+req.body.nic+req.body.password], (err, rows) => {
        if (err) throw err
        res.send("Token :" + req.body.contactNumber+req.body.nic+req.body.password)
      })
}
const updateCustomer = (req, res) => {
  connection.query('update customer set name=?, NIC_number=?, address=?, contact_number=?, password=? where NIC_number=?;',[req.body.name, req.body.nic, req.body.address, req.body.number, req.body.password, req.params.updateNic], (err, rows) => {
      if (err) throw err
      res.send(rows)
    })
}
const deleteCustomer = (req, res) => {
  connection.query('delete from customer where NIC_number=?',[req.params.deleteNic], (err, rows) => {
      if (err) throw err
      res.send(rows)
    })
}
const loginCustomer = (req, res) => {
  const user = {id:3};
  const token = jwt.sign({user}, 'my_secrect_key');
  connection.query('select NIC_number,password from customer where NIC_number=? && password=? ',[req.body.nic_number, req.body.password], (err, rows) => {
      if (err) throw err
      if (rows.length > 0) {
        res.send("Token: " + token)
      }else {
        res.send("NIC or Password Incorrect")
      }
      
    })
}

module.exports = {saveCustomer,updateCustomer,deleteCustomer, loginCustomer}