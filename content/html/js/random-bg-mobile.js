
function backgr(){
    var backimg = [
    "../../img/theme/bg-mobile/01.jpg",
    "../../img/theme/bg-mobile/02.png",
    "../../img/theme/bg-mobile/03.jpg",
    "../../img/theme/bg-mobile/04.png",
    "../../img/theme/bg-mobile/05.png",
    "../../img/theme/bg-mobile/06.png",
    "../../img/theme/bg-mobile/07.webp",
    "../../img/theme/bg-mobile/08.png",
    "../../img/theme/bg-mobile/09.png",
    "../../img/theme/bg-mobile/10.png"

    ];
    var randimg =Math.floor(Math.random()*10);
    document.body.background = backimg[randimg];
}

    