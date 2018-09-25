var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	    res.render('ajax', {title: 'An Ajax Example', quote: "AJAX is great!"});
});
router.post('/', function(req, res){
	    res.render('ajax', {title: 'An Ajax Example', quote: req.body.quote});
});

module.exports = router;
