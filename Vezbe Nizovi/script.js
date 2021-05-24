nizBroj = [1, 35, -12, 46, 1];
nizString = ["jabuka","breskva", "kajsija", "jagoda", 'sljiva'];


// 1.Ispisati sve elemente niza od 5 stringova.
function niz5(niz){
    for(let i=0; i<niz.length; i++){
        console.log(niz[i]);
    }
}
niz5(nizBroj);

let niz5Voce1 = niz =>{
    for (let i = 0; i < niz.length; i++) {
        console.log(niz[i]);
    }
}
niz5Voce1 (nizString);

// 2.drediti zbir elemenata celobrojnog niza.
nizBroj = [1, 35, -12, 46, 1];
let sumaElem = niz => {
    let sum=0;
    for (let i = 0; i < niz.length; i++) {
        sum += niz[i] ;
    }
    return sum;
}
console.log(sumaElem(nizBroj));


// 3.Odrediti proizvod elemenata celobrojnog niza.
nizBroj = [1, 35, -12, 46, 1];
let proizvodElem = niz => {
    let proizvod = 1;
for (let i = 0; i < niz.length; i++) {
    proizvod *= niz[i];
}
return proizvod;
}
console.log(proizvodElem(nizBroj));

// 4.Odrediti srednju vrednost elemenata celobrojnog niza.
nizBroj = [1, 35, -12, 46, 1];
let srVrElem = niz => {
    let sum = 0;
    let brojac = 0;
    for (let i = 0; i < niz.length; i++) {
        sum += niz[i];
        brojac++;
    }
    return sum/brojac;
}
console.log(srVrElem(nizBroj));


// 5.Odrediti maksimalnu vrednost u celobrojnom nizu.
// 6.Odrediti minimalnu vrednost u celobrojnom nizu.
// 7.Odrediti indeks minimalnog elementa celobrojnog niza.
// 8.Odrediti broj elemenata celobrojnog niza koji su veći od srednje vrednosti.
// 9.Odrediti indeks maksimalnog elementa celobrojnog niza.

//INDEX MAX elementa
nizBroj = [1, 35, -12, 46, 1];
let indexMaxElem = niz => {
    let max = 0;
    let index = 0;
    for (let i = 0; i < niz.length; i++) {
        if(niz[i]>max){
            max = niz[i];
            index = i;
        }
    }
    return index;
}
console.log(`indeks maksimalnog elementa celobrojnog niza je ${indexMaxElem(nizBroj)}`);


// 10.Izračunati zbir pozitivnih elemenata celobrojnog niza.
// 11.Odrediti broj parnih elemenata u celobrojnom nizu.



// STRING - SORTIRANJE po abecedi
let str = "arfkdpomvdne";
function poAbecedi(str) {
    console.log(str.split(''));
    console.log(str.split('').sort());
    console.log(str.split('').sort().join(''));
    return str.split('').sort().join('');
}
console.log(poAbecedi(str));

/*// STRING - REVERSE prvi i poslednji broj 
let str2 = 34209856;
function obrni(str) {
    if (str.length <= 1) {
        return str;
    }
    str2 = str.substring(1, str.length - 1);
    return (str.charAt(str.length - 1)) + str2 + str.charAt(0);
} 
console.log(obrni(str2));
*/
