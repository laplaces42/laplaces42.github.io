const burgerMenu = document.querySelector('.burger-menu');
const dropNav = document.querySelector('.burger-navigation')

function burgerNav() {
    dropNav.style.display = 'block';
    
}

function burgerNavGone() {
    dropNav.style.display = 'none';
    
}

burgerMenu.addEventListener('mouseover', burgerNav)
burgerMenu.addEventListener('mouseout', burgerNavGone)

