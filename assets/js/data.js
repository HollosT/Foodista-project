
// This script provides the metadata about the pages and the content which is not the recipes or articles itselfs.
// It is based on Dan Høegh  Sem 2, theme 2 - API 1 lecture

const data = {
    "site": {
        "footer": {
            "address": 'Foddista',
            "email": 'foodista@foodist.com',
        }
    },
    "pages": [{
        "id": 1,
        "metaData": {
            "name": "Home",
            "title": "Home",
            "template": "page",
            "visible": true,
            "rootPage": true
        },
        "content": {
            "header": 'Welcome'
        }
    },
    {
        "id": 2,
        "metaData": {
            "name": "International cuisine",
            "title": "International recipes",
            "template": "page",
            "visible": true
        },
        "content": {
            "header": 'International cuisine'
        }
    },
    {
        "id": 3,
        "metaData": {
            "name": "Pasta",
            "title": "Pasta recipes",
            "template": "page",
            "visible": true,
        },
        "content": {
            "header": 'Pasta'
        }
    },
    {
        "id": 4,
        "metaData": {
            "name": "Seasonal",
            "title": "Seasonal recipes",
            "template": "page",
            "visible": true,
        },
        "content": {
            "header": 'Seasonal'
        }
    },
    {
        "id": 5,
        "metaData": {
            "name": "Soup",
            "title": "Soup recipes",
            "template": "page",
            "visible": true,
        },
        "content": {
            "header": 'Soup'
        }
    },
    {
        "id": 6,
        "metaData": {
            "name": "Guest host",
            "title": "Recipes for guest hosting",
            "template": "page",
            "visible": true,
        },
        "content": {
            "header": 'Recipes for guest hosting'
        }
    },
    {
        "id": 7,
        "metaData": {
            "name": "Article",
            "title": "Articles",
            "template": "page",
            "visible": true,
        },
        "content": {
            "header": 'Articles'
        }
    }]
}