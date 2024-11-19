// CONSEGNA:
/*
Palidroma:
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

//RAGIONAMENTO

/* 1) definisco la variabile prompt che servirà ad inizializzare il tutto.
  2)La funzione dovrà contenere un modo di invertire l'ordine delle lettere di una parola salvandola come variabile a se stante.
  
  3)La stessa funzione dovrà confrontare se la variabile iniziale e quella invertita dovessero essere uguali
  
  4)La funzione infine restituirà un messaggio in base a che le variabili risultino uguali oppure no*/


// CODICE

let word = prompt(`Inserisci una parola`);



console.log(palindroma(word))





function palindroma(functionWord){
// 1)
  let reverseFunctionWord = ``;
  let message
// 2)
  for (i = functionWord.length -1; i>=0; i--){
    reverseFunctionWord += functionWord[i];
  }
// 3)
  if ( reverseFunctionWord === functionWord){
    message = `la parola ${functionWord} è palindroma`;
  } else {
    message = `la parola ${functionWord} non è palindroma`
  }
      
// 4)
  return message
}

// SPIEGAZIONE DELLA FUNZIONE
/* La funzione ha due compiti: inverte la parola che le viene data e verifica se invertendo la parola quest'ultima rimane uguale     

1) vengono definite all'interno dello scope della funzione due variabili: "reverseFunctionWord" e "message", la prima è una stringa vuota che si riempirà successivamente la seconda sarà il nostro return finale

2)il ciclo for in questo caso è decrescente e partendo dalla prima lettera fino all'ultima  (functionWord.length-1) di "functionWord" le concatenerà nella variabile "reverseFunctionWord" donandoci così una seconda variabile con la parola iniziale invertita.

3) questa condizione if confronta la parola invertita ("reverseFunctionWord") con quella iniziale ("functionWord"). In caso di palindromia, le parole saranno uguali e la variabile "message" acquisterà il valore specificato.

4) la funzione restituirà un messaggio in base all'outcome del precedente ciclo if quando invocata.

*/


