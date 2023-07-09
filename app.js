const express=require('express');
const bodyparser=require('body-parser');

const app=express();

app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine','ejs');

let date=require(__dirname+"/date.js");
var items=["but food","cook food","eat food"];
let newdata=[];
app.get("/",function(req,res)
{
   var day=date.getDate();
    res.render('list',{kindofday:day,newitem:items});
})

app.post("/",function(req,res)
{
   var item= req.body.nm;
   if(req.body.list=="work")
   {
    newdata.push(item);
    res.redirect("/work");
   }
   else
   {
   items.push(item);
   res.redirect("/");
   }
})
app.get("/work",function(req,res)
{
    var day=date.getDay();
    res.render('list',{kindofday:day,newitem:newdata})
});
app.post("/work",function(req,res)
{
    var item=res.body.nm;
    newdata.push(item);
    res.redirect("/work");
});
app.listen(3000,function()
{
    console.log('3000 is running');
});