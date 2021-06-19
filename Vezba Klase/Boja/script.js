// 1.	Kreirati klasu Boja koja ima talasnu dužinu u nm, zasićenje i intenzitet.
// Napraviti konstruktor kome se prosleđuju tri vrednosti koje treba postaviti.
// Napraviti odgovarajuće getere i setere.


class Boja {
    constructor(talasnaDuzina, zasicenje, intenzitet){
        this.talasnaDuzina = talasnaDuzina;
        this.zasicenje = zasicenje;
        this.intenzitet =intenzitet;
    }
    set talasnaDuzina(td){
        this._talasnaDuzina = td;
    }
    get talasnaDuzina() { return this._talasnaDuzina};
    set zasicenje(z){
        this._zasicenje =z;
    }
    get zasicenje() { return this._zasicenje};
    set intenzitet(i){
        this._intenzitet=i;
    }
    get intenzitet(){return this._intenzitet;};

}
// Napraviti funkciju ispitajSličnost koja za dve prosleđene boje vraća true ukoliko su te dve boje iste, u suprotnom vraća false.
let boja1 = new Boja (400, 100, 1); //ljubicasta
let boja2 = new Boja (500, 10, 1); //zelena
let boja3 = new Boja (650, 50, 1); //zuta
let ispitajSličnost = (b1, b2)=>{
    if(b1===b2){
        return true;
    }
    else{
        return false;
    }
}
console.log(ispitajSličnost(200, 800));

// Napraviti funkciju srednjaTalasnaDuzina koja za niz boja vraća vrednost srednje talasne dužine