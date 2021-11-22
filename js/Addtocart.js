const cartWrapper = document.querySelector('.cart-wrapper');
window.addEventListener('click', function (event)
{
    if(event.target.hasAttribute('data-cart'))
    {
        const card = event.target.closest('.card');
        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.img').getAttribute('src'),
            title: card.querySelector('.pizza_name').innerText,
            price: card.querySelector('.money').innerText,
            counter: card.querySelector('[data-counter]').innerText,
        }
        const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);
        if (itemInCart)
        {
            const counterElement = itemInCart.querySelector('[data-counter]');
            counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);
        } else
        {
            const cartItemHTML=
            `<div class="cart-item" data-id="${productInfo.id}">
                <div class="cart-top">
                    <div class="cart-img">
                        <img src="${productInfo.imgSrc}" alt="">
                    </div>
                    <div class="cart-item__desc">
                        <div class="cart-pizza_name">${productInfo.title}</div>

                        <div class="cart-item__details">

                            <div class="items items--small counter-wrapper">
                                <div class="items__control" data-action="minus">-</div>
                                <div class="items__current" data-counter="">${productInfo.counter}</div>
                                <div class="items__control" data-action="plus">+</div>
                            </div>

                            <div class="price">
                                <div class="money">${productInfo.price}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
            cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
        }
        card.querySelector('[data-counter]').innerText = '1';
        toggleCartStatus();
        finalPrice();
    }
})