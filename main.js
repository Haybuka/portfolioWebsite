const contact = document.querySelector('.contact');
const dropContact = document.querySelector('footer#services small b.cont');
const drive = document.querySelector('footer#services small i');
const slideUl = document.querySelector('#wrapper nav ul');
const slider = document.querySelector('#wrapper nav .toggler')
const sliderSpan = document.querySelector('#wrapper nav .toggler span')

dropContact.addEventListener('click', (n) => {
    contact.classList.toggle('open');
    drive.classList.toggle('car')
})

slider.addEventListener('click', (n) => {
    slideUl.classList.toggle('slideIn');
})
// sliderSpan.addEventListener('click', (n) => {
//     slideUl.classList.toggle('slideIn');
// })
console.log('Hi there,your royal Geekiness.....Try Not to Break Anything!!!!!....Just Kidding')