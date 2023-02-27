const mysql = require("mysql")
require("dotenv").config()
const USER = process.env.USER
const PASSWORD = process.env.PASSWORD
const DB = process.env.DB



const connection = mysql.createConnection({
    host: "localhost",
    user: USER,
    password: PASSWORD,
    database: DB
})

connection.connect((error) => {
    if(error){
        console.error("MySQL connection error: " + error.message)
        return
    }
    console.log("Connected to MySQL as id: ", connection.threadId)
})

// Here is the next step, once you can get the above to connect. 
// connection.query("SELECT * FROM [xyz]", (error, results, fields) => {
//     if(error) throw error
//     console.log("retreived the following: ", results)
// })

// connection.end()