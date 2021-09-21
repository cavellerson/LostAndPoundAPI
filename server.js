const express = require('express')
const app = express();
const port = 3000;
require('dotenv').config();

app.use(express.json())

app.get('/home', (req, res) => {
    res.send("app works!")
})

const postsController = require('./controllers/posts_controller.js')
app.use('/posts', postsController)

app.listen(port, () => {
    console.log(`app is listening on... ${port}`);
})
