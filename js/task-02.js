const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const ingredientsListEl = document.querySelector('#ingredients');

const inviteIngredientList = ingredients.map(ingredient => {
    const inviteIngredientEl = document.createElement('li');
    inviteIngredientEl.textContent = ingredient;
    
    return inviteIngredientEl;
})

ingredientsListEl.append(...inviteIngredientList)