import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config();

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:process.env.passwordDB,
    database:"crud"
})

db.connect((err)=>{
    if(err){
        console.log("Database connection is lost", err.stack);
        return;
    }
    console.log("connected to database");
})

export default db