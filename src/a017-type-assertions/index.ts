//recomendado

//condicional
const body1 = document.querySelector('body');
    if (body1) body1.style.background = 'red';

//type assertion
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';

//HTMLElement
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'qualquer coisas'
input.focus();
