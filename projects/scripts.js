const result = document.querySelector('.result')
const humanScore = document.querySelector('#score-human')
const machineScore = document.querySelector('#score-machine')


let humanScoreNumber = 0
let machineScoreNumber = 0


const GAME_OPTIONS = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors'
}


const playHuman = (choice) => {
    playGame(choice, playMachine())
    console.log(choice)



}


const playMachine = () => {


    const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS]
    const myNumber = Math.floor(Math.random() * 3)

    return choices[myNumber]


}

const playGame = (human, machine) => {

    console.log('Humano:' + human + 'Maquina: ' + machine)

    if (human === machine) {

        result.innerHTML = "Deu empate!"

    } else if (
        (human === 'paper' && machine === 'rock') ||
        (human === 'rock' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'paper')

    ) {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = "Você ganhou!"

    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "Você perdeu para a Alexa!"
    }
}