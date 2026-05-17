const express = require("express")
const router = express.Router()

const { categories } = require("../data/db")

router.get("/", (req, res) => {
  res.json(categories)
})

module.exports = router