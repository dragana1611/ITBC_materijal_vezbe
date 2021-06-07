const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn=>{
    btn.addEventListener('click', ()=>{
        alert('clicked button');
       
    });
}, false);

const button = document.querySelector('#toggle');
const section = document.querySelector('section');

button.addEventListener('click', ()=>{
    if(section.classList.contains('visible')){
        section.classList.remove('visible');
    }
    else{
        section.classList.add('visible');
    }
}, false);

// Napraviti dugme  na koje se klikom u konzoli ispisuje vrednost brojača br.Brojač na početku ima vrednost 1, a svaki put kada se klikne na dugme povećati vrednost brojača za 1.
// Napraviti paragraf i vrednost prethodne funkcije ispisivati u paragrafu umesto u konzoli.
let btnBrojac1 = document.getElementById('brojac1');
let pBrojac1 = document.getElementById('pbrojac1');
let brojac=0;
btnBrojac1.addEventListener('click', ()=>{
    brojac++;
    pBrojac1.innerHTML = `${brojac}`;
}, false);

//3.Napraviti dugme + i dugme -. Kada se klikne na dugme +, na ekranu prikazati vrednost brojača povećanu za 1.Kada se klikne na dugme -, na ekranu prikazati vrednost brojača smanjenu za 1.
// Dopuniti prethodni zadatak uslovima, tako da se na ekranu prikazuju samo pozitivni brojevi.Ukoliko je vrednost manja od nule, na ekranu nastaviti prikazivanje broja 0.

let btnPlus = document.getElementById('plus');
let btnMinus = document.getElementById('minus');
let span = document.getElementById('res');
brojac=0;

btnMinus.addEventListener('mousedown',()=>{
    span.style.color = 'black'
    brojac--;
    if(brojac<0){
     brojac = 0;
     span.style.color = 'blue'   ;     
    }
    span.innerHTML = brojac;
}, false);
btnPlus.addEventListener('click', () => {
    brojac++;
    span.innerHTML = `${brojac}`;
}, false);


/* Napraviti input polje i dugme. U input polje treba da se unese ime neke osobe, a na ekranu u paragrafu da se ispiše Zdravo i ime osobe preuzeto iz input polja.

Dopuniti 5. zadatak dodavanjem eventa i proizvoljnog alert - a, kada se klikne dva puta na dugme. */

let btnIme = document.getElementById('ispisiIme');
let inpIme = document.getElementById('ime');
let spanIspisiIme = document.getElementById('ispisi');

btnIme.addEventListener('click', ()=>{
    spanIspisiIme.innerHTML = inpIme.value;
    
}, false);

btnIme.addEventListener('dblclick',()=>{
    alert(`Hello ${inpIme.value}`);
    inpIme.value = ""
}, false);
;



//////////////////////////////////////
/**Napraviti dva dugmeta i input kao na slici.Klikom na dugme „Start“, počinje odbrojavanje: Ispisuju se redom brojevi 1, 2, 3, ... svake sekunde.Klikom na dugme „Stop“ pauzira se odbrojavanje.
 */
let btnStart = document.getElementById('start');
let btnStop = document.getElementById('pause');
let inpBrojac = document.getElementById('brojac');
let clock = null;
inpBrojac.value = 0;

btnStart.addEventListener('click', ()=>{
    if(clock===null){
        clock = setInterval( ()=>{
            inpBrojac.value++;
        }, 1000);
    }
}, false);

btnStop.addEventListener('click', ()=>{
    clearInterval(clock);
    clock=null;
}, false);

