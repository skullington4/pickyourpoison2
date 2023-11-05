import express from 'express'
import {} from 'dotenv/config'
import './config/database.js'
import path from 'path'
import logger from 'morgan'
import favicon from 'favicon'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'



const app = express()
const prisma = new PrismaClient()

app.use(logger('dev'));
app.use(express.json());



const port = process.env.PORT || 3001;


app.use(cors());


app.get('/orders', async function(req, res) {
  const orders = await prisma.order.findMany({
    take: 20,
    orderBy: {
      createdAt: 'desc'
    }
  });
  res.status(200).send(orders);
});

app.post('/orders', async function(req, res) {
  
  const title = req.body.name;
  const glass = req.body.glass;
  const spirits = [];
  req.body.spirits.forEach(spirit => {
    spirits.push(spirit);
  });
  const mixers = [];
  req.body.mixers.forEach(mixer => {
    mixers.push(mixer);
  });
  const garnishes = req.body.garnishes;
  const price = req.body.price;

  console.log(title, glass, spirits, mixers, garnishes, price);


  const order = await prisma.order.create({
    data: {
      title: title,
      glass: glass,
      spirits: spirits,
      mixers: mixers,
      garnishes: garnishes,
      price: price
    }
  });

  res.status(200).send(order);
});




// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX/API requests
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.listen(3001, () => console.log("listening on port 3001"))