import express from 'express'
import {router} from './Router/router.js'

import cors from 'cors'
const PORT = 4000;
const app = express();

app.use(cors());
app.use(express.json());

app.use('/',router)

app.listen(PORT ,(req,res)=>{
    console.log(`http://localhost:${PORT}`);
});

