let blog1 = {
    title: "musaka od tikvica",
    likes: 105,
    dislikes: 31
};

let blog2 = {
    title: "lazanja!",
    likes: 236,
    dislikes: 13
};

let blog3 = {
    title: "zapecena boranija!",
    likes: 60,
    dislikes: 132
};

// ispis objekata iz niza objekata

let nizObj = [blog1, blog2, blog3];
nizObj.forEach(blog=>{
    console.log(blog);
});

//ispis naslova iz niza blogova forEach petljom

nizObj = [blog1, blog2, blog3];
nizObj.forEach(blog =>{
    console.log(blog.title);
});

//Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona vraća ukupan broj lajkova

nizObj = [blog1, blog2, blog3];
let ukBrLajkova = niz =>{
    let sumLajkova=0;
    niz.forEach(elem=>{
        sumLajkova += elem.likes;
    });
    return sumLajkova;
}
console.log(ukBrLajkova(nizObj));

//Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona vraća prosečan broj lajkova
//nizObj = [blog1, blog2, blog3];

let prosBrLajkova = objArr =>{
    return ukBrLajkova(objArr)/nizObj.length;
}
console.log(prosBrLajkova(nizObj));

//Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju više pozitivnih nego negativnih ocena

let blogViseLijkova = objArr =>{
    
    objArr.forEach(blog=>{
        if(blog.likes>blog.dislikes){
            console.log(blog.title);
        }
    });   
}
blogViseLijkova(nizObj);

//Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju najmanje duplo više pozitivnih nego negativnih ocena

let duploViseLajkova = objArr =>{
    objArr.forEach(blog =>{
        if(blog.likes>2*blog.dislikes){
            console.log(blog.title);
        }
    });
}
duploViseLajkova(nizObj);

//Napisati arrow funkciju kojoj se prosleđuje niz objekata a ona ispisuje sve naslove koji se završavaju uzvičnikom

let uzvicnik = objArr =>{
    objArr.forEach(naslov =>{
        if(naslov.title.endsWith("!")){
            console.log(naslov.title);
        }
    });
}
uzvicnik(nizObj);

/////////////////////
//Objekti u objektu

//Napraviti niz korisnika gde svaki od korisnika sadrži niz blogova. Svaki blog u ovom nizu je objekat.


    let blog01 = {
        title: 'HTML',
        like: 50,
        dislikes: 3
    };

    let blog02 = {
        title: 'CSS',
        like: 170,
        dislikes: 105
    };

    let blog03 = {
        title: 'JS',
        like: 205,
        dislikes: 110
    };

    

    let user1 = {
        username: 'Stefan',
        age: 31,
        blogs: [blog01, blog02, blog03],
};

let user2 = {
    username: 'Jelena',
    age: 17,
    blogs: [blog01, blog03],
};

let user3 = {
    username: 'Milena',
    age: 14,
    blogs: [blog01],
};

let user4 = {
    username: 'Nemanja',
    age: 41,
    blogs: [blog01, blog02, blog03],
};

let korisnici = [user1,user2, user3, user4];


// Ispisati imena onih autora koji imaju ispod 18 godina

let autorManji18 = nizKor =>{
    nizKor.forEach(user =>{
        if(user.age<18){
            console.log(user.username);
        }
    });
}
autorManji18(korisnici);


// Ispisati naslove onih blogova koji imaju više od 50 lajkova
    
let likes50 = nizKor =>{
nizKor.forEach(user =>{
        user.blogs.forEach(blog =>{
            if(blog.like>50){           
            console.log(blog.title);
        }
        });  
    });
}

likes50(korisnici);

// Ispisati sve blogove autora čiji je username ’Nemanja’

let ime = nizObj =>{
    nizObj.forEach(blog =>{
        if(blog.username == "Nemanja"){
            console.log(blog.blogs);
        }
    });
}
ime(korisnici);

// Ispisati imena onih autora koji imaju ukupno više od 100 lajkova za blogove koje su napisali
//korisnici = [user1,user2, user3, user4];
//

let likes100 = nizObj =>{
    let sumaLajk = 0;
    nizObj.forEach(user =>{
        user.blogs.forEach(lajkovi =>{
           sumaLajk += lajkovi.like;   
        });
        if (sumaLajk > 100) {
            console.log(user.username);
        }
    });
}
likes100(korisnici);

// Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena
//let korisnici = [user1,user2, user3, user4];/

let natpBrPoz = nizObj =>{
    let sumaLajk = 0;
    nizObj.forEach(user =>{
        user.blogs.forEach(lajkovi => {
            sumaLajk += lajkovi.like;
        
        if (lajkovi.like >sumaLajk/user.blogs.length) {
            console.log(sumaLajk/user.blogs.length);
            console.log(lajkovi.title);
        }
        });
    });
}
natpBrPoz(korisnici);

// Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena i ispodprosečan broj negativnih ocena
//let korisnici = [user1, user2, user3, user4]; /

let podProsDislikes = nizObj=>{
    sumaDislikes = 0;
    nizObj.forEach(user =>{
        user.blogs.forEach(blog=>{
            sumaDislikes += blog.dislikes;
            if(blog.dislikes<sumaDislikes/user.blogs.length){
               console.log(sumaDislikes/user.blogs.length);
                console.log(blog.title); 
            }
        });
    });
}
podProsDislikes(korisnici);



/**Formirati objekat dan koji sadrži:
●	Datum (string u formatu YYYY/MM/DD),
●	Kiša (true/false),
●	Sunce (true/false),
●	Oblačno (true/false),
●	Vrednosti temperature (Niz temperatura tog dana)

Napraviti niz dan objekata (niz od najmanje 3 objekta).

Napraviti arrow funksiju koja u konzoli ispisuje datum u kome je najviše puta izmerena temperatura. Ukoliko ima više takvih datuma, ispisati poslednji od njih.

Napraviti arrow funksiju koja prebrojava i u konzoli ispisuje koliko je bilo kišnih dana, koliko je bilo sunčanih dana i koliko je bilo oblačnih dana

Napraviti arrow funkciju koja računa i vraća koliko je bilo dana sa natprosečnom temperaturom. Pozvati ovu funkciju i njen rezultat ispisati u konzoli.
 */

dan1 = {
    datum: "2021/05/18",
    kisa: true,
    sunce: false,
    oblacno: true,
    temperature: [2, 5, 15, 19, 23, 18, 12, 8, 5, 3]
};

dan2 = {
    datum: "2021/05/19",
    kisa: true,
    sunce: true,
    oblacno: true,
    temperature: [5, 10, 13, 22, 17, 12, 8, 3]
};

dan3 = {
    datum: "2021/05/20",
    kisa: false,
    sunce: false,
    oblacno: true,
    temperature: [4, 5, 11, 15, 19, 18, 17, 10, 7, 2]
};

dan4 = {
    datum: "2021/05/21",
    kisa: false,
    sunce: false,
    oblacno: true,
    temperature: [6, 16, 19, 23, 12, 8, 3]
};

dan5 = {
    datum: "2021/05/22",
    kisa: false,
    sunce: false,
    oblacno: true,
    temperature: [3, 6, 11, 13, 18, 20, 17, 13, 7]
};

//Napraviti niz dan objekata

let dani = [dan1, dan2, dan3, dan4, dan5];

//Napraviti arrow funksiju koja u konzoli ispisuje datum u kome je najviše puta izmerena temperatura.Ukoliko ima više takvih datuma, ispisati poslednji od njih.

let najvIzmerTemp = nizObj =>{
    let maxBrMerenja=0;
    let poslDatMerenjaT=null;
    for(let i=0; i<nizObj.length; i++){
        if(nizObj[i].temperature.length>=maxBrMerenja){
            maxBrMerenja=nizObj[i].temperature.length;
            poslDatMerenjaT=nizObj[i].datum;
        }
    }
    console.log(`Poslednji datum u kome je najviše puta izmerena temperatura je ${poslDatMerenjaT}`);
}
najvIzmerTemp(dani);

//ispisati prvi od njih.

let najvIzmerTemp2 = nizDana =>{
    let maxBrMerenja = 0;
    let prviDatMerenja = null;
    for(let i =0; i<nizDana.length; i++){
        if(nizDana[i].temperature.length>maxBrMerenja){
            maxBrMerenja = nizDana[i].temperature.length;
            prviDatMerenja = nizDana[i].datum;
        }
    }
    console.log(`Prvi datum u kome je najviše puta izmerena temperatura je ${prviDatMerenja}`);
}
najvIzmerTemp2(dani); 

//Napraviti arrow funksiju koja prebrojava i u konzoli ispisuje koliko je bilo kišnih dana, koliko je bilo sunčanih dana i koliko je bilo oblačnih dana

let vreme = nizDana =>{
    let kisDan=0;
    let sunDan=0;
    let oblDan=0;

    nizDana.forEach(day =>{
        if(day.kisa==true){
            kisDan++;
        } 
        if(day.sunce==true){
            sunDan++
        }
        if(day.oblacno==true){           
            oblDan++;
        }
    });
    console.log(`Bilo je ${kisDan} kisnih dana, ${sunDan} suncanih dana i ${oblDan} oblacnih dana`);
}
vreme(dani);

