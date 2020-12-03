let tobuyList = document.getElementById('tobuyList')
let fridgeList = document.getElementById('fridgeList')
let btnUp = document.getElementById('btnUp')
let btnDown = document.getElementById('btnDown')

let toBuy = [' tomato', ' celery', ' cucumber', ' mushroom', ' chicken']
tobuyList.innerHTML = toBuy
let inFridge = [' yoghurt', ' cheese', ' milk', ' spinach']
fridgeList.innerHTML = inFridge

function moveUp() {
    toBuy.push(inFridge.pop())
    tobuyList.innerHTML = toBuy
    fridgeList.innerHTML = inFridge
}
function moveDown() {
    inFridge.push(toBuy.pop())
    tobuyList.innerHTML = toBuy
    fridgeList.innerHTML = inFridge
}

btnUp.addEventListener('click', moveUp)
btnDown.addEventListener('click', moveDown)