
const sec = document.querySelector('.shand')
const min = document.querySelector('.minute')
const hourel = document.getElementsByClassName('hour')[0]


setInterval(rotation, 1000)

function rotation() {
    const d = new Date()
    let s= d.getSeconds()
    let h= d.getHours()
    let m= d.getMinutes()
    let k= parseInt(h*30) + parseInt(m/2)

    sec.style.transform= 'rotate('+s*6+'deg)'
    min.style.transform= 'rotate('+m*6+'deg)'
    hourel.style.transform= 'rotate('+k+'deg)'

}
