const express = require('express');
const router = express.Router();
const app  = express();


//app.use('/pages', './routes/pages');

router.get('/', function(req, res){
	res.send('Welcome to express');
});
router.get('/about', function(req, res){
	res.send('about us page');
});
router.get('/contact', function(req, res){
	res.send('contact us page');
});


module.exports = router;