import db from '../config/db.js';
import express from 'express';

export const router = express.Router();

// GET route to fetch all students
router.get('/', (req, res) => {
    const sql = "SELECT * FROM Student";
    db.query(sql, (err, result) => {
        if (err) return res.json({ Message: "Error inside Server" });
        return res.json(result);
    });
});

// POST route to insert a new student
router.post('/student', (req, res) => {
    const sql = "INSERT INTO Student (`name`, `email`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email
    ];
    db.query(sql, [values], (err, result) => {
        if (err) {
            return res.json(err);
        }
        return res.json(result);  // Send the result back to the client
    });
});

router.get('/update/:id',(req,res)=>{
    const id = req.params.id;
    const sql = `select * from Student where id =(?)`;
    db.query(sql,[id],(err,result)=>{
        if(err){
            return res.status(500).json({Message:"error in getting value in update"});
        }
        return res.json(result);
    })
})
router.put('/update/:id',(req,res)=>{
    const id = req.params.id;
    const{name,email}= req.body;

    const sql = `update Student set name=?, email=? where id=?`;
    db.query(sql,[name,email,id],(err,result)=>{
        if(err){
            return res.status(500).json({Message:"error in getting value in update"});
        }
        return res.json({Message:"updated successfully ",result});
    })
});
router.delete('/delete/:id',(req,res)=>{
    const {id}= req.params;
    const sql = "delete from Student where id=?";
    db.query(sql,[id] ,(err,result)=>{
        if(err){
            return res.status(500).json({Message:"Error in server"});
        }
        return res.json({Message:"success deleted"})

    })

})


router.get('/read/:id',(req,res)=>{
    const id = req.params.id;
    const sql =`SELECT * FROM STUDENT WHERE ID =?`;
    db.query(sql,[id],(err,result)=>{
        if(err) return res.json({Message:"Error inside server"});
        return res.json(result);
    })
})