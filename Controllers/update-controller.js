var Cryptr = require('cryptr');
var express=require("express");
var connection = require('./../config');
const { sign } = require("jsonwebtoken");         

module.exports.update = function(req, res){
    var name = req.body.name;
    var email = req.body.email;
   // var password = req.body.password;
    var id = req.params.id;

    var password = cryptr.encrypt(req.body.password);

    const body = req.body;

    connection.query('update users SET name=?, email=?, password=? where id = ?', 
    //connection.query('UPDATE users SET ? WHERE id = ' + id,
    [
       name,
       email,
       password,
       id
    ],
    
    function (error, results, fields) {
   
            if (error)
            {
            console.log(error);     
            res.json({
                status:false,
                message:'there are some error with query'
            });
            }
            if(!results){
            return res.json({
                success:0,
                message: "failed to update user"
            });
            }
            // else {
            //     return res.redirect('/UserRegistration');
            // }
            return res.json({
                success: 1,
                message: "updated successfully"
            });   
        }
   );
}















// updateUser: (data, callBack) => {
//     dbConn.query(
//       `update users set name=?, email=?, password=? where id = ?`,
//       [

//         data.name,
//         data.email,
//         data.password,
//         data.id
       
//       ],
//       (error, results, fields) => {
//         if (error) {
//           callBack(error);
//         }
//         return callBack(null, results);
//       }
//     );
//   }
//   updateUsers: (req, res) => {
//     const body = req.body;
//     //const salt = genSaltSync(10);
//     //body.password = hashSync(body.password, salt);
//     updateUser(body, (err, results) => {
//       if (err) {
//         console.log(err);
//         return;
//       }
//       if(!results){
//         return res.json({
//           success:0,
//           message: "failed to update user"
//         });
//       }
//       return res.json({
//         success: 1,
//         message: "updated successfully"
//       });
//     });
//   }