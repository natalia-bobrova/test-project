var express = require('express');
var app = express();

app.use(express.static('bower_components'));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

var news = [
   { author: 'Nata', content: 'Abcdefafsdfsdf' },
   { author: 'Nata1', content: 'Abcdefafsdfsdf1' },
   { author: 'Nata2', content: 'Abcdefafsdfsdf2' },
   { author: 'Nata3', content: 'Abcdefafsdfsdf3' },
   { author: 'Nata4', content: 'Abcdefafsdfsdf4' }
];

app.get('/get-news', function (req, res) {
  res.send(JSON.stringify(news));
});

app.get('*', function (req, res) {
  res.redirect('/index.html');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
