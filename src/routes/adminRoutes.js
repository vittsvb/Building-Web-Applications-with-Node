var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var books = [
	{
		title: 'War and Peace',
		author: 'Lev Tolstoy',
		read: false
	},
	{
		title: 'Til',
		author: 'José de Alencar',
		read: false
	},
	{
		title: 'Harry Potter',
		author: 'J. K. Rowling',
		read: false
	},
	{
		title: 'Os Miseráveis',
		author: 'Victor Hugo',
		read: false
	}
];

var router = function(nav){
	adminRouter.route('/addBooks')
		.get(function(req, res){
			var url = 'mongodb://localhost:27017/libraryApp';
			mongodb.connect(url, function(err, db){
				var collection = db.collection('books');
				collection.insertMany(books, function(err, results){
					res.send(results);
					db.close();
				});
			});
			//res.send('Inserindo Livros...');
		});
	
	return adminRouter;
};

module.exports = router;