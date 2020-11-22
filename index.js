// FUNCTION allows you to write a block of code, define it with a name and execute it as many times as u like
function functionName(parameter1, parameter2) {
    blockOfCode
}


// WITHOUT PARAMETER
// write a function that sets off an alert in your console
function showAlert1 () {
    console.log('You have been alerted')
}
showAlert1()


// WITH PARAMETER 
// parameter are name variables or arguments that we post in FUNCTION 
function showAlert2(firstName,lastName) {
    console.log( firstName + ' ' + lastName + ', you have been alerted')
}
showAlert2('Mai')
showAlert2 ('Xinh', 'Ying')


// MINI-CHALLENGE: write a code to alert all the students in class that school in cancelled for the day!

function sendText(students) {
    console.log( 'Hi ' + students, ', today our school is closed')
}
const students = ['Xian Lee', 'Anna Seeberg', 'Robert Anderson', 'Diane Leming', 'Mariam Dover']
 
for (let i=0 ; i < students.length ; i++) {
    sendText(students[i])
}

// GLOBAL variable vs LOCAL variable
// GLOBAL VARIABLE: Choose to store a variable globally, you can use it to save values and keep adding in value 

const firstName = 'Ania'
let calls = 0
function showAlert3() {
    calls +=1;
    console.log (firstName + ', you have been alerted ' + calls +' times')
}
showAlert3 ()
//LOCAL VARIABLE: is the variable declared inside a function. The local variable can only be accessed from within the function



// MINI-CHALLENGE: convert Celcius to Fahrenheit

function toFahrenheit(Celcius) {
    return ((Celcius*(9/5))+32)
}
var x = toFahrenheit(37) //can use a variable to store the return value of a function 
console.log('you temperature is ' + x + ' Fahrenheit')

function toCelcius(Fahrenheit) {
    return ((Fahrenheit-32)/(9/5))
}
console.log('you should bake this cake at ' + toCelcius(356) + ' Celcius') //or use function directly as a variable value

var Fahrenheit = document.getElementById("keyIn").innerText;
function toCelcius(Fahrenheit) {
    var convert = ((Fahrenheit-32)/(9/5)) 
    return  ('you should bake this cake at ' + convert + ' Celcius')
}
document.getElementById(demo).innerHTML = toCelcius(Fahrenheit)