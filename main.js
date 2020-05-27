const contact = document.querySelector('.contact');
const dropContact = document.querySelector('footer#services small b.cont');
const drive = document.querySelector('footer#services small i');


dropContact.addEventListener('click', (n) => {
    contact.classList.toggle('open');
    drive.classList.toggle('car')
})
console.log('Hi there,your royal Geekiness.....Try Not to Break Anything!!!!!....Just Kidding')