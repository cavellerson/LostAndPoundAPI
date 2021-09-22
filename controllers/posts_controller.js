const express = require('express')
const pool = require("../db")
require('dotenv').config();
const posts = express.Router();
const cors = require('cors')

posts.use(cors())
posts.get('/allpets', async(req, res) => {
    try {
        // orders by post created at by default in DESCENDING ORDER
        const queryForAllPets = await pool.query("SELECT * FROM pets ORDER BY created_at DESC;")
        console.log(queryForAllPets);
        res.json(queryForAllPets["rows"])

    } catch(error) {
        console.error(error)
    }
})

posts.get('/:pet_type/', async(req, res) => {
    try {
        //type type is either "dog" or "cat"
        let pet_type = req.params.pet_type

        //orderby should be a string of either "desc" or "asc"
        let orderBy = req.query.orderby
        if (!orderBy) {
            orderBy = "DESC"
        }
        // by default, the list will come up in descending order according to the date of the created post
        // example: /posts/cat/?orderby=asc
        // default: /posts/cat/?orderby=desc or
        // /posts/dog/?orderby=desc
        // dogSize = {0:"x-small", 1:"small", 2:"medium", 3:"large", 4:"x-large", 5:"xx-large"}
        // catSize = {6:"kitten", 7:"cat"}

        const queryForPets = await pool.query(`SELECT * FROM pets WHERE pet_type = $1 ORDER BY created_at ${orderBy}`, [pet_type])


        console.log(queryForPets["rows"]);
        // console.log(queryForAllDogs);
        res.json(queryForPets["rows"])

    } catch(error) {
        console.error(error)
    }
})

posts.post('/', async(req, res) => {
    try {
        let pet_type = req.body.pet_type
        let pet_name = req.body.pet_name
        let zip_code = req.body.zip_code
        let coat_color = req.body.coat_color
        let eye_color = req.body.eye_color
        let sex = req.body.sex
        let misc = req.body.misc
        let picture_url = req.body.picture_url
        let date_lost = req.body.date_lost
        let pet_size = req.body.pet_size
        let phone_number = req.body.phone_number
        let email = req.body.email



        const newPost = await pool.query(
            "INSERT INTO pets (pet_type, pet_name, zip_code, coat_color, eye_color, sex, misc, picture_url, date_lost, pet_size, phone_number, email) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *", [pet_type, pet_name, zip_code, coat_color, eye_color, sex, misc, picture_url, date_lost, pet_size, phone_number, email]
        )
        console.log(newPost["rows"]);
        res.json(newPost["rows"])

        // INSERT INTO pets (pet_type, pet_name, zip_code, coat_color, eye_color , sex, misc, picture_url, date_lost, pet_size, phone_number, email) VALUES ('dog', 'fido', 28314, 'black', 'brown', 'male', 'he loves watermelons', 'someurl', '2021-9-22', 0, '8888888888', 'someguy@guysome.com');



    } catch(error) {
        console.error(error)
    }
})



module.exports = posts;
