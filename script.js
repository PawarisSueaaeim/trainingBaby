var logo = document.querySelector('.container');
var menu = document.querySelector('.sidebar');
var content = document.querySelector('.content');

logo.addEventListener('click',function(){
    menu.classList.toggle('hidemenu');
    content.classList.toggle('content-full');
});