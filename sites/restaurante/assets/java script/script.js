let slider = document.querySelector('.slider .list');
let imgs = document.querySelectorAll('.slider .list .img');
let r = document.querySelector('#right')
let l = document.querySelector('#left')
let listm = document.querySelector('#listm ul')
var spanm = document.querySelector('#spanm')

let pluh = document.querySelector('#pluh')
let featured = document.querySelectorAll('.featured')
let active = 0

setInterval(right,6000)
setInterval(reload,10)

l.addEventListener('click', () => {
    
    left()
})
r.addEventListener('click', () => {
    
    right()
})

function right(){
    if(active > 1){
        active = 0
    } else{
        active++
    }
}
function left(){
    if(active < 1){
        active = 2
    } else{
        active--
    }
}
function reload(){
    slider.style.left = -imgs[active].offsetLeft + 'px'
}

let cyclem = 0;

featured.forEach((feature) => {
    feature.addEventListener('click', () => {
        pluh.play()

    })
})

listm.classList.add('off')

console.log(spanm)
console.log(featured)

spanm.addEventListener('click', () => {
    

    if(cyclem == 0){
        document.querySelector('#btns').classList.add('botoes2')
        document.querySelector('#btns').classList.remove('botoes')
        spanm.innerHTML = "close";

        listm.classList.add('on')
        listm.classList.remove('off')
        cyclem++
    }
    else{
        document.querySelector('#btns').classList.add('botoes')
        document.querySelector('#btns').classList.remove('botoes2')

        listm.classList.remove('on')
        listm.classList.add('off')
        spanm.innerHTML = "menu";
        cyclem--
    }
    })
    
     