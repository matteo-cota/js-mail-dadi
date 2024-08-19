//Esercizio 1//

document.getElementById('rollDice').addEventListener('click', function() {
    // Genera numeri casuali tra 1 e 6
    const playerRoll = Math.floor(Math.random() * 6) + 1;
    const computerRoll = Math.floor(Math.random() * 6) + 1;

    // Determina il vincitore
    let resultText = `Tu hai tirato un ${playerRoll}, il computer ha tirato un ${computerRoll}. `;
    if (playerRoll > computerRoll) {
        resultText += 'Hai vinto!';
    } else if (playerRoll < computerRoll) {
        resultText += 'Hai perso!';
    } else {
        resultText += 'È un pareggio!';
    }

     // Mostra il risultato in pagina
     document.getElementById('result').innerText = resultText;
});

