const express = require('express')
const router = express.Router();
const {saveCustomer, updateCustomer, deleteCustomer, loginCustomer} = require("../controllers/customer-controller");

router.post('/add', saveCustomer );
router.put('/update/:updateNic', updateCustomer);
router.delete('/delete/:deleteNic', deleteCustomer);
router.get('/login', loginCustomer);

module.exports =  router;