const path=require('path');
const homeController=require(path.join(__dirname,'../app/http/controllers/homeController.js'));
const authController=require(path.join(__dirname,'../app/http/controllers/authController.js'));
const cartController=require(path.join(__dirname,'../app/http/controllers/customers/cartController.js'));
const initRoutes = (app) => 
{
    app.get('/',homeController().index);
    app.get('/cart',cartController().index);
    app.get('/login',authController().login);
    app.get('/register',authController().register);
    app.post('/update-cart',cartController().update);
}
module.exports = initRoutes;