const express = require('express')
const pool = require("../db")
require('dotenv').config();
const posts = express.Router();
const cors = require('cors')

posts.use(cors())
posts.get('/', async(req, res) => {
    try {
        const queryForAllPets = await pool.query("SELECT * FROM pets;")
        console.log(queryForAllPets);
        res.json(queryForAllPets["rows"])

    } catch(error) {
        console.error(error)
    }
})

// post.get('/sort', async(req, res) => {
//     try {
//         const queryForAllSortedPets = await pool.query("
//         SELECT * FROM pets ORDER BY ")
//     }
// })

posts.post('/', async(req, res) => {
    try {

        let pet_name = req.body.pet_name
        let information = req.body.information
        let zip_code = req.body.zip_code
        let picture_url = req.body.picture_url
        let date_lost = req.body.date_lost
        let pet_size = req.body.pet_size
        let phone_number = req.body.phone_number 
        let email = req.body.email



        const newPost = await pool.query(
            "INSERT INTO pets (pet_name, information, zip_code, picture_url, date_lost, pet_size, phone_number, email) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *", [pet_name, information, zip_code, picture_url, date_lost, pet_size, phone_number, email]
        )
        console.log(newPost["rows"]);
        res.json(newPost["rows"])

        // INSERT INTO pets (pet_name, information, zip_code, picture_url, date_lost, pet_size, phone_number, email) VALUES ('dogman', 'hes a dog', 28314, 'https://www.cdc.gov/healthypets/images/pets/angry-dog.jpg?_=03873', '9-12-2021', 1, '8888888888', 'someguy@guysome.com');



    } catch(error) {
        console.error(error)
    }
})



module.exports = posts;
