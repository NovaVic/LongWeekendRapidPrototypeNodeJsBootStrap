module.exports.contentAsSecondAidHomePage = function(req, res, next) {
  res.render('index', {
      title: 'Crowd Sourced Content as Second Aid Initiative', 
      message: 'A page to connect researcher, therapists and patients together to effectively deal with depression and pain. We consider psycho social dimensions of music (unlike traditional medicine which only focuses on physiological/biological side of a disease.',
      musictherapy: 'use of music in ...' ,
      neuroscience: 'Study of ...' 
  });
  
}