// It is based on Dan Høegh  Sem 2, theme 2 - API 1 lecture

let pageId = getPageIdFromUrl();
drawSite(pageId);

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
    
function drawSite(pageId) {
    if (pageId == 0) {
        for(let i = 0; i < data.pages.length; i++) {
            if(data.pages[i].metaData.rootPage) {
                pageId = data.pages[i].id;
                break;
            }
        }
    }
    drawFooter();
    drawNav(pageId);
    drawPage(pageId);
    console.log(pageId);
}

function drawFooter() {
    const footerContent = `
        <h4> Contact us</h4>
        <address>${data.site.footer.address}</address>
        <p>${data.site.footer.email}</p>
    `;
    drawHtml('#footer', footerContent);
};
function drawNav(currentPageId) {
    let navString = '<ul>';
    for (let i = 0; i < data.pages.length; i++) { 
        if(data.pages[i].metaData.visible) {
            let activePage ='';
            if(data.pages[i].id == currentPageId) {
                activePage = 'class="active"' ;
            }
            navString += `
                <li ${activePage}>
                    <a href="?pageId=${data.pages[i].id}">${data.pages[i].metaData.name}</a>
                </li>
            `;
        }
    }
    navString += '</ul>'
    drawHtml('#navigation', navString)
};


function drawPage(pageId) {
    const page = findById(pageId);
    let template = page.metaData.template;
    switch (template) {
        case 'page':
            drawTempalatePage(page);
            break;
        case 'topLevelCategory':
            drawTemplatetopLevelCategory(page);
            break;
        case 'subLevelCategory':
            drawTemplateSubLevelCategory(page);
                break;
    }
};

function drawTempalatePage(page) {
    const content = `
        <h2>${page.content.header}</h2>
    `;
    drawHtml('#root', content);
}

function drawTemplatetopLevelCategory(page) {
    const content = `
        ${drawSubNav()}
        <h2>${page.content.header}</h2>
        
    `;
    drawHtml('#root', content);
}

function drawTemplateSubLevelCategory() {
    let currentPageId = getPageIdFromUrl()

    // for(let i = 0; i < data.subNav[i].subCategories.length; i++){
    //     if(data.subNav[i].subCategories[i].id) {
    //         const content = `
    //             <h2>${data.subNav[i].subCategories[i].content}</h2>;
    //         `;
    //     }
    // }
    // drawHtml('#root', content);
}

function drawSubNav() {
    let currentPageId = getPageIdFromUrl();
    let subNavString = '<ul class="sub-navigation">';
    
    for(let i = 0; i < data.subNav.length; i++) {
        if(data.subNav[i].metaData.visible) {
            let activePage = '';
            if(data.subNav[i].subId == currentPageId) {
                let currentSubNav = data.subNav[i].subCategories;
                for (let i = 0; i < currentSubNav.length; i++) {
                    activePage = 'class="active"'
                    subNavString += `
                        <li ${activePage}>
                            <a href="?pageId=${currentSubNav[i].id}">${currentSubNav[i].name}</a>
                        </li>
                `;
            }
            console.log(subNavString);
            }
            
        }
    }
    subNavString += '</ul>'
    return subNavString;

}

function drawHtml(selector, newContent) {
    document.querySelector(selector).innerHTML = newContent;
}

function findById(pageId) {
    let page;
    for (let i = 0; i < data.pages.length; i++) {
        if (data.pages[i].id == pageId) {
            page = data.pages[i];
            break;
        }
    }
    return page;
}