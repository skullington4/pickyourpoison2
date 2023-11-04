import express from 'express'
import {} from 'dotenv/config'
import './config/database.js'
import Prisma from '@prisma/client'


const app = express()




app.listen(3001, () => console.log("listening on port 3001"))