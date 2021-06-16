const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')

const sidebar = document.querySelector('.sidebar')

const mainSlide = document.querySelector('.main-slide')
const slidesCount = mainSlide.querySelectorAll('div').length

const container = document.querySelector('.container')

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

let indexSlideActive = 0

upBtn.addEventListener('click', () => {
    changeSlide('up')
})

downBtn.addEventListener('click', () => {
    changeSlide('down')
})

document.addEventListener('keydown', event => {
    console.log(event.key)
    if(event.key === 'ArrowUp'){
        changeSlide('up')
    } else if(event.key ==='ArrowDown'){
        changeSlide('down')
    }
})

function changeSlide(direction) {
    if(direction === 'up'){
        indexSlideActive++
        if( indexSlideActive === slidesCount ){
            indexSlideActive = 0
        }
    } else if(direction === 'down'){
        indexSlideActive--
        if( indexSlideActive < 0 ){
            indexSlideActive = slidesCount -1
        }
    }

    const height = container.clientHeight

    mainSlide.style.transform = `translateY(-${ (height * indexSlideActive) }px)`
    sidebar.style.transform = `translateY(${ (height * indexSlideActive) }px)`
}