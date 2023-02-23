const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

let static = path.join(__dirname, '/client');
app.use(express.static(static));

app.listen(80, () => {
    console.log('Server is running on http://31.133.100.199');
});