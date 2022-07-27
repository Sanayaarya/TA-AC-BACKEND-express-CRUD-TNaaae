var express = require('express');
var app = express();
var path = require('path');

// middlewares

app.set('view engine','ejs');
app.set('view',path.join(__dirname + 'views'))

app.get('/',(req,res)=>{
  res.render('index.ejs')
})

app.listen(3000, () => {
  console.log('server is listening port 3k ');
});