var logo = document.querySelector('.container');
var menu = document.querySelector('.sidebar');
var content = document.querySelector('.content');
var head = document.querySelector('sm-monitor');

logo.addEventListener('click',function(){
    menu.classList.toggle('sidebar');
    content.classList.toggle('hidecontent');
    head.classList.toggle('sm-monitors');
    // content.classList.toggle('content-full');
});
// logo.addEventListener('click',function(){
//     menu.classList.toggle('hidemenu');
//     content.classList.toggle('content-full');
// });