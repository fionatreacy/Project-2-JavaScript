document.addEventListener('DOMContentLoaded', () => {

    // card options //
    const cardArray = [
        {
        name: 'anglerFish',
        img: 'images/angler-fish.png'
    } 
    {
        name: 'crab',
        img: 'images/crab.png'
    } 
    {
        name: 'fish',
        img: 'images/fish.png'
    } 
    {
        name: 'jellyfish',
        img: 'images/jellyfish.png'
    } 
    {
        name: 'octopus',
        img: 'images/octopus.png'
    } 
    {
        name: 'squid',
        img: 'images/squid.png'
    }
]

    // gameboard //
    const grid = document.querySelector('.grid')

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var = document.createElement('img')
            card.setAttribute('src', 'assets/images/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipcard)
            grid.appendChild(card)
        }
    }

})