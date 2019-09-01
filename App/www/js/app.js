var app = new Framework7({

    root: '#app',
    name: 'NoSmoke',
    id: 'com.upb.nosmoke',
    panel: {
        swipe: 'left',
    },
    routes: [
        {
            path: '/home/',
            url: 'index.html',
        },
        {
            path: '/ligthers/',
            url: 'pages/ligthers-page.html',
        },
        {
            path: '/pulmones/',
            url: 'pages/Pulmon-page.html',
        },
        {
            path: '/corazon/',
            url: 'pages/Corazon-page.html',
        },
        {
            path: '/cerebro/',
            url: 'pages/Cerebro-page.html',
        },
        {
            path: '/cabeza/',
            url: 'pages/CabezaRostro-page.html',
        },
        {
            path: '/ADN/',
            url: 'pages/ADN-page.html',
        },
        {
            path: '/abdomen/',
            url: 'pages/Abdomen-page.html',
        }
    ],
});

var mainView = app.views.create('.view-main');