const container = document.querySelector('.container')
const search = document.querySelector('.search-box button')
const weatherBox = document.querySelector('.weather-box')
const weatherDetails = document.querySelector('.weather-details')
const error404 = document.querySelector('.not-found ')

search.addEventListener('click', () => {

    const APIKey = 'a319789557e79309c4ad6a03ebab599a';
    const city = document.querySelector('search-box input').value 

    if(city === "") 
    return;

    fetch('https://api.openweathermap.org/data/2.5/weather?q=${city}&appid={APIKey}&units=metric').then(response => response.json).then(json =>{

        

    })
})