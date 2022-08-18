// const url = 'https://api.pancakeswap.info/api/v2/pairs';// pools
// const url2 = 'https://api.pancakeswap.info/api/v2/tokens'; //charts - token
// const urlAll = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'; //all
// const url4 = 'https://api.coingecko.com/api/v3/global'; //grafico torta || market_cap_percentage
// let coin =[];

// async function getData(){   
//   const response = await fetch(url2);
//   const data = await response.json();
//   const a = Object.entries(data);
//   const b = a[1]
//   const c = b[1]
//   const d = Object.entries(c);
//   const e = d.map(f => f[1]);
//   console.log(e);
     
// };
// getData();


// async function getData2(){
//   const response = await fetch(urlAll);
//   const data = await response.json();
//   console.log(data);
//   coin = data;  
//  const nome = await data.map((simboli) => simboli.symbol)
//  const price = await data.map((prezzo) => prezzo.current_price)

//  console.log(nome);
//  console.log(price);

 
//  const nomiCoin = [];
//  const prezzo = [];

//  nome.forEach((item) => {
//   nomiCoin.push(item)
//  })

//  price.forEach((item) => {
//   prezzo.push(item)
//  })




//  document
//   .querySelector("div.chart")
//   .after(document.createElement("select"));
// document
//   .querySelector("div.chart + select")
//   .appendChild(document.createElement("option"));
// document.querySelector(
//   "div.chart + select option:last-child"
// ).textContent = "Select One Coin..";
// document
//   .querySelector("div.chart + select option:last-child")
//   .setAttribute("value", "nofilter");
// nomiCoin.forEach((item, index) => {
//   document
//     .querySelector("div.chart + select")
//     .appendChild(document.createElement("option"));
//   document
//     .querySelector("div.chart + select option:last-child")
//     .setAttribute("value", `${index + 1}`);
//   document.querySelector(
//     "div.chart + select option:last-child"
//   ).textContent = `${item}`;
//   document
//     .querySelector("div.chart + select option:last-child")
//     .setAttribute("id", `${index + 1}`);
//   });
//   const ctx = document.getElementById('canvas-bar').getContext('2d');
//   const myChart = new Chart(ctx, {
//       type: 'bar',
//       data: {
//           labels: nome,
//           datasets: [{
//               label: '# of Votes',
//               data: price,
//               backgroundColor: [
//                   'rgba(255, 99, 132, 0.2)',
//                   'rgba(54, 162, 235, 0.2)',
//                   'rgba(255, 206, 86, 0.2)',
//                   'rgba(75, 192, 192, 0.2)',
//                   'rgba(153, 102, 255, 0.2)',
//                   'rgba(255, 159, 64, 0.2)'
//               ],
//               borderColor: [
//                   'rgba(255, 99, 132, 1)',
//                   'rgba(54, 162, 235, 1)',
//                   'rgba(255, 206, 86, 1)',
//                   'rgba(75, 192, 192, 1)',
//                   'rgba(153, 102, 255, 1)',
//                   'rgba(255, 159, 64, 1)'
//               ],
//               borderWidth: 1
//           }]
//       },
//       options: {
//           scales: {
//               y: {
//                   beginAtZero: true
//               }
//           }
//       }
//   });
  
// document.querySelector("div.chart + select").addEventListener("change", async (e) => {
//  if (e.target.value === "nofilter"){
//   myChart.data.datasets[0].data = [];
//   myChart.update();
//  } else if(nomiCoin.indexOf() === prezzo.indexOf()){
//   myChart.data.datasets[0].data = prezzo.indexOf();
//   myChart.update()
//  }
// })
// const select = document.querySelector('#select-coin');
// let coinList = [];
// data.map(el => {
//   if(!coinList.includes(el.name)){
//     coinList.push(el.name);
//     const option = document.createElement('option');
//     option.innerHTML = el.name;
//     option.setAttribute('value', el.name);
//     select.append(option);
//   }
// })

// select.addEventListener('change', selectCoin);

