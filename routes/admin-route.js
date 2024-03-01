const express = require('express');
const router = express.Router();
const {registerAdmin, loginAdmin} = require("../controllers/admin-controller");

router.post('/register', registerAdmin);
router.get('/login', loginAdmin);

module.exports = router;