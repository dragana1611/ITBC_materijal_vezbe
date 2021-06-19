// 3.	Kreirati klasu Radnik koja sadrži dva atributa - ime i platu ranika.
// Napraviti konstruktor kome se prosleđuju dve vrednosti koje treba postaviti.
// Napraviti odgovarajuće getere i setere.
// Napraviti funkciju maksPlata kojoj se prosleđuje niz radnika, a ona vraća najveću platu ranika.




class Radnik {
    constructor(ime, plata) {
        this.ime = ime;
        this.plata = plata;

    }
    set ime(ime) {
        this._ime = ime;
    }
    get ime() { return this._ime };
    set plata(pl) {
        this._plata = pl;
    }
    get plata() { return this._plata };

}
let radnik1 = new Radnik('Mika Mikic', 58654);
let radnik2 = new Radnik('Zika Zikic', 78693);
let radnik3 = new Radnik('Ana Anic', 108710);

let radnici = [radnik1, radnik2, radnik3];
console.log(radnici);

// Napraviti funkciju maksPlata kojoj se prosleđuje niz radnika, a ona vraća najveću platu ranika.

let maksPlata = nizRadnika => {
    let maxPlata = nizRadnika[0].plata;
    console.log(maxPlata)
    nizRadnika.forEach(radnik => {
        if (radnik.plata > maxPlata) {
            maxPlata = radnik.plata;
        }
    });
    return maxPlata;
}
console.log(maksPlata(radnici));

// Napraviti funkciju maksPlataOsoba kojoj se prosleđuje niz ranika, a ona ispisuje sve podatke za svakog od radnika sa maksimalnom platom.
