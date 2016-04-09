var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/downloadcv', function(req, res, next) {
	res.download(__appRoot + '/files/jyoti_prakash_resume.pdf', 'Jyoti_prakash_UI.pdf');
	//res.json({error: 'success'});
});

module.exports = router;
