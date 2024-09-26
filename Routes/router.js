const express= require('express')
const cors = require('cors');
const adminController = require('../controllers/adminController')
const bookController = require('../controllers/bookController')
const router = new express.Router


//admin Login
router.post('/admin/login',adminController.adminLogin)

//add Book
router.post('/admin/addBook',bookController.addBook)

//List Books
router.get('/listBooks',bookController.listBooks)

//delete books
router.delete('/deleteBook/:id',bookController.deleteBook)


module.exports = router;