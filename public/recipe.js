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
  if(mealType != 'all'){
    if(recipeArray[idx].dataset.type != mealType){
      removeFromList(recipeArray[idx].dataset.title);
    }
  }
}

function removeFromList(name){
  for(var i = recipeNameArray.length-1; i >= 0; i--){
     var filterListName = recipeNameArray[i].dataset.title;
     filterListName = filterListName.replace(/[!"#$%&\\'()\*+,\-\.\/:;<=>?@\[\\\]\^_`{|}~]/g, '').toLowerCase();
    if(filterListName == name){
      recipeNameArray[i].remove();
    }
  }
}

function isInt(value){
  for(var i = 0; i < value.length; i++){
    if(!(value <= '9' && value >= '0')){
      window.alert("Only numbers can be put in the Cook Time feild.");
      filterCT.value = "";
      break;
    }
    else{
      goodInt = value;
      return goodInt;
    }
  }
  return 0;
}

function isRating(value){
  for(var i = 0; i < value.length; i++){
    if(!(value <= '5' && value >= '1')){
      window.alert("Only ratings 1-5 can be put in the Rating feild.");
      filterRating.value = "";
      break;
    }
    else{
      return value;
    }
  }
  return 0;
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
           removeFromList(name);
         }
       }
     }
    if(filterCT.value != ""){
        for(var i = recipeArray.length-1; i >=0; i--){
          var cookTime = recipeArray[i].dataset.cooktime;

          if(isInt(filterCT.value) == 0){
          }
          else{
            if(+cookTime >= +filterCT.value){
              removeFromList(recipeArray[i].dataset.title);
            }
          }
            filterByMeal(i);
        }
      }
      if(filterRate.value !=""){
        for(var i = recipeArray.length-1; i >=0; i--){
          var rateTime = recipeArray[i].dataset.rating;

          if(isRating(filterRate.value) == 0){
          }
          else{
            console.log("ratetim", rateTime, "filterr", filterRate.value);
            if(+rateTime < +filterRate.value){
              removeFromList(recipeArray[i].dataset.title);
            }
          }
            filterByMeal(i);
        }
      }
   });
 /* End of Search Button */

 /* End Filter Box Functionality */
