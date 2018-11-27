window.addEventListener('DOMContentLoaded', function () {
    // получаем инфу для работы
    let products = document.querySelectorAll('.product'),
        buttons = document.getElementsByTagName('button'),
        shop = document.getElementsByClassName('shop')[0],
        open = document.getElementsByClassName('open')[0];

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.add('buyButton');
    }

    buttons = document.querySelectorAll('.buyButton');  // 8 кнопок
    // функция для создания корзины

    function createCart() { // создаем Корзину налету... эта ф-я будет создавать корзину при запуске скрипта
        // создаем элементы для корзины
        let cart = document.createElement('div'),
            field = document.createElement('div'),
            heading = document.createElement('h2'),
            close = document.createElement('button');

        cart.classList.add('cart');
        field.classList.add('cart-field');
        close.classList.add('close');

        close.textContent = "Закрыть";
        heading.textContent = "В нашей корзине : ";

        document.body.appendChild(cart);
        cart.appendChild(heading);
        cart.appendChild(field);
        cart.appendChild(close);

    }

    createCart();

    let field = document.querySelector('.cart-field'),
        cart = document.querySelector('.cart'),
        close = document.querySelector('.close');

    for (let i = 0; i < buttons.length; i++) {
        // вешаем обработчик события клика на каждую из кнопок
        buttons[i].addEventListener('click', function () {
            // создали копию карточки с товаром
            if (buttons[i].textContent == 'Купить!') {
                buttons[i].textContent = 'Убрать';
                field.appendChild(products[i]);
            } else {
                buttons[i].textContent = 'Купить!';
                shop.appendChild(products[i]);
            }
            // let item = products[i].cloneNode(true),
            //     btn = item.querySelector('button');

            // btn.remove();
            // field.appendChild(item);
            // products[i].remove();
        });
    }

    function openCart() {
        cart.style.display = 'block';
    }

    function closeCart() {
        cart.style.display = 'none';
    }

    open.addEventListener('click', openCart);
    close.addEventListener('click', closeCart);

});