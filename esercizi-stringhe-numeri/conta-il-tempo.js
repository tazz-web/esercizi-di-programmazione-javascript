/*
  Conta il tempo
  Scrivi un programma che dato un numero di secondi, calcoli la quantità di ore, minuti e secondi corrispondenti e
  poi stampi il risultato. L'output avrà solo numeri interi.

  Esempio:
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.

  Consigli:
  In un'ora ci sono 60 minuti, in un minuto 60 secondi. Quindi quanti secondi ci sono in un'ora? ;)

  http://www.imparareaprogrammare.it
*/

var input = parseInt(prompt("inserisci un numero di secondi"));

var secondi = input % 60;
var minuti = (input-secondi)/60;
var ore = parseInt(minuti/60);
var minuti = minuti % 60;

alert(ore + ' ore '  + minuti + ' minuti ' + secondi + ' secondi')
