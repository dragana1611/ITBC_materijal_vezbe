export class Film {
    constructor(na, re, giz, ocena) {
        this.naslov = na;
        this.reziser = re;
        this.godIzd = giz;
        this.ocena = ocena;
    }
    stampaj() {
        console.log(`Naslov filma je: ${this.naslov}`);
    }

    set naslov(nasl) {
        this._naslov = nasl;
    }
    set reziser(rez) {
        this._reziser = rez;
    }
    set godIzd(gizd) {
        if (gizd >= 1800) {
            this._godIzd = gizd;
        }
        else {
            //console.log('Error: Godina izdanja filma mora biti veća od 1800.');
            this._godIzd = 1800;
        }
    }
    set ocena(o){
        this._ocena = o;
    }


    get naslov() {
        return this._naslov;
    }
    get reziser() {
        return this._reziser;
    }
    get godIzd() {
        return this._godIzd;
    }
    get ocena() {
        return this._ocena;
    }
    prosek() {
        let suma=0;
        this.ocena.forEach(oc => {
            suma += oc;
        });
        let avgOcena = suma / this.ocena.length;
        return avgOcena;
    }
}

// Napraviti metod prosek koji vraća prosečnu ocenu