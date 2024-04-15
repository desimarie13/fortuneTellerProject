function generateRandomNumber(num) {
    return Math.floor(Math.random() * num)
}

const fortuneOutcomes = {
    horoscopeSign: ['Pisces', 'Sagittarius', 'Virgo', 'Gemini', 'Aquarius'],
    readingOutput: ['loyal but stubborn', 'whimsical but over-sensitive', 'spontaneous but flighty', 'perfectionist but self-critical', 'passionate but uncommunicative'],
    advice: ['keep your mind open', 'follow your heart', 'stay curious', 'be cautious but kind', 'focus on your goals']
}

let selfOutcome = []

for (let prop in fortuneOutcomes) {
    let fortuneTell = generateRandomNumber(fortuneOutcomes[prop].length)
    switch (prop) {
        case 'horoscopeSign':
            selfOutcome.push(`Your horoscope sign is "${fortuneOutcome[prop][fortuneTell]}".`)
            break
        case 'readingOutput':
            selfOutcome.push(`Your trait is that you are "${fortuneOutcome[prop][fortuneTell]}".`)
            break 
        case 'advice':
            selfOutcome.push(`You need to "${fortuneOutcome[prop][fortuneTell]}".`)
            break
        default:
            selfOutcome.push('The future is hazy, let us try again later.')
    }
}

function fortuneTelling(fortune) {
    const telling = selfOutcomes.join('/n')
    console.log(telling)
}

fortuneTelling(selfOutcomes);
