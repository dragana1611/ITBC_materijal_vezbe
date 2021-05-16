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


let banana= 356;
let isporuceneJab = 400;
let upotrebljiveJab = Math.round(0.8*isporuceneJab);

console.log(`upotrebljive jabuke:${upotrebljiveJab}`);

    let jabanJabuka= Math.floor(upotrebljiveJab/2);
    console.log(`jabuke za jaban: ${jabanJabuka}`);
    let jabanBanana = Math.floor(banana/3);
    console.log(`banane za jaban: ${jabanBanana}`);
        if(jabanJabuka>jabanBanana){
            console.log(`moguce je napraviti ${jabanJabuka} porcija jabana`);
        }
        else{
            console.log(`moguce je napraviti ${jabanBanana} porcija jabana`);
        }
    
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
kupac dobio isti broj ruža, a da joj pri tome ne ostane nijedna ruža u radnji.
➢ Primer 1:
○ Broj ruža u cvećari 101
○ Broj redovnih kupaca 25
○ Broj ruža koje treba da dokupi je 24 (kako bi svaki kupac dobio po 5 ruža).
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

/*Test3- zadatak 5. Odrediti razliku zbira parnih brojeva od n do m koji su deljivi sa 3 i broja brojeva od n do m kojima je poslednja cifra 3 (uključujući i brojeve n i m).
➢ Rezultat računanja ispisati u konzoli. */

n= 5;
m=30;
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

//Jedan butik ima radno vreme od 9h do 20h radnim danima, a vikendom od 10h do 18h. Preuzeti dan i vreme sa računara i ispitati da li je butik trenutno otvoren.

let pocRD=9;
let krajRD=20;
let pocVik=10;
let krajVik=18;
d=new Date();
dan=d.getDay();
let trVr=d.getHours();
if(dan<6 && dan!=0){
    if(pocRD>trVr && krajRD<=trVr){
        console.log(`Butik trenutno nije otvoren`);
    }
    else{
        console.log(`Butik je trenutno otvoren`);
    }
}
else{
    if (pocVik > trVr && krajVik <= trVr) {
        console.log(`Butik trenutno nije otvoren`);
    }
    else {
        console.log(`Butik je trenutno otvoren`);
    }
}

//Naspisati na ekranu „ekstremna temperatura“ ukoliko je temperatura manja od -15 stepeni Celzijusovih  i veća od 40 stepeni Celzijusovih.
let temp=50;
if(temp<-15 || temp>40){
    document.body.innerHTML += `<p>EXTREMNA TEMPERATURA</p>`;
}

//Naći koji je najveći od tri uneta broja $a, $b i $c.
let a=45;
let b=110;
let c=300;
if(a>b && a>c){
    let max=a;
    console.log(`max broj je ${max}`);
}
else if(b>a && b>c){
    max=b;
    console.log(`max broj je ${max}`);
}
else{
    max=c;
    console.log(`max broj0 je ${max}`);
}


//ŠAH tabla - Kreirati 64 span elemenata i rasporediti ih kao na slici desno, tako da elementi izgledaju kao polja šahovske table. 
//U realizaciji ovog zadatka koristiti for petlju.
k=0;
for(let i=1; i<=8; i++){
    for(let j=1; j<=8; j++){
        k++;
        if(i%2!=0){
            if(k%2==0){
                document.body.innerHTML += `<span class="polje2">${k}</span>`;
            }
            else{
                document.body.innerHTML += `<span class="polje1">${k}</span>`;
            }
        }
        else{
            if(k%2==0){
                document.body.innerHTML += `<span class="polje1">${k}</span>`;
            }
            else{
                document.body.innerHTML += `<span class="polje2">${k}</span>`;
            }
        }
                if (k % 8 == 0)
                document.body.innerHTML += `<br>`;
    }
}

//Kreirati 64 span elemenata i rasporediti ih kao na slici desno, koristeći for petlju.
for(let i=1; i<=64;i++){
    document.body.innerHTML += `<span>${i}</span>`
    if(i%8==0){
        document.body.innerHTML += `<br>`
    }
}

//LISTA - Koristeći for petlju kreirati neuređenu listu sa ugnježdenim elementima, kao što je prikazano na slici sa desne strane.

let lista=`<ul>`;
for(let i=1; i<=10; i++){
    lista += `<li style="margin-left:20px;"> Element ${ i }`;
    if(i%3==2){
        i++
        lista += `
        <ul>
        <li style="color:darkviolet; margin-left:40px;">ELement ${i}</li>
        </ul>
        </li>`;
    }
    
    lista += `</li>`;
}
lista += `</ul>`;
document.body.innerHTML += lista;


/*TABELA - Napraviti tabelu sa 6 redova.
Svaki red tabele treba da ima po dve ćelije(dve kolone).
Svakom parnom redu dodati klasu „obojen“.
Korišćenjem CSS - a, klasi obojen postaviti proizvoljnu boju pozadine.*/

let tabela = `<table>`;
for(let i =1; i<=6; i++){
    if(i%2 !=0){
        tabela += `<tr class="boja1">
        <td>TEXT</td>
        <td>TEXT</td>
        </tr>`;
    }
    if(i%2==0){
        tabela += `<tr class="boja2">
        <td>TEXT</td>
        <td>TEXT</td>
        </tr>`;
    }
}
tabela += `</tabela>`;
document.body.innerHTML += tabela;


//Prebrojati koliko brojeva od n do m je pozitivno, a koliko njih je negativno. *
 n=-23;
 m=10;
 brojacPoz=0;
 brojacNeg=0;
 for(i=n; i<=m; i++){
    if(i>0){
        brojacPoz++;
    }
    
    else{
        if(i<0){
        brojacNeg++;
        }
    }
}
console.log(`pozitivnih brojeva ima ${brojacPoz}`);
console.log(`negativnih brojeva ima ${brojacNeg}`);
//Prebrojati koliko je brojeva od 5 do 50 koji su deljivi sa 3 ili sa 5. *
brojacDel = 0;

for (let i = 5; i <= 50; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
        brojacDel++;
    }
}
console.log(`ima ${brojacDel} brojeva koji su deljivi sa 3`);


//Izračunati sumu prirodnih brojeva u intervalu od 1 do n čija je cifra jedinica 8.
n=47;
suma=0;
for(let i=1; i<=n; i++){
    let cifra=i%10;
    if(cifra==8){
    suma+=i;
    }
}
console.log(`zbir brojeva sa cif jed 8 je ${suma}`);

//	Napisati program da nađe proizvod prirodnih brojeva od a do b djeljivih sa c i koliko ih ima.
a=5;
b=25;
c=5;
proizvod=1;
brojacC=0;

for(let i =a; i<=b; i++ ){
    if(i%c==0){
        brojacC++;
        proizvod *= i;
    }
}
console.log(`proizvod je ${proizvod} a brojeva ima ${brojacC};`)

//Izračunati aritmetičku sredinu prirodnih brojeva od k do n koji su djeljivi sa 3
k=3;
n=30;
suma=0;
brojac=0;
for(let i=k; i<=n; i++){
    if(i%3==0){
        brojac++;
        suma += i;
    }
}
let arSr = suma/brojac;
console.log(`aritmeticka sredina je ${arSr}`);


//Prebrojati i izračunati sumu brojeva od n do m kojima je poslednja cifra 4 i parni su.

n=2;
m=30;
suma=0;
brojac=0;
for(let i=n; i<=m; i++){
    if(i%10==4){
        brojac++;
        suma +=i;
    }
}
console.log(`suma je ${suma} a ima ${brojac} brojeva`);

//Odrediti proizvod brojeva od n do m koji su deljivi brojem a *
n = 2;
m = 20;
a = 4;
proizvod=1;
for (let i = n; i <= m; i++) {
    if (i % a == 0) {
        proizvod *= i;
    }
}
console.log(`proizvod je ${proizvod}`);


//KINA/INDIJA - “Процењује се да је Кина на дан 1.7.2019. имала 1.420.062.022 становника, а Индија 1.368.737.513. Број становника у Кини се сваке године повећа за 0,35%, а у Индији за 1,08%. Након колико година ће Индија престићи Кину по броју становника, под претпоставком да се годишњи раст броја становника ни у једној од ове две државе неће мењати?”
let kina = 1420062022;
let indija = 1368737513;
let brGod=0;
while(kina>indija){
    kina = (1+0.0035)*kina;
    indija= (1+0.0108)*indija;
    brGod++;
}
console.log(brGod);