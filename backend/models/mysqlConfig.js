require("dotenv").config()
const USER = process.env.PERSON
const PASSWORD = process.env.PASSWORD
const DB = process.env.DB

const config = {
    host: "127.0.0.1",
    user: USER,
    password: PASSWORD,
    database: DB
}

module.exports = config