// function selectCoin(){
//   let selectCoin = [];
//   coin.map(el => {
//     if(el.name === select.value) {
//       selectCoin.push(el);
//     } else if(select.value === 'all'){
//       selectCoin.push(el);
//     }
//   })
  
//   let nome = selectCoin.map(el => el.symbol);
//   let price = selectCoin.map(el => el.current_price)

//   myChart.data.labels = nome;
//   myChart.data.datasets[0].data = price;
//   myChart.update();
// }




// }

// getData2();

// <!-- <script src="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.0.7/dist/js/splide.min.js"></script>
// <script src="https://cdn.jsdelivr.net/npm/@splidejs/splide-extension-auto-scroll@0.4.2/dist/js/splide-extension-auto-scroll.min.js"></script>
// -->

//carousel

// const carousel = document.querySelector('.splide__list');

// import { getData } from './module.js';

//    getData().then(data => {
//         console.log(data);
//         data.map(el => {
//             let card = document.createElement('li');
//             card.className = 'splide__slide';
//             card.innerHTML = `
            
//             <img src="${el.image}" alt="Image 1" />
//             <span>${el.symbol}</span>
           

//             `;
//             carousel.append(card);
//         })
//     })
//       let splide = new Splide('#image-carousel', {
//                     type   : 'loop',
//                     drag   : 'free',
//                     focus  : 'center',
//                     direction: 'rtb',
//                     //pagination: false,
//                     arrows : false,
//                     perPage: 1,
//                     //cloneStatus: true,
//                     autoScroll: {
//                       speed: 1,
//                     }, 
//                   } ).mount(window.splide.Extensions);



//chart

// async function getData2() {
//   const response = await fetch(urlAll);
//   const data = await response.json();
//   //console.log(data);
//   coin = data;
//   const nome = await data.map((simboli) => simboli.symbol)
//   const price = await data.map((prezzo) => prezzo.price_change_percentage_24h)

//   const ctx = document.getElementById('canvas-bar').getContext('2d');
//   const myChart = new Chart(ctx, {
//     type: 'line',
//     data: {
//       labels: nome,
//       datasets: [{
//         label: '%',
//         data: price,
//         backgroundColor: [
//           'rgba(154, 106, 255, 0.2)',

//         ],
//         borderColor: [
//           'rgba(154, 106, 255, 1)',
//         ],
//         borderWidth: 1
//       }]
//     },
//     options: {
//       scales: {
//         x: {
//           grid: {
//             display: false,
//           },

//           ticks: {
//             color: "#a89ebf",
//           },
//         },
//         y: {
//           ticks: {
//             color: "#a89ebf",
//           },
//           beginAtZero: true,
//           grid: {
//             display: false,
//           },
//         },
//       },
//       plugins: {
//         legend: {
//           labels: {
//             color: "#a89ebf",
//           },
//         },
//       },
//     }

//   });


//   const select = document.querySelector('#select-coin');
//   let coinList = [];
//   data.map(el => {
//     if (!coinList.includes(el.name)) {
//       coinList.push(el.name);
//       const option = document.createElement('option');
//       option.innerHTML = el.name;
//       option.setAttribute('value', el.name);
//       select.append(option);
//     }
//   })

//   select.addEventListener('change', selectCoin);

   
//   function selectCoin() {
//     let selectCoin = [];
//    coin.map(el => {
//       if (el.name === select.value) {
//         selectCoin.push(el);
//         let nome = selectCoin.map(el => el.symbol);
//         let price = selectCoin.map(el => el.price_change_percentage_24h)
//         myChart.config.type = 'bar';
//         myChart.data.labels = nome;
//         myChart.data.datasets[0].data = price;
//         myChart.update();
//       } else if (select.value === 'all') {
//         selectCoin.push(el);
//         let nome = selectCoin.map(el => el.symbol);
//         let price = selectCoin.map(el => el.price_change_percentage_24h)
//         myChart.config.type = 'line';
//         myChart.data.labels = nome;
//         myChart.data.datasets[0].data = price;

//         myChart.update();
//       }
//     })

  
//   }




// }

// getData2();