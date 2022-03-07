document.addEventListener('DOMContentLoaded', () => {

    // card options //
    const cardArray = [{
        name: 'anglerFish',
        img: 'images/angler-fish.png'
    } {
        name: 'crab',
        img: 'images/crab.png'
    } {
        name: 'fish',
        img: 'images/fish.png'
    } {
        name: 'jellyfish',
        img: 'images/jellyfish.png'
    } {
        name: 'octopus',
        img: 'images/octopus.png'
    } {
        name: 'squid',
        img: 'images/squid.png'
    }]

    cardArray.sort(() => 0.5 - Math.random())
    // gameboard //
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')

    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var = document.createElement('img')
            card.setAttribute('src', 'assets/images/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipcard)
            grid.appendChild(card)
        }
    }

    // flip cards //
    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        } else {
            cards[optionOneId].setAttribute('src', 'assets/images/blank.png')
            cards[optionTwoId].setAttribute('src', 'assets/images/blank.png')
            alert('Not a match, try again')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = "Congatulations you've won!"
        }
    }


    // check matches //
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            alert("You've found a match!")
            cardsWon.push(cardsChosen)
        }
    }


})