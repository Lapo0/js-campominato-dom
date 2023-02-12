// Creare bottone per richiamare click
const play = document.getElementById('btn-play')
console.log(play)

// Richiamare dall HTML la griglia
const griglia = document.querySelector('.griglia')
console.log(griglia)

// Richiamare select per selezionare il livello
const levelSelect = document.getElementById('level')
console.log(levelSelect)

// Selezionare il valore inserito dall'utente e assegnargli difficoltà
let levelValue = 10
console.log(levelValue)

levelSelect.addEventListener("click", updateLevelPc)

play.addEventListener('click', clickPlay)

let celleCliccate = 0

let score = document.getElementById('score')
const gameOverEl = document.getElementById('game-over')
const restartEl = document.getElementById('btn-restart')

restartEl.addEventListener('click', isRestart)
console.log(isRestart)

const avvertimento = document.getElementById('avvertimento')

/****************************************************
 * FUNZIONI
*****************************************************/
function updateLevelPc() {
    if (levelSelect.value === "1") {
      levelValue = 10;
    } else if (levelSelect.value === "2") {
      levelValue = 9;
    } else if (levelSelect.value === "3") {
      levelValue = 7;
    }
    console.log(levelValue);
}

function clickPlay() {

    celleCliccate = 0

    score.innerHTML = 0
    
    gameOverEl.innerHTML = ''

    restartEl.style.display = "none"
    avvertimento.style.display = "none"

    // Settare il livello
    const level = levelValue
    console.log(level)

    // Selezionare dimensioni griglia
    let latoGriglia = level
    let grigliaTotale = latoGriglia ** 2
    console.log(latoGriglia, grigliaTotale)

    //Azzerare HTML griglia
    griglia.innerHTML = ''

    // Creare ciclo per creare div
    for (let i = 0; i < grigliaTotale; i++) {
        let num = i + 1
        console.log(num)

        // Creare i div con il numero corrispondente all'interno e la grandezza in base ai lati
        const cellString = `<div class='ratio ratio-1x1 cella border-secondary' style='width: calc(100% / ${ latoGriglia })'> ${ num } </div>`
        console.log(cellString)

        //Aggiungere all'html il div
        griglia.innerHTML += cellString
    }

    // Creare elemento div
    const celleElements = document.querySelectorAll('.cella')
    console.log(celleElements)

    let numeriRandom = generateRandomNumbers(grigliaTotale)

    // Creare un ciclo per selezionare tutte le celle
    for (let i = 0; i < celleElements.length; i++) {
        let num = i + 1
        console.log(num)

        // Assegnare ad ogni cella un indice uguale al numero
        let cella = celleElements[i]
        console.log(cella)

        let celleDisabilitate = [];

        cella.addEventListener('click', function() {
            if (celleDisabilitate.includes(cella)) {
                return;
            }
            celleDisabilitate.push(cella);
            if (numeriRandom.includes(num)) {
                cella.style.backgroundImage = "url('./img/bomba.png')";
                cella.style.backgroundSize = "cover";
                cella.textContent = '';
                gameOver();
            } else {
                cella.style.backgroundImage = "url('./img/fiore.webp')";
                cella.style.backgroundSize = "cover";
                cella.textContent = '';
                celleCliccate++
                console.log(celleCliccate)
            }
        })
    }
}

function gameOver() {
    griglia.innerHTML = "";
    score.innerHTML = celleCliccate * 10
    gameOverEl.innerHTML = 'Game Over'
    console.log(gameOverEl)
    restartEl.style.display = "block"
    play.style.display = "none"
    avvertimento.style.display = "block"
}

function isRestart() {
    play.click()
}

function generateRandomNumbers(grigliaTotale) {
    let numeriRandom = [];
  
    while (numeriRandom.length < 16) {
      let numero = Math.floor(Math.random() * grigliaTotale) + 1;
      if (!numeriRandom.includes(numero)) {
        numeriRandom.push(numero);
      }
    }
    console.log(numeriRandom);

    return numeriRandom
}