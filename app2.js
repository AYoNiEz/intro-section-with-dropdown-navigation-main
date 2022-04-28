const open_Menu = document.querySelector('.menu-icon');
const field = document.querySelector('.navbar');
const close = document.querySelector('.close')


open_Menu.addEventListener('click', clickOpen);

close.addEventListener('click', clickClose);

function clickOpen(event){
    field.classList.add('active');
}

function clickClose(event){
    field.classList.remove('active');
}
