export class Film{

    constructor(na, re, giz, o){
        this.naslov = na;
        this.reziser = re;
        this.godIzdanja = giz;
        this.ocene = o;
    }

    //seteri - postavljaju vrednosti poljima
    set naslov(n){
        this._naslov = n;
    }
    set reziser(r){
        this._reziser = r;
    }
    set godIzdanja(gi){
        if(gi >= 1800){
            this._godIzdanja = gi;
        } else {
            alert("Godina izdanja mora biti veća od 1800.");
        }        
    }
    set ocene(o){
        this._ocene = o;
    }

    //geteri - vraćaju vrednosti polja
    get naslov(){
        return this._naslov;
    }
    get reziser(){
        return this._reziser;
    }
    get godIzdanja(){
        return this._godIzdanja;
    }
    get ocene(){
        return this._ocene;
    }

    stampaj(){
        console.log(this.naslov, this.reziser, this.godIzdanja, this.ocene);
    }

    prosek(){
        let sum = 0;
        this.ocene.forEach( o => {
            sum += o;
        });
        let avg = sum/this.ocene.length;
        return avg;
    }
}