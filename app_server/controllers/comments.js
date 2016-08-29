module.exports.comments = function(req, res, next) {
  res.render('comments', {
      title: 'Chat with buddies/ask questions',
      title_warning: 'Your conversation on this page is public.'
  });
  
}
