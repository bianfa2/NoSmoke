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
            on: {
                pageInit: function (event, page) {

                    var index = localStorage.getItem("index");

                    if(index){
                        for(var i = 0; i < parseInt(index); i++){
                            show_lighter(localStorage.getItem(i));
                        }
                    }
                    // console.log(document.getElementById('lightersList'));
                }
            }
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
if(!localStorage.getItem("index")){
    localStorage.setItem("index", 0);
}