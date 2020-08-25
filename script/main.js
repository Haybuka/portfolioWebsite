const contact = document.querySelector('.contact');
const dropContact = document.querySelector('footer#services small b.cont');
const drive = document.querySelector('footer#services small i');
const slideUl = document.querySelector('#wrapper nav ul');
const slider = document.querySelector('#wrapper nav .toggler')
const sliderSpan = document.querySelector('#wrapper nav .toggler span')
const midSpan = document.querySelector('nav .toggler span:nth-child(2)')
const firstSpan = document.querySelector('nav .toggler span:nth-child(1)')
const thirdSpan = document.querySelector('nav .toggler span:nth-child(3)')
const contacts = document.querySelector('#contact')

contacts.addEventListener('click', (n) => {
    contact.classList.toggle('open');
    drive.classList.toggle('car');
    console.log(contact)
})
dropContact.addEventListener('click', (n) => {
    contact.classList.toggle('open');
    drive.classList.toggle('car');
    console.log(contact)
})

slider.addEventListener('click', (n) => {
    slider.classList.toggle('rotates')
    slideUl.classList.toggle('slideIn');
    midSpan.classList.toggle('drop')
    firstSpan.classList.toggle('cross')
    thirdSpan.classList.toggle('revCross')
})

console.log('Hi there,your royal Geekiness.....Try Not to Break Anything!!!!!....Just Kidding')
AOS.init();


// window.addEventListener("load", function () {
//     setTimeout(() => {
//         const preloader = document.querySelector(".lds-heart");
//         preloader.className += "loaded";
//     }, 2000);

// });