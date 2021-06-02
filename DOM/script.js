/**Dohvatiti prvi paragraf na stranici.
Dohvatiti prvi div tag sa klasom „error“.
Dohvatiti poslednji red u tabeli.
Dohvatiti sve linkove na stranici.
Dohvatiti sve slike na stranici.

Sve elemente ispisati u konzoli.
 */
let div1 = document.querySelector('div.error');
console.log(div1);
let poslednjiTr = document.querySelector('tr:last-child');
console.log(poslednjiTr);
let sviLinkovi = document.getElementsByTagName('a');
console.log(sviLinkovi);
let sveImg = document.querySelectorAll('img');
console.log(sveImg);
sveImg.forEach(img=>{
    img.setAttribute('style', 'height:80px');
});


// Selektovati sve paragrafe i u svakom od njih pridodati tekst „VAŽNO!!!“
let sviParagrafi = document.querySelectorAll('p');
sviParagrafi.forEach(paragr =>{
    paragr.innerHTML += `  &nbsp;VAZNO!!!!`;
});


// Svim divovima na stranici sa klasom “error”, dodati po jedan naslov najveće veličine sa tekstom “Greška!”.
let divEror = document.querySelectorAll('div.error');
divEror.forEach(div =>{
    div.innerHTML += div.innerHTML+ `<h1>Greska!!!!</h1>`;
});

// Neka je 𝑛 broj paragrafa u datom dokumentu.U svakom 𝑖 - tom paragrafu dodati broj 𝑖 ^ 2, za svako 𝑖 = 1, 2, …, 𝑛.
sviParagrafi = document.querySelectorAll('p');
sviParagrafi.forEach((paragr,i) =>{
    paragr.innerHTML += '&nbsp;' + (i+1)**2;
});

// Svim slikama dodati alternativni tekst.
sveImg.forEach(img =>{
    img.alt = 'slika';
});

// Svim paragrafima postaviti atribut style tako da budu obojeni ljubičastom bojom.
sviParagrafi.forEach(paragr=>{
    paragr.style.color = 'purple';
});


// Svim parnim paragrafima na stranici postaviti pozadinsku zelenu boju, a svim neparnim paragrafima postaviti pozadinsku crvenu boju.

sviParagrafi.forEach((paragr, i)=>{
    if(i%2 == 0){
        paragr.style.backgroundColor = 'lightgreen';
    }
    else{
        paragr.style.backgroundColor = 'lightcoral';
    }
});

// svim linkovima na stranici postaviti padding na 5px, font size na 18px i text - decoration na none.Parnim linkovima staviti zelenu pozadinsku boju i ljubicastu boju teksta, a neparnim linkovima plavu pozadinsku boju i belu boju teksta.
sviLinkovi = document.querySelectorAll('a');
console.log(sviLinkovi);
sviLinkovi.forEach((link,i) =>{
    link.style.padding = '5px';
    link.style.fontSize = '18px';
    link.style.textDecoration = 'none';
    if(i%2==0){
        link.style.backgroundColor = 'green';
        link.style.color = 'purple';
    }
    else{
        link.style.backgroundColor = 'blue';
        link.style.color = 'white';
    }
});

//Svim slikama na stranici koja su sa ekstenzijom.png, postaviti okvir na debljinu 2px i crvenu boju.

sveImg = document.querySelectorAll('img');
sveImg.forEach((img)=>{
    if (img.src.includes('.png') || img.src.includes('.PNG')){
        img.style.border = '1px solid red';
    }  
});

/*
Svakom linku na stranici promeniti target svojstvo na sledeći način: ako je bilo _blank, postaviti na _top, a ako je bila neka vrednost različita od _blank, ili uopšte nije bilo postavljeno, tada postaviti na _blank. */
sviLinkovi.forEach(link=>{
    if(link.target == "_blank"){
        link.target = "_top";
    }
    else{
        link.target = "_blank"
    }
});

/**Napraviti niz od najmanje tri imena. Proći nizom i imena ispisati:
Svako u novom linku. Ako ime počinje na slovo „S“, link se otvara u novom tabu, a inače se otvara na istoj stranici.
 */

let nizIme = ['vuk', 'iva', 'Sava', 'ana'];

nizIme.forEach(ime=>{
    if (ime.startsWith('s') || ime.startsWith('S') ){
        ime.target = "_blanc";
        document.body.innerHTML += `<a href="https://www.google.com" target="_blank">${ime}</a><br>`
    }
    else{
        document.body.innerHTML += `<a href="https://www.google.com" >${ime}</a><br>`
    }
    
});

//U listi kao stavke liste.Naizmenično stavke liste obojiti sa dve različite boje.
let listaIme = `<ul>`;
nizIme.forEach((ime, i )=>{
    if(i%2==0){  
        listaIme += `<li style="color:red;"><a href="#">${ime}</a></li>`;
    }
    else{   
        listaIme += `<li style="color:blue;"><a href="#">${ime}</a></li>`;
    }
});
listaIme += `</ul>`;
document.body.innerHTML += listaIme;

//U jednoj koloni tabele.Postaviti okvir, marginu i pading ćelijama tabele.

let imeTabela = `<table style="border:1px solid black; border-collapse:collapse;">`;
nizIme.forEach(ime=>{
    imeTabela +=
     `
     <tr>
     <td  style="padding:2px; border:1px solid black;"><a href="#">${ime}</a></td>
     </tr>
    `;
});
imeTabela += `</table>`;
document.body.innerHTML += imeTabela;

/*Svim paragrafima čiji tekst sadrži reč error, postaviti klasu na error, svim paragrafima čiji tekst sadrži reč success, postaviti klasu na success. Ostale klase paragrafa ne modifikovati.
 if(p.textContent.includes(’success’))

 Svim paragrafima koji imaju klasu error skloniti tu klasu, a svim paragrafima koji nemaju klasu error dodati tu klasu.
 */


//Svim parnim paragrafima na stranici dodati klasu error, a svim neparnim paragrafima dodati klasu success
sviParagrafi = document.querySelectorAll('p');
sviParagrafi.forEach((paragr,i)=>{
    if(i%2==0){
        paragr.classList.add('error');
    }
    else{
        paragr.classList.add('success');
    }
});

//Tekst u paragrafima naizmenično pisati veličinom 15px, veličinom 20px i veličinom od 25px.
sviParagrafi.forEach((paragr,i)=>{
    if(i%3==1){
        paragr.style.fontSize = '15px';
    }
    else if(i%3==2){
        paragr.style.fontSize = '20px';
    }
    else{
        paragr.style.fontSize = '25px';
    }
});