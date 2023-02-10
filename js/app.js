// console.log('prova')
// Creare bottone per richiamare click
const play = document.getElementById('btn-play')
// console.log(play)

const griglia = document.querySelector('.griglia')
// console.log(griglia)

let levelPc

 // Creare un input dove l'utente possa scegliere il livello
    // Selezionare input dall'HTML
    const levelUser = document.getElementById('level')
    // console.log(levelUser)
    

    // Prendere il valore dell'utente
    levelUser.addEventListener('change', function () {
       
        if (levelUser.value === "1") {
          levelPc = 10;
        } else if (levelUser.value === "2") {
          levelPc = 9;
        } else if (levelUser.value === "3") {
          levelPc = 7;
        }
        console.log(levelPc);
    })

play.addEventListener('click', function() {

    const level = levelPc

    // Celle sul lato e celle totali
    let latoGrid = level
    let totalGrid = latoGrid ** 2
    // console.log(latoGrid, totalGrid)
    
    // generare numero random da 1 a 16 nello stesso range della difficoltà scelta
    let numeriRandom = [];

    // creare un ciclo per verificare che il numeroRandom non sia già stato inserito
    while (numeriRandom.length < 16) {
        let numero = Math.floor(Math.random() * totalGrid) + 1;
        if (!numeriRandom.includes(numero)) {
            numeriRandom.push(numero);
        }
    }
    console.log(numeriRandom);

    //Azzerare HTML griglia
    griglia.innerHTML = ''

    // Creare ciclo
    for (let i = 0; i < totalGrid; i++) {
        let num = i + 1
        console.log(num)

        // Creare i div con il numero corrispondente all'interno e la grandezza in base ai lati
        const cellString = `<div class='ratio ratio-1x1 cella border-secondary' style='width: calc(100% / ${ latoGrid })'> ${ num } </div>`
        // console.log(cellString)

        //Aggiungere all'html il div
        griglia.innerHTML += cellString
    }

    // Creare l'elemento div
    const celleElements = document.querySelectorAll('.cella')
    // console.log(celleElements)
    
    // Creare un ciclo per selezionare tutte le celle
    for (let i = 0; i < celleElements.length; i++) {
        let num = i + 1

        // Assegnare ad ogni cella un indice uguale al numero
        const cella = celleElements[i]

        // Creare un evento click per ogni cella
        let cellsFound = 0;

        function gameOver() {
            alert("Hai cliccato su una cella sbagliata! La partita è terminata");
            griglia.innerHTML = "";
            play.click();
        }

        cella.addEventListener('click', function() {
            if (!cella.classList.contains('bg-secondary') && !cella.classList.contains('bg-primary')) {
              if (numeriRandom.includes(num)) {
                cella.classList.add('bg-primary');
                gameOver();
              } else {
                cella.classList.add('bg-secondary');
              }
            }
        })
    }
})