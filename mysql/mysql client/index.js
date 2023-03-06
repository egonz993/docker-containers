
import { database } from "./mysql.service.js";

// for(let i = 1; i<=100; i++){
//     let time = new Date().getTime()
//     await database.insert(time)
//     console.log(i, time)
// }

let registries = await database.query('SELECT * FROM `table` WHERE `id` > 400')
console.log(registries)

database.end()