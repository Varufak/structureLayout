let burgerButton = document.querySelector('.burger');

burgerButton.addEventListener('click', function(e){
    let menu = document.querySelector('.menu');
    this.classList.toggle('burger-open');
    menu.classList.toggle('menu-open');
})