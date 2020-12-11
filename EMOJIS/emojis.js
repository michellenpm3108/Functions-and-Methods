const input = document.getElementById ('input')
const pushBtn = document.getElementById('push-btn')
const unshiftBtn = document.getElementById('unshift-btn')
const list = document.getElementById('list')

function renderList() {
    let newTask = document.createElement('li')
    newTask.textContent = input.value
    list.append(newTask)
}


pushBtn.addEventListener('click', function () {
    if (input.value) {
        renderList()
        input.value = ""
    }
})