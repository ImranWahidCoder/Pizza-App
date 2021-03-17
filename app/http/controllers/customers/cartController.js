const cartController=()=>
{
    return {
        index(req,res)
        {
            res.render('customers/cart');
        },
        update(req,res)
        {
            return res.json({date:"All ok"});
        }
    }
}
module.exports=cartController;