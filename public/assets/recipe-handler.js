var recipeHandler = function() {


    function getRecipes(recipeFunction) {
        $.ajax({
            type: 'GET',
            url: '/recipe/recipeAPI',
            success: function(recipes) {
              recipeFunction(recipes);
            }
        });
    };


    function addRecipe(recipe) {

        $.ajax({
            type: 'POST',
            url: '/recipe/recipeAPI',
            data: recipe,
            success: function(recipe) {
                return recipe;
            }
        });

    };

    function getRecipeById(url ,showRecipe) {

    debugger;
        $.ajax({
            type: 'GET',
            url: url,
            success: function(recipe) {
                showRecipe(recipe);
            }
        });
    };

    function updateRecipe(url, recipe){
      debugger;
      $.ajax({
        type:'PUT',
        url:url,
        data:recipe,
        success:function(recipe){
              console.log('done');
        }
      })
    }

    return {
      getRecipes:getRecipes,
      addRecipe:addRecipe,
      getRecipeById:getRecipeById,
      updateRecipe:updateRecipe
    };


}();
