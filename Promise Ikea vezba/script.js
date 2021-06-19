
let divOrder = document.querySelector('#order');
let formOrder = document.querySelector('#order form');
let inputOrder = document.querySelector('#capacity');
let tabela1 = document.querySelector('.table1');

function getItemsReturnPromise(resource) {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.addEventListener('readystatechange', function () {
            if (this.readyState === 4 && this.status === 200) {
                let data = JSON.parse(this.responseText);
                resolve(data);
            }
            else if (this.readyState === 4) {
                reject("could not fetch data");
            }
        });
        request.open('GET', resource);
        request.send();
    });
}

let click1 = event => {
    event.preventDefault();
    let capacity = inputOrder.value;
    let itemsNoStock = [];
    getItemsReturnPromise('json/stock.json')
        .then((data) => {
            //console.log(data);
            data.forEach(item => {
                if (item.stock == 0) {
                    itemsNoStock.push(item.id);
                }
            });
            return getItemsReturnPromise('json/weights.json');
        })
        .then(data => {
            let totalWeight = 0;
            data.forEach(item => {
                if (itemsNoStock.includes(item.id)) {
                    //potrebna je tezina itema/artikla
                    totalWeight += item.weight;
                }
            });
            //console.log(totalWeight);
            if (totalWeight > capacity) {
                let pMessage = document.createElement('p');
                pMessage.style.fontWeight = "bold";
                pMessage.style.fontSize = "24px";
                pMessage.textContent = "Not enough capacity in truck!! ";
                divOrder.appendChild(pMessage);
            }
            else {
                return getItemsReturnPromise('json/prices.json');
            }
        })
        .then(data => {
            if (data !== undefined) {

                let tr1 = document.createElement('tr');
                let th1 = document.createElement('th');
                th1.textContent = 'Naziv artikla';
                let th2 = document.createElement('th');
                th2.textContent = 'Cena artikla';

                tr1.appendChild(th1);
                tr1.appendChild(th2);
                tabela1.appendChild(tr1);
                let totalPrice = 0;

                data.forEach(item => {
                    if (itemsNoStock.includes(item.id)) {
                        let trItem = document.createElement('tr');
                        let td1 = document.createElement('td')
                        td1.textContent = item.item;
                        let td2 = document.createElement('td');
                        td2.textContent = item.price;
                        trItem.appendChild(td1);
                        trItem.appendChild(td2);
                        tabela1.appendChild(trItem);
                        totalPrice += item.price;
                    }
                });

                let trLast = document.createElement('tr');
                let td1Last = document.createElement('th');
                td1Last.textContent = 'UKUPNO';
                let td2Last = document.createElement('th');
                td2Last.textContent = totalPrice;
                trLast.appendChild(td1Last);
                trLast.appendChild(td2Last);
                tabela1.appendChild(trLast);
                divOrder.appendChild(tabela1);
            }
        })
        .catch(error => {
            console.log(error)
        });
}
formOrder.addEventListener('submit', click1);

////////////////////////////////////////////////////
/**Menadžment kompanije je od vas zatražio da radnik u prodavnici može da otvori pretraživač, i na stranici da mu se prikaže sledeće:
Jedna forma u kojoj se nalazi jedan tekstualni input (gde se unosi deo naziva proizvoda), kao i dva numerička inputa (gde se unose neke cene). Pored njih nalazi se i dugme. Klikom na dugme potrebno je uraditi sledeće:
1.	Odrediti sve proizvode koji su na stanju.
2.	Naći takve proizvode koji u nazivu sadrže reč koju je korisnik uneo.
3.	Kao i one čija je cena između dve vrednosti zadate u dva numerička inputa.
4.	Korisniku prikazati u listi nazive tih artikala.
5.	BONUS VARIJANTA: Ne ispisati samo nazive artikala, već ispis izvršiti u tabeli sa tri kolone: U prvoj koloni staviti naziv artikla, u drugoj stanje u magacinu, u trećoj cenu artikla.
 */

let divOrder2 = document.getElementById('order2');
let formOrder2 = document.querySelector('#order2 form');
let inpItem = document.getElementById('item');
let minCena = document.getElementById('minCena');
let maxCena = document.getElementById('maxCena');
let tabela2 = document.querySelector('.table2');
let lista = document.querySelector('.ul1');

let click2 = event => {
    event.preventDefault();
    let itemIme = inpItem.value;
    let itemMinCena = minCena.value;
    let itemMaxCena = maxCena.value;
    let stockItems = [];
    getItemsReturnPromise('json/stock.json')
        .then((data) => {
            data.forEach(item => {
                if (item.stock !== 0 && item.item.includes(itemIme)) {
                    stockItems.push(item);
                }
            });

            return getItemsReturnPromise('json/prices.json');
        })
        .then(data => {
            if (data !== undefined) {
                let priceItems = [];
                let showItems = [];
                data.forEach(item => {
                    if (item.price >= itemMinCena && item.price <= itemMaxCena) {
                        priceItems.push(item);
                    }
                });

                stockItems.forEach(stItem => {
                    priceItems.forEach(prItem => {
                        if (stItem.id == prItem.id) {

                            showItems.push(stItem.id, stItem.item, stItem.stock, prItem.price);
                            //console.log(showItems)

                            let liItem = document.createElement('li');
                            liItem.textContent = `${prItem.item}, ${stItem.stock}, ${prItem.price}`;
                            lista.appendChild(liItem);
                           
                            let trItem = document.createElement('tr');
                            let td1 = document.createElement('td')
                            td1.textContent = prItem.item;
                            let td2 = document.createElement('td');
                            td2.textContent = stItem.stock;
                            let td3 = document.createElement('td');
                            td3.textContent = prItem.price;
                            trItem.appendChild(td1);
                            trItem.appendChild(td2);
                            trItem.appendChild(td3);
                            tabela2.appendChild(trItem);
                            divOrder2.appendChild(tabela2);
                        }
                    });
                });
            }
        })
        .catch(error => {
            console.log(error)
            let pMessage = document.createElement('p');
            pMessage.style.fontWeight = "bold";
            pMessage.style.fontSize = "24px";
            pMessage.textContent = error;
            divOrder2.appendChild(pMessage);
        });
}
formOrder2.addEventListener('submit', click2);

function Vreme() {
    let d = new Date();
    let sat = d.getHours();
    let minut = d.getMinutes();
    let sekund = d.getSeconds();
    let podne = "AM";
    let myclock = document.getElementById('idclock');

    if (sat == 0) {
        sat = 12;
    }
    if (sat > 12) {
        sat = sat - 12;
        podne = "PM"
    }

    sat = (sat < 10) ? "0" + sat : sat;
    minut = (minut < 10) ? "0" + minut : minut;
    sekund = (sekund < 10) ? "0" + sekund : sekund;
    let displayClock = sat + " " + " : " + " " + minut + " " + ":" + " "+ sekund + " " + podne;
    myclock.innerHTML = displayClock;

    setTimeout(Vreme, 1000);
}
Vreme();