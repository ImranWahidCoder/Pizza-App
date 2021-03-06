const express=require('express');
const ejs=require('ejs');
const expressLayout=require('express-ejs-layouts');
const path=require('path');
const app=express();

app.use(express.static('public'));
// app.use(expressLayout);

app.get('/',(req,res)=>
{
    res.render('home');
});
app.get('/cart',(req,res)=>
{
    res.render('customers/cart');
});
app.get('/login',(req,res)=>
{
    res.render('auth/login');
});
app.get('/register',(req,res)=>
{
    res.render('auth/register');
});
app.set('views',path.join(__dirname,'/resources/views'));
app.set('view engine','ejs');
const port=process.env.PORT || 3300;
app.listen(port,()=>
{
    console.log(`Listening on port ${port}`);
})