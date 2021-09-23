const express = require('express')
const app = express();
const port = process.env.PORT || 5000
const cors = require('cors')

require('dotenv').config();

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))


app.get('/', (req, res) => {
    res.redirect('/home')
})

app.get('/home', (req, res) => {
    res.render('homepage.ejs')
})

const postsController = require('./controllers/posts_controller.js')
app.use('/posts', postsController)

app.listen(port, () => {
    console.log(`app is listening on... ${port}`);
})
