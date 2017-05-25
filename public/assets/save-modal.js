var saveModal = function() {

    function clearSaveModal() {
        $('#save-recipe-modal #recipe-name').val("");
        $('#save-recipe-modal #recipe-steps').val("");
        $('#save-recipe-modal').attr("recipe-id", "");
        $('#save-recipe-modal #ingredients-list').empty();
        $('#save-recipe-modal #recipe-ingredient').val("");
    };

    function closeSaveModal() {
        clearSaveModal();
        $('#save-recipe-modal').css("display", "none");
    };

    function openSaveModal() {
        debugger;
        $('#save-recipe-modal').css("display", "block");
    };

    function addIngredient() {
        ingredient = $('input[name=ingredient]');
        $('<li>').text(ingredient.val()).prependTo('#ingredients-list');
        ingredient.val("");
    };

    function getIngredients() {
        var ingredients = [];
        $("#ingredients-list li").each(function(index) {
            ingredients.push({
                ingredient: $(this).text()
            });
        });
        return ingredients;
    };

    function getRecipe() {
        var name = $('input[name=name]').val(),
            method = $('textarea[name=recipe-method]').val(),
            ingredients = getIngredients();

        return {
            name: name,
            method: method,
            ingredients: ingredients
        };
    };

    function setSaveModal() {
        //Change buttons
        $(".rec-btn-update").toggleClass("rec-btn-update rec-btn-save").html('Update');
    };

    function saveRecipe() {
        debugger;
        var recipe = getRecipe();
        recipeHandler.addRecipe(recipe);
        clearSaveModal();
        closeSaveModal();
    };

    function updateRecipe(url) {
        var recipe = getRecipe();
        recipeHandler.updateRecipe(url,recipe);
        clearSaveModal();
        closeSaveModal();
    };

    function showRecipe(recipe) {
      debugger;
        $('#save-recipe-modal #recipe-name').val(recipe.name);
        $('#save-recipe-modal  #recipe-steps').val(recipe.method);
        $('#save-recipe-modal').attr("recipe-id", recipe._id);
        recipe.ingredients.forEach(function(ingredient) {
            $('#save-recipe-modal #ingredients-list').append('<li>' + ingredient.ingredient + '</li>');
        });
    };


    return {
        saveRecipe: saveRecipe,
        addIngredient: addIngredient,
        openSaveModal: openSaveModal,
        closeSaveModal: closeSaveModal,
        clearSaveModal: clearSaveModal,
        showRecipe:showRecipe,
        updateRecipe:updateRecipe
    }




}();
