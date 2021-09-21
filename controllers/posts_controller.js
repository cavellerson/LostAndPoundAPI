const express = require('express')
const pool = require("../db")
require('dotenv').config();
const posts = express.Router();

posts.get('/', (req, res) => {
    res.send('posts work')
})



module.exports = posts;
