let vegetables = ['🍅' ,'🍆' ,'🥑' ,'🥦' ,'🥬' ,'🥒', '🌶' ,'🌽' ,'🥕' ,'🧄', '🧅']
let fruits = ['🍎' ,'🍐' ,'🍊' ,'🍋' ,'🍌' ,'🍉','🍇' ,'🍓','🍈' ,'🍒' ,'🍑' ,'🥭' ,'🍍' ,'🥥' ,'🥝']

const marketItems = document.getElementById('supermarket-items')
const list = document.getElementById('list')
const addBtn = document.getElementById('push-btn')
const input = document.getElementById('input')
for (let i=0 ; i<vegetables.length ; i++) {
    let veggieDeals = document.createElement('span')
    veggieDeals.textContent = vegetables[i]
    marketItems.append(veggieDeals)
}

addBtn.addEventListener('click', function (){
    let toBuyList = document.createElement ('li')
    toBuyList.textContent = input.value
    list.append(toBuyList)
})