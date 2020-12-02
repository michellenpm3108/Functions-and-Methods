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

let gardenPlants = [ 
    {
        name: 'roses', 
        origin: 'China'
    },
    {
        name: 'tulips', 
        origin: 'Asia'
    },
]
let newPlant = {
    name: 'daffodil',
    origin: 'Spain'
}
gardenPlants.unshift(newPlant)
console.log(gardenPlants)

//Challenge: snake board game
let squares = Array.from(document.querySelectorAll('.grid div'))
let currentSnake = []
//add the number 0 to the currentSnake array to see what happens
currentSnake.push(0)

//Challenge: draw the snake as 3 squares long on the third row down using unshift
currentSnake.unshift(18,19,20)
console.log(currentSnake)

//Challenge: add to the HEAD of the snake using push
currentSnake.push(21)


currentSnake.forEach(element => squares[element].classList.add('snake'))