//Napraviti arrow funkciju koja računa i vraća koliko je bilo dana sa natprosečnom temperaturom. Pozvati ovu funkciju i njen rezultat ispisati u konzoli.

let danNatpTemp = nizDana =>{
    let sumaTemp=0;
    let danNatpT=0;
    for(let i = 0; i<nizDana.length; i++){
        for(let j=0; j<nizDana[i].temperature.length; j++){
            sumaTemp += nizDana[i].temperature[j];
            if(nizDana[i].temperature[j]>sumaTemp/nizDana[i].temperature.length){
                danNatpT++;
                break;
            }
        }
    }
    return danNatpT;
}
console.log(danNatpTemp(dani));




//Za dan se kaže da je neuobičajen ako je bilo kiše i ispod -5 stepeni, ili bilo oblačno i iznad 25 stepeni, ili je bilo i kišovito i oblačno i sunčano. Napisati metod koji vraća true ukoliko je dan bio neuobičajen, u suprotnom vraća false.
let dan = {
        Datum: '2021/05/17',
        Kisa: true,
        Sunce: false,
        Oblacno: true,
        Temperature: [1, 3, 10, 15, 18, 18, 11, 5, 1, 1],
        neuobicajen: function (){
        let neuobDan=false;
        for(let i=0; i<this.Temperature.length; i++){
            if ((this.Kisa == true && this.Temperature[i] < -5) || (this.Oblacno == true && this.Temperature[i]>25) || (this.Kisa==true && this.Oblacno ==true && this.Sunce==true)){
            neuobDan = true;
            break;
            }
        }
        return neuobDan;
        }, 
    //3. Prebrojava i vraća koliko merenja je bilo sa maksimalnom temperaturom.
    brMerMaxT:function () {
        let max=this.Temperature[0];
        let brMaxT=0;
        this.Temperature.forEach(temp=>{
            if(temp>max){
                max=temp;
            }
        });
        this.Temperature.forEach(temp=>{
            if(temp==max){
                brMaxT++;
            }
        });
        return brMaxT;
    },

    ///*//4.Prima dva parametra koji predstavljaju dve temperature. Potrebno je da metoda vrati broj merenja u toku dana čija je vrednost između ove dve zadate temperature (ne uključujući te dve vrednosti).*
    dvaParam:function (temp1,temp2) {
        let brMerMaxT=0;
        this.Temperature.forEach(temp=>{
            if(temp1>temp2){
              let pom=temp1;
              temp1=temp2;
              temp2=pom;
            }
            if(temp>temp1 && temp<temp2){
                brMerMaxT++;
            }
        });
        return brMerMaxT;
    },

    // 5. Vraća true ukoliko je u većini dana temperatura bila iznad proseka.U suprotnom vraća false.
    prosecnaT:function (){ 
        let sumaMerT=0; 
        this.Temperature.forEach(temp=>{
            sumaMerT +=temp;
        });          
        return sumaMerT / this.Temperature.length;
    },
    iznadPros:function (){
        let avg=this.prosecnaT();
        let brIznadPros=0;
        
        this.Temperature.forEach(temp=>{
            if (temp > avg){
                brIznadPros++;
                console.log(brIznadPros);
            }                     
        }); 
        return brIznadPros;    
    },
    vecinaIznPro: function (){
        let iznad = this.iznadPros();
        return iznad>this.Temperature.length/2;
    },


    //8. Dan je nepovoljan ako je razlika između neka dva uzastopna merenja veća od 8 stepeni. Metod vraća true ukoliko je dan bio nepovoljan, u suprotnom vraća false.
    vece8:function () {
        let nepovoljan=true;
        for(let i=0; i<this.Temperature.length; i++){
            if(Math.abs(this.Temperature[i] - this.Temperature[i+1])<8){
                nepovoljan=false;
            }
        }
        return nepovoljan;
    },

    /*  //Napisati metod koji na ekranu ispisuje neuređenu listu, čija je sadržina (čiji su elementi/buleti) vrednosti temperature iz datog niza temperatura.
--Maksimalnu(ili maksimalne ukoliko ih je više) vrednost u neurešenoj listi obojiti crvenom bojom.
--Minimalnu(ili minimalne vrednosti ukoliko ih je više) obojiti plavom bojom.*/
    maxT:function(){
        let max = this.Temperature[0];
        this.Temperature.forEach(temp=>{
            if(temp>max){
                max=temp;
            }
        });
        return max;
    },
    minT: function () {
        let min = this.Temperature[0] ;
        this.Temperature.forEach(temp => {
            if (temp < min) {
                min = temp;
            }
        });
        return min;
    },
    neurLista:function(){
        let maximum=this.maxT();
        let minimum=this.minT();
        let lista=`<ul>`;
        this.Temperature.forEach(temp=>{
            if(temp==maximum){
                lista += `<li style="color:red;">${temp}</li>`;
            }

            else if (temp == minimum){
                
                lista += `<li style="color:blue;">${temp}</li>`;
            }
            else{
                lista += `<li>${temp}</li>`;  
            }
        }); 

        lista += `</ul>`;
        return document.body.innerHTML += lista;
    }
    };



