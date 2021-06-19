/*10.	Kreirati kalsu Automobil koji ima podatke o maksimalnoj brzini, minimalnoj brzini i trenutnoj brzini.
Pri stvaranju novog automobila (u konstruktoru) zadajete minimalnu vrednost brzine, maksimalnu vrednost brzine i trenutnu vrednost brzine.
Napraviti odgovarajuće setere i getere.
Napraviti metodu  ubrzaj kojoj se prosledjuje vrednost za koliko treba uvećati trenutnu brzinu. Ukoliko nije moguće izvršiti toliko ubrzanje, trenutnu brzinu postaviti na maksimalnu vrednost brzine, u suprotnom uvećati za traženu vrednost.
Napraviti metodu uspori kojoj se prosledjuje vrednost za koliko treba smanjiti trenutnu brzinu. Ukoliko nije moguće izvršiti toliko usporenje, trenutnu brzinu postaviti na minimalnu vrednost brzine, u suprotnom umanjiti brzinu za traženu vrednost.
 */

class Automobil {
    constructor (minBrz, maxBrz, trenBrz){
        this.minBrz = minBrz;
        this.maxBrz = maxBrz;
        this.trenBrz = trenBrz;
    }
    // Seteri
    set maxBrz(x) {
        this._maxBrz = x;
    }

    set minBrz(x) {
        this._minBrz = x;
    }

    set trenBrz(x) {
        this._trenBrz = x;
    }

    // Geteri
    get maxBrz() {
        return this._maxBrz;
    }

    get minBrz() {
        return this._minBrz;
    }

    get trenBrz() {
        return this._trenBrz;
    }

    ubrzaj
}