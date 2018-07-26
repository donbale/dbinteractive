const express = require('express');
const mongoose = require('mongoose');

const { body, validationResult } = require('express-validator/check');

const path = require('path');

const router = express.Router();
const Network = mongoose.model('Network');

router.get('/', (req, res) => {
	Network.find()
		.then((networks) => {
			res.render('index', { title: 'Listing networks',
networks });
		})
		.catch(() => { res.send('Sorry! Something went wrong.'); });
});

module.exports = router;