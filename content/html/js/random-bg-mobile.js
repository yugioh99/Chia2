
function backgr(){
    var backimg = [
    "../../img/theme/bg-mobile/01.jpg",
    "../../img/theme/bg-mobile/02.jpg",
    "../../img/theme/bg-mobile/03.png"
    ];
    var randimg =Math.floor(Math.random()*3);
    document.body.background = backimg[randimg];
}

    