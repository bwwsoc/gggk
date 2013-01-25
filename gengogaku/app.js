var express = require('express'),
  engine = require('ejs-locals'),
  routes = require('./routes'),
  api = require('./routes/api'),
  app = express();

app.engine('ejs', engine);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', routes.index);
app.get('/index', routes.index);
app.get('/adjBuilder', routes.adjBuilder);
app.get('/verbBuilder', routes.verbBuilder);
app.get('/kana', routes.kana);
app.get('/numbers', routes.numbers);
app.get('/dateAndTime', routes.dateAndTime);
app.get('/api/:name', api.kj);

app.listen(process.env.VCAP_APP_PORT || 3000);
