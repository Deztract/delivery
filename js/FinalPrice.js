function finalPrice()
{
    const cartItems = document.querySelectorAll('.cart-item');
    const totalPriceEl = document.querySelector('.total-price');
    let totalPrice = 0;
    cartItems.forEach(function(item)
    {
        console.log(item);
        const amountEl = item.querySelector('[data-counter]');
        const priceEl = item.querySelector('.money');
        const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
        totalPrice += currentPrice;
    })
    console.log(totalPrice);
    totalPriceEl.innerText = totalPrice+150;
}