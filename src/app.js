const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const router = require('./route/index');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', router)

app.listen(3000, () => {
    console.log('Express app listening on port 3000');
});
