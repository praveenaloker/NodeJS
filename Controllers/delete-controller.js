var Cryptr = require('cryptr');
var express=require("express");
var connection = require('./../config');
const { sign } = require("jsonwebtoken");         

module.exports.delete = function(req, res){
  
    var id = req.body.id;
    const body = req.body;

    connection.query('Delete from users where id = ?', 
    [id],
    
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
                message: "failed to delete user"
            });
            }
            return res.json({
                success: 1,
                message: "Deleted successfully"
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