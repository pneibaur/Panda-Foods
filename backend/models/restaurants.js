const mysql = require("mysql")

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "mydatabase"
})

connection.connect((error) => {
    if(error){
        console.error("MySQL connection error: " + error.stack)
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