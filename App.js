const express = require('express');
const path = require('path');
const ejsMate = require('ejs-mate');
const app = express();


app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))


app.get('/views/form', (req,res)=>{
    res.render("form")
})


app.listen(3000, ()=>{
    console.log('Serving on port 3000 ')
})