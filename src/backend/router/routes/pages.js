var express = require('express');
var router = express.Router();
const app = express();

/* GET users listing. */
app.get('/', (req, res)=>{
    res.send('This is home page');
});

module.exports = app;
