
function backgr(){
    var backimg = [
        "content/img/theme/bg-start/01.jpg",
        "content/img/theme/bg-start/02.jpg",
        "content/img/theme/bg-start/03.jpg",
        "content/img/theme/bg-start/04.jpg",
        "content/img/theme/bg-start/05.jpg",
        "content/img/theme/bg-start/06.jpg",
        "content/img/theme/bg-start/07.jpg",
        "content/img/theme/bg-start/08.jpg",
        "content/img/theme/bg-start/09.webp",
        "content/img/theme/bg-start/10.webp",
        "content/img/theme/bg-start/11.webp",
        "content/img/theme/bg-start/12.webp",
        "content/img/theme/bg-start/13.webp",
        "content/img/theme/bg-start/14.webp",
        "content/img/theme/bg-start/15.webp",
        "content/img/theme/bg-start/16.webp",
        "content/img/theme/bg-start/17.webp",
        "content/img/theme/bg-start/18.png"

    ];
    var randimg =Math.floor(Math.random()*18);
    document.body.background = backimg[randimg];
}


