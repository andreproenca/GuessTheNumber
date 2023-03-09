
let computerNumber
let userNumbers = []
let attempts = 0
let maxguesses = 10
let maxNumber


function newGame() {
    window.location.reload() //essa função é chamada pelo HTML, quando pressiona o botao 'New Game'
}

// a função abaixo é carrega pelo HTML

function getComputerNumber() {
    if (computerNumber == undefined) {
        maxNumber = Number(document.getElementById('inputMax').value)
        document.getElementById('inputMax').setAttribute('Readonly', 'Readonly')
        computerNumber = Math.floor(Math.random() * maxNumber + 1)

    }
    console.log(computerNumber, maxNumber)

}

function compareNumbers() {

    const userNumber = Number(document.getElementById('inputBox').value)

    if (userNumber > maxNumber) {
        document.getElementById('textOutput').innerHTML = 'Your number is not acceptable'
        document.getElementById('inputBox').value = ''

    }
    else {
        userNumbers.push(' ' + userNumber)
        document.getElementById('guesses').innerHTML = userNumbers    //no HTML tem que colocar no campo o comando 'on change'

        if (attempts < maxguesses) {
            if (userNumber > computerNumber) {
                document.getElementById('textOutput').innerHTML = 'Your number is too high'
                document.getElementById('inputBox').value = ''
                attempts++
                document.getElementById('attempts').innerHTML = attempts
            }
            else if (userNumber < computerNumber) {
                document.getElementById('textOutput').innerHTML = 'Your number is too low'
                document.getElementById('inputBox').value = ''
                attempts++
                document.getElementById('attempts').innerHTML = attempts
            }
            else {
                document.getElementById('textOutput').innerHTML = 'Congratulations!!!'
                attempts++
                document.getElementById('attempts').innerHTML = attempts
                document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
            }
        }
        else {
            document.getElementById('textOutput').innerHTML = 'You Lose! The computer number was ' + computerNumber
            document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
        }


    }



}