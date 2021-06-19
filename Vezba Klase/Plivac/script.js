/*9.Kreirati klasu Plivac koja sadrži ime, godinu rodjenja i najbolji rezultat ove godine.
Napraviti odovarajuće konstruktore, getere i setere.
Napraviti metodu ispisi koja ispisuje sve podatke o plivaču.
Napraviti funkciju
 */

class Plivac {
    constructor (ime, godRodj, najRez){
        this.ime = ime;
        this.godRodj = godRodj;
        this.najRez = najRez;
    }
    set ime(ime){
        this._ime = ime;
    }
    get ime() { return this._ime;}

    set godRodj(godRodj) {
        this._godRodj = godRodj;
    }
    get godRodj() { return this._godRodj;}

    set najRez(najRez) {
        this._najRez = najRez;
    }
    get najRez() { return this._najRez;}

    stampaj(){
        console.log(this.ime, this.godRodj, this.najRez);
    }
}

let plivac1 = new Plivac('Pera Peric', 1995, 25);
let plivac2 = new Plivac('Mika Mikic', 1996, 27);
let plivac3 = new Plivac('Zika Zikic', 1994, 23);
let plivac4 = new Plivac('Laza Lazic', 1997, 26);

let plivaci = [plivac1, plivac2, plivac3, plivac4];

//Napraviti funkciju topTen koja kao rezultat vraća niz od 10 najboljih rezultata ove godine.



//Napraviti funkciju norma kojoj se prosleđuje norma i niz plivača, a funkcija vraća niz onih plivača koji ispunjavaju ovu normu.
let norma = (nizPlivaca, norma)=>{
    
    let plivNorma = [];
    nizPlivaca.forEach(plivac => {
        if(plivac.najRez<=norma){
            plivNorma.push(plivac);
        }
    });
    return plivNorma;
}
console.log(norma(plivaci, 25));

//Napisati funkciju normaNajmladji koja treba da na ekranu ispiše sve podatke o najmlađem igraču koji zadovoljava normu koja je zadata prethodnom funkcijom.

let normaNajmladji =(niz, norma1) =>{
    let normaPliv = norma(niz, norma1);
    let minGod = normaPliv[0].godRodj;
    let minPlivac = normaPliv[0];
    normaPliv.forEach(plivac=>{
        if(plivac.godRodj<minGod){
            minGod = plivac.godRodj;
            minPlivac = plivac;         
        }
    });
     document.body.innerHTML += `<p>${minPlivac.godRodj}, ${minPlivac.ime}, ${minPlivac.najRez}</p>`; 
}
normaNajmladji(plivaci,25);