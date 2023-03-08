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
const horoscopeReadings = 
{
    signs:['aries','taurus','cancer','leo'],
    personality:['energetic','depressed', 'happy','sad'],
    forecast:['calm down','smile more', 'know when to hold up, know when to walk away, know when to run', 'go for a drink']
}

let horoscopeMessage = [];


     for (let horoscope in horoscopeReadings) {
        let randomNumber = randomNumGenerator(horoscopeReadings[horoscope].length)
        switch(horoscope){
            case 'signs':
      horoscopeMessage.push(`Your star sign is ${horoscopeReadings[horoscope][randomNumber]}`)
                break
            case 'personality':
                horoscopeMessage.push(`you are normally very ${horoscopeReadings[horoscope][randomNumber]}`)
                break
            case 'forecast': horoscopeMessage.push(`you should probably ${horoscopeReadings[horoscope][randomNumber]}`)
        }
     }


const printMessage = (message) => {
    let stringMessage = horoscopeMessage.join('\n');
    console.log(stringMessage)

}

//console.log(horoscopeReadings.signs)
printMessage(horoscopeMessage)

