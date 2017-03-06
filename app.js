var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var passport = require('passport');
var session = require('express-session');
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
var adminRouter = require('./src/routes/adminRoutes')(nav);
var authRouter = require('./src/routes/authRoutes')(nav);


app.use(express.static('public'));
app.set('views', './src/views');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(session({secret: 'library'}));

require('./src/config/passport')(app);


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
app.use('/Admin', adminRouter);
app.use('/Auth', authRouter);	

app.get('/', function (req, res) {
	res.render('index', {
		title: 'Home',
		nav: nav
	});
});


app.listen(port, function (err) {
	console.log('O server está na porta: ' + port);
});