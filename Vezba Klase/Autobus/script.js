/**4.	Kreirati kalsu Autobus koja ima podatke o registarskom broju autobusa i o broju sedišta u autobusu.
Napraviti konstruktor kome se prosleđujeu odgovarajuće vrednosti.
Napraviti odgovarajuće getere i setere.
Napraviti metodu koja ispisuje podatke o autobusu.
Napraviti niz autobusa.
Napraviti funkciju ukupnoSedista kojoj se prosleđuje niz autobusa a koja određuje i vraća koliko ukupno sedišta sadrže svi autobusi koji se nalaze u nizu autobusa.
Napraviti funkciju maksSedista koja ispisuje podatke o autobusu koji ima najveći broj sedišta.
Napraviti funkciju ljudi kojoj se prosleđuje broj ljudi i niz autobusa a funkcija vraća true ukoliko je moguće toliko ljudi smestiti u autobuse, u suprotnom vraća false.
 */
class Autobus {
    constructor (regBrAutobusa, brSedista){
        this.regBrAutobusa = regBrAutobusa;
        this.brSedista = brSedista;
    }
    set regBrAutobusa(rba){
        this._regBrAutobusa = rba;
    }
    get regBrAutobusa() { return this._regBrAutobusa};
    set brSedista(brs){
        this._brSedista = brs;
    }
    get brSedista() { return this._brSedista};
    stampaj(){
        console.log(this.regBrAutobusa, this.brSedista);
    }
}

let autobus1 = new Autobus('ni123aa', 54);
let autobus2 = new Autobus('ni563ab', 50);
let autobus3 = new Autobus('ni789ba', 25);

let autobusi = [autobus1, autobus2, autobus3];
console.log(autobusi)