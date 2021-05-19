    document.body.innerHTML += `<p>VEZBANJE</p>`;

//Napisati program kojim se izraˇcunava hipotenuza i povrˇsina pravouglog trougla.
let a = 4;
let b = 3;
let sqrt;

let P = a*b/2;
console.log(`povrsina trougla je ${P}`);
let c = Math.sqrt((a * a) + (b * b));
console.log(`Hipotenuza je ${c}`);

//Napisati program kojim se uneti ugao izraˇzen u stepenima izraˇzava u radijanima.
let ugao = 45;
const PI = 3.14159265359;
let rad = ugao * PI/180;
console.log(rad);

//Za uˇcitani dvocifreni broj izdvojiti njegove cifre. 
//Za uˇcitani dvocifren broj izraˇcunati broj zapisan istim ciframa ali u obrnutom poretku.
let br=67;
console.log(`Ucitan broj je ${br}`);
let brDes=Math.floor(br/10);
console.log(brDes);
let brJed = br%10;
console.log(brJed);
let br1=brJed*10+brDes;
console.log(`Novi broj je ${br1}`);

//Učitati dva cela broja i ispitati da li je veći od njih paran. 
let s=-12;
let d=-98;
let max = s;
if (d>max){
    max = d;
    if(d%2==0){
        console.log(`Broj ${d} je maksimalan broj i paran je`);
    }
    else{
        console.log(`Broj ${d} je maksimalan broj ali je neparan`);
    }
}
else if(s%2==0){
    
        console.log(`Broj ${s} je maksimalan broj i paran je`);
    }
else {
  console.log(`Broj ${s} je maksimalan broj ali je neparan`);  
}  

//Prestupna godina

/* Ispitati da li je godina prestupna. (Godinu preuzeti sa vremena na Vašem računaru). Prestupna je ona godina koja je deljiva sa 4, ako nije deljiva sa 100, mada ipak jeste deljiva sa 400.*/


let dat = new Date();
let god = dat.getFullYear();
console.log(god);

if((god%400==0) || (god%4==0 && god%100!=0)){
    console.log(`Godina ${god} je prestupna`);
}
else {
    console.log(`Godina ${god} nije prestupna`);
}

//Na ekranu ispisati "Otkucajte nadimak pjesnika Jovana Jovanovica". Ako se otkuca Zmaj ili ZMAJ ispisati "ODLICNO", inače na druge odgrovore ispisati  "ISPRAVAN ODGOVOR JE ZMAJ".
let nadimakMalo ="zmaj";
let nadimakVeliko="ZMAJ";
document.body.innerHTML +=`<p>Unesite nadimak J.Jovanovica</p>`;
let unos = "Zmaj";

if (unos==nadimakMalo || unos==nadimakVeliko){
    document.body.innerHTML += `ODLICNO`;
}
else{
    document.body.innerHTML += `<p> ISPRAVAN ODGOVOR JE ZMAJ.</p>`;
}
    
//Odrediti z po formuli za (x-y)<2 -> z=x+y inace z=x-y

let x= 15;
let y = 8;

if ((x-y)<2){
 let   z=x+y;
    console.log(`z=${z}`);
}
else {
    z=x-y;
    console.log(`z=${z}`);
}



//	Učitati realan broj, ako je broj pozitivan ispisati njegov korijen, a ako je negativan, njegov kvadrat:


/*let*/ a=-8;
if (a>0){
    a = Math.sqrt(a);
    console.log(`a=${a}`);
}
else{
    a=Math.pow(a,2);
    console.log(`a=${a}`);
}


//Napisati program za odredjivanje apsolutne vrijednosti broja

let g= -35;

if(g>=0){
    g=g;
    console.log(`g=${g}`);
}
else{
    g=Math.abs(g);
    console.log(`g=${g}`);
}

//	Napisati program za izračunavanje vrijednosti z prema izrazu:
//za a>1 -> z=b/a, za -6<a<=1 -> z=a+3, za a<=-6  -> z=a+b

/*TREBA LET ZA PROMENLJIVE*/
a=-5;
b=-15;

if (a>1){
 let   z=b/a;
    console.log(z);
}
else if(a>(-6) && a<1){
    z=a+3;
    console.log(z);
}
else if(a<=(-6)){
    z=a+b;
    console.log(z);
}

