require('dotenv').config();
const express=require('express');
const ejs=require('ejs');
const expressLayout=require('express-ejs-layouts');
const path=require('path');
const session=require('express-session');
const mongoose=require('mongoose');
const flash=require('express-flash');
const MongoDbStore=require('connect-mongo').default;
const app=express();

//Database connection
mongoose.connect('mongodb://ImuCoder:Imran78726#@localhost:27017/pizza?authSource=admin',{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true,useFindAndModify:true}).then(()=>
{
    console.log('Successfully connected to the database');
}).catch((err)=>
{
    console.log('Connection failed due to ',err);
});

//Session store
const mongoStore=MongoDbStore.create({
    mongoUrl:'mongodb://ImuCoder:Imran78726#@localhost:27017/pizza?authSource=admin',
    collectionName:'sessions'
});

//Session config
app.use(session({
    secret:process.env.COOKIE_SECRET,
    resave:false,
    store:mongoStore,
    saveUninitialized:false,
    cookie:{maxAge:1000*60*60*24}  //session will stay for 24 hours
}));
//Storing in the mongo database
app.use(flash());

app.use(express.static('public'));
// app.use(expressLayout);

require(path.join(__dirname,'/routes/web.js'))(app);
app.set('views',path.join(__dirname,'/resources/views'));
app.set('view engine','ejs');
const port=process.env.PORT || 3300;
app.listen(port,()=>
{
    console.log(`Listening on port ${port}`);
})