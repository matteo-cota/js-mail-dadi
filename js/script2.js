//Esercizio 2 //

// Lista di email autorizzate
const authorizedEmails = ['matteocota@outlook.it', 'mariorossi@outlook.it', 'antonioconte@outlook.it'];
document.getElementById('loginButton').addEventListener('click', function() {
    const userEmail = document.getElementById('emailInput').value;
    let isAuthorized = false;

     // Controllo manuale per verificare se l'email è autorizzata
     for (let i = 0; i < authorizedEmails.length; i++) {
        if (userEmail === authorizedEmails[i]) {
            isAuthorized = true;
            break;
        }
    }

    // Stampa del risultato
    const resultElement = document.getElementById('loginResult');
    if (isAuthorized) {
        resultElement.innerText = 'Accesso consentito. Benvenuto!';
        resultElement.style.color = 'green';

    } else {
        resultElement.innerText = 'Accesso negato. Email non riconosciuta.';
        resultElement.style.color = 'red';
    }
});