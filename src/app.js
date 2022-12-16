const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const port=process.env.port || 5000;

// public static path
const staticpath=path.join(__dirname,"../public");

const template_path=path.join("__dirname","../templates/views");
const partialspath=path.join("__dirname","../templates/partials");
// console.log(partialspath)
app.set('view engine','hbs');
app.set('views',template_path);
hbs.registerPartials(partialspath);
app.use(express.static(staticpath));


//Routing in express
app.get("",(req,res)=>{
    res.render("index");
});

// app.get("/home",(req,res)=>{
//     res.render('index');
// });

app.get('/about',(req,res)=>{
    res.render('about');
});

app.get('/weather',(req,res)=>{
    res.render("weather");
});

app.get('*',(req,res)=>{
    res.render('404page');
});

app.listen(port,()=>{
    console.log(`listening at port no ${port}`)
});