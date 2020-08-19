var express=require("express");
var bodyParser=require('body-parser');
//var jwt= require("jsonwebtoken");
 
var connection = require('./config');
var app = express();

//var router = express.Router();

//const { checkToken } = require("../../auth/token_validation");
const { checkToken } = require("./auth/token_validation");
 
var authenticateController=require('./controllers/authenticate-controller');
var registerController=require('./controllers/register-controller');
var updateController=require('./Controllers/update-controller');
var deleteController=require('./controllers/delete-controller');
var getAllUserscontroller=require('./Controllers/getAllUsers-controller');
 
//process.env.SECRET_KEY = "qwe1234";

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {  
   res.sendFile( __dirname + "/" + "UserRegistration.html" );  
})  
 
app.get('/login', function (req, res) {  
   res.sendFile( __dirname + "/" + "login.html" );  
}) 

app.get('/UpdateDetails', function (req, res) {  
   res.sendFile( __dirname + "/" + "UpdateDetails.html" );  
})  
 
/* route to handle login and registration */
app.post('/api/register', registerController.register);
app.post('/api/authenticate',authenticateController.authenticate);
app.patch('/api/update/:id',checkToken, updateController.update);
app.post('/api/delete',checkToken, deleteController.delete);
app.get('/api/getAllUsers', getAllUserscontroller.getAllUsers);

//app.use('/secure-api',router);

console.log(authenticateController);
app.post('/controllers/register-controller', registerController.register);
app.post('/controllers/authenticate-controller', authenticateController.authenticate);
app.patch('/controllers/update-controller', updateController.update);
app.post('/controllers/delete-controller', deleteController.delete);
app.get('/controllers/getAllUsers-controller', getAllUserscontroller.getAllUsers);

//validation middleware
// router.use(function(req, res, next){
//    var token = req.body.token||req.headers['token'];
//    if (token){
//       jwt.verify(token, process.env.SECRET_KEY, function(err, res){
//          if(err){
//             res.status(500).send('Token Invalid');
//          } else {
//             next();
//          }
//       })
//    }else{
//       res.send('Please send a token');
//    }
// })
// router.get('/home', function(req, res){
//    res.send('Token Verified');
// })

app.listen(8000);
