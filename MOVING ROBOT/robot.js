const robotRed = document.querySelector('.robot-red')
let number = 0
function moveRobotRed() {
    number += 50
    robotRed.style.left = number + 'px'
}
robotRed.addEventListener('click', moveRobotRed)

const robotYellow = document.querySelector('.robot-yellow')
function moveRobotYellow() {
    number +=50
    robotYellow.style.right = number + 'px'
}
robotYellow.addEventListener('click', moveRobotYellow)