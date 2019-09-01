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
        }
    ],
});

var mainView = app.views.create('.view-main');