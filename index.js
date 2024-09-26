require('dotenv').config()
const routes = require('./Routes/router')
const cors = require('cors')
const express = require('express')

require('./DB/connection')
const bookServer = express()
bookServer.use(cors())
bookServer.use(express.json())
bookServer.use(routes)
const PORT = 3000;

bookServer.listen(PORT,()=>{
    console.log(`server is running in ${PORT}`);
    
})

