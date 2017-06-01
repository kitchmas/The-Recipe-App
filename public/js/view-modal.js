
var viewModal = function() {
var $ = require('jquery');

    function clearViewModal() {
        $('#view-recipe-modal .recipe-view-heading').text("");
        $('#view-recipe-modal .recipe-view-method').text("");
        $('#view-recipe-modal .recipe-view').attr("recipe-id", "");
        $('#view-recipe-modal .recipe-view-ingredients').empty();
    };

    function closeViewModal() {
        $('#view-recipe-modal').css("display", "none");
    };

    function openViewModal() {
        $('#view-recipe-modal').css("display", "block");
    };

    function showRecipe(recipe) {
        openViewModal();
        $('.recipe-view-heading').text(recipe.name);
        $('.recipe-view-method').text(recipe.method);
        $('.recipe-view').attr("recipe-id", recipe._id);
        recipe.ingredients.forEach(function(ingredient) {
            $('.recipe-view-ingredients').append('<li>' + ingredient.ingredient + '</li>');
        });
    };

    function setUpdateModal() {
        //Change buttons
        $(".rec-btn-save").toggleClass("rec-btn-save rec-btn-update").html('Update');
    };

    return {
        showRecipe: showRecipe,
        setUpdateModal: setUpdateModal,
        closeViewModal:closeViewModal
    }

}

module.exports  = viewModal();

