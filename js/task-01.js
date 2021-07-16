const categoriesRef = document.querySelector('#categories')
console.log(`В списке ${categoriesRef.children.length} категории`)

const titlesListRef = document.querySelectorAll('h2');

const titleRef = titlesListRef.forEach(title => {
    console.log(`Категория ${title.textContent}`)
    console.log(title.parentNode.lastElementChild.children.length)
})





