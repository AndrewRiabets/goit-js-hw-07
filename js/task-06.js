const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('change', (event) => {
    Number(inputEl.getAttribute('data-length')) === event.target.value.length ?
    inputEl.classList.add('valid')
    : inputEl.classList.add('invalid')
})