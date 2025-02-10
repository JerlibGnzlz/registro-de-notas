import register from './modules/register.js';

const inicio = document.querySelector('#inicio').addEventListener('click', () => {
    window.location.href = '/';
});

register();