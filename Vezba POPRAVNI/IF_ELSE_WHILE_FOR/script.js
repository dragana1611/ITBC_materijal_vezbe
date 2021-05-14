//13.	Preuzeti koji je dan u nedelji sa računara i ispitati da li je to radni dan ili je u pitanju vikend. 
let d=new Date();
let dan=d.getDay();
console.log(dan);
if(dan!=0 || dan!=6){
    console.log(`Radni je dan`);
}
else{
    console.log(`Vikend je`);
}


//Pilot želi da napravi program gde unosi vreme polatanja (sat poletanja između 0 i 23 i minut poletanja aviona između 0 i 59) i vreme sletanja aviona (sat sletanja između 0 i 23 i minut sletanja aviona između 0 i 59). Napisati funkciju kojoj se prosleđuje vreme poletanja i vreme sletanja aviona, a ona pilotu u konzoli ispisuje koliko časova i minuta je trajao njegov let. Pretpostaviti da su poletanje i sletanje aviona u istom danu i da je ispravno uneo vrednosti poletanja i sletanja.

    let satPol = 14;
    let minPol = 43;
    let satSlet = 16;
    let minSlet = 0;
    
    let polSM
    let sletSM
    let letSat
    let letMin

if(((satPol>=0 && satPol<=23) && (satSlet>=0 && satSlet<=23)) && ((minSlet>=0 && minSlet<=59) && (minPol>=0 && minPol<=59))){
     polSM = satPol * 60 + minPol;
     sletSM = satSlet * 60 + minSlet;
     trLet = sletSM - polSM;
     letSat=Math.floor(trLet/60);
    letMin=trLet%60;
    console.log(`Let je trajao ${letSat} sati i ${letMin} minuta`);
  }
else{
    console.log(`Pogresan unos sati ili minuta`);
}

//Specijalitet jedne poslastičare je slatkiš po imenu jaban koje se pravi od jabuka i banana. Za jednu porciju ovog slatkiša potrebme su 2 jabuke i 3 banane. Poslastičara jabuke i banane dobija od jednog lokalnog dobavljača. U svakoj isporuci ima 20% oštećenih jabuka koje se ne mogu iskoristiti za pripremu jaban slatkiša. Napisati funkciju koja za prosleđeni broj isporučenih jabuka i prosleđeni broj isporučenih banana, određuje i vraća koliko porcija jaban slatkiša je moguće da poslastičar napravi. Broj oštećenih jabuka zaokružiti na najbliži ceo broj.

/*
let banana= 356;
let isporuceneJab = 200;
let upotrebljiveJab = Math.round(0.8*isporuceneJab);
let porcJaban=0;
console.log(upotrebljiveJab);
while(upotrebljiveJab!=0 || banana!=0){
    let jabanJabuka= Math.floor(upotrebljiveJab/2);
    console.log(jabanJabuka);
    let jabanBanana = Math.floor(banana/3);
    console.log(jabanBanana);
        
        porcJaban++
   }
console.log(porcJaban);*/



//Dužina fudbalskog terena je 95 metara, a širina 47 metara. Ana trči po pravougaonoj stazi koja je sa svake strane terena spolja udaljena po 5 metara. Koliko ona pretrči, ako se zna da je optrčala teren 3 puta.

duzina_terena = 95
sirina_terena = 47
rastojanje = 5
duzina_staze = duzina_terena + 2 * rastojanje
sirina_staze = sirina_terena + 2 * rastojanje
obim_staze = 2 * (duzina_staze + sirina_staze)

pretrcala = 3 * obim_staze

/*Test3- zadatak 1. Cvećara radi svakim danom od 9:00h do 17:00h. Vaš zadatak je da za
vreme koje ste preuzeli sa računara izračunate koliko sati i minuta je
ostalo cvećarki do kraja radnog vremena. Dobijeni rezultat ispisati u
konzoli.
Ukoliko je vreme koje ste preuzeli pre 9:00h, ispisati tekst
„Radno vreme još uvek nije počelo“.
Ukoliko je vreme koje ste preuzeli nakon 17:00h, ispisati tekst
„Radno vreme je već završeno“.*/
    
let trenSati = d.getHours();
let trenMin = d.getMinutes();
let trenSM = trenSati*60 + trenMin;
let pocCvSati = 9;
let pocCvMin = 0;
let krajCvSati=17;
let krajCvMin =0;
let poCvSM = pocCvSati*60 + pocCvMin;
let krajCvSM = krajCvSati*60 + krajCvMin;

