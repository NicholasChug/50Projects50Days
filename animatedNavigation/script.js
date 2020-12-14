const btn = document.getElementsById('toggle');
const nav = document.getElementById('nav');


btn.addEventListener('click', () => {
    nav.classList.toggle('active');
});