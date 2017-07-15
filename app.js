var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.listen(3001, function(){
  console.log('Server On');
});
