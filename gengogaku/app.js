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
app.get('/how', routes.how);
app.get('/practice', routes.practice);
app.get('/api/', api.info);
app.get('/api/help', api.info);
app.get('/api/info', api.info);
app.get('/api/verb', api.infoVerb);
app.get('/api/adjective', api.infoAdj);
app.get('/api/kana', api.infoKana);
app.get('/api/verb/:name', api.vf);
app.get('/api/adjective/:name', api.af);
app.get('/api/kana/:name', api.kj);

app.listen(process.env.VCAP_APP_PORT || 3000);

