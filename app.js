const express = require('express')
const app = express()

app.use(express.static('public'))
app.set('view engine', 'ejs')
//app.engine('html', require('ejs').renderFile);
//app.set('view engine', 'html');

app.get("/footer", (req, res) => {
    res.render('footer.ejs')
})

app.get("/index", (req, res) => {
    res.render('index.ejs')
})


app.listen(3060, ()=> {
    console.log("server listening at port 3060");
})

//app.get("/index", (req, res)=> {
    //res.render('index.html')
//})