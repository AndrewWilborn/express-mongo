import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config()

const client = new MongoClient(process.env.MONGO_URI)

const db = client.db('express-db')

export default db;