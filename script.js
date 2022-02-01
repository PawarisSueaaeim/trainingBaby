var logo = document.querySelector('.container');
var menu = document.querySelector('.sidebar');

logo.addEventListener('click',function(){
    menu.classList.toggle('hidemenu');
});