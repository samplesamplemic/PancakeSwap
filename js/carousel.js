import { getData } from './module.js';
const carousel = document.querySelector('.carousel');



getData().then(data => {
    // console.log(data);

    //find ten max & min coins price change percentage 24h
    const arrMinMax = [];
    const datfilter = data.map(el => el.price_change_percentage_24h)
    const datMin = arrMinMax.push(datfilter.sort((a, b) => { return a - b }).slice(0, 5))
    const datMax = arrMinMax.push(datfilter.sort((a, b) => { return b - a }).slice(0, 5))
    //console.log(arrMinMax.flat().sort((a, b) => {return b - a}));

    data.map(el => {
        if (arrMinMax.flat().includes(el.price_change_percentage_24h)) {
            let card = document.createElement('div');
            card.className = 'card flex gap-4 items-center rounded-3xl p-4';
            card.innerHTML = `
        <img src="${el.image}" alt="" class="w-8 h-8"/>
       <div class="flex flex-col">
       <span class="">${el.symbol.toUpperCase()}</span>
        <span class="flex gap-2 flex-nowrap">$${el.current_price.toFixed(1)} <span class="price_change">${el.price_change_percentage_24h.toFixed(2)}%</span> </span>
       </div> 
        `
            carousel.append(card);

        }

    })

})

//change color price change percentage 24h
const clrCoin = () => {
    const priceChange = document.querySelectorAll('.price_change');
    priceChange.forEach(el => {
        if (el.innerText.slice(0, 1) === '-') {
            el.style.color = 'red';
        } else {
            el.style.color = 'green';
        }

    })}
 setTimeout(clrCoin, 1000);


let offset = [0, 0];
let isDown = false;
let mousePosition;
let carousel_container = document.querySelector('#carousel-container');

//move carousel on click
carousel.addEventListener('mousedown', (e) => {
    isDown = true;
    offset = [
        carousel.offsetLeft - e.clientX,
        carousel.offsetTop - e.clientY
    ]
}, true);

document.addEventListener('mouseup', function (e) {
    isDown = false;
    carousel.style.left = 0 + 'px';
}, true);

document.addEventListener('mousemove', (e) => {
    e.preventDefault();
    if (isDown) {
        mousePosition = {
            x: e.clientX,
            y: e.clientY
        };
        carousel.style.left = (mousePosition.x + offset[0]) + 'px';
        //carousel.style.top  = (mousePosition.y + offset[1]) + 'px';
    }
}, true);

