
function backgr(){
    var backimg = [
        "content/img/theme/bg-laptop/01.jpg",
        "content/img/theme/bg-laptop/02.jpg",
        "content/img/theme/bg-laptop/03.png",
        "content/img/theme/bg-laptop/04.jpg",
        "content/img/theme/bg-laptop/05.jpg",
        "content/img/theme/bg-laptop/06.png",
        "content/img/theme/bg-laptop/07.webp",
        "content/img/theme/bg-laptop/08.jpg"
    ];
    var randimg =Math.floor(Math.random()*8);
    document.body.background = backimg[randimg];
}


