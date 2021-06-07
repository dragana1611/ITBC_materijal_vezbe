//1. Iz fajla fruits.json dohvatiti i u konzoli ispisati svo voće koje u svom nazivu sadrži reč “berries” (koristiti fatch)

fetch("./JSON/fruits.json")
    .then(response => {
        console.log("resolved", response);
        return response.json();
    })
    .then(data => {
        data.forEach(fruit => {
            if (fruit.name.includes('berries')) {
                console.log(fruit.name);
            }
        });
    })
    .catch(err => {
        console.log("rejected", err);
    });

//2. U fajlu fruits.json prebojati i u konzoli ispisati koliko naziva voća ne sadrži u svom imenu reč “berries (koristiti fatch)

fetch("./JSON/fruits.json")
    .then(response => {

        return response.json();
    })
    .then(data => {
        let countFruit = 0;
        data.forEach(fruit => {

            if (!fruit.name.includes('berries')) {
                countFruit++;
            }
        });
        console.log(countFruit);
    })
    .catch(err => {
        console.log("rejected", err);
    });

//3.Ispisati u konzoli najpre sve nazive voća iz fajla fruits.json, zatim u konzoli ispisati sve nazive povrća iz fajla vegetables.json (koristiti DOM, async i await).

async function fetchFruits() {
    
    const resolve = await fetch("./JSON/fruits.json");
    if (resolve.status != 200) {
        throw new Error("Error!!!!");
    }
    else {
        const data = await resolve.json();
        console.log(data);   
    }
}
fetchFruits();

async function fetchVegetables() {
    const resolve = await fetch("./JSON/vegetables.json");
    if (resolve.status != 200) {
        throw new Error("Error!!!!");
    }
    else {
    const data = await resolve.json();
    console.log(data);             
    }
}

fetchVegetables();

//4. Ispisati naslov treće veličine (h3) “Fruits”, zatim iza njega u neuređenoj listi ispisati sve nazive voća iz fruits.json fajla. Potom ispisati naslov “Vegetables” iza koga sledi neuređena lista sa nazivima povrća iz vegetables.json fajla. (koristiti DOM, async i await).

async function printFruits() {

    const resolve = await fetch("./JSON/fruits.json");
    if (resolve.status != 200) {
        throw new Error("Error!!!!");
    }
    else {
        const data = await resolve.json();
        let body = document.body;
        let h3TitleFruits = document.createElement('h3');
        let textFruits = document.createTextNode("Fruits");
        h3TitleFruits.appendChild(textFruits);
        body.appendChild(h3TitleFruits);
        let result = `<ul>`;
        data.forEach(ime => {
            result += `<li style="color:green"> ${ime.name}</li>`;
        });
        result += `</ul>`;
        document.body.innerHTML += result;
    }
}
printFruits();

async function printVege() {

    const resolve = await fetch("./JSON/vegetables.json");
    if (resolve.status != 200) {
        throw new Error("Error!!!!");
    }
    else {
        const data = await resolve.json();
        let body = document.body;
        let textVege = document.createTextNode("Vegetables");
        let h3TitleVege = document.createElement('h3');
        h3TitleVege.appendChild(textVege);
        body.appendChild(h3TitleVege);
        let result = `<ul>`;
        data.forEach(ime => {
            result += `<li style="color:maroon"> ${ime.name}</li>`;
        });
        result += `</ul>`;
        document.body.innerHTML += result;
    }
}
printVege();

// 5.	Nadovezati se na prethodni zadatak i nakon ispisane liste voća u paragrafu ispisati ukupnu težinu svog voća u kilogramima.Zatim, ispod liste povrća u paragrafu ispisati ukupnu težinu povrća u kilogramima.Postaviti da asinhrona funkcija vraća zbir količina voća i povrća u kilogramima.Pri pozivu asinhrone funkcije, ispisati  ovu vrednost.

async function sumFruitsVege() {

    const resolve1 = await fetch("./JSON/vegetables.json");
    const resolve2 = await fetch("./JSON/fruits.json")
    if (resolve1.status != 200 && resolve2.status != 200) {
        throw new Error("Error!!!!");
    }
    else {
        const data1 = await resolve1.json();
        const data2 = await resolve2.json();
        console.log(data2);
        
        let sumFruitsWeight= 0;
        
        data2.forEach(fruit =>{
           sumFruitsWeight += parseFloat(fruit.weight);         
          
        });
        let body = document.body;
        let paragrafFruit = document.createElement('p');
        let textParagrafFruit = document.createTextNode(`Ukupna tezina voca je: ${sumFruitsWeight}kg`);
        paragrafFruit.appendChild(textParagrafFruit);
        body.appendChild(paragrafFruit);

        let sumVegeWeight = 0;
        data1.forEach(vege => {
            sumVegeWeight += parseFloat(vege.weight);
        });
        
        let paragrafVege = document.createElement('p');
        let textParagrafVege = document.createTextNode(`Ukupna tezina povrca je: ${sumVegeWeight}kg`);
        paragrafVege.appendChild(textParagrafVege);
        body.appendChild(paragrafVege);

        sum = sumFruitsWeight + sumVegeWeight;
        let paragrafSum = document.createElement('p');
        let textParagrafSum = document.createTextNode(`Ukupna tezina voca i povrca je: ${sum}kg`);
        paragrafSum.appendChild(textParagrafSum);
        body.appendChild(paragrafSum);   
    }
    return sum;
}
sumFruitsVege();


