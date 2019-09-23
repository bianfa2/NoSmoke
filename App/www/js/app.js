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
            path: '/lighters/',
            url: 'pages/lighters-page.html',
        },
        {
            path: '/lung/',
            url: 'pages/lung-page.html',
        },
        {
            path: '/heart/',
            url: 'pages/heart-page.html',
        },
        {
            path: '/brain/',
            url: 'pages/brain-page.html',
        },
        {
            path: '/head/',
            url: 'pages/head-face-page.html',
        },
        {
            path: '/dna/',
            url: 'pages/dna-page.html',
        },
        {
            path: '/abdomen/',
            url: 'pages/abdomen-page.html',
        }
    ],
});

var mainView = app.views.create('.view-main');