
function getPosts() {
    fetch("https://marekfurik.com/wp-json/wp/v2/posts?categories=8")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
    getRecipeData(data)
    
});
}
getPosts();
function getRecipeData(data) {
    for (let i = 0; i < data.length; i++) {
      let dataOfRecipes = data[i].acf;
      console.log(dataOfRecipes);
      drawHomePageSection(dataOfRecipes);
    }
  }

function drawHomePageSection(data) {
    // for (let i = 0; i < data[2]; i++) {
    let section = `
        <section class="">
        <h2></h2>
            ${drawRecipeCard(data)}
        </section>
    `;
    drawHtml('main', section);
// }
}

function drawRecipeCard(data) {
    let article = `
            <article>
                <a href="">
             <h4>${data.introduction.name}</h4>
                <img src="${data.introduction.image}" alt="">
                <p>${data.introduction.teaser}</p>
            </a>
            </article>
        `;
    return article;
}





//Adding content to the Html
function drawHtml(selector, newContent) {
    document.querySelector(selector).innerHTML += newContent;
}




