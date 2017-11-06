var express = require("express");
var bodyParser = require('body-parser');
var session = require('express-session');
var app = express();
var fs = require('fs');

app.use(session({secret: 'codingdojorocks'}));  // string for encryption
app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({extended: true}));

app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

app.get('/', function (req, res){
  res.render('index', {title: "Index"});
});

app.get('/brain', function (req, res){
  res.render('brain', {title: "brain"});
});

// app.get('js/brain.js', function (req, res){
//   res.sendFile(__dirname + 'brain.js')
//   res.send()
// });

// app.get('/brain.csv', function (req, res){
//   res.render('csv/brain', {title: "Brain CSV"});
// });

app.post('/csv/brain', function (req, res){
  console.log("request: ", req.body.addresses)
  fs.writeFileSync('static/csv/brain.csv', req.body);
  res.redirect("/brain")
});

// app.post('/users', function (req, res){
//   req.session.name = req.body.name;		
//   console.log("POST DATA \n\n", req.body)
//   //code to add user to db goes here!
//   res.redirect('/');
// })

app.get('/bst', function (req, res){
  res.render('bst', {title: "BST"});
});




// route to process new user form data:
// app.post('/users', function (req, res){
//   req.session.name = req.body.name;		
//   console.log("POST DATA \n\n", req.body)
//   //code to add user to db goes here!
//   res.redirect('/');
// })

// app.get("/users", function (request, response){
//     // hard-coded user data
//     var users_array = [
//         {name: "Michael", email: "michael@codingdojo.com"}, 
//         {name: "Jay", email: "jay@codingdojo.com"}, 
//         {name: "Brendan", email: "brendan@codingdojo.com"}, 
//         {name: "Andrew", email: "andrew@codingdojo.com"}
//     ];
//     response.render('users', {users: users_array});

// })

// app.get("/users/:id", function (req, res){
//     console.log("The user id requested is:", req.params.id);
//     // just to illustrate that req.params is usable here:
//     res.send("You requested the user with id: " + req.params.id);
//     // code to get user from db goes here, etc...
// });


app.listen(8000, function() {
  console.log("listening on port 8000");
})