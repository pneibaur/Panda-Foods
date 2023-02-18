// -------------------------------------------------
// DEPENDENCIES
// -------------------------------------------------
const express = require("express")
const app = express()
require("dotenv").config()
const methodOverride = require("method-override")

// -------------------------------------------------
//  MIDDLEWARE
// -------------------------------------------------
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(methodOverride("_method"))
app.use(express.static("public"))


// -------------------------------------------------
// ROUTES
// -------------------------------------------------
app.get("/", (req, res) => {res.send("<h1>You made it to Panda Foods</h1>")})


// -------------------------------------------------
// LISTENER
// -------------------------------------------------
const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log("Running on port ", PORT))