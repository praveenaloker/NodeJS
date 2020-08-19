var Cryptr = require('cryptr');
var express=require("express");
var connection = require('./../config');

module.exports.getAllUsers = function(req, res){
    var name = req.body.name;
    var email = req.body.email;
   // var password = req.body.password;
    var id = req.body.id;

    const body = req.body;

    connection.query('Select * from Users', 
    [],
    
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
                message: "failed to get users"
            });
            }
            return res.json({
                success: 1,
                message: "users shown successfully",
                data: results
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