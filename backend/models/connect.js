const mysql = require("mysql2")
const config = require("./mysqlConfig.js")

let connection = mysql.createConnection(config)

connection.connect((error) => {
    if(error){
        console.error("MySQL connection error: " + error.message)
        return
    }
    console.log("Connected to MySQL as id: ", connection.threadId)
})

// Here is the next step, once you can get the above to connect. 
connection.query(`SELECT * FROM pandafoods.restaurants`, (error, results, fields) => {
    if(error){
        console.log("oops! there's an error below!")
        console.error(error.message)
        throw error
    }
    console.log("retreived the following: ", results)
})

connection.end()