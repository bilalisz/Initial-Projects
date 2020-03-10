var mysql = require('mysql');
var databaseSetup={
    host: "localhost",
    user: "root",
    password: "",
    database: 'databasewithnodejs',
    connectTimeout: 10
  }

var con = mysql.createConnection(databaseSetup);
  
  con.connect(function(err) {
    if (err) {
        console.log(`error is : ${err}`);
    }
    console.log("Database created !");
    console.log('Database Connected !');
  });


const  showData=()=>{
  const sql="SELECT * FROM persons";
  con.query(sql, function (err, rows, fields) {
    if (err) throw err;
    console.log(rows);

  });
}
function addData(id,name,phone,email){
const person = { 
 id,
  name ,
  phone,
  email
 };
con.query('INSERT INTO persons SET ?', person, (err, res) => {
  if(err) throw err;

  console.log('Last insert ID:', person.id);
});
}

const deleteRow=id=>{
con.query(
  'DELETE FROM persons WHERE id = ?', [id], (err, result) => {
    if (err) throw err;

    console.log(`Deleted ${result.affectedRows} row(s)`);
  }
);
}


    //showData();
    //addData(7,'khalil','076543','khalil@gmail.com');
  //    deleteRow(6);
    
  


