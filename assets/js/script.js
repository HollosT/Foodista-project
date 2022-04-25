// Calling the International recipes
function getInternationalRecipes() {
    fetch('https://marekfurik.com/wp-json/wp/v2/posts?&tags=9')
    .then((response) => response.json())
    .then((data) => {
        //   Looping through the posts to find all the ACF of the recipes and putting them all in an array
            let recipes = []
            for(let i = 0; i < data.length; i++) {
             if(data[i].acf != -1) {
                    recipes.push(data[i].acf)
                }
        } 

            drawInternationalSection(recipes)
            console.log(recipes);
        });
         
}
getInternationalRecipes();

// Drawing International Section on the homepage
function drawInternationalSection(recipes) {
    for (let i =0; i < 3; i++) {
        let cardInt = `
        <article>
        <a href="">
        <img src="${recipes[i].introduction.image}" alt="">
        <h4>${recipes[i].introduction.name}</h4>
        <p>${recipes[i].introduction.teaser}</p>
        </a>
        </article>
        `;
        drawHtml('div#international', cardInt)
    }    

}

// Calling the Pasta recipes
function getPastaRecipes() {
    fetch('https://marekfurik.com/wp-json/wp/v2/posts?&tags=10')
    .then((response) => response.json())
    .then((data) => {
        //   Looping through the posts to find all the ACF of the recipes and putting them all in an array
            let recipes = []
            for(let i = 0; i < data.length; i++) {
             if(data[i].acf != -1) {
                    recipes.push(data[i].acf)
                }
        } 
            drawPastaSection(recipes)
            console.log(recipes);
        });
         
}
getPastaRecipes()

// Drawing Pasta Section on the homepage
function drawPastaSection(recipes) {
    for (let i =0; i <3; i++) {
        let cardPasta = `
        <article>
            <a href="">
                <img src="${recipes[i].introduction.image}" alt="">
                <h4>${recipes[i].introduction.name}</h4>
                <p>${recipes[i].introduction.teaser}</p>
            </a>
        </article>
                        `;
    drawHtml('div#pasta', cardPasta)
    }     
}

// Calling the Articles
function getArticle() {
    fetch('https://marekfurik.com/wp-json/wp/v2/posts?categories=25')
    .then((response) => response.json())
    .then((data) => {
        //   Looping through the posts to find all the ACF of the recipes and putting them all in an array
            let articles = []
            for(let i = 0; i < data.length; i++) {
             if(data[i].acf != -1) {
                    articles.push(data[i].acf)
                }
        } 
            drawArticleSection(articles)
            console.log(articles);
        });
         
}
getArticle()

// Drawing Article Section on the homepage
function drawArticleSection(articles) {
    for (let i =0; i <2; i++) {
        let articleCard = `
        <article>
            <a href="">
                <img src="${articles[i].introduction.image}" alt="">
                <h4>${articles[i].introduction.name}</h4>
                <p>${articles[i].introduction.teaser}</p>
            </a>
        </article>
        `;
    drawHtml('div#article', articleCard)
    }     
}
//Adding content to the Html
function drawHtml(selector, newContent) {
    document.querySelector(selector).innerHTML += newContent;
}


// Getting pageId from th Url
// It is based on Dan Høegh  Sem 2, theme 2 - API 1 lecture
// let pageId = getPageIdFromUrl();
// drawSite(pageId);

// function getPageIdFromUrl() {
//     let pageId = 0;
//     const url = window.location.href;
//     if(url.indexOf('pageId') != -1) {
//         const urlSplit = url.split('?');
//         if(urlSplit[1].indexOf('&') == -1) {
//             const parameterSplit = urlSplit[1].split('=');
//             pageId = parameterSplit[1];
//         } else {
//             const urlParameters = urlSplit[1].split('&');
//             for(let i = 0; i < urlParameters.length; i++) {
//                 if (urlParameters[i].substring(0,6) == 'pageId') {
//                     const pageIdSplit =urlParameters[i].split('=');
//                     pageId = pageIdSplit[1];
//                     break;
//                 }
//             }
//         }
//     } 
//     console.log(url);
//     return pageId;
// }
    
// function drawSite(pageId) {
//     if (pageId == 0) {
//         for(let i = 0; i < data.pages.length; i++) {
//             if(data.pages[i].metaData.rootPage) {
//                 pageId = data.pages[i].id;
//                 break;
//             }
//         }
//     }
//     drawFooter();
//     drawNav(pageId);
//     drawPage(pageId);
//     console.log(pageId);
// }