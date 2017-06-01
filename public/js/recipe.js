

   var recipeHandler = require('./recipe-handler.js');
   var saveModal = require('./save-modal.js');
   var viewModal = require('./view-modal.js');
   var $ = require('jquery');

     function loadRecipes(recipes) {

         recipes.forEach(function(recipe) {
             console.log(recipe);
             var recipeItem = '<div class="recipe-item" recipe-id="' + recipe._id + '">' +
                 '<h3 class="recipe-item-heading">' + recipe.name + '</h3>' +
                 '<h4 class="recipe-method-heading">Method</h4>' +
                 '<div class="recipe-item-body">' + recipe.method +
                 '</div>' +
                 '</div>';
             $(".recipe-viewer").append(recipeItem);
         });
     };

     $(function() {
         recipeHandler.getRecipes(loadRecipes)
         // Save Modal Events
         $('.rec-btn-add').on('click', saveModal.openSaveModal);

         $('#save-recipe-modal  .close').on('click', function() {
             saveModal.closeSaveModal();
         });

         $('.rec-btn-add-ingredient').click(function() {
             saveModal.addIngredient();
         });

         $('#save-recipe-modal').on('click', '.rec-btn-save', function() {
             saveModal.saveRecipe();
         });

         $('#save-recipe-modal').on("click", '.rec-btn-update', function(e) {
           var url = "/recipe/recipeAPI/" + e.currentTarget.closest('#save-recipe-modal').attributes['recipe-id'].value;
             saveModal.updateRecipe(url);
         });

         // View Modal Events
         $('.recipe-viewer').on("click", '.recipe-item', function(e) {
             debugger;
             var url = "/recipe/recipeAPI/" + e.currentTarget.attributes['recipe-id'].value;
             recipeHandler.getRecipeById(url, viewModal.showRecipe);
         });

         $('#view-recipe-modal .rec-edit').on('click', function(e) {
             debugger;
             var url = "/recipe/recipeAPI/" + e.currentTarget.closest('.recipe-view').attributes['recipe-id'].value;
             viewModal.closeViewModal();
             viewModal.setUpdateModal();
             saveModal.openSaveModal();
             recipeHandler.getRecipeById(url, saveModal.showRecipe);
         });

     });


