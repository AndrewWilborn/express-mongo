import db from "./mongoConnect.js"
import { ObjectId } from "mongodb"
const furnitureDb = db.collection('furniture')

export const addFurniture = async (req, res) => {
    const newFurniture = req.body
    const newFurnitureAdded = await furnitureDb.insertOne(newFurniture)
    res.status(201).send(newFurnitureAdded)
}

export async function getFurniture(req, res) {
    try{
        const data = await furnitureDb.find({}).limit(10).toArray();
        res.status(200).send(data)
    } catch (error) {
        res.status(404).send(error)
    }
}

export async function deleteFurniture(req, res){
    const deleteOne = await furnitureDb.deleteOne({_id: new ObjectId(req.params.furnId)}).catch(res.status(404).send)
    res.status(200).send(deleteOne)
}

export async function addMany(req, res){
    const newFurniture = req.body
    newFurniture.forEach(async element => {
        await furnitureDb.insertOne(element);
    });
    res.status(200).send("message")
}