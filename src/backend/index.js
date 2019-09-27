const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const port = 3001;

app.use('/', require('./router/routes'));

app.listen(port, function(){
    console.log(`server is running on port ${port}`);
});

module.exports = app;