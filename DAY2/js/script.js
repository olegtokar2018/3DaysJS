let username = prompt('Как вас зовут?', "Артем"),
    tel = prompt('Напишите номер вашего телефона', "502-312-4578"),
    email = prompt('Напишите вашу почту', "abs@mail.ru");

let chooseBtn = document.getElementById('choose'),
    receiveBtn = document.getElementById('receive'),
    heading = document.getElementsByTagName('h2')[0],
    nameInput = document.getElementsByClassName('contactform_name')[0],
    phoneInput = document.querySelectorAll('.contactform_phone')[1],
    mailInput = document.querySelectorAll('.contactform_mail')[0],
    modal = document.querySelector('.modal'),
    close = document.querySelector('.close'),
    text = document.getElementsByName('message')[0];

//  console.log(phoneInput);

nameInput.value = username;
phoneInput.value = tel;
let emailInput = document.querySelectorAll('.contactform_mail')[1];
emailInput.value = email;

receiveBtn.addEventListener('click', function () {
    modal.style.display = 'block';
});

close.addEventListener('click', function () {
    modal.style.display = 'none';
});

text.value = 'Меня зовут ' + nameInput.value + '. И я хочу спросить : ';
nameInput.addEventListener('input', function () {

    text.value = 'Меня зовут ' + nameInput.value + '. И я хочу спросить : ';
    if (nameInput.value == '') {
        text.value = '';
    }
});

let btnSubmit = document.getElementsByTagName('button')[1],
    thanks = document.querySelector('.thanks'),
    btnClose = document.getElementsByTagName('button')[2]; // - находится внутри СПАСИБО -зовется ВЕРНУТЬСЯ НА САЙТ

btnSubmit.addEventListener('click', function () {
    event.preventDefault();  // - отмена действия по умолчанию
    if (nameInput.value.length > 0 && emailInput.value.length > 0 && phoneInput.value.length > 
        0) {
        modal.style.display = 'none';
        thanks.style.display = 'block';
    } else {
        alert('Не все поля заполнены!');
    }
});

btnClose.addEventListener('click', function() {
    thanks.style.display = 'none';
});