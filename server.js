
var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var fs = require('fs');

var app = express();
var port = process.env.PORT || 3000;

var recipeData = [];

app.engine('handlebars',exphbs());
app.set('view-engine','handlebars');

app.get('/',function(req,res){

  res.status(200).render('recipeMain',{

        recipes: recipeData,
        filternames: recipeData //Not sure how taking it objects works. We just need the titles here
  });

});


app.listen(port, function(){
  console.log("=== Server is running on port", port);
});