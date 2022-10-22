const mysql =require('mysql2')


con = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password:"Gojira2020",
    database: "Shoes",
    //dialect: "mysql"

})

con.connect((err) =>{
    if(!err){
        console.log("connected to the database at port 3306")
    }
    else console.log("unable to connect")
}) 

/* let sql = "CREATE DATABASE IF NOT EXISTS Shoes"

con.execute(sql, (err, results) => {
    if(!err){
        console.log("Shoes database successfully created")
    }
}) */

let sql2= "CREATE TABLE IF NOT EXISTS shoes (id INT, name VARCHAR(50), price INT)" 
con.execute(sql2, (err, results) => {
    if(!err) console.log("shoes table successfully created")
}) 

//let sql3 = "INSERT INTO shoes VALUES (1, 'DISNEY FORUM 84 LOW SHOES', 5300)"
//let sql3 = "INSERT INTO shoes VALUES (2, 'Jordan Why Not .5 PF', 7095)"
//let sql3 = "INSERT INTO shoes VALUES (3, 'Nike Air Force 1 07', 4795)"
//let sql3 = "INSERT INTO shoes VALUES (4, 'Nike Air Huarache SE', 7095)"
//let sql3 = "INSERT INTO shoes VALUES (5, 'TRAE YOUNG 1 SHOES', 6500)"
//let sql3 = "INSERT INTO shoes VALUES (6, 'ZX 8000 LEGO SHOES', 7000)"


  let sql3 = "INSERT INTO shoes VALUES (6, 'ZX 8000 LEGO SHOES', 7000)"
con.query(sql3, (err, result) => {
    if(!err) console.log(result)
    else console.log("cannot insert record")
}) 

  let sql4 = "SELECT * FROM shoes"
con.query(sql4, (err, result) => {
    if(!err) console.log(result)
}) 

/* let sql5 = "UPDATE shoes SET name = 'Nike'  WHERE sid = 1"
con.query(sql5, (err, result)=>{
    if(!err) console.log("succesfully set the update")
})
let sql6 = "UPDATE shoes SET name = 'Adidas'  WHERE sid = 2"
con.query(sql6, (err, result)=>{
    if(!err) console.log("succesfully set the update")
})
let sql7 = "UPDATE shoes SET name = 'Trae Young'  WHERE sid = 3"
con.query(sql7, (err, result)=>{
    if(!err) console.log("succesfully set the update")
})
let sql8 = "UPDATE shoes SET name = 'Disney'  WHERE sid = 4"
con.query(sql8, (err, result)=>{
    if(!err) console.log("succesfully set the update")

    */