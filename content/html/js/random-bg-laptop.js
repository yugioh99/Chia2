
function backgr(){
    var backimg = [
        "../../img/theme/bg-laptop/01.jpg",
        "../../img/theme/bg-laptop/02.jpg",
        "../../img/theme/bg-laptop/03.png",
        "../../img/theme/bg-laptop/04.jpg",
        "../../img/theme/bg-laptop/05.jpg",
        "../../img/theme/bg-laptop/06.png",
        "../../img/theme/bg-laptop/07.webp",
        "../../img/theme/bg-laptop/08.jpg"
    ];
    var randimg =Math.floor(Math.random()*8);
    document.body.background = backimg[randimg];
}


