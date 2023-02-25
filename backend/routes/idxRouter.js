const express = require("express")
const router = express.Router()
const idxCtrl = require("../controllers/idxCtrl.js")

router.get("/", idxCtrl.home)

// code that didn't work: module.exports = { router, }
module.exports = router