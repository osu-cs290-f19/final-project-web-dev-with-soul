/* This is the JavaScript file for the recipe website, its purpose will be to access recipes stores on the site and prehaps add recipes of the user*/

var recipeArray = document.getElementsByClassName('recipe');
var recipeNameArray = document.getElementsByClassName('filter-recipe-name');
for (var i = 0; i < recipeNameArray.length; i++) {
  recipeNameArray[i].addEventListener('click', toggleVisability);
}
 function toggleVisability(event){
   console.log("WE GOT CLICKED");
   var choosenRecipe = event.currentTarget.dataset.title;
   choosenRecipe = choosenRecipe.toLowerCase();
   console.log(choosenRecipe);
   for (var i = 0; i < recipeArray.length; i++) {
     console.log(recipeArray[i].dataset.title);
     if(recipeArray[i].dataset.title === choosenRecipe){
       recipeArray[i].classList.add('visable');
       console.log(recipeArray[i]);
     }
     else{
       recipeArray[i].classList.remove('visable');
     }
   }
 }
