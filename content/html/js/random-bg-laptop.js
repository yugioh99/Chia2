
function backgr(){
    var backimg = [
        "../../img/theme/bg-laptop/01.jpg",
        "../../img/theme/bg-laptop/01.jpg",
        "../../img/theme/bg-laptop/02.jpg",
        "../../img/theme/bg-laptop/03.jpg",
        "../../img/theme/bg-laptop/04.jpg",
        "../../img/theme/bg-laptop/05.jpg",
        "../../img/theme/bg-laptop/06.jpg",
        "../../img/theme/bg-laptop/07.jpg",
        "../../img/theme/bg-laptop/08.jpg",
        "../../img/theme/bg-laptop/09.webp",
        "../../img/theme/bg-laptop/10.webp",
        "../../img/theme/bg-laptop/11.webp",
        "../../img/theme/bg-laptop/12.webp",
        "../../img/theme/bg-laptop/13.webp",
        "../../img/theme/bg-laptop/14.webp",
        "../../img/theme/bg-laptop/15.webp",
        "../../img/theme/bg-laptop/16.webp",
        "../../img/theme/bg-laptop/17.webp",
        "../../img/theme/bg-laptop/18.png"
    ];
    var randimg =Math.floor(Math.random()*18);
    document.body.background = backimg[randimg];
}


