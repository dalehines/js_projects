// function to display horoscope messages when given a birth date
/*
For this project, you will build a message generator program. Every time a user runs a program, they should get a new, randomized output. You’re welcome to take the project in a couple of different forms, 
like an astrology generator, 
inspirational message, 
or nonsensical jokes. 
To make your program truly random, the message that it outputs should be made up of at least three different pieces of data. Take what you know of JavaScript syntax so far to build the program and customize it to your liking.
*/
const randomNumGenerator = (num) => {
    return Math.floor(Math.random() * num)
}
horoscopeReadings = 
{
    signs:[],
    personality:[],
    forecast:[]
}

let horoscopeMessage = [];

const messageGenerator = () => {
     for (let horoscope in horoscopeMessage) {
        let randomizer = randomNumGenerator(horoscopeMessage.length)
        switch(horoscope){
            case signs:
     return horoscopeMessage.push(horoscopeMessage[horoscope][randomizer])
                break;
        }
     }
}


console.log(messageGenerator())

