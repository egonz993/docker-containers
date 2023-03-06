import { database } from "./mongo.service.js";

await database.connect()

// for(let i=1; i<=10; i++){
//     let time = new Date().getTime()
//     await database.create(i, `time: ${time}`)
//     console.log(i, time)
// }


const registries = await database.find()
console.table(registries)

database.disconnect()