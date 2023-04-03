var typed = new Typed('.multi-text', {
    strings: ['Frontend Developer.', 'Backend Developer.','FullStack Developer'],
    typeSpeed: 50,
    loop:true

})

/* toggle menu icon */

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');


}

window.onscroll = () => {
    /* remove menu icon and toggle icon when clicked  */

menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
}

 