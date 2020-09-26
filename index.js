const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const port = process.env.PORT || 3000;


app.use(express.static('public'));



router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"/public/index.html"));
});



app.listen(port, ()=>{
    console.log(`app is running on http://localhost:${port}`);
});
