import express from 'express'
import {} from 'dotenv/config'
import './config/database.js'
import path from 'path'
import logger from 'morgan'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'
import router from './routes/api/orders.js'


const app = express()
const prisma = new PrismaClient()

app.use(logger('dev'));
app.use(express.json());



const port = process.env.PORT || 3001;


app.use(cors());

const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, 'build')));

app.use('/api/orders', router);


// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX/API requests
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.listen(port, () => console.log("listening on port 3001"))