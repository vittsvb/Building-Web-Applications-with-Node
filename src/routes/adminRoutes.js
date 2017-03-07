var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var books = [
	{
		title: 'War and Peace',
		author: 'Lev Tolstoy',
		bookId: 656,
		read: false
	},
	{
		title: 'The Fellowship of the Ring',
		author: ' J.R.R. Tolkien ',
		bookId: 34,
		read: false
	},
	{
		title: 'Harry Potter',
		author: 'J. K. Rowling',
		bookId: 3,
		read: false
	},
	{
		title: 'Os Miseráveis',
		author: 'Victor Hugo',
		bookId: 24280,
		read: false
	},
	{
		title: 'The Lightning Thief',
		author: 'Rick Riordan',
		bookId: 28187,
		read: false
	},
	{
		title: 'Sophies World : The Greek Philosophers',
		author: 'Jostein Gaarder',
		bookId: 58302,
		read: false
	}
];

var router = function (nav) {
	adminRouter.route('/addBooks')
		.get(function (req, res) {
			var url = 'mongodb://localhost:27017/libraryApp';
			mongodb.connect(url, function (err, db) {
				var collection = db.collection('books');
				collection.insertMany(books, function (err, results) {
					res.send(results);
					db.close();
				});
			});
			//res.send('Inserindo Livros...');
		});

	return adminRouter;
};

module.exports = router;