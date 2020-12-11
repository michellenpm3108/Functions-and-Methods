const input = document.getElementById ('input')
const pushBtn = document.getElementById('push-btn')
const popBtn = document.getElementById('pop-btn')
const list = document.getElementById('list')

let todo = []
function renderList() {
    list.innerHTML=""
    for (let i=0 ; i<todo.length ; i++) {
        let newTask = document.createElement('li')
        newTask.textContent = todo[i]
        list.append(newTask)
        
    }
}


pushBtn.addEventListener('click', function () {
    if (input.value) {
        todo.push(input.value)
        // list.innerHTML=""
        renderList()
        list.classList.add('style')
        input.value = ""
    }
})

popBtn.addEventListener('click',function (){
    // list.innerHTML=""
    todo.pop()
    renderList()
})

const toogleBtn = document.getElementById('toogle-btn')
toogleBtn.addEventListener('click', function(){
    document.querySelector('body').style.backgroundColor = 'black'
})