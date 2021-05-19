//2.	Napisati funkciju zbir koja računa zbir dva realna broja.
//Šta bi trebalo izmeniti da bi se dobila razlika, proizvod ili količnik dva broja.

function zbir(a, b) {
    console.log(a+b);
    return a+b;
}
zbir(7,90);

//3.	Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je neparan ili netačno ukoliko nije neparan.

function neparan(n) {
    
    return (n%2!=0);
}
neparan(55);
console.log(neparan(55));

//4.	Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.
function max2(a,b) {
    let max=a;
    if(b>a){
        max=b;
    }
    return max;
}
max2(2,6);
console.log(max2(2, 6));

function max4(a,b,c,d) {
    return max2(max2(a,b),max2(c,d));
}
max4(-4,7,90,8);
console.log(max4(-4, 7, 90, 8));

//5.	Napisati funkciju koja prikazuje sliku za prosledjenu adresu slike.
 
function slika(a) {
    document.body.innerHTML += `<img src="${a}" style="height:30px;"><br>`;
}
slika("rose.png");
    
//6.	Napisati funkciju koja za unetu boju na engleskom jeziku boji tekst paragrafa u tu boju.
function boja(a) {
    document.body.innerHTML += `<p style="color:${a}">Text obojen funkcijom BOJA</p>`;
}
boja("lime");

//7.	Napisati program koji sadrži funkciju sedmiDan koja za uneti broj n ispisuje n-ti dan u nedelji (npr. za 0 ispisuje “Nedelja”, za 1 se ispisuje „Ponedeljak“, za 2 se ispisuje „Utorak“, ... ,  a za 7 opet “Nedelja”).
//Pitanje: Kako bismo realizovali ovaj zadatak da se tražio n - ti mesec u godini ?

function sedmiDan(n) {
    let dan = n%7;
    switch(dan){
            case 0: console.log("Nedelja");
            break;
        
            case 1: console.log("Ponedeljak");
            break;
        
            case 2: console.log("Utorak");
            break;
        
            case 3: console.log("Sreda");
            break;
        
            case 4: console.log("Cetvrtak");
            break;
        
            case 5: console.log("Petak");
            break;

            case 6: console.log("Subota");
            break;

            default: console.log(`Pogresan unos`);
    }
}
sedmiDan(31);

//8.	Napraviti funkciju deljivSaTri koja se koristi u ispisivanju brojeva koji su deljivi sa tri u intervalu od n do m.
//Prebrojati koliko ima ovakvih brojeva od n do m.

function deljivSaTri(n,m) {
    
    if(n>m){
    let pom=n;
        n=m;
        m=pom;
    }
    let brojac=0;
    for(let i=n; i<=m; i++){
        if(i%3==0){
        console.log(i);
        brojac++;
        }
    }
    return brojac;
}
deljivSaTri(23,8);
console.log(`Ima ${deljivSaTri(23, 8)} brojeva koji su deljivi sa 3` );


//9.	Napraviti funkciju sumiraj koja određuje sumu brojeva od n do m. 
//Brojeve n i m proslediti kao parametre funkciji.

function sumiraj(n,m) {
    
    if (n > m) {
        let pom = n;
        n = m;
        m = pom;
    }
    
    let suma=0;
    for (let i = n; i <= m; i++) {
        suma += i;
    }
    return suma;
}
sumiraj(6,17);
console.log(sumiraj(6, 17));


//10.	Napraviti funkciju množi koja određuje proizvod brojeva od n do m.
//Brojeve n i m proslediti kao parametre funkciji.

function mnozi(n,m) {
    if (n > m) {
        let pom = n;
        n = m;
        m = pom;
    }

    let proizvod=1;
    for (let i = n; i <= m; i++) {
        proizvod *= i;
    }
    return proizvod;
}
mnozi(3,10);
console.log(mnozi(3, 10));

//11. Napraviti funkciju koja vraća aritmetičku sredinu brojeva od n do m.
//Brojeve n i m proslediti kao parametre funkciji.

function arSr(n,m) {
    if (n > m) {
        let pom = n;
        n = m;
        m = pom;
    }

    let suma=0;
    let brojac=0;
    for (let i = n; i <= m; i++) {
        suma += i;
        brojac ++;
    }
    return suma/brojac;
}
arSr(4,15);
console.log(arSr(4, 15));

//12. Napisati funkciju koja vraća aritmetičku sredinu brojeva kojima je poslednja cifra 3 u intervalu od n do m. Brojeve n i m proslediti kao parametre funkciji.

function arSr3(n,m) {
    if (n > m) {
        let pom = n;
        n = m;
        m = pom;
    }


}
//13. Napisati funkciju kojoj se prosleđuje ceo broj a ona ispisuje tekst koji ima prosleđenu veličinu fonta.



//14. Napisati funkciju koja pet puta ispisuje istu rečenicu, a veličina fonta rečenice treba da bude jednaka vrednosti iteratora.


/*15. Dobili ste plaćenu programersku praksu u trajanju od n meseci.Prvog meseca, plata će biti a dinara, a ako budete vredno radili svakog narednog meseca ćete dobiti povišicu od d dinara.Brojeve n, a i d određujete sami.
Napišite funkciju kojoj se prosleđuju brojevi n i a.Funkcija treba da vrati vrednosti koliko ćete ukupno navca zaraditi, ukoliko svakog meseca budete dobijali povišicu.
Testirati zadatak(pozvati funkciju i ispisati vrednost koju ona vraća).*/


// 16.Na igrama bez granica, ekipi je postavljen zadatak da za što kraće vreme pređe stazu na kojoj se nalazi pokretni most.Takmičaru ove ekipe od polazne tačke do mosta treba t sekundi.Tačno p sekundi od kada takmičar može da krene sa polazne tačke(tj.od početka merenja) most počinje da se podiže.Od trenutka podizanja pa do spuštanja mosta protiče n sekundi i prelaz preko mosta za to vreme nije moguć.Nakon toga most ostaje spušten.Takmičari za čekanje kod mosta dobijaju negativne poene, pa je tim rešio da napravi program koji će im tačno odrediti u kojoj sekundi treba da pođu sa startne pozicije kako ne bi dobijali negativne poene.Pomozite timu da napravi funkciju na osnovu prosleđenih vrednosti t, p i n.Funkcija vraća koliko sekundi nakon početka merenja vremena treba da pođe, kako bi prošli poligon bez zaustavljanja.
//     npr: t = 15, p = 20, n = 25, čekanje je 0s
//     npr: t = 15, p = 10, n = 12, čekanje je 7s


//17. Pilot želi da napravi program gde unosi vreme polatanja(sat poletanja između 0 i 23 i minut poletanja aviona između 0 i 59) i vreme sletanja aviona(sat sletanja između 0 i 23 i minut sletanja aviona između 0 i 59).Napisati funkciju kojoj se prosleđuje vreme poletanja i vreme sletanja aviona, a ona pilotu u konzoli ispisuje koliko časova i minuta je trajao njegov let.Pretpostaviti da su poletanje i sletanje aviona u istom danu i da je ispravno uneo vrednosti poletanja i sletanja.



//18. Specijalitet jedne poslastičare je slatkiš po imenu jaban koje se pravi od jabuka i banana.Za jednu porciju ovog slatkiša potrebme su 2 jabuke i 3 banane.Poslastičara jabuke i banane dobija od jednog lokalnog dobavljača.U svakoj isporuci ima 20 % oštećenih jabuka koje se ne mogu iskoristiti za pripremu jaban slatkiša.Napisati funkciju koja za prosleđeni broj isporučenih jabuka i prosleđeni broj isporučenih banana, određuje i vraća koliko porcija jaban slatkiša je moguće da poslastičar napravi.Broj oštećenih jabuka zaokružiti na najbliži ceo broj.


