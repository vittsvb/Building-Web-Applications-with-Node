var express = require('express');

var bookRouter = express.Router();

var router = function (nav) {
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
		author: 'Vitor Hugo',
		read: false
	}
];

	bookRouter.route('/')
		.get(function (req, res) {
			res.render('booksList', {
				title: 'Books',
				nav: nav,
				books: books
			});
		});

	bookRouter.route('/:id')
		.get(function (req, res) {
			var id = req.params.id;
			res.render('booksView', {
				title: 'Books',
				nav: nav,
				book: books[id]
			});
		});
	
	return bookRouter;
};

module.exports = router;