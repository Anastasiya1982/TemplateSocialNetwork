
const menuBtn=document.querySelector('.m-menu');
const menu=document.querySelector('.menu-sidebar');

function addAnActiveClassToMenu(){
    menu.classList.toggle('active');
}
menuBtn.addEventListener('click', addAnActiveClassToMenu);