if(trenSM < poCvSM){
    console.log(`Radno vreme još uvek nije pocelo`);
}
else if (trenSM>=krajCvSM){
    console.log(`Radno vreme je već zavrseno`);
}
else {
    let ostalo = krajCvSM - trenSM;
    console.log(ostalo);
}

/*// Test3- zadatak 2. Prilikom transporta buketa cveća u drugi grad, potrebno je platiti
poštarinu. Poštarina košta 5 dinara po gramu pošiljke. Pošto cveće
sadrži dosta vode, koja ispari prilikom transporta, pošta daje popust na
cenu izračunate poštarine po sledećoj tarifi:
➢ Za pošiljku težine između 1kg i 2kg, pošta daje popust od 5%, dok na
pošiljku preko 2kg pošta daje popust od 10%.
➢ Za unetu težinu pošiljke u gramima, u konzoli u dva reda ispisati kolika
je cena poštarine bez popusta i sa popustom.
Ispis treba da bude u formatu:
Cena bez popusta je _____ dinara.
Cena sa popustom je _____ dinara.*/

let postarina = 5;
let popust1 = 5/100;
let popust2 = 10/100;
let tezinaPos = 5;

let posBezPop = tezinaPos * postarina;
console.log(`Postarina bez popusta je: ${posBezPop}`);

if(tezinaPos<1000 || tezinaPos==0){
    console.log(`Postarina bez popusta je: ${posBezPop}`);
}
else if (tezinaPos>=1000 && tezinaPos<=2000){
    let postarinaPopust1 = (1-popust1)*posBezPop;
    console.log(`Postarina sa popustom ${popust1} je: ${postarinaPopust1}`);
}
else if (tezinaPos>2000){
    let postarinaPopust2 = (1-popust2)*posBezPop;
    console.log(`Postarina sa popustom ${popust2} je: ${postarinaPopust2}`);
}

/*// Test3- zadatak 3. Cvećarka želi da pošalje ruže svojim redovnim kupcima. Uneti broj ruža
koje cvećarka trenutno ima u radnji i broj redovnih kupaca. U konzoli
ispisati koliko NAJMANJE ruža cvećarka treba da dokupi da bi svaki
kupac dobio isti broj ruža, a da joj pri tome ne ostane nijedna ruža u
radnji.
➢ Primer 1:
○ Broj ruža u cvećari 101
○ Broj redovnih kupaca 25
○ Broj ruža koje treba da dokupi je 24 (kako bi svaki kupac dobio po
5 ruža).
➢ Primer 2:
○ Broj ruža u cvećari 100
○ Broj redovnih kupaca 25
○ Broj ruža koje treba da dokupi je 0 (kako bi svaki kupac dobio po
4 ruže) */

let brRuza = 101;
let brRedKup = 12;

let brRuzaPoKup = Math.floor(brRuza / brRedKup);
console.log(brRuzaPoKup);
let ostatakRuza = brRuza%brRedKup;
console.log(ostatakRuza);
if(ostatakRuza==0){
    console.log(`Cvecarka ne treba da dokupi ni jednu ruzu`);
}
else{
    let dokup = brRedKup-ostatakRuza;
    console.log(`Cvecarka treba da dokupi ${dokup} ruzu/ruza`)
}

/*Test3- zadatak 4.Odrediti sumu i broj brojeva, u intervalu od n do m (uključujući brojeve n i m), koji su deljivi sa 7 i neparni su. Vrednosti promenljivih n i m odredite sami.
U konzoli ispisati:
● U prvom redu ispisati sumu
● U drugom redu ispisati broj brojeva
● U trećem redu ispisati proizvod sume i broja brojeva */

let n=-10;
let m=40;
let suma=0;
let brBroj = 0;

for(let i=n; i<=m; i++){
    if(i%7==0 && i%2 != 0){
        suma +=i;
        brBroj++;
    }
}
console.log(suma);
console.log(brBroj);
console.log(suma * brBroj);

/*Test3- zadatak 5. Odrediti razliku zbira parnih brojeva od n do m koji su deljivi sa 3 i broja
brojeva od n do m kojima je poslednja cifra 3 (uključujući i brojeve n i
m).
➢ Rezultat računanja ispisati u konzoli. */

n= 5;
m=50;
suma=0;
brBroj=0;

for(let i=n; i<=m; i++){
    
    if(i%2==0 && i%3==0){
        suma +=i;
    }
    cifra = i%10;
    if(cifra==3){
        brBroj++;
    }
}
console.log(`razlika  ${suma} - ${brBroj} je ${suma - brBroj}`);

