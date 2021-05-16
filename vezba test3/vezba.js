//Kreirati n proizvoljnih slika i staviti im naizmenično dva različita okvira
let slika="instagram-variation.png";
let i=1;
let n=12
while(i<=n){
    if(i%2==0){
        document.body.innerHTML += `<img src="${slika}" style="border:1px dashed red"><br>`;
    }
    else{
        document.body.innerHTML += `<img src="${slika}" style="border:1px dotted green"><br>`;
    }
    i++;
}

// Odrediti sumu kvadrata parnih brojeva i sumu kubova neparnih brojeva

  n = -13;
let m = 10;
let sumaPar=0;
let sumaNep=0;

/*while(n<=m){
    if(n%2==0){
        sumaPar += n**2;
    }
    else{
        sumaNep += n**3;
    }
    n++;
}
console.log(`suma kvadrata parnih brojeva je ${sumaPar}, a suma kubova neparnih brojeva je ${sumaNep}`);*/

for(i=n; i<=m; i++){
    if(i%2==0){
        
        sumaPar+=i**2;
    }
    else{
        sumaNep+=i**3;
    }
}
console.log(`suma kvadrata parnih brojeva je ${sumaPar}, a suma kubova neparnih brojeva je ${sumaNep}`);

//Odrediti sa koliko brojeva je deljiv uneti broj k

let k=27;
i=1;
let brojac=0;
while(i<=k){
    if(k%i==0){
        brojac++;
        console.log(i);
    }
    i++;
}
console.log(`broj ${k} je deljiv sa ${brojac} broja/brojeva`);

//Odrediti sumu kvadrata brojeva od n do m *

n=-5;
m=10;
let sumKv=0;
for(i=n; i<=m; i++){
    sumKv += i**2;
}
console.log(`suma kvdrata brojeva je ${sumKv}`);


//Preuzeti proizvoljne tri slike sa istom ekstenzijom i imenovati ih 1, 2 i 3. For petljom u HTML-u ispisati svaku od sličica uz pomoć brojača (iteratora).

i=1;
n=12;
for(i=1;i<=n;i++){
   if(i%3==1){
       document.body.innerHTML += `<img src="slike za vezbu/1.JPG">`;
   }
    else if(i%3==2){
        document.body.innerHTML += `<img src="slike za vezbu/2.JPG">`;
    }
    else{
        document.body.innerHTML += `<img src="slike za vezbu/3.JPG">`;
    }
}
document.body.innerHTML += `<br><hr>`;

//drugi nacin
for (i=0; i<n; i++){
    let k=i%3;
    document.body.innerHTML += `<img src="slike za vezbu/${k+1}.jpg">`;
}
document.body.innerHTML += `<br><hr>`;

//Odrediti proizvod svih brojeva deljivih sa 11 u intervalu od 20 do 100. *
i=20;
n=100;
k=11;
let proizvod = 1;
for(i=20; i<=100; i++){
    if(i%k==0){
        proizvod *= i;
    }
}
console.log(proizvod);

//Prebrojati koliko ima brojeva deljivih sa 13 u intervalu od 5 do 150.

i=5;
n=150;
let j=13;
brojac=0;
for(i=5; i<=n; i++){
    if(i%j==0){
        brojac++;
        /*console.log(i);*/
    }
}
console.log(brojac);

//Ispisati aritmetičku sredinu brojeva od n do m.

n=10;
m=20;
brojac=0;
suma=0;
let arSr=1;
for(i=n; i<=m; i++){
    suma +=i;
    brojac++;
    arSr =suma/ brojac;
}
console.log(`aritmeticka sredina brojeva od ${n} do ${m} je ${arSr}`);

//Prebrojati koliko brojeva od n do m je pozitivno, a koliko njih je negativno. *