console.log(dan.neuobicajen());
console.log(dan.brMerMaxT());
console.log(dan.dvaParam(5,15));
console.log(dan.iznadPros());
console.log(dan.prosecnaT());
console.log(dan.vecinaIznPro());
console.log(dan.vece8());
dan.neurLista();
console.log(dan.maxT());
console.log(dan.minT());


/**Formirati objekat dan koji sadrži:
●	Datum (string u formatu YYYY/MM/DD),
●	Kiša (true/false),
●	Sunce (true/false),
●	Oblačno (true/false),
●	Vrednosti temperature (Niz temperatura tog dana)

Napraviti niz dan objekata (niz od najmanje 3 objekta).

Napraviti arrow funksiju koja u konzoli ispisuje datum u kome je najviše puta izmerena temperatura. Ukoliko ima više takvih datuma, ispisati poslednji od njih.

Napraviti arrow funksiju koja prebrojava i u konzoli ispisuje koliko je bilo kišnih dana, koliko je bilo sunčanih dana i koliko je bilo oblačnih dana

Napraviti arrow funkciju koja računa i vraća koliko je bilo dana sa natprosečnom temperaturom. Pozvati ovu funkciju i njen rezultat ispisati u konzoli.
 */

dan01 = {
    datum: "2021/05/18",
    kisa: true,
    sunce: false,
    oblacno: true,
    temperature: [3, 6, 11, 13, 18, 20, 17, 13, 7]
}

dan02 = {
    datum: "2021/05/19",
    kisa: true,
    sunce: true,
    oblacno: true,
    temperature: [5, 10, 13, 22, 17, 12, 8, 3]
}

dan03 = {
    datum: "2021/05/20",
    kisa: false,
    sunce: false,
    oblacno: true,
    temperature: [4, 5, 11, 15, 19, 18, 17, 10, 7, 2]
}

dan04 = {
    datum: "2021/05/21",
    kisa: false,
    sunce: false,
    oblacno: true,
    temperature: [6, 16, 19, 23, 12, 8, 3]
}

dan05 = {
    datum: "2021/05/22",
    kisa: false,
    sunce: false,
    oblacno: true,
    temperature: [2, 5, 15, 19, 23, 18, 12, 8, 5, 3]
}

//Napraviti niz dan objekata

let dani1 = [dan01, dan02, dan03, dan04, dan05];

//Napraviti arrow funkciju koja u konzoli ispisuje datum u kome je najviše puta izmerena temperatura. Ukoliko ima više takvih datuma, ispisati poslednji od njih.
let najvisePutaIzmerTemper=nizDanaa=>{
    let najvPuta=0;
    let brojacMerenja=null;
    for(let i=0; i<nizDanaa.length; i++){
        if(nizDanaa[i].temperature.length>=najvPuta){
            najvPuta=nizDanaa[i].temperature.length;
            brojacMerenja=nizDanaa[i].datum;
        }
    }
    return brojacMerenja;
}
console.log(najvisePutaIzmerTemper(dani1));

let najvisePutaIzmerTemper1 = nizDanaa=>{
    let najvPuta1=0;
    let brojacMerenja1=null;
    for(let i=0; i<nizDanaa.length; i++){
        if (nizDanaa[i].temperature.length>najvPuta1){
            najvPuta1=nizDanaa[i].temperature.length;
            brojacMerenja1 = nizDanaa[i].datum;
        }
    }
    return brojacMerenja1;
}
console.log(najvisePutaIzmerTemper1(dani1));

//Napraviti arrow funkciju koja računa i vraća koliko je bilo dana sa natprosečnom temperaturom. Pozvati ovu funkciju i njen rezultat ispisati u konzoli.
let natprosecnaT=nizDanaa=>{
    let suma =0;
    let brTemp=0;
    let brojacDana=0;
    for(let i=0; i<nizDanaa.length; i++){
        for(let j=0; j<nizDanaa[i].temperature.length; j++){
            suma += nizDanaa[i].temperature[j];
            brTemp++;
            if (nizDanaa[i].temperature[j]>suma/brTemp){
                brojacDana++;
                break;
            }
        }
    }
    return brojacDana;
}
console.log(natprosecnaT(dani1));


