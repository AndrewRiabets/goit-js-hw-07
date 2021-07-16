const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

console.dir(textEl)
inputEl.addEventListener('input', (event) => {
    textEl.style.fontSize = event.currentTarget.value + 'px'

})