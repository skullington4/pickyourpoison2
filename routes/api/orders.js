
import express from "express";
const router = express.Router();
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

router.use(cors());

router.get("/", async function (req, res) {
    try {
        console.log("api/orders.js get request");
        const orders = await prisma.order.findMany({
            take: 20,
            orderBy: {
                createdAt: "desc"
            }
        });
        console.log(orders);
        res.json(orders);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
});


router.post("/", async function (req, res) {
    console.log("checkout in server.js");
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
});

export default router;