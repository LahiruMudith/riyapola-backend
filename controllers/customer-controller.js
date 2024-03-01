const connection = require('../db/db-connection');

const saveCustomer = (req, res) => {
    connection.query('insert into customer values(?,?,?,?,?)',[req.body.name, req.body.nic, req.body.address, req.body.contactNumber, req.body.password], (err, rows) => {
        if (err) throw err
        res.send(rows)
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

module.exports = {saveCustomer,updateCustomer,deleteCustomer}