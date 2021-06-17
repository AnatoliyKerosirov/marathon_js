const startBtn = document.querySelector('.start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timeEL = document.querySelector('#time')
const board = document.querySelector('#board')

const colors = ['#6188df', '#61df9c', '#e99b4f', '#d4564c', '#dd3996', '#bc15c2', '#8715c2']

let time = 0
let score = 0

startBtn.addEventListener('click', event => {
    event.preventDefault()
    screens[0].classList.add('up')
})

timeList.addEventListener('click', event => {
    if(event.target.classList.contains('time-btn')){
        time = parseInt(event.target.getAttribute('data-time'))
    }
    screens[1].classList.add('up')
    startGame()
})

board.addEventListener('click', event => {
    if(event.target.classList.contains('circle')){
        score++
        event.target.remove()
        createRandomCircle()
    }
})

function startGame() {
    setInterval(decreaseTime, 1000)
    createRandomCircle()
    setTime(time)
}

function decreaseTime() {
    if(time === 0 ){
        finishGame()
    } else {
        let current = --time
        if (current < 10) {
            current = `0${current}`
        }
        setTime(current)
    }
}

function setTime(time) {
    timeEL.innerHTML = `00:${time}`
}

function finishGame() {
    timeEL.parentNode.classList.add('hide')
    board.innerHTML = `<h1>Счет: <span class="primary">${score}</span></h1>`
}

function createRandomCircle() {
    const circle = document.createElement('div')
    const size = getRandomNumber(5, 50)
    const {width, height} = board.getBoundingClientRect()
    const x = getRandomNumber(0, width - size)
    const y = getRandomNumber(0, height - size)
    const colorsBg = [colors[getRandomNumber(0, colors.length - 1)], colors[getRandomNumber(0, colors.length - 1)], colors[getRandomNumber(0, colors.length - 1)]]
    const degBg = getRandomNumber(0, 90)
    circle.classList.add('circle')
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.left = `${x}px`
    circle.style.top = `${y}px`
    circle.style.background = `linear-gradient(${degBg}deg, ${colorsBg[0]} 0%, ${colorsBg[1]} 47%, ${colorsBg[2]} 100%)`;
    board.append(circle)
}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

function winner() {
    function setWin() {
        const circle = document.querySelector('.circle')
        if(circle){
            circle.click()
        }
    }
    setInterval(setWin, 10)
}