


var mysql = require('mysql');
var databaseSetup={
    host: "localhost",
    user: "root",
    password: "",
    database: 'databasewithnodejs',
    connectTimeout: 10,
   
    }
  
   databaseSetup.createDB= function(){
      var con = mysql.createConnection(databaseSetup);
    
    con.connect(function(err) {
      if (err) {
          console.log(`error is : ${err}`);
      }
      
      console.log("Database created !");
      console.log('Database Connected !');
      
  
    });
  }
  module.exports=databaseSetup;

