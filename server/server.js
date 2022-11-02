const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express()
app.use(express.json())
app.use(cors())

const {home} = require("./controllers/pageCtrl")
const {style} = require("./controllers/pageCtrl")

app.get('/', home)
app.get('/css', style)

const {PORT} = process.env

app.listen(PORT, () => console.log(`server listening on ${PORT}`))