var Cryptr = require('cryptr');
cryptr = new Cryptr('myTotalySecretKey');
var connection = require('./../config');
const { sign } = require("jsonwebtoken");      
var jwt = require("jsonwebtoken"); 
var dotenv = require("dotenv");

dotenv.config({path: './env' });


module.exports.authenticate=function(req,res){
    var email=req.body.email;
    var password=req.body.password;
   
   
    connection.query('SELECT * FROM users WHERE email = ?',[email], function (error, results, fields) {
      if (error) {
          res.json({
            status:false,
            message:'there are some error with query'
            })
         }else{
        if(results.length > 0){
            decryptedString = cryptr.decrypt(results[0].password);
            
            if(password==decryptedString){
                const token = sign({_result:results},'qwe1234',{
                  expiresIn: "1h"
               });
               res.json({
                    //console.log(token);
                    status:true,
                    message:'successfully authenticated',
                    jsonToken: token     
                });
               console.log(results);
        // if(results.length > 0){
        //   if (password == results[0].password){
        //     var token = jwt.sign(results[0],process.env.SECRET_KEY,{
        //       expiresIn:5000
        //     });
        //     res.json({
        //       status:true,
        //       token: token
        //     })
        //    }
        // }
            }else{
                res.json({
                  status:false,
                  message:"Email and password does not match"
                 });
            } 
        }
        else{
          res.json({
              status:false,    
            message:"Email does not exist"
          });
        }
      }
    });
}
