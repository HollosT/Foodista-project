
function getPosts() {
    fetch("https://marekfurik.com/wp-json/wp/v2/posts?categories=8")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
    getRecipeData(data)
    
});
}
function getRecipeData(data) {
    let recipes = []
    for(let i = 0; i < data.length; i++) {
        if(data[i].acf != -1) {
            recipes.push(data[i].acf)
        }
    }
    console.log(recipes)
    drawRecipeCard(recipes)
    homePageSection(recipes)
}

function drawRecipeCard(recipes) {
    for (let i =0; i < recipes.length; i++) {
    let card = `
        <article>
        <a href="">
            <h4>${recipes[i].introduction.name}</h4>
            <img src="${recipes[i].introduction.image}" alt="">
            <p>${recipes[i].introduction.teaser}</p>
        </a>
    </article>
    `;
    return card;
}
}

function homePageSection(recipes) {
    let section = `
        <section>
            <h2></h2>
            ${drawRecipeCard(recipes)}
            <a href=""></a>
        </section>
    `;
    drawHtml('main', section);
}  

getPosts();




homePageSection()


//Adding content to the Html
function drawHtml(selector, newContent) {
    document.querySelector(selector).innerHTML += newContent;
}




