
var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var fs = require('fs');

var app = express();
var port = process.env.PORT || 3000;

var recipeData = require('./recipeData.json');

app.engine('handlebars',exphbs());
app.set('view engine','handlebars');

app.use(express.static('public'));

app.get('/',function(req,res){

  res.status(200).render('recipeMain',{

        recipes: recipeData,
        filternames: recipeData //Not sure how taking it objects works. We just need the titles here
  });

});


app.listen(7321, function(){
  console.log("=== Server is running on port", port);
});
