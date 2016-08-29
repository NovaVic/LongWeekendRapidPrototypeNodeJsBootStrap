module.exports.session_booked = function(req, res, next) {
  res.render('session_booked', {
      title: 'session_booked'
  });
  
}