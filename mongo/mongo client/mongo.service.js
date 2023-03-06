import mongoose from 'mongoose'


const Model = mongoose.model('Model', new mongoose.Schema({
  index: Number,
  value: String
}))


const Database = {}
  
/** Create Database Connection
 * 
 */
Database.connect = async () => {
    return await mongoose.connect('mongodb://root:root@localhost/myapp?authSource=admin')
}

/** Search into database
 * 
 */
Database.find = async () => {
    return await Model.find()
}

/** Create into database
 * 
 */
Database.create = async (index, value) => {
    return await Model.create({ index, value })
}

/** Close Database Connection
 * 
 */
Database.disconnect = () => {
    return mongoose.disconnect()
}

export const database = Database