n=-10;
m=20;
brojacPoz=0;
brojacNeg=0;
for(i=n; i<=m; i++){
   if(i>0){
    brojacPoz++;
   }
    else if(i<0){
    brojacNeg++;
    }
}
console.log(`pozitivnih brojeva ima ${brojacPoz} a negativnih ${brojacNeg}`);

//Prebrojati koliko je brojeva od 5 do 50 koji su deljivi sa 3 ili sa 5. *

n=5;
m=50;
brojacDel=0;

for(i=n; i<=m; i++){
    if(i%3==0 || i%5==0){
       brojacDel++;
        /*console.log(i);*/
   }
}
console.log(brojacDel);

//Prebrojati i izračunati sumu brojeva od n do m kojima je poslednja cifra 4 i parni su.
n=5;
m=50;
suma=0;
let cifra;
let brojacCif=0;
for(i=n; i<=m; i++){
    cifra=i%10;
    if(cifra==4){
        /*console.log(i);*/
        brojacCif++;
        suma += i; 
    }
}
console.log(brojacCif, suma);

/* Napraviti tabelu sa 6 redova.Svaki red tabele treba da ima po dve ćelije (dve kolone).Svakom parnom redu dodati klasu „obojen“.Korišćenjem CSS-a, klasi obojen postaviti proizvoljnu boju pozadine. 
 */

//I nacin

i=1;
let red=6;
let tabela = "<table>";

for (i=1; i<=red;i++){
    if(i%2==0){
        tabela += `<tr class="boja1">`;
    }
    else{
        tabela += `<tr class="boja2">`;
    }
    tabela += 
       `
        <td>Text</td>
        <td>Text</td>
    </tr>
`;
}
tabela += `</table>`;
document.body.innerHTML += tabela;

let h1 = document.getElementById("naslov");
h1.innerHTML +=/* = "*******" + h1.innerHTML - zvezdice pre teksta naslova */ "*****";

//II nacin

let htmlTabela = document.getElementById("tab");
for(i=1; i<=red; i++){
    if(i%2==0){
    htmlTabela.innerHTML += 
    `
    <tr class="boja1">
    <td>Tekst</td>
    <td>Tekst</td>
    </tr>
    `;
    }
    else{
        htmlTabela.innerHTML += 
        `
    <tr class="boja2">
    <td>Tekst</td>
    <td>Tekst</td>
    </tr>
    `;
    }
}

//Koristeći for petlju kreirati neuređenu listu sa ugnježdenim elementima, kao što je prikazano na slici sa desne strane.

i=1;
let uolist = `<ul>`;
let lilist = 10;
for(i=1; i<=lilist; i++){
   
    if(i%3 ==0){
       uolist +=
        `
        <ul>
            <li class="podli">ul ul li element ${i}</li>
        </ul>
`;
      }
    else{
      uolist +=
        `<li>ul li element ${i}</li>
      `; 
    }
         
}
uolist += `</ul>`;
document.body.innerHTML += uolist;


let uoli=document.getElementById("nuli");
for(i=1; i<=lilist; i++){
    if(i%3 ==0){
       uoli.innerHTML +=
        `
        <ul>
            <li class="podli">LI ${i}</li>
        </ul>
`;
      }
    else{
      uoli.innerHTML +=
        `<li>LI ${i}</li>
      `; 
    }
}



//X TOUGAO - Napisati program za ispis pravouglog trougla kao na slici sa željenim brojem redova:
i=1;
j=1;
n=7;
for(i=1; i<=n; i++){
    for(j=1; j<=i; j++){
        document.body.innerHTML +=`<span>x</span>`;
    }
    document.body.innerHTML += `<br>`;
}

// Ix TROUGAO

for (i = 1; i <= n; i++)
    {
        for (j = 0; j < i; j++)  
        {
            if (j == 0)
               
            document.body.innerHTML +=`<span>x </span>`;
            else
            document.body.innerHTML +=`<span> I x</span>`;
        }
 document.body.innerHTML += `<br>`;
}


















