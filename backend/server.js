const express = require('express')
const cors = require ('cors')
const router = require('./routes/index')


//Create Server
const server = express()

//Middleware
server.use(cors())
server.use(express.json()) //Data body, interpretation.

//Routes
server.use('/api', router)


//Response server OK
server.listen(5000, ()=>console.log('Ya está Wacho, run in port 5000'))