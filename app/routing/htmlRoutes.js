var path = require('path');

module.exports - function (app) {

  app.get('/survey', function(req, res) {
    res.sendFile(path.join(__dirname + '/app/public/survey.html'));
  });


  app.use('/api/friends', function(req, res) {
    res.sendFile(path.join(__dirname + '/app/data/friends.js'));
  });

}
