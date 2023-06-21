import db from "./mongoConnect.js"

const furnitureDb = db.collection('furniture')

export const addFurniture = async (req, res) => {
    const newFurniture = req.body
    const newFurnitureAdded = await furnitureDb.insertOne(newFurniture)
    res.status(201).send(newFurnitureAdded)
}

export async function getFurniture(req, res) {
    try{
        const data = await db.collection("furniture").find({}).limit(10).toArray();
        res.status(200).send(data)
    } catch (error) {
        res.status(404).send(error)
    }
}