const contact = document.querySelector('.contact');
const dropContact = document.querySelector('footer#services small b.cont');
const drive = document.querySelector('footer#services small i');
const slideUl = document.querySelector('#wrapper nav ul');
const slider = document.querySelector('#wrapper nav .toggler')
const sliderSpan = document.querySelector('#wrapper nav .toggler span')
const midSpan = document.querySelector('nav .toggler span:nth-child(2)')
const firstSpan = document.querySelector('nav .toggler span:nth-child(1)')
const thirdSpan = document.querySelector('nav .toggler span:nth-child(3)')
const contacts = document.querySelector('#wrapper nav ul .contacts')

contacts.addEventListener('click', (n) => {
    contact.classList.add('open');
    drive.classList.add('car');
    setTimeout(() => {
        contact.classList.remove('open');
        drive.classList.remove('car');
    }, 5000);
})
dropContact.addEventListener('click', (n) => {
    contact.classList.toggle('open');
    drive.classList.toggle('car');
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