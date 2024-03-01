const connection = require('../db/db-connection');

const addVehicle = (req, res) => {
    connection.query('insert into vehicle values(?,?,?,?)',[req.body.vehicle_Number, req.body.Day_Price, req.body.Vehicle_Name, req.body.color], (err, rows) => {
        if (err) throw err
        res.send(rows)
      })
}

const updateVehicle = (req, res) => {
    connection.query('update vehicle set V_Number=?, Day_Price=?, V_Name=?, color=? where V_Number=? ',[req.body.vehicle_Number, req.body.Day_Price, req.body.Vehicle_Name, req.body.color, req.params.vehi_num], (err, rows) => {
        if (err) throw err
        res.send(rows)
      })
}

const deleteVehicle = (req, res) => {
    connection.query('delete from vehicle where V_Number=?  ',[req.params.vehi_num], (err, rows) => {
        if (err) throw err
        res.send(rows)
      })
}

const searchVehicle = (req, res) => {
    connection.query('select * from vehicle',(err, rows) => {
        if (err) throw err
        res.send(rows)
      })
}

const addImage = (req, res) => {
    try {

        if(req.file == undefined) {
            return res.status(400).send({ message : "Please Upload a File!"})
        }
    
        connection.query('update vehicle set Image_Name=? where V_Number=?', [req.file.filename, req.params.vehi_num], (err, rows,) => {
            if (err) throw err
          })
    
        return res.status(201).send({
            image: req.file,
            message: "Image Upload Successsfully"
        })
    
    }catch (error) {
        res.status(500).send({error: "Internal server erro...try again later"})
    }
}

module.exports = {addVehicle, updateVehicle, deleteVehicle, searchVehicle, addImage}