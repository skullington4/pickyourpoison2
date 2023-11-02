import express from 'express'

const app = express()

require('dotenv').config()
require('./config/database')




app.listen(3001, () => console.log("listening on port 3001"))