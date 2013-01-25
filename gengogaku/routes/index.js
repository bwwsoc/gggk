
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Gengogaku' });
};

exports.adjBuilder = function(req, res){
  res.render('adjBuilder', { title: 'Adjective builder' });
};

exports.verbBuilder = function(req, res){
  res.render('verbBuilder', { title: 'Verb builder' });
};

exports.dateAndTime = function(req, res){
  res.render('dateAndTime', { title: 'Date and Time' });
};

exports.numbers = function(req, res){
  res.render('numbers', { title: 'Numbers and Counters' });
};

exports.kana = function(req, res){
  res.render('kana', { title: 'Kana converter' });
};

exports.jsverblisting = function(req, res){
  res.render('jsverblisting', { title: 'Verb List' });
};

exports.kj = function(req, res){
	res.json({ user: 'tobi' })
};