/* IF - Zadatak 3: Broj u intervalu
Napisati program koji učitava ceo broj n, a zatim ispisuje poruku da li je taj broj između 1 i 100, ali ne i između 10 i 20.
Primer. Ako je n=50, program ispisuje „Uneseni broj je u zadatom skupu.“. Ako je n=-50 ili n=15, ispisuje se „Uneseni broj nije u zadatom skupu.“.
 */

n=-50;
if((n>1 && n<100) && !(n>10 && n<20)){
    console.log(`Uneseni broj je u zadatom skupu`);
}
else{
    console.log(`Uneseni broj nije u zadatom skupu`);
}


/*IF - Zadatak 5: Stranica kvadrata
Napisati program koji za unetu vrednost površine kvadrata proverava da li je ona pozitivan broj, i ako jeste izračunava i ispisuje kolika je stranica tog kvadrata, a u suprotnom ispisuje odgovarajuću poruku.*/

let P = -28;
if(P>0){
    let a=Math.sqrt(P);
    console.log(`Stranica kvadrata je ${a}`);
}
else{
    console.log(`Povrsina ne moze biti negativan broj`);
}


/*Zadatak 8: Kupovina
Napisati program koji učitava cenu proizvoda n, a zatim ispisuje poruku da li korisnik kupuje taj proizvod ili ne. Korisnik kupuje proizvod ukolikoje cena tog proizvoda između definisane donje i gornje granice.*/ 

let cena= 1569;
let dGr =200;
let gGr = 1000;
if(cena>=dGr && cena <=gGr){
    console.log(`korisnik kupuje proizvod`);
}
else{
    console.log(`korisnik ne kupuje proizvod`);
}

/*IF - Zadatak 5: Računanjeproseka
Napisati program koji računa i ispisuje prosek na kraju školske godine.Korisnik unosi ocene iz predmeta Matematika, Srpski jezik, Fizičko vaspitanje i Informatika, a potom program ispisuje prosek učenika (ukoliko učenik ima makar jednu jedinicu, prosek je automatski 1.00).
. 
*/
let mat=2;
let srps=3;
let fiz = 5;
let inf = 4;
let prosek;


if(mat==0 || srps==0 || fiz==0 || inf==0){
    prosek=1;
    console.log(`prosek je ${prosek}`);
}
else{
    prosek = (mat + srps + fiz +  inf)/4;
    console.log(`prosek je ${prosek}`);
}


//FOR - Napisati program za ispis sume reciprocnih vrijednosti prvih n prirodnih brojeva (harmonijski niz: 1 + 1/2 + 1/3 + ... + 1/n)
n=30;
suma=0
for(let i =1; i<=n; i++){
    let recVr=1/i;
    suma+=recVr;
}
console.log(suma);

//FOR - Izračunati i ispisati sumu reciprocnih vrijednosti prirodnih brojeva od k do n.

k=2;
n=7;
suma=0;
for(let i=k; i<=n; i++){
    let recVr= 1/i;
    suma+=recVr;
}
console.log(suma);

//WHILE - Zadatak 3: Najstarija osoba 
//Napisati program koji učitava godine rođenja svih korisnika gerontološkog centra. Korisnik unosi ove godine jednu po jednu. Na kraju korisnik unosi nulu, nakon koje program ispisuje koliko godina ima najstarija osoba u tom gerontološkom centru. Tekuću godinu definisati kao celobrojnu konstantu. 
//Primer. Ako je trenutna godina 2018 i unose se godine: 1956, 1948, 1950, 1956, 1949, učitavanje se prekida nakon unosa broja 0, ispisuje se: „Najstarija osoba ima 70 godina.” (jer je 70 = 2018 - 1948) 



/* Napisati program koji učitava količinu para koju kupac ima i cene čokolada koje on želi da kupi. Kada ukupna cena čokolada bude veća od količine para koje kupac ima, prekinuti učitavanje cena i ispisati koliko čokolada kupac može da kupi. 
Primer. Ako kupac ima 1000 dinara i unose se cene: 130, 280, 90, 280, 100, 150, učitavanje se prekida nakon unosa broja 150 (jer je 130 + 280 + 90 + 280 + 100 + 150 > 1000) i ispisuje se: „Kupac moze da kupi 5 cokolada.”
 */ 
let novac=500;
let cenaCok=120;
suma=0;
let brojac=0;

do{
    suma+=cenaCok;
}





