const inputEl = document.querySelector('#validation-input');
console.dir(inputEl)

// inputEl.addEventListener('change', (event) => {
//     inputEl.getAttribute('data-length') ?
//         alert(inputEl.getElementById('validation-input').innerHTML);
//         inputEl.getElementById('validation-input').id = 'validation-input.valid'
//         // inputEl.classList.add('validation-input.valid')
//        :  inputEl.classList.add('validation-input.invalid')
// } )

inputEl.addEventListener('change', (event) => {
    Number(inputEl.getAttribute('data-length')) === event.target.value.length ?
    inputEl.classList.add('valid')
    : inputEl.classList.add('invalid')

})