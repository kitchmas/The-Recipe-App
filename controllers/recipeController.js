var express = require('express'),
    router = express.Router();




const Recipe = require('../models/recipe');

//Serve the recipe page
router.get('/', function(req, res) {
    res.render('recipe');
});

//Get all recipes
router.get('/recipeAPI', function(req, res) {
    Recipe.find({}, function(err, recipes) {
        if (err)
            res.status(500).send(err);
        else
            console.log(recipes);
        res.send(recipes);
    });
});

// add a recipe to the db
router.post('/recipeAPI', function(req, res, next) {
    //using body parser to access the body
    var recipe = new Recipe(req.body);
    recipe.save();
    res.json(req.body);
});


//Middleware that gets the recipe and addis it otthe req
router.use('/recipeAPI/:recipeId', function(req, res, next) {
    //get by ID
    Recipe.findById(req.params.recipeId, function(err, recipe) {
        if (err)
            res.status(500).send(err);
        else if (recipe) {
            req.recipe = recipe;
            next();
        } else {
            res.status(404).send('No recipe found');
        }
    });
});


router.route('/recipeAPI/:recipeId')
    .get(function(req, res) {
      debugger;
        //Getting from middleware
        res.send(req.recipe);
    })
    .put(function(req, res) {
        //getting from req using middleware
        req.recipe.name = req.body.name;
        req.recipe.method = req.body.method;
        req.recipe.ingredients = req.body.ingredients;
        req.recipe.save(function(err){
          if(err)
          res.status(500).send(err);
          else{
            res.json(req.recipe);
          }
        });
    });









module.exports = router;


// module.exports = function(app) {
//     const Recipe = require('../models/recipe');
//
// //Serve the recipe page
//     app.get('/recipe', function(req, res) {
//         res.render('recipe');
//     });
//
//
//
//     //add a recipe to the db
//     app.post('/recipe', function(req, res, next) {
//         //using body parser to access the body
//         var recipe = new Recipe(req.body);
//         recipe.save();
//     });
//
//
//
//     app.delete('/recipe', function(req, res) {
//
//     });
//
//
// }
