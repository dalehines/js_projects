// ======================   SHOW MENU  ======================

const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

    // show menu 
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
// menu hide
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })

    let movieName = movieNameRef.value;
    let url = `http://www.omdbapi.com/?t=${movieName}&apikey=${key}`;