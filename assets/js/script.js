
// Fetching the data from WP
fetch("https://marekfurik.com/wp-json/wp/v2/posts")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          for (let i = 0; i < data.length; i++) {
            const section = `
            <section>
                <h2></h2>
                <a href="">
                <h4></h4>
                    <img src="" alt="">
                    <p></p>
                </a>
            </section>
        `;
        
        console.log(section);
        return section;
    };
    addHTML('main', section);
});

//Adding content to the Html

function drawHtml(selector, newContent) {
    document.querySelector(selector).innerHTML += newContent;
}

// const addHTML = (selector, content) => {
//     const elements = document.querySelectorAll(selector);
//     elements.forEach(element => {
//       element.innerHTML += content;
//     });
//   };
