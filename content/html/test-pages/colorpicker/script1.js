
/*
let pretend_local_storage = null


function setupBackgroundColorChange() {
  const elements = document.querySelectorAll(".card-bg")
  document.getElementById('colorpicker').addEventListener('input', function(e) {
    color = e.target.value
    if (color === localStorage) return
    localStorage = color
    elements.forEach((element) => element.style.background = color)
  })
}

window.onDOMContentLoaded = setupBackgroundColorChange();
*/



localStorage.getItem('bgColor', null)
function setupBgCC() {
    const elements = document.querySelectorAll(".pageBg")
    setColor(elements, localStorage.getItem('bgColor', '#000'))
    document.getElementById('colorpicker').addEventListener('input', function (e) {
        color = e.target.value
        if (color === localStorage.getItem('bgColor')) return
        localStorage.setItem('bgColor', color)
        setColor(elements, color)
    })
}
function setColor(elements, color) {
  elements.forEach((element) => element.style.background = color)
}

window.onDOMContentLoaded = setupBgCC();







/* test is number 2 
localStorage.getItem('bgColor', null)
function setupBackgroundColorChange2() {
    let elements = document.querySelectorAll(".card-bg")
    setColor(elements, localStorage.getItem('bgColor', '#000'))
    document.getElementById('colorpicker2').addEventListener('input', function (e) {
        color = e.target.value
        if (color === localStorage.getItem('bgColor')) return
        localStorage.setItem('bgColor', color)
        setColor(elements, color)
    })
}
function setColor(elements, color) {
  elements.forEach((element) => element.style.background = color)
}


window.onDOMContentLoaded = setupBackgroundColorChange2();
*/