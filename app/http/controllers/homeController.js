const path=require('path');
const Menu=require(path.join(__dirname,'../../models/menu.js'));
const homeController=()=>
{
    return {
        index(req,res)
        {
            Menu.find().then((pizzas)=>
            {
                res.render('home',{pizzas:pizzas});
            })
        }
    }
}
module.exports=homeController;