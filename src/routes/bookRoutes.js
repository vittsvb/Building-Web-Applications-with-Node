var express = require('express');

var bookRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

var router = function (nav) {

	bookRouter.use(function (req, res, next) {
		if (!req.user) {
			res.redirect('/');
		}
		next();
	});
	bookRouter.route('/')
		.get(function (req, res) {
			var url = 'mongodb://localhost:27017/libraryApp';
			mongodb.connect(url, function (err, db) {
				var collection = db.collection('books');
				collection.find({}).toArray(function (err, results) {
					res.render('booksList', {
						title: 'Books',
						nav: nav,
						books: results
					});
				});
			});

		});

	bookRouter.route('/:id')
		.get(function (req, res) {
			var id = new ObjectID(req.params.id);
			var url = 'mongodb://localhost:27017/libraryApp';
			mongodb.connect(url, function (err, db) {
				var collection = db.collection('books');
				collection.findOne({
					_id: id
				}, function (err, results) {
					res.render('booksView', {
						title: 'Books',
						nav: nav,
						books: results
					});
				});
			});

		});

	return bookRouter;
};

module.exports = router;