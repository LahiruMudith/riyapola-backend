const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const port = 3000;
const customerRoutes = require("./routes/customer-route")
const adminRoutes = require("./routes/admin-route");
const vehicleRoutes = require("./routes/vehicle-route");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/customer', customerRoutes);
app.use('/admin', adminRoutes);
app.use('/vehicle', vehicleRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})