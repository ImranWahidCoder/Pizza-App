const axios=require('axios');
const addToCart=document.querySelectorAll('.add-to-cart');
const updateCart=(pizza)=>
{
    axios.post('/update-cart',pizza).then((response)=>
    {
        console.log(response);
    });
}
addToCart.forEach((btn)=>
{
    btn.addEventListener('click',(e)=>
    {
        let pizza = JSON.parse(btn.dataset.pizza);
        updateCart(pizza);
    });
})