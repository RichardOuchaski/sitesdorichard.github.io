let erase= document.querySelector('#erase')

let erase_all= document.querySelector('#erase_all')
let zero = document.querySelector('#zero')
let divide= document.querySelector('#divide')
let equal= document.querySelector('#equal')

let sete= document.querySelector('#sete')
let oito= document.querySelector('#oito')
let nove= document.querySelector('#nove')
let multiply= document.querySelector('#multiply')
let quatro= document.querySelector('#quatro')
let cinco= document.querySelector('#cinco')
let seis= document.querySelector('#seis')
let minus= document.querySelector('#minus')
let um= document.querySelector('#um')
let dois= document.querySelector('#dois')
let tres= document.querySelector('#tres')
let plus= document.querySelector('#plus')

let display = document.querySelector('#result')

let nothing = '';
let digitos = display.innerHTML.length
function apagar(){
    console.log('1')

    ina=display.innerHTML.length
    auau= display.innerHTML.substring(0, ina-1)
    display.innerHTML = auau

    
    
}






function aperto(input){
   

    
    console.log('2')
    display.innerHTML += input
    
}
function eraser(){
    console.log('3')
    display.innerHTML = ''

    
}


function contar(){
    console.log('4')
    
    let noob = display.innerHTML
    let pro = noob.trim()
    let hacker = pro.length

    
if(hacker > 0){
    bob = eval(display.innerHTML);
    display.innerHTML = bob
}

}

// let = document.querySelector(' ')


erase.addEventListener('click', ()=>{
    apagar()
})
erase_all.addEventListener('click', ()=>{
    eraser()
})
equal.addEventListener('click', ()=>{
    contar()
})
divide.addEventListener('click', ()=>{
    aperto('/')
}) 




zero.addEventListener('click', ()=>{
    aperto('0')
})
sete.addEventListener('click', ()=>{
    aperto('7')
})

oito.addEventListener('click', ()=>{
    aperto('8')
})

nove.addEventListener('click', ()=>{
    aperto('9')
})
multiply.addEventListener('click', ()=>{
    aperto('*')
})
quatro.addEventListener('click', ()=>{
    aperto('4')
})
cinco.addEventListener('click', ()=>{
    aperto('5')
})

seis.addEventListener('click', ()=>{
    aperto('6')
})
minus.addEventListener('click', ()=>{
    aperto('-')
})

um.addEventListener('click', ()=>{
    aperto('1')
})

dois.addEventListener('click', ()=>{
    aperto('2')
})

tres.addEventListener('click', ()=>{
    aperto('3')
})

plus.addEventListener('click', ()=>{
    aperto('+')
})




// let noob = '          '
// let pro = noob.trim()
// let hacker = pro.length
// console.log(pro)
// console.log(hacker)


// #result{
//     b
// #result{


// #icons{
  
// #result{
 
// #erase_all
// #percentag
// #divide{
// g
// #erase{
// gr
// #sete{
// gri
// #oito{
// gri
// #nove{
// gri
// #multiply{
// #quatro{
// g
// #cinco{
// gr
// #seis{
// gri
// #minus{
// gr
// #um{
// grid-
// #dois{
// gri
// #tres{
// gri
// #plus{
// gri
// #equal{
  
// #equal:hov
// #equal:act