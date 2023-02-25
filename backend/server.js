// -------------------------------------------------
// DEPENDENCIES
// -------------------------------------------------
require("dotenv").config()
const express = require("express")
const app = express()
const cors = require("cors")
const morgan = require("morgan")
const methodOverride = require("method-override")
const homeRouter = require("./routes/idxRouter.js")

// -------------------------------------------------
//  MIDDLEWARE
// -------------------------------------------------
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))
app.use(methodOverride("_method"))
app.use(express.static("public"))


// -------------------------------------------------
// ROUTES
// -------------------------------------------------
app.get("/", (req, res) => {res.send("<h1>You made it to Panda Foods</h1>")})
// this function is breaking - and I think it's because of 
// the idxRouter.js file. something in there isn't working right. 
app.use("/home", homeRouter)


// -------------------------------------------------
// LISTENER
// -------------------------------------------------
const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log("Running on port ", PORT))