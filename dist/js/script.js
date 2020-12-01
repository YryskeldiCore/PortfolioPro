const menu = document.querySelector('.menu'),
      hamburger = document.querySelector('.hamburger'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const percentItems = document.querySelectorAll('.techs__percentage-percent'),
      indicator = document.querySelectorAll('.techs__percentage-indicator span');

percentItems.forEach((item, i) => {
    indicator[i].style.width = item.innerHTML;
});

// Validate 

const inputs = document.querySelectorAll('.contacts__form input'),
      form = document.querySelector('.contacts__form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            if(input.value == ''){
                input.style.border = '3px solid red';
            } else {
                input.style.border = 'none';            
            }
        });
    });
});
