
const sec = document.querySelector('.shand')
const min = document.querySelector('.minute')
const hourel = document.getElementsByClassName('hour')[0]


setInterval(rotation, 1000)

function rotation() {
    const d = new Date()
    let s= d.getSeconds()
    let h= d.getHours()
    let m= d.getMinutes()

    let k=parseInt(h*30)+parseInt(m/4)

    sec.style.transform= 'rotate('+s*6+'deg)'
    min.style.transform= 'rotate('+m*6+'deg)'
    hourel.style.transform= 'rotate('+k+'deg)'

}

// let change color after every 5 seconds.

const border1= document.querySelector('.clock')
const border2= document.querySelector('.inner-circle')
const dgts= document.querySelectorAll('.number')
console.log(dgts)
border1.style.borderColor= 'orangered'

setInterval(changeColor, 1000)
function changeColor() {
    let k= border1.style.borderColor
    
    if(k ==='orangered'){ 
        border1.style.borderColor='green'
        border2.style.borderColor='blue'
        dgts.forEach(setcolorto)
        function setcolorto(i) {
            i.style.color='red'
        }
        sec.style.background='orangered'
    }
    else if(k==='green'){
        border1.style.borderColor = 'blue';
        border2.style.borderColor='orangered'
        dgts.forEach(setcolorto)
        function setcolorto(i) {
            i.style.color='green'
        }
        sec.style.background='white'
    }


    else{
        border1.style.borderColor=' orangered'
        border2.style.borderColor='green'
        dgts.forEach(setcolorto)
        function setcolorto(i) {
            i.style.color='white'
        }
        sec.style.background='cyan'
    }
}
