// Data for the Sub-pages
const pages = [
    {"id": 1,
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
    {"id": 2,
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
    {"id": 3,
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
    {"id": 4,
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
    {"id": 5,
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
drawSite(pageId);

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
    if (pageId == 0) {
        for(let i = 0; i < pages.length; i++) {
            if(pages[i].metaData.rootPage == true) {
                pageId = pages[i].id;
                break;
            }
        }
    }
    console.log(pageId);
    drawSubNav(pageId);
    drawPage(pageId)
}
// Drawing the Sub-navigation
function drawSubNav(currentPageId) {
    let navString = '<ul>'
    for(let i = 0; i < pages.length; i++) {
        if(pages[i].metaData.visible) {
            let activePage = '';
            if(pages[i].id == currentPageId) {
                activePage = 'class="active"';
            }
            navString += `
                <a href="?pageId=${pages[i].id}" ${activePage}>${pages[i].metaData.name}</a>
            `
        }
    }
    navString += '</ul>'
    drawHtml('#sub-nav', navString);
}
// Displaying the content on each pages
function drawPage(pageId) {
    const page = findPageById(pageId);
    const content= `
        <h2>${page.content.header}</h2>
    `;
    drawHtml('#recipes-placeHolder', content)
    const id = page.id;
    switch(id) {
        case 1:
            getRecipesByTags(9);
            break;
        case 2:
            getRecipesByTags(15);
            break;
        case 3:
            getRecipesByTags(16);
            break;
        case 4:
            getRecipesByTags(17);
            break;
        case 5:
            getRecipesByTags(18);
            break;
    }

}


//Testing whether the pageId from the Url is the same as in the data
function findPageById(pageId) {
    let page;
    for(let i = 0; i < pages.length; i++) {
        if(pages[i].id == pageId) {
            page = pages[i]
            break;
        }
    }
    return page;
}

// calling the Recipe tags
function getRecipesByTags(tagNumber) {
    fetch(`https://marekfurik.com/wp-json/wp/v2/posts?&tags=${tagNumber}`)
    .then((response) => response.json())
    .then((data) => {
        //   Looping through the posts to find all the ACF of the recipes and putting them all in an array
            let recipes = []
            for(let i = 0; i < data.length; i++) {
             if(data[i].acf != -1) {
                    recipes.push(data[i].acf)
                }
        } 
            drawRecipes(recipes)
            console.log(recipes);
        });
         
}

function drawRecipes(recipes) {
    let content = ''
    for (let i =0; i < recipes.length; i++) {
        content += `
        <article>
        <a href="">
        <img src="${recipes[i].introduction.image}" alt="">
        <h4>${recipes[i].introduction.name}</h4>
        <p>${recipes[i].introduction.teaser}</p>
        </a>
        </article>
        `;
        drawHtml('#recipes-placeHolder', content)
    }    
}


// 
function drawHtml(elementId, newContent) {
    document.querySelector(elementId).innerHTML = newContent;
}

