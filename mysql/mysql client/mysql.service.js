import { createConnection } from 'mysql2'

const mysql = createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'testing-db'
});


/**
 * 
 * @param {string} query 
 * @returns 
 */
const Query = async (query) => {
  return new Promise(resolve => {
    mysql.query(query, async (err, result) => {
      if (err) throw err
      resolve(result)
    });
  })
}


const Database = {}
  
/** Create Database Connection
 * 
 */
Database.connect = async () => {
  return new Promise(resolve => {
    mysql.connect((err) => {
      if (err) throw err;
      console.log('Database Conected')
      resolve(true)
    })
  })
}

/** Close Database Connection
 * 
 */
Database.end = () => {
    mysql.end()
}

/** Make a Query to Database
 * 
 * @param {string} query 
 * @returns 
 */
Database.query = (query) => {
  return new Promise(async (resolve) => {
    let result = await Query(query)
    resolve(result)
  })
}


/** Insert Row into Table
 * 
 * @param {*} value 
 * @returns 
 */
Database.insert = (value) => {
  try {
    return database.query(`INSERT INTO \`table\` VALUES (0, ${value})`)
  } catch (error) {
    console.log(error)    
  }
}
  
export const database = Database