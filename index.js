import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import db from './mongoConnect.js'
import { addFurniture, getFurniture, deleteFurniture, addMany } from "./furniture.js";
dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 3000; // Default option if env isnt found

app.get("/", getFurniture)

app.post("/", addFurniture)

app.delete('/:furnId', deleteFurniture)

app.post("/many", addMany)

app.listen(PORT, () => console.log("Listening at port: ", PORT))