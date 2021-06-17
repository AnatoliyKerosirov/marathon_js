const  board = document.querySelector('#board')

const SQUARES_NUMBER = 800
const SQUARE_BACKGROUND_COLOR = '#1d1d1d'
const colors = ['#6188df', '#61df9c', '#e99b4f', '#d4564c', '#dd3996', '#bc15c2', '#8715c2']

for(let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.addEventListener('mouseover', () => {
        setBackgroundColor(square, getRandomColor())
    })
    square.addEventListener('mouseleave', () => {
        setBackgroundColor(square, SQUARE_BACKGROUND_COLOR)
        square.style.boxShadow = `0 0 3px #000`
    })
    square.classList.add('square')
    board.append(square)
}

function setBackgroundColor( elem, color ) {
    elem.style.backgroundColor = color
    elem.style.boxShadow = `0 0 5px ${color}, 0 0 20px ${color}`
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}