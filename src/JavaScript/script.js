const mobileButton = document.querySelector('.mobileButton');
const mobileImage = document.getElementById('mobileImage');
const header = document.querySelector('.headerList');
const carousel = document.querySelector('#carousel')
let breakPoint = carousel.scrollWidth - carousel.clientWidth


// ---------------DISPLAY HEADER ----------------------

mobileButton.addEventListener('click', () => {
    header.classList.toggle('display')

    if (mobileImage.attributes.src.value == "./src/images/icon-hamburger.svg")
        mobileImage.attributes.src.value = "./src/images/icon-close.svg"
    else
        mobileImage.attributes.src.value = "./src/images/icon-hamburger.svg"

})


// -----------------------SLIDER CICLE ------------------

window.addEventListener('resize', function () {
    breakPoint = carousel.scrollWidth - carousel.offsetWidth;
})

setInterval(() => {
    carousel.scrollLeft += carousel.offsetWidth

    if (carousel.scrollLeft == breakPoint)
        carousel.scrollLeft = 0

}, 15000)

