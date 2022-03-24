const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 4040;

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('', require('./routes.js'));

app.listen(port, () => {
    console.log(`App is running on port ${port}.`);
});