// U klasi Film dodati polje ocene koje čini niz ocena koje su korisnici dali filmu





// Napisati funkciju najcescaOcena kojoj se prosleđuje niz ocena, a ona vraća ocenu koju su filmovi najčešće dobijali.
// Napraviti funkciju iznadOcene kojoj se prosleđuje ocena i niz filmova, a ona vraća niz onih filmova koji su bolje ocenjeni od prosleđene ocene.
// Napisati funkciju iznadOceneNoviji kojoj se prosleđuje ocena i niz filmova  a koja treba da na ekranu da ispiše sve podatke o najnovijem filmu koji zadovoljava prosleđenu ocenu

import { Film } from "./film.js";

const Kapernaum = new Film('Capernaum', 'Nadine Labaki', 2018, [9, 10, 9.9, 8, 9.8, 9.5, 8.6]);
console.log(Kapernaum);
console.log(Kapernaum.ocena);
Kapernaum.stampaj();
Kapernaum.ocena.forEach(o => {
    console.log(o);
}); // vraca niz ocena

const The_Father = new Film('The Father', 'Florian Zeller', 2020, [7, 7, 8, 9.5, 8, 7.5]);
console.log(The_Father);
The_Father.stampaj();

const Gone_with_the_Wind = new Film('Gone with the Wind', 'Victor Fleming', 1939, [7, 8, 7.5, 6.5, 7]);
console.log(Gone_with_the_Wind);
Gone_with_the_Wind.stampaj();

// Kreirati niz od barem tri objekta klase Film
let filmovi = [Kapernaum, The_Father, Gone_with_the_Wind];

// Napraviti funkciju vekFilmova kojoj se prosleđuje niz filmova i ceo broj(vek), a funkcija ispisuje samo one filmove koji su stvoreni u prosleđenom veku
let vekFilmova = (nizFilmova, vek) => {
    //let vekFilm = Math.ceil(nizFilmova.godIzd / 100);

    nizFilmova.forEach(film => {
        if (film.godIzd <= vek * 100 && film.godIzd > (vek - 1) * 100) {
            film.stampaj();
        }
    });
}
vekFilmova(filmovi, 21);

// Napraviti funkciju prosecnaOcena kojoj se prosleđuje niz filmova, a koja određuje i vraća  prosečnu ocenu svih filmova.
let prosecnaOcena = nizFilmova => {
    let suma = 0;
    let brojacOcena = 0;

    nizFilmova.forEach(film => {
        film.ocena.forEach(ocena => {
            suma += ocena;
            brojacOcena++;
        });
    });
    let avgOcena = suma / brojacOcena;
    return avgOcena;
}
console.log(`Prosecna ocena svih filmova je: ${prosecnaOcena(filmovi)}`);
/*
br +=film.ocene.length;
*/
// Napraviti funkciju najboljeOcenjeni kojoj se prosleđuje niz filmova, a ona vraća najbolje ocenjeni film.

let najboljeOcenjeni = nizFilmova => {
    let maxOcena = nizFilmova[0].prosek();
    let maxOcenjenFilm = nizFilmova[0];

    nizFilmova.forEach(film => {
        if (film.prosek() > maxOcena) {
            maxOcena = film.prosek();
            maxOcenjenFilm = film;
        }
    });

    return maxOcenjenFilm;
}
najboljeOcenjeni(filmovi).stampaj();

// Napraviti funkciju osrednjiFilm kojoj se prosleđuje niz filmova a ona vraća film koji je najbliži prosečnoj oceni svih filmova.
let osrednjiFilm = nizFilmova => {
    let avgOcAll = prosecnaOcena(nizFilmova);
    let minRazlOcena = Math.abs(avgOcAll - nizFilmova[0].prosek()); // razlika prosecne ocene prvog filma i prosecne ocene svih filmova
    let osrFilm = nizFilmova[0];

    nizFilmova.forEach(film => {
        let razlOcena = Math.abs(avgOcAll - film.prosek()); // razlika prosecne ocene filma u nizu filmova i prosecne ocene svih filmova

        if (razlOcena < minRazlOcena) {
            minRazlOcena = razlOcena;
            osrFilm = film;   // osrednji film je onaj cija je RAZLIKA (njegove) prosecne ocene i prosecne ocene svih filmova NAJMANJA!!!!
        }
    });
    return osrFilm;
}
osrednjiFilm(filmovi).stampaj();

// Napraviti funkciju najmanjaOcenaNajboljeg kojoj se prosleđuje niz filmova a ona određuje najbolji film i ispisuje njegovu najslabiju ocenu.
let najmanjaOcenaNajboljeg = nizFilmova => {
    let najboljiFilm = najboljeOcenjeni(nizFilmova);
    let minOcena = najboljiFilm.ocena[0];
    najboljiFilm.ocena.forEach(ocena => {
        if (ocena < minOcena) {
            minOcena = ocena;
        }
    });
    return minOcena;
}
filmovi.forEach(film => {
    console.log(film.naslov, film.prosek());
});
console.log(`Najmanja ocena najboljeg filma je: ${najmanjaOcenaNajboljeg(filmovi)}`);

// Napisati funkciju najmanjaOcena kojoj se prosleđuje niz filmova, a koja vraća koja je najmanja ocena koju je bilo koji film dobio.
let najmanjaOcena = nizFilmova => {
    let minOcena = nizFilmova[0].ocena[0];
    for (let i = 0; i < nizFilmova.length; i++) {
        for (let j = 0; j < nizFilmova[i].ocena.length; j++) {
            if (nizFilmova[i].ocena[j] < minOcena) {
                minOcena = nizFilmova[i].ocena[j];
            }
        }
    }
    return minOcena;
}
console.log(`Minimalna ocena koju je je dobio bilo koji film je: ${najmanjaOcena(filmovi)}`);


// Napraviti funkciju iznadOcene kojoj se prosleđuje ocena i niz filmova, a ona vraća niz onih filmova koji su bolje ocenjeni od prosleđene ocene.
let iznadOcene = (nizFilmova, ocena) => {

    let natprosecniFilm = [];
    nizFilmova.forEach(film => {
        if (film.prosek() > ocena) {

            natprosecniFilm.push(film);
        }
    });

}
console.log(iznadOcene(filmovi, 9));


// Napisati funkciju najcescaOcena kojoj se prosleđuje niz ocena, a ona vraća ocenu koju su filmovi najčešće dobijali.
let nizOcena = [];
filmovi.forEach(film => {
    let filmOcene = film.ocena;
    filmOcene.forEach(ocena => {
        nizOcena.push(ocena);

    });
}); console.log(`Niz svih ocena je:  ${nizOcena} `);

let najcescaOcena = nizOcena => {

    let najucestalijaOcena = nizOcena[0];
    let brPojavNajucestalije = 1; // ili = 0

    for (let i = 0; i < nizOcena.length; i++) {
        let tekuci = nizOcena[i];
        let brPojavTekuceg = 0;
        let nizNajucestOc = [];
        for (let j = 0; j < nizOcena.length; j++) {
            if (tekuci == nizOcena[j]) {
                brPojavTekuceg++;
            }
        }

        if (brPojavTekuceg > brPojavNajucestalije) { //ima 4x7 i 4x8; kada je > ispisuje 8 , kada je  >= ispisuje 7
            brPojavNajucestalije = brPojavTekuceg;
            najucestalijaOcena = tekuci;
            nizNajucestOc.push(najucestalijaOcena);

        }
    }

    return najucestalijaOcena;
}
console.log(`Ocena koju su filmovi najčešće dobijali je: ${najcescaOcena(nizOcena)}`);