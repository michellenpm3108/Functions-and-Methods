const robotRed = document.querySelector('.robot-red')
let number = 0
function moveRobotRed() {
    number += 50
    robotRed.style.left = number + 'px'
}
robotRed.addEventListener('click', moveRobotRed)