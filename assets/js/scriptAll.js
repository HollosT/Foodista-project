//Addressing all the navigation

// Getting pageId from th Url
// It is based on Dan Høegh  Sem 2, theme 2 - API 1 lecture
// let pageName = getPageNameFromUrl()

let pageId = getPageIdFromUrl();
drawSite(pageId, international)
// function getPageNameFromUrl () {
//     let pageName ='';
//     const url = window.location.href;
//     const urlSplit = url.split('Foodista-project/');
//     console.log(urlSplit);
//     const parameterSplit = urlSplit[1].split('.');
//     pageName = parameterSplit[0]
//     return pageName;
// }
// console.log(pageName)
// callTheNavNameFromURl()
// function callTheNavNameFromURl() {
//     const page = pageName;
//     switch (page) {
//         case 'internationalCuisine':
//             drawSite(pageId, international)
//             break;

//         case 'pasta':
//             drawSite(pageId, pasta)
//             break;
//     }
// }
// Selecting and seperating the pageId from the other parameters in the Url
function getPageIdFromUrl() {
    let pageId = 0;
    const url = window.location.href;
    if (url.indexOf('pageId') != -1) {
        const urlSplit = url.split('?');
        if (urlSplit[1].indexOf('&') == -1) {
            const parameterSplit = urlSplit[1].split('=');
            pageId = parameterSplit[1];
        } else {
            const urlParameters = urlSplit[1].split('&');
            for (let i = 0; i < urlParameters.length; i++) {
                if (urlParameters[i].substring(0, 6) == 'pageId') {
                    const pageIdSplit = urlParameters[i].split('=');
                    pageId = pageIdSplit[1];
                    break;
                }
            }
        }
    }
    console.log(url);
    return pageId;
}
// Finding the default page by the root property
function drawSite(pageId, page) {
    console.log(pageId)
    if (pageId == 0) {
        for (let i = 0; i < page.length; i++) {
            if (page[i].metaData.rootPage == true) {
                pageId = page[i].id;
                break;
            }
        }
    } if (pageId >= 100) {
        getRecipeById(pageId);
    }
    // Calling the recipes by the pageId
    getRecipesByTags(pageId, page)
    console.log(pageId);
    drawSubNav(pageId)
}
// Drawing the Sub-navigation
function drawSubNav(currentPageId) {
    let navString = '<ul class="flex">'
    for (let i = 0; i < international.length; i++) {
        if (international[i].metaData.name) {
            let activePage = '';
            if (international[i].id == currentPageId) {
                page = 'id="active"';
            }
            navString += `
                <a class="btn btn-sub-nav" href="?pageId=${international[i].id}" ${activePage}>${international[i].metaData.name}</a>
            `
        }
    }
    navString += '</ul>'
    drawHtml('#sub-nav', navString);
}

// calling the Recipe by tags
function getRecipesByTags(tagNumber) {
    fetch(`https://marekfurik.com/wp-json/wp/v2/posts?&tags=${tagNumber}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            drawRecipes(data)
        });

}

// calling the Recipe by Id
function getRecipeById(pageId) {
    console.log(pageId);
    fetch(`https://marekfurik.com/wp-json/wp/v2/posts/${pageId}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            drawRecipePage(data)
        });

}
function drawRecipes(data) {
    let content = ''
    for (let i = 0; i < data.length; i++) {
        content += `
        <article>
        <a href="?pageId=${data[i].id}">
        <img src="${data[i].acf.introduction.image}" alt="">
        <h4>${data[i].acf.introduction.name}</h4>
        <p>${data[i].acf.introduction.teaser}</p>
        </a>
        </article>
        `;
        drawHtml('#recipes-placeHolder', content)
    }
}

function drawRecipePage(data) {
    const recipe = data.acf;
    const content = `
    <div class="flex recipe-test">  
        <h1>${recipe.introduction.name}</h1>
        <a href="${recipe.metadata.link_for_creator}" target="_blank"><cite>Author: ${recipe.metadata.author}</cite></a>

        <div class="single-recipe-div1 flex">
            <img src="${recipe.introduction.image}" alt="${recipe.introduction.name}" />
            <article>
            <h4>About</h4>
            <p>${recipe.metadata.about}</p>

            <h4>Yield</h4>
            <p>${recipe.metadata.portion}</p>
            </article>
        </div>
        
        <div class="img-wrapper">
        <img class="svg" src="assets/pictures/Asset-2.svg" />
        </div>
        <div class="directons-recipe flex">
            <h2><span>Directions</span></h2>
        </div>
        
        <div class="directions-main flex">
            <div class="ingredients flex">
                
                    <table>
                    <h3>Ingredients</h3>
                    <ul class="flex">
                        ${ingredients(data)}
                    </ul>
                    </table>
            
                <div class="share">
                    <p>Do you like this recipe? Share it!</p>
                    <div class="flex">
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-instagram"></i>
                    </div>
                </div>
            </div>

          <div class="steps flex">
            ${steps(data)}
          </div>
        </div>
        
     
      <div class="img-wrapper"><a href="internationalCuisine.html" class="btn">Back to the category</a></div>
    </div>
    `;
    drawHtml('#recipes-placeHolder', content)

}

function ingredients(data) {
    const ingredientsItem = Object.values(data.acf.ingredients);
    console.log(ingredientsItem);
    // removing the undefined element

    let list;
    for (let i = 0; i < ingredientsItem.length; i++) {
        if (ingredientsItem[i] == undefined || ingredientsItem[i] == '') {
            continue;
        }
        else {
            list += `
            <li>${ingredientsItem[i]}</li>
            <hr></hr>
        `
        }
    }
    return list;
};

function steps(data) {
    let steps;
    const stepsItem = Object.values(data.acf.preparation);
    console.log(stepsItem);
    for (let i = 0; i < stepsItem.length; i++) {
        if (stepsItem[i] == undefined || stepsItem[i] == '') {
            continue;
        }
        steps += `
        <h3>Step ${[i + 1]}</h3>
        <p>${stepsItem[i]}</p>
        <hr />
    `
    }

    return steps;
}
function drawHtml(elementId, newContent) {
    document.querySelector(elementId).innerHTML = newContent;
}

