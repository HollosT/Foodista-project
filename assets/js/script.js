// Calling all the recipes
function getPosts() {
    fetch("https://marekfurik.com/wp-json/wp/v2/posts?categories=8")
        .then((response) => response.json())
        .then((data) => {
        //   console.log(data);
    getRecipeData(data)
    
});
}
// Calling the international recipes
function getInternationalRecipes() {
    fetch("https://marekfurik.com/wp-json/wp/v2/posts?&tags=9")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
    getInternationalData(data)
    
});
}

getInternationalRecipes()

// Calling the Pasta recipes
function getPastaRecipes() {
    fetch("https://marekfurik.com/wp-json/wp/v2/posts?&tags=10")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
    getPastaData(data)
    
});
}

getInternationalRecipes()
getPastaRecipes()
// Collecting all the international recipes's acf into an array
function getInternationalData(data) {
    let recipes = []
    for(let i = 0; i < data.length; i++) {
        if(data[i].acf != -1) {
            recipes.push(data[i].acf)
        }
    }
    console.log(recipes)
    drawInternationalSection(recipes)
}
// Collecting all the Pasta recipes's acf into an array
function getPastaData(data) {
    let recipes = []
    for(let i = 0; i < data.length; i++) {
        if(data[i].acf != -1) {
            recipes.push(data[i].acf)
        }
    }
    console.log(recipes)
    drawPastaSection(recipes)
}
// Collecting all the posts's acf into an array
function getRecipeData(data) {
    let recipes = []
    for(let i = 0; i < data.length; i++) {
        if(data[i].acf != -1) {
            recipes.push(data[i].acf)
        }
    }
    // console.log(recipes)
    
}

function drawInternationalSection(recipes) {
    
    // recipes.forEach(recipe => {
        for (let i =0; i <1; i++) {
                let cardInt = `
                        <article>
                        <a href="">
                            <h4>${recipes[i].introduction.name}</h4>
                            <img src="${recipes[i].introduction.image}" alt="">
                            <p>${recipes[i].introduction.teaser}</p>
                        </a>
                    </article>
                    `;
                    drawHtml('section#international', cardInt)
                }    

    }

    function drawPastaSection(recipes) {
        // recipes.forEach(recipe => {
            for (let i =0; i <3; i++) {
                   let cardPasta = `
                            <article>
                            <a href="">
                                <h4>${recipes[i].introduction.name}</h4>
                                <img src="${recipes[i].introduction.image}" alt="">
                                <p>${recipes[i].introduction.teaser}</p>
                            </a>
                        </article>
                        `;
                    }     
                    drawHtml('section#pasta', cardPasta)
                }

getPosts();


//Adding content to the Html
function drawHtml(selector, newContent) {
    document.querySelector(selector).innerHTML += newContent;
}
