const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const path = require('path')
const ejs = require('ejs')
const expressLayouts = require('express-ejs-layouts')


app.use(bodyParser.json())
app.use(expressLayouts)

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
require('./routes/testRoutes')(app);



const PORT = process.env.PORT || 5000
app.listen(PORT);
