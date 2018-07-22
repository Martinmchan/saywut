function randomBetween(a, b) {
    return Math.random() * Math.abs(a - b) + Math.min(a, b)
}

// http://kentor.me/posts/generating-pastel-colors-for-css/
function getRandomPastelColor() {
    var hue = Math.floor(Math.random() * 360);
    var pastel = 'hsl(' + hue + ', 100%, 75%)';
    return pastel;
}

function randomPerson(data) {
    return data[Math.floor(randomBetween(0, data.length))]
}

function generatePerson(personData) {
    const { name, picture, quotes } = personData
    
    const personDiv = document.createElement('div')
    const imageContainerDiv = document.createElement('div')
    const personImage = document.createElement('img')

    personDiv.classList.add('person')

    personImage.src = picture
    personImage.classList.add('picture')

    document.addEventListener('click', e => sayQuote(quotes, imageContainerDiv))

    document.addEventListener('mousedown', e => {
        e.preventDefault()
    })
    
    personDiv.appendChild(imageContainerDiv)
    imageContainerDiv.appendChild(personImage)

    document.getElementById('container').appendChild(personDiv)
}

function sayQuote(quotes, el) {
    const quoteDiv = document.createElement('div')
    
    const selectedQuote = quotes[Math.floor(randomBetween(0, quotes.length))]
    quoteDiv.innerHTML += selectedQuote
    quoteDiv.classList.add('quote')

    const elRect = el.getBoundingClientRect()
    
    const fontSize = randomBetween(0.5, 4)
    quoteDiv.style.fontSize = fontSize + 'rem'
    quoteDiv.style.color = getRandomPastelColor()

    const leftOffset = 5 * fontSize * selectedQuote.length
    quoteDiv.style.left = randomBetween(0, elRect.width - leftOffset)
    quoteDiv.style.top = randomBetween(0, el.offsetHeight)

    const rot = randomBetween(-60, 60)
    quoteDiv.style.webkitTransform = 'rotate(' + rot + 'deg)'
    
    el.appendChild(quoteDiv)
}


document.addEventListener("DOMContentLoaded", e => {
    const person = randomPerson(data)
    generatePerson(person)
})