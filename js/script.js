window.addEventListener('DOMContentLoaded', function () { //bu narsa js kodi ne qachonki html yuklanb bulsa ishlatadi
    let products = document.querySelectorAll('.product'),
        buttons = document.querySelectorAll('button'),
        openBtn = document.querySelector('.open');
    
    function createCart() {
        let cart = document.createElement('div');
        let field = document.createElement('div');
        let heading = document.createElement('h2');
        let claseBtn = document.createElement('button');

    cart.classList.add('cart')
    field.classList.add('cart-field')
    claseBtn.classList.add('close')

    heading.textContent = 'в нашуй корзине'
    claseBtn.textContent = 'закрыть'

    document.body.appendChild(cart)
    cart.appendChild(heading)
    cart.appendChild(field)
    cart.appendChild(claseBtn)
    }
    createCart()

    let cart = document.querySelector('.cart');
    let claseBtn = document.querySelector('.close');
    let field = document.querySelector('.cart-field');

    openBtn.addEventListener('click',  () => { // '=>. bu narsa funcsiyani qisqartirilgani | lekin farqi bor
        cart.style.display = 'block'
    });

    claseBtn.addEventListener('click', function () {
        cart.style.display = 'none'
    });
    
    buttons.forEach(function (item, i) {
        item.addEventListener('click', function () {
            let cloneItem = products[i].cloneNode(true);
            let btn = cloneItem.querySelector('button');
        
        btn.remove()
        field.appendChild(cloneItem)
        // products[i].remove()

        })

    })
})