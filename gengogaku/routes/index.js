
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

exports.how = function(req, res){
  res.render('how', { title: "How it's done" });
};

exports.practice = function(req, res){
  res.render('practice', { title: "Practice" });
};

