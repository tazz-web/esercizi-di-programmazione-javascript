/*
  Somma e media
  Scrivi un programma che dati 5 numeri restituisca in output la somma e la media.

  Esempio:
    Input: a = 1, b = 2, c = 3, d = 4, e = 5
    Output: somma = 15, media = 3
  
  http://www.imparareaprogrammare.it
*/
var a = parseInt(prompt("inserisci il primo numero!"));                   
var b = parseInt(prompt('inserisci il secondo numero!'));
var c = parseInt(prompt('inserisci il terzo numero!'));
var d = parseInt(prompt('inserisci il quarto numero!'));
var e = parseInt(prompt('inserisci il quinto numero!'));

var somma = a+b+c+d+e;
var media = somma/5;

document.write('la somma è \= a ' + somma + ', la media è \= a ' + media);
