var express = require('express');

var bookRouter = express.Router();

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
		res.render('books', {
			title: 'Books',
			nav: [{
				Link: '/Books',
				Text: 'Books'
			}, {
				Link: '/Authors',
				Text: 'Authors'
			}],
			books: books
		});
	});

bookRouter.route('/single')
	.get(function (req, res) {
		res.send('Olar single Books');
	});