var express = require('express'),
 router = express.Router()


  router.get('/',  function(req,res){
    console.log('serving home')
  res.render('home')
  });




module.exports = router;


// module.exports = function(app){
//
// app.get('/home',  function(req,res){
// res.render('home')
// });




// app.post('/todo',  function(req,res){
//
// });
//
// app.delete('/todo',  function(req,res){
//
// });


// }
