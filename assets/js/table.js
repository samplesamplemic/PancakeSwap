import {getData} from './module.js';
const urlAll2 = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'; //all
const table = document.querySelector('#table-row');


//pagination
function template(data) {
  data.forEach((el) => {
    let table_row = document.createElement('div');
    table_row.className = 'table-row'
    table_row.innerHTML = `
            <div class="table-cell text-center light-t ...">
            <span class="hidden media-num light-t">${el.market_cap_rank}</span>
            <img class="inline-flex w-7 object-fill " src="${el.image}" alt="">  
            ${el.name} (${el.symbol.toUpperCase()})</div>
            <div class="table-cell text-center price_change col-media-del ...">${el.price_change_percentage_24h.toFixed(2)}%</div>
            <div class="table-cell text-center light-t ...">$${el.current_price.toFixed(2)}</div>
            <div class="table-cell text-center col-media-del light-t ...">${el.market_cap_rank}</div>
    `;

    table.append(table_row);
    
    //color price change percentage 24h
    const clrCoin = () => {
      const priceChange = document.querySelectorAll('.price_change');
      priceChange.forEach(el => {
          if (el.innerText.slice(0, 1) === '-') {
              el.style.color = 'red';
          } else {
              el.style.color = 'green';
          }
    
      })}
      clrCoin();
  });
}



   getData().then(data => {
   console.log(data);
    $(".table").pagination({
       dataSource: data,
       totalNumber: data.length,
       pageSize: 15,
       callback: function (data, a) {
         // template method of yourself
         table.innerHTML = "";
         var html = template(data);
         $("tbody").html(html);
       },
     });
   
   })

 
//getDataTable(urlAll2);

