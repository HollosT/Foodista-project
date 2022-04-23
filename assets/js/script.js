
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
    for(let i = 0; i <data.length; i++){
        let dataOfRecipes = data[i].acf;
        console.log(dataOfRecipes);
        drawHomePage(dataOfRecipes)
        return dataOfRecipes;
    }
}

function drawHomePage(data) {
    let section = `
        <section>
        <h2>${data.introduction.name}</h2>
        <a href="">
        <h4></h4>
            <img src="" alt="">
            <p></p>
        </a>
    </section>
`;
drawHtml('main', section);
}

//Adding content to the Html
function drawHtml(selector, newContent) {
    document.querySelector(selector).innerHTML += newContent;
}
