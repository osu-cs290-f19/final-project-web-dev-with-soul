 /* This is the JavaScript file for the recipe website, its purpose will be to access recipes stores on the site and prehaps add recipes of the user*/

 /* Hiding and displaying the recipes Start*/
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
  /* End Hiding and displaying the recipes */

 /* Creating an array with the recipe data */
  //var recipeArray = require('./UN_MADE_DATA_FILE');
 /* End Creating an array with recipe data */

 /* Filter Box Functionality Start */
 function none(event){
 }

   var filterText = document.getElementById('filter-search');
      filterText.addEventListener('change', none);

   var filterCT = document.getElementById('filter-cook-time');
     filterCT.addEventListener('change', none);

   var filterRate = document.getElementById('filter-rating');
     filterRate.addEventListener('change', none);

   var mealType = 'all';

   var allB = document.getElementById('filter-all-button');
     allB.addEventListener('click', function (event) {
        mealType = 'all';
     });

   var breakfastB = document.getElementById('filter-breakfast-button');
     breakfastB.addEventListener('click', function (event) {
       mealType = 'breakfast';
    });

   var lunchB = document.getElementById('filter-lunch-button');
     lunchB.addEventListener('click', function (event){
       mealType = 'lunch';
     });

     var dinnerB = document.getElementById('filter-dinner-button');
       dinnerB.addEventListener('click', function (event){
         mealType = 'dinner';
       });

    var dessertB = document.getElementById('filter-dessert-button');
      dessertB.addEventListener('click', function (event){
        mealType = 'dessert';
      });

    var snackB = document.getElementById('filter-snack-button');
      snackB.addEventListener('click', function (event){
        mealType = 'snack';
      });

function filterByMeal(idx) {
  if(recipeArray[idx].dataset.type != 'all' || recipeArray[idx].dataset.type != mealType){
    recipeArray[idx].remove();
  }
}
 /* Search Button */
   var search = document.getElementById('filter-search-button');
   search.addEventListener('click', function (event) {
     if(filterText.value != ""){
       for(var i = recipeArray.length -1; i >= 0; i--){
         var name = recipeArray[i].dataset.title;

         filterByMeal(i);

         var userInp = filterText.value;
         userInp = userInp.replace(/[!"#$%&\\'()\*+,\-\.\/:;<=>?@\[\\\]\^_`{|}~]/g, '').toLowerCase();

         if(name.includes(userInp) == false){
           recipeArray[i].remove();
         }
       }
     }
     // if()
   });
 /* End of Search Button */

 /* End Filter Box Functionality */
