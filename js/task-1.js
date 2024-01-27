const categoriesCount = document.querySelectorAll('ul#categories li.item');
console.log(`Number of categories: ${categoriesCount.length}`);

categoriesCount.forEach((category) => {
    const title = category.querySelector('h2').textContent;
    const liElemsLength = category.querySelectorAll('ul > li').length;
    console.log(`Category: ${title}`);
    console.log(`Elements: ${liElemsLength}`);
})