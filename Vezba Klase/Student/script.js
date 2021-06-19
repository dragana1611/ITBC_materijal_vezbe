// Kreirati klasu Student koja ima atribute: jmbg, ime, prezime, nizOcena i presecna ocena.
// Prilikom kreiranja konstruktora, prosledjuje se jmbg, ime, prezime i nizOcena, a automatski se izračuna prosečna ocena ovog studenta.
//     Takođe, voditi računa o tome da svaka od unetih ocena može biti isključivo ceo broj i to 6, 7, 8, 9 ili 10.
// JMBG studenta mora biti string koji sadrži 13 karaktera.
// Izračunata prosečna ocena se dodeli atributu prosecna ocena.
// Napraviti i odgovarajuće getere i setere.
// Napraviti metodu ispis koja ispisuje sve podatke o jednom studentu.
// Napraviti niz studenata i koristiti ga u predstojećim funkcijama.

class Student {
    constructor(jmbg, ime, prezime, nizOcena, prosecnaOcena) {
        this.jmbg = jmbg;
        this.ime = ime;
        this.prezime = prezime;
        this.nizOcena = nizOcena;
        this.prosecnaOcena = prosecnaOcena;
    }
    set jmbg(jmbg) {
        if (jmbg.length == 13) {
            this._jmbg = jmbg;
        }
        else {
            alert('Pogresan unos!!!');
        }

    }
    get jmbg() { return this._jmbg };

    set ime(ime) {
        this._ime = ime;
    }
    get ime() { return this._ime };

    set prezime(prezime) {
        this._prezime = prezime;
    }
    get prezime() { return this._prezime };

    set nizOcena(nizOcena) {
        nizOcena.forEach(ocena => {
            if (ocena === 6 || ocena === 7 || ocena === 8 || ocena === 9 || ocena === 10) {
                this._nizOcena = nizOcena;
            }
            else {
                alert('Pogresan unos');
            }
        });

    }
    get nizOcena() { return this._nizOcena };

    set prosecnaOcena(prosecnaOcena) {
        let suma = 0;
        this.nizOcena.forEach(ocena => {
            suma += ocena;
        });
        prosecnaOcena = suma / this.nizOcena.length;
        this._prosecnaOcena = prosecnaOcena;
    }
    get prosecnaOcena() { return this._prosecnaOcena };


    ispis() {
        console.log(
            `${this.jmbg}, ${this.ime} ${this.prezime}, Ocene: ${this.nizOcena}, Prosecna ocena: ${this.prosecnaOcena}`
        );
    }
}

let student1 = new Student('1205002891236', 'Pera', 'Peric', [8, 6, 9, 6], this.prosecnaOcena);
student1.ispis();
console.log(student1)
let student2 = new Student('2508995456234', 'Mika', 'Mikic', [8, 7, 7, 9], this.prosecnaOcena);
student2.ispis();
let student3 = new Student('1404989973278', 'Ana', 'Anic', [8, 9, 9, 10], this.prosecnaOcena);
student3.ispis();
let student4 = new Student('0506994693872', 'Ana', 'Anic', [6, 6, 8, 7], this.prosecnaOcena);
student4.ispis();

let studenti = [student1, student2, student3, student4];

// Napraviti funkciju imePrezime kojoj se prosleđuje ime i prezime, a funkcija vraća broj studenata sa tim imenom i prezimenom.

let imePrezime = (ime, prezime) => {
    let brojacStudenata = 0;
    let nizStudenata = studenti;
    nizStudenata.forEach(student => {
        if (student.ime == ime && student.prezime == prezime) {
            brojacStudenata++;
        }
    });
    return brojacStudenata;
}
console.log(`Broj studenata sa istim imenom i prezimenom je: ${imePrezime('Ana', 'Anic')}`);

// Napraviti funkciju srednjaOcena koja ispisuje koja je preosečna ocena svih ocena studenata.

let srednjaOcena = nizStudenata => {
    let suma = 0;
    let brojacOcena = 0;

    nizStudenata.forEach(student => {
        student.nizOcena.forEach(ocena => {
            suma += ocena;
            brojacOcena++;
        });
    });

    return suma / brojacOcena;
}
console.log(`Prosecna ocena svih studenata je: ${srednjaOcena(studenti)}`);

//// Napraviti funkciju osrednji koja ispisuje studenta koji ima prosek najbliži srednjoj oceni svih studenata.

// Napraviti ocenu najmanjaOcenaNajboljeg koja određuje najboljeg studenta i na ekranu ispisuje njegovu najslabiju ocenu.

// Napisati funkciju najmanjaOcena koja vraća koja je najmanja ocena, uzimajući u obzir ocene svih ocena koje su studenti dobijali.

// Napisati funkciju najcescaOcena koja vraća ocenu koju su studenti najčešće dobijali.

// Napisati funiciju rodjeniGodine kojoj se prosleđuje godina, a funkcija na ekranu ispisuje sve studente koji su rodjeni te godine.Godinu rođenja preuzeti(odrediti) iz JMBG - a studenta.


let rodjeniGodine = god => {
    let niz = studenti;
    niz.forEach(student => {
        let studJMBG = student.jmbg;
        //console.log(studJMBG);
        let godJMBG = studJMBG.substr(4, 3);
        //console.log(godJMBG);
        if (godJMBG.startsWith('9')) {
            godJMBG = '1' + godJMBG;
        }
        else if (godJMBG.startsWith('0')) {
            godJMBG = '2' + godJMBG;
        }
        if (Number(godJMBG) == god) {
            console.log(student);
        }
    });
}
rodjeniGodine(2002);