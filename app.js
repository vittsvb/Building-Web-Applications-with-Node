var express = require('express');
var app = express();
var port = process.env.PORT || 5000;

var nav = [{
	Link: '/Books',
	Text: 'Books'
			}, {
	Link: '/Authors',
	Text: 'Authors'
			}];

var bookRouter = require('./src/routes/bookRoutes')(nav);

app.use(express.static('public'));
app.set('views', './src/views');

// ============== Jade =============
//app.set('view engine', 'jade');
// =================================

// ============ Handlebars =========
//var handlebars = require('express-handlebars');
//app.engine('.hbs', handlebars({extname: '.hbs'}));
//app.set('view engine', '.hbs');
// =================================


// ============= EJS ===============
app.set('view engine', 'ejs');
// =================================

app.use('/Books', bookRouter);

app.get('/', function (req, res) {
	res.render('index', {
		title: 'Home',
		nav: [{
			Link: '/Books',
			Text: 'Books'
		}, {
			Link: '/Authors',
			Text: 'Authors'
		}]
	});
});


app.listen(port, function (err) {
	console.log('O server está na porta: ' + port);
});