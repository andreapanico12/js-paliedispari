// CONSEGNA:
/* 
Pari e Dispari:
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.   */

// RAGIONAMENTO

/*
1) Definisco le variabili necessarie, in questo caso dovranno essere diverse: il numero che inserisce il giocatore e la sua giocata di pari o dispari, il numero del computer che sarà dato da una funzione, la somma dei due numeri ed infine il messaggio che sarà la dichiarazione di vittoria.
2) La prima funzione sarà la generazione del numero mentre la seconda servirà per verificare se la variabile somma è pari o dispari (if)
3) Alla fine ci sarà una condzione (if) che verifica se l'outcome della seconda funzione coincide con la giocata iniziale pari o dispari 
4) Dovrà esserci quindi un messaggio finale che dichiara la vittoria in base all'ultimo if*/

// Variabili
// 1)
let playerNum = parseInt(prompt(`Inserisci un numero da 1 a 5`));
let playerBet = prompt(`pari o dispari?`)
// 2)
let pcNum = randomGenerator()
let sumNum = playerNum + pcNum;
let message

console.log ("Il giocatore punta: " + playerNum, playerBet)

console.log("Il Computer gioca: " + pcNum)

// Verifica del pari o dispari
// 3)
console.log("La somma dei numeri è: " + sumNum + " quindi risulta " + isSumPari(sumNum))

// 4)
if (isSumPari(sumNum) === playerBet){
  message = `Il giocatore ha vinto`
  
} else {
  message = `Il Computer ha vinto`
}
console.log(message)


// FUNZIONI
function randomGenerator(){
 let numeroRandom = Math.floor(Math.random() *5)+1;
 return numeroRandom;
}

function isSumPari(Somma){
  let sumOutcome
  if (Somma % 2){
    sumOutcome = `dispari`;
  } else {
    sumOutcome = `pari`
  }

  return sumOutcome

}

// SPIEGAZIONE
/*
1) Definisco inanzitutto tutte le variabili necessarie: il numero del giocatore dato da un prompt e la giocata dello stesso sempre inserita tramite prompt, il numero del pc (pcNum), la somma dei due numeri (player.num + pcNum) e una variabile "message" che mi definirà l'outcome finale
2) Il numero del pc viene definito da una funzione senza parametri specificati(parentesi vuote) il suo return non è altro che una variabile definita solo nel suo scope
3) La verifica del pari o dispari quindi viene poi eseguita da una seconda funzione con un solo parametro (somma) che prendendo la variabile "sunNum" verifica se quest'ultima è pari o dispari attraverso un ciclo if, all'interno della funzione "isSumPari" viene poi generata una variabile che definisce l'outcome del nostro confronto e che sarà dunque il nostro return
4) questo return andrà poi inserito all'interno di una condizione if che lo confronterà con la variabile playerBet, a questo punto verrà stampato un messaggio finale che definirà se il valore di playerBet e la funzione "isSumPari" coincide oppure no, definendo così il vincitore     */
