import './style/main.scss'

var popup = document.getElementById('menu')

var openBtn = document.getElementById('mobile-menu__btn')

var closeBtn = document.getElementsByClassName('close')[0]

openBtn.onclick = function () {
    popup.style.display = 'block'
}

closeBtn.onclick = function () {
    popup.style.display = 'none'
}

window.onclick = function (event) {
    if (
        !event.target.closest('#menu') &&
        !event.target.closest('#mobile-menu__btn')
    ) {
        popup.style.display = 'none'
    }
}
