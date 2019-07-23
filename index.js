const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const ejs = require('ejs')


app.set('view engine', 'ejs')
require('./routes/testRoutes')(app);


app.use(bodyParser.json())

const PORT = process.env.PORT || 5000
app.listen(PORT);
