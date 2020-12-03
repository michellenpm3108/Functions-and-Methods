//slice method
//it does NOT mututate arrays
//it produces new ones

const films = ['Elf', 'Borat', 'It', 'Split', 'Us'] 
//get the first 2 films from the array and put them in the comedy section

const comedy = films.slice(0,2)
console.log(comedy)
console.log(films)

//push method
//ADD new items to the END of existing array
//it mutate that existing array
//change the length of that array

let books = ['Moby Dick', 'Life of Pi', 'Sapiens']
books.push('The Hungry Caterpillar')
console.log(books)

//unshift
//ADD new items to the START of exisiting array
//it mutates and changes the length of that array

let lottery = [5, 7, 8, 10, 12]
let number = 34 
lottery.unshift(number)
console.log(lottery)


//Challenge: draw the snake on the board game
let squares = Array.from(document.querySelectorAll('.grid div'))
let currentSnake = []

currentSnake.unshift(18,19,20) //draw the snake as 3 squares long on the third row down using unshift

currentSnake.push(21) //add to the HEAD of the snake using push

currentSnake.forEach(element => squares[element].classList.add('snake'))


//pop()
//Remove the LAST item of an array
//mutate the existing array

//shift()
//Remove the FIRST item of an array
//mutate the existing array

//forEach() method 
var sum = 0;
var numbers = [1, 2, 3 ,4]

// for (let i = 0 ; i < numbers.length; i++) {
//         sum += numbers[i]
//     }
//  document.getElementById('demo').innerHTML = sum

numbers.forEach(item => sum += item)

document.getElementById('demo').innerHTML = sum