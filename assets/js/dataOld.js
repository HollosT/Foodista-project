
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
            "template": "topLevelCategory",
            "visible": true
        },
        "content": {
            "header": 'International cuisine'
        },
    },
    {
        "id": 3,
        "metaData": {
            "name": "Pasta",
            "title": "Pasta recipes",
            "template": "topLevelCategory",
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
            "template": "topLevelCategory",
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
            "template": "topLevelCategory",
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
            "template": "topLevelCategory",
            "visible": true,
        },
        "content": {
            "header": 'Recipes for guest hosting'
        }
    },
    {
        "id": 7,
        "metaData": {
            "name": "Dessert",
            "title": "Recipes for Dessert",
            "template": "topLevelCategory",
            "visible": true,
        },
        "content": {
            "header": 'Recipes for Dessert'
        }
    },

    {
        "id": 8,
        "metaData": {
            "name": "Article",
            "title": "Articles",
            "template": "page",
            "visible": true,
        },
        "content": {
            "header": 'Articles'
        }
    }],
    "subNav": [
        {
            "subId": 2,
            "metaData": {
                "visible": true
            },
            "subCategories":[ {
                "id": 9,
                "name": "Western Europe",
                "content": "This a Western Dish"
            },
            {
                "id": 10,
                "name": "Eastern Europe",
                "content": "This an Eastern Dish"
            },
            {   "id": 11,
                "name": "Meat",
                "content": "This a Meat Dish"
            },
            {   
                "id": 12,
                "name": "Fish",
                "content": "This a Fish Dish "
            }]
         },
        {
            "subId": 6,
            "metaData": {
                "visible": true
            },
            "subCategories":[{
                "id": 13,
                "name": "Meat",
                "content": "This a Meat Dish"
            },
            {
                "id": 14,
                "name": "Fish",
                "content": "This a Fish Dish"
            },
            {   
                "id": 15,
                "name": "Sweets",
                "content": "This a Sweet Dish"
            },
            {   "id": 16,
                "name": "Drinks",
                "content": "This a Drink "
            }
        ]
         },    
        {
            "subId": 7,
            "metaData": {
                "visible": true
            },
            "subCategories": [{
                "id": 17,
                "name": "Quick",
                "content": "This a Quick dessert dish"
            },
            {   "id": 18,
                "name": "Special Occasions",
                "content": "This a dessert for special occasions"
            }]
        }   

]}