/*Sa tastature upisati broj i izračunati njegovu  recipročnu vrijednost (y = 1 / x) i ispisati je. Ako je x=0 ispisati Dijeljenje sa nulom ispisati "Dijeljenje sa nulom".*/

let n=96;

if (n==0){
    console.log("Deljenje sa nulom nije moguce");
}
else{
    let m=1/n;
    console.log(`Reciprocna vrednost je:${m}`);

}


//Napisati program za ispis tri polovine korijena broja (3/2 korijena broja) ako je moguće inače ispisati 'Nedefinisan'.

/*let*/ b=-25;
if (b>0){
    b=3/2*Math.sqrt(b);
    console.log(b);
}
else {
    console.log("nedefinisano");
}



/*Učitati 2 cijela broja i izračunati im zbir, razliku, proizvod i količnik. Ispisati najveći po apsolutnoj vrijednosti od 4 dobijena rezultata bez ponavljanja  */

a=2;
b=89;

 zbir = a + b;
    if (zbir < 0)
        zbir = (-1) * zbir;
 
    proizvod = a * b;
    if (proizvod < 0)
        proizvod = (-1) * proizvod;
 
    razlika = a - b;
    if (razlika < 0)
        razlika = (-1) * razlika;
 
     max = zbir;
console.log(max);
 
    if (razlika > max)
        max = razlika;
    if (proizvod > max)
        max = proizvod;
 
 
    if (b != 0) {
        kolicnik = a / b;
        if (kolicnik < 0)
            kolicnik = (-1) * proizvod;
        if (kolicnik > max)
            max = kolicnik;
    }   else {
           console.log("Nije moguce deliti sa 0");
 
    }




//Učitati 3 različita realna broja. Ispisati ih u rastućem redoslijedu na ekran.

let o=23;
let p=-12;
let q=3;

/*let*/max = o;             // nadji maksimum
    if (p > max){
        max = p;}
    if (q > max){
        max = q;}
 
/*let*/min = o;             // nadji minimum
    if (p < min){
        min = p;}
    if (q < min){
        min = q;}
 
/*let*/mid = o;                     // nadji srednji broj
    if (o != max && o != min){
        mid = o;}
    if (p != max && p != min){
        mid = p;}
    if (q != max && q != min){
        mid = q;}
console.log(`${min},${mid},${max}`);


//Učitati 3 realna broja i ispitati da li postoji trougao čije su to stranice. Ako postoji da li je: pravougli, oštrougli ili tupougli?.

let prva=7;
let druga=12;
let treca=10;

if (prva + druga > treca && prva + treca> druga && druga + treca >prva){
        console.log("Postoji trougao sa datim stranicama ");
        if (prva*prva==druga*druga+treca*treca || druga*druga==prva*prva+treca*treca || treca*treca==prva*prva+druga*druga){
            console.log("i on je pravougli.");}
        else if (prva*prva < druga*druga+treca*treca && druga*druga < prva*prva+treca*treca && treca*treca < prva*prva+druga*druga){
            console.log("i on je ostrougli.");}
        else{
            console.log("i on je tupougli.");}
}
else{
        console.log("Ne postoji trougao sa datim stranicama.");
 
}

//Kreirati n paragrafa sa proizvoljnim tekstom i naizmenično ih obojiti u tri različite boje

n=1;

while (n<=21){
   if(n%3==1){
        document.body.innerHTML += `<p style="color:red">VEZBA</p>`;
    
   }
    
    if (n%3==2){
        document.body.innerHTML += `<p style="color:blue">VEZBA</p>`;
     
    }
    if (n%3==0){
        document.body.innerHTML += `<p style="color:green">VEZBA</p>`;
     
    }
     n++;   
       
}

//Potrebno je napisati program koji sabira vremenske intervale izražene u satima, minutima i sekundama, npr. 2h 12min 45sec i 7h 40min 40sec.

  sati1 = 2, min1 = 12, sek1 = 45;
  sati2 = 7, min2 = 40, sek2 = 40;
  
  sek = (sek1 + sek2) % 60;
  prenos = Math.floor((sek1 + sek2) / 60);
  
  min = (min1 + min2 + prenos) % 60;
  prenos = Math.floor((min1 + min2 + prenos) / 60);
  
  sati = sati1 + sati2 + prenos;
  console.log(`${sati} sati ${min} minuta ${sek} sekundi`);

















