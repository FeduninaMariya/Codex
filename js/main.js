const menuButton = document.querySelector('.btn-menu');
const menu = document.querySelector('.menu');
menuButton.addEventListener('click', function() {
    menuButton.classList.toggle('active');
    menu.classList.toggle('active');
});
