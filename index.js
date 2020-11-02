const express = require("express");
const app = express();
const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'ami',
    password: 'password',
    database: 'nodemysql'
});

db.connect((err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log("connected");
    }
})

app.get('/createdb',(req,res) => {
    let sql = 'CREATE DATABASE nodemysql';
    db.query(sql,(err,result) => {
        if(err){
            console.log(err);
        }
        else{
            console.log(result);
            res.send("database created...");
        }
    })
})

app.get('/createtable' ,(req,res) => {
    let sql = "CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))";
    db.query(sql,(err,result) => {
        if(err){
            console.log(err);
        }
        else{
            console.log(result);
            res.send("post tabel created...");
        }
    })
})

app.get('/getposts',(req,res) => {
    let sql = 'SELECT * FROM posts';
    db.query(sql,(err,result) => {
        if(err){
            console.log(err);
        }
        else{
            console.log(result[0].body);
            res.send("shown...");
        }
    })
})

app.listen(3000, () => {
    console.log("hello");
});