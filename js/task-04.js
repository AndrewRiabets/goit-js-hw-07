const counterValue = {
    value: 0,

    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
    },

};
const valueEl = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

decrementBtn.addEventListener('click', () => {
    counterValue.decrement();
    valueEl.textContent = counterValue.value;
});
incrementBtn.addEventListener('click', () => {
    counterValue.increment();
    valueEl.textContent = counterValue.value;
});

