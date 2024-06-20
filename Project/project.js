const toggleBtn = document.querySelector('.header_toggleBtn');
const menu = document.querySelector('.header_menu');

toggleBtn.addEventListener('click', function() {
    menu.classList.toggle('active');
});