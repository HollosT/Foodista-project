


// Calling the International recipes
function getInternationalRecipes() {
  fetch("https://marekfurik.com/wp-json/wp/v2/posts?&tags=9")
    .then((response) => response.json())
    .then((data) => {
      drawInternationalSection(data);

    });
}
getInternationalRecipes();

// Drawing International Section on the homepage
function drawInternationalSection(data) {
  for (let i = 0; i < 3; i++) {
    let cardInt = `
        <article>
            <a href="?pageId=${data[i].id}">
                <img class="recipe-img" src="${data[i].acf.introduction.image}" alt="">
                <h4>${data[i].acf.introduction.name}</h4>
                <p>${data[i].acf.introduction.teaser}</p>
            </a>
        </article>
        `;
    drawHtml("div#international", cardInt);
  }
}

// Calling the Pasta recipes
function getPastaRecipes() {
  fetch("https://marekfurik.com/wp-json/wp/v2/posts?&tags=10")
    .then((response) => response.json())
    .then((data) => {
      //   Looping through the posts to find all the ACF of the recipes and putting them all in an array
      let recipes = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i].acf != -1) {
          recipes.push(data[i].acf);
        }
      }
      drawPastaSection(recipes);
      console.log(recipes);
    });
}
getPastaRecipes();

// Drawing Pasta Section on the homepage
function drawPastaSection(recipes) {
  for (let i = 0; i < 3; i++) {
    let cardPasta = `
        <article>
            <a href="">
                <img class="recipe-img" src="${recipes[i].introduction.image}" alt="">
                <h4>${recipes[i].introduction.name}</h4>
                <p>${recipes[i].introduction.teaser}</p>
            </a>
        </article>
                        `;
    drawHtml("div#pasta", cardPasta);
  }
}

// Calling the Articles
function getArticle() {
  fetch("https://marekfurik.com/wp-json/wp/v2/posts?categories=25")
    .then((response) => response.json())
    .then((data) => {
      //   Looping through the posts to find all the ACF of the recipes and putting them all in an array
      let articles = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i].acf != -1) {
          articles.push(data[i].acf);
        }
      }
      drawArticleSection(articles);
      console.log(articles);
    });
}
getArticle();

// Drawing Article Section on the homepage
function drawArticleSection(articles) {
  let articleCard = `
        
            <div>
                <img class="article-img" src="${articles[1].introduction.image}" alt="">
            </div>

            <div class="flex flex-column article-content">
                <h3>${articles[1].introduction.name}</h3>
                <p>${articles[1].introduction.teaser}</p>
                <a href="article.html" class="btn">All articles</a>
            </div>
        
        `;
  drawHtml("div#article", articleCard);
}
//Adding content to the Html
function drawHtml(selector, newContent) {
  document.querySelector(selector).innerHTML += newContent;
}

