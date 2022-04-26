// Data for the Sub-pages
const pages = [
    {   "id": 9,
        "metaData": {
            "name": "All",
            "title": "All International recipes - Super Food",
            "template": "sub-page",
            "visible": true,
            "rootPage": true
        },
        "content": {
            "header": "All international recipes"
        }
    },
    {   "id": 15,
        "metaData": {
            "name": "Western Europe",
            "title": "Western Europe - Super Food",
            "template": "sub-page",
            "visible": true,
        },
        "content": {
            "header": "Western Europe"
        }
    },
    {   "id": 16,
        "metaData": {
            "name": "Eastern Europe",
            "title": "Eastern Europe - Super Food",
            "template": "sub-page",
            "visible": true,
        },
        "content": {
            "header": "Eastern Europe"
        }
    },
    {   "id": 17,
        "metaData": {
            "name": "Meat",
            "title": "Meat - Super Food",
            "template": "sub-page",
            "visible": true,
        },
        "content": {
            "header": "Meat dishes"
        }
    },
    {   "id": 18,
        "metaData": {
            "name": "Fish",
            "title": "Meat - Super Food",
            "template": "sub-page",
            "visible": true,
        },
        "content": {
            "header": "Fish dishes"
        }
    },
]


// Getting pageId from th Url
// It is based on Dan Høegh  Sem 2, theme 2 - API 1 lecture
let pageId = getPageIdFromUrl();
drawSite(pageId)

// Selecting and seperating the pageId from the other parameters in the Url
function getPageIdFromUrl() {
    let pageId = 0;
    const url = window.location.href;
    if(url.indexOf('pageId') != -1) {
        const urlSplit = url.split('?');
        if(urlSplit[1].indexOf('&') == -1) {
            const parameterSplit = urlSplit[1].split('=');
            pageId = parameterSplit[1];
        } else {
            const urlParameters = urlSplit[1].split('&');
            for(let i = 0; i < urlParameters.length; i++) {
                if (urlParameters[i].substring(0,6) == 'pageId') {
                    const pageIdSplit =urlParameters[i].split('=');
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
function drawSite(pageId) {
    console.log(pageId)
    if (pageId == 0) {
        for(let i = 0; i < pages.length; i++) {
            if(pages[i].metaData.rootPage == true) {
                pageId = pages[i].id;
                break;
            }
        }
    } if(pageId >= 100) {
        getRecipeById(pageId);
    }
    // Calling the recipes by the pageId
    getRecipesByTags(pageId)
    console.log(pageId);
    drawSubNav(pageId)
}
// Drawing the Sub-navigation
function drawSubNav(currentPageId) {
    let navString = '<ul class="flex">'
    for(let i = 0; i < pages.length; i++) {
        if(pages[i].metaData.visible) {
            let activePage = '';
            if(pages[i].id == currentPageId) {
                activePage = 'id="active"';
            }
            navString += `
                <a class="btn btn-sub-nav" href="?pageId=${pages[i].id}" ${activePage}>${pages[i].metaData.name}</a>
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
    for (let i =0; i < data.length; i++) {
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
      <h1>${recipe.introduction.name}</h1>
      <a href="${recipe.metadata.link_for_creator}" target="_blank"><cite>Author:${recipe.metadata.author}</cite></a>
      <div>
        <img src="${recipe.introduction.image}" alt="${recipe.introduction.name}" />
        <article>
          <h4>About</h4>
          <p>${recipe.metadata.about}</p>

          <h4>Yield</h4>
          <p>${recipe.metadata.portion}</p>
        </article>

        <div class="directons-recipe flex">
          <h2><span>Directions</span></h2>

          <div class="ingredients flex">
            <table>
              <h3>Ingredients</h3>
              <ul>
                ${ingredients(data)}
              </ul>
            </table>

            <p>Do you like this recipe? Share it!</p>
            <div class="flex">
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-instagram"></i>
            </div>
          </div>

          <div class="steps flex">
            ${steps(data)}
          </div>
        </div>
        <a href="" class="btn">Back to the category</a>
      </div>
    `;
    drawHtml('#recipes-placeHolder', content)

}

function ingredients(data) {
    const ingredientsItem = Object.values(data.acf.ingredients);
    console.log(ingredientsItem);
    // removing the undefined element

    let list;
    for(let i = 0; i < ingredientsItem.length; i ++){
        if (ingredientsItem[i] == undefined || ingredientsItem[i]== '') {
            continue;
        }
        else {list += `
            <li>${ingredientsItem[i]}</li>
        `
        }
    }
    return list;
};

function steps(data) {
    let steps;
    const stepsItem = Object.values(data.acf.preparation);
    console.log(stepsItem);
    for( let i = 0; i < stepsItem.length; i++) {
        if(stepsItem[i] == undefined || stepsItem[i]== '') {
            continue;
        }
   steps += `
        <h3>Step ${[i]}</h3>
        <p>${stepsItem[i]}</p>
        <hr />
    `  
    }  

    return steps;
}
function drawHtml(elementId, newContent) {
    document.querySelector(elementId).innerHTML = newContent;
}

