console.log("Klase - Film");

import {Film} from "./film.js";

let f1 = new Film("Tenet", "Kristofer Nolan", 2020, [9.8, 10, 9.9, 8, 10, 9, 7.6]);

f1.stampaj();
console.log(f1.naslov);
console.log(f1.reziser);
console.log(f1.godIzdanja);
console.log(f1.prosek());

let f2 = new Film("Fil2", "Kristofer Nolan", 1999, [7, 9, 8, 9.7, 8]);
let f3 = new Film("Film3", "BB", 1960, [7, 8, 7.2, 6, 7]);

let films = [f1, f2, f3];

//Napraviti funkciju prosecnaOcena kojoj se prosleđuje niz filmova, a koja određuje i vraća  prosečnu ocenu svih filmova

let prosecnaOcena = films => {
    let sum = 0;
    let num = 0;
    
    films.forEach(film => {
        let filmOcene = film.ocene;
        filmOcene.forEach(ocena => {
            sum += ocena;
            num++;
        });
    });

    let avg = sum/num;
    return avg;
}
console.log(prosecnaOcena(films));

//Napraviti funkciju najboljeOcenjeni kojoj se prosleđuje niz filmova, a ona vraća najbolje ocenjeni film.
let najboljeOcenjeni = films => {
    let maxOcena = films[0].prosek();
    let maxFilm = films[0];

    films.forEach( f => {
        if(f.prosek() > maxOcena){
            maxOcena = f.prosek();
            maxFilm = f;
        }
    });

    return maxFilm;
}
najboljeOcenjeni(films).stampaj();

//Napraviti funkciju osrednjiFilm kojoj se prosleđuje niz filmova a ona vraća film koji je najbliži prosečnoj oceni svih filmova.
let osrednjiFilm = films => {
    let prosecnaOcenaSvih = prosecnaOcena(films);
    let minRazlika = Math.abs(films[0].prosek() - prosecnaOcenaSvih);
    let minFilm = films[0];

    films.forEach( f => {
        let razlika = Math.abs(f.prosek() - prosecnaOcenaSvih);
        if(razlika < minRazlika){
            minRazlika = razlika;
            minFilm = f;
        }
    });
    
    return minFilm;
}

osrednjiFilm(films).stampaj();

//Napraviti funkciju najmanjaOcenaNajboljeg kojoj se prosleđuje niz filmova a ona određuje najbolji film i ispisuje njegovu najslabiju ocenu.
let najmanjaOcenaNajboljeg = films => {

    let najboljiFilm = najboljeOcenjeni(films);

    let najmanja = najboljiFilm.ocene[0];
    najboljiFilm.ocene.forEach( o => {
        if(najmanja > o){
            najmanja = o;
        }
    });

    console.log(najboljiFilm.naslov, najmanja);
}
najmanjaOcenaNajboljeg(films);

//Napisati funkciju najcescaOcena kojoj se prosleđuje niz ocena, a ona vraća ocenu koju su filmovi najčešće dobijali. 
let nizOcena = [];
films.forEach(f => {
    let filmOcene = f.ocene;
    filmOcene.forEach( o => {
        nizOcena.push(o);
    });
});

let najcescaOcena = nizOcena => {

    let najucestalijaOcena = nizOcena[0]; 
    let brPojavNajucestalije = 1; // ili = 0

    for(let i=0; i<nizOcena.length; i++){
        let tekuci = nizOcena[i];
        let brPojavTekuceg = 0;
        for(let j=0; j<nizOcena.length; j++){
            if(tekuci == nizOcena[j]){
                brPojavTekuceg++;
            }
        }
        if(brPojavTekuceg > brPojavNajucestalije){
            brPojavNajucestalije = brPojavTekuceg;
            najucestalijaOcena = tekuci;
        }
    }

    return najucestalijaOcena;
}

let pomNiz = [10, 10, 10, 9, 9, 9, 8, 8, 8, 8];
console.log(najcescaOcena(pomNiz));

//Napraviti funkciju iznadOcene kojoj se prosleđuje ocena i niz filmova, a ona vraća niz onih filmova koji su bolje ocenjeni od prosleđene ocene.
let iznadOcene = (ocena, films) => {
    let pomFilms = []; //čuva samo filmove čija je prosečna ocena veća od prosleđene
    films.forEach(f => {
        let prosecna = f.prosek();
        if(prosecna > ocena){
            pomFilms.push(f);
        }
    });
    return pomFilms;
}

//Napisati funkciju iznadOceneNoviji kojoj se prosleđuje ocena i niz filmova  a koja treba da na ekranu da ispiše sve podatke o najnovijem filmu koji zadovoljava prosleđenu ocenu
let iznadOceneNoviji = (ocena, films) => {
    let pomFilms = iznadOcene(ocena, films);
    let godNajnov = pomFilms[0].godIzdanja;
    let najnov = pomFilms[0];

    pomFilms.forEach( pf => {
        if(pf.godIzdanja > godNajnov){
            godNajnov = pf.godIzdanja;
            najnov = pf;
        }
    });

    return najnov;
}
console.log(iznadOceneNoviji(8, films));
iznadOceneNoviji(8, films).stampaj();