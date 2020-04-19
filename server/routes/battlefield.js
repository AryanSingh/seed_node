const express = require('express')
const Battle = require('../models/Battle')
const Data = require('../data')
let url = require('url')

const router = express.Router()

// Route to get all countries
router.get('/list', (req, res, next) => {
	Battle.find({}).select('location -_id').exec(function(err, locations){
		if(err) return next(err);
		locationArr = [];
		locations.map((location) => {
			if(locationArr.indexOf(location.location) === -1 && location.location !== ""){
				locationArr.push(location.location)
			}
		});
		res.json({success: true, data: locationArr})
	})
});
router.get('/', (req, res, next) => {
	Battle.find({}).exec(function(err, battles){
		if(err) return next(err);
		res.json({success: true, data: battles})
	})
});

router.get('/count', (req, res, next) => {
	Battle.count({}, function(err, result) {
		if (err) {
			console.log(err);
		} else {
			res.json({ success: true, data: result });
		}
	});
});

router.get('/search', (req, res, next) => {
	let url_parts = url.parse(req.url, true)
	let query = url_parts.query
	Battle.find({ $or:[{'attacker_king': req.query.king}, {'defender_king': req.query.king}],
		...req.query.location ? { location: { $regex: new RegExp("^" + req.query.location.toLowerCase(), "i") }}: {},
		...req.query.type ? { battle_type: { $regex: new RegExp("^" + req.query.type.toLowerCase(), "i") }}: {} }, function(err, docs){
		if(!err){
			res.json({success: true, data:docs})
		}
	});
	console.log(req.query)
});



// Route to add a country

module.exports = router
