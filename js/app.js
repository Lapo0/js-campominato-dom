// console.log('prova')
// Creare bottone per richiamare click
const play = document.getElementById('btn-play')
// console.log(play)

const griglia = document.querySelector('.griglia')
// console.log(griglia)

play.addEventListener('click', function() {

    // Creare un input dove l'utente possa scegliere il livello
    // Selezionare input dall'HTML
    const levelUser = document.getElementById('level')
    // console.log(levelUser)

    // Prendere il valore dell'utente
    const levelPc = levelUser.value
    if (levelPc < 1 || levelPc > 10) {
        console.log('I livelli sono da 1 a 10')
        levelPc = ''
    }
    console.log(levelPc)

    const level = levelPc * 2

    // Celle sul lato e celle totali
    let latoGrid = level
    let totalGrid = latoGrid ** 2
    // console.log(latoGrid, totalGrid)

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

        // Creare un evento click dove stampare ciao
        cella.addEventListener('click', function() {
            if (!cella.classList.contains('bg-secondary')) {
                console.log(num)
    
                // Aggiungere background
                cella.classList.add('bg-secondary')
            }
        })
    }
})