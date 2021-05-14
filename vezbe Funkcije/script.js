// Napisati f-ju koja proverava parnost broja n

let n;
function parni(n){
    if(n<0){
        n=Math.abs(n);
    }
    if (n==0) {
        return true;
    }
    if(n==1){
        return false;
    }
    else{
        n=n-2;
        return parni(n);
    }
}
 console.log(parni(-148));

 //Faktorijel broja n

 function fakt(n){
     if(n<0){
         n=Math.abs(n);
     }
     else if(n===0){
         return 1;
     }
     return n*fakt(n-1);   
  }
 fakt(-6);
 console.log(fakt(-6));


 //NZD
let a;
let b;

 function najveci(a, b) {
    if ( ! b) {
        
       return a;
     }
   return najveci(b, a % b);
}
najveci(25,15);
console.log(najveci(21,18));


// stepenovanje broja a eksponentom n
function eksponent(a,n){
    if(n==0){
        return 1;
    }
    return a* eksponent(a,n-1);
}
 eksponent(2,5);
 console.log(eksponent(2,5));


 //savrsen broj
 

 function savrsenBr(broj1) {
    let i = 1;
    let suma = 0;
    while (i < broj1) {
     
      if (broj1 % i == 0) {    // provera da li je i deliac broja
       
        suma += i;         // suma= zbir delilaca broja
      }
        i++;
    }
    if (suma == broj1){
      return true;
    }
    else{
      return false;
    }

 }
  savrsenBr(28);
  console.log(savrsenBr(28));

  
  
  //SVE iste cifre 
let broj;
let zadnjaCifra;
  function isteCifre(broj) {
   zadnjaCifra = broj % 10;
    while (broj>0) {
      if (broj % 10 !== zadnjaCifra){
       return false;
       
      }
        broj = Math.floor(broj / 10);
        
  }
    return true;
}
isteCifre(33333);
console.log(isteCifre(33333));


// Broj parnih cifara u nekom broju



function parneCifre(broj){
    let brojac=0;
    while(broj>0){
        let cifra = broj%10;
        if(cifra%2==0 && cifra!=0){
        brojac++;
        }
        broj = Math.floor(broj/10);
    }
    return brojac;
}
parneCifre(806543201);
console.log(parneCifre(806543201));


//Izracunaj beskonacnu sumu n + n/2 + n/4 + n/8 +... gde je svaki sabirak ceo broj

function sumaPola(n){
    suma=0;
    while(n>0){
        suma += n;
        n=Math.floor(n/2);
        console.log(suma) ;
    }
    return suma;
}

 sumaPola(20);
 console.log(sumaPola(20)) ;


 function polan(n){
     suma=0;
     while(n>0){
         suma +=n;
         n=Math.floor(n/2);
     }
     return suma;
 }
 polan(15);
 console.log(polan(15));


 
 //N za 1+2+3+...(n-1)+n<= Unetog Broja
 //max suma rednih brojeva
 
  function summax(n){
      suman=0;
        i=1;

      while(suman<=n){
          suman += i;
         i++;
      }
      return i-2;
 }

summax(29);
console.log(summax(29));

