//const url = 'https://api.pancakeswap.info/api/v2/pairs';// pools
const url2 = 'https://api.pancakeswap.info/api/v2/tokens'; //charts - token
const urlAll = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'; //all
const url4 = 'https://api.coingecko.com/api/v3/global'; //grafico torta || market_cap_percentage
let coin = [];


async function getData() {
    const response = await fetch(urlAll);
    const data = await response.json();
    // console.log(data);
    coin = data;
    const nome = await data.map((simboli) => simboli.symbol);
    const price = await data.map((prezzo) => prezzo.price_change_percentage_24h);
  
    const dati2 = {
      labels: nome,
      datasets: [
        {
          label: "%",
          data: price,
          //barThickness: 6,
          barPercentage: 0.1,
          backgroundColor: ["rgba(154, 106, 255, 1)"],
          borderColor: ["rgba(154, 106, 255, 1)"],
          borderWidth: 1,
        },
      ],
    };
    const dati = {
      labels: nome,
      datasets: [
        {
          label: "%",
          data: price,
          backgroundColor: ["rgba(154, 106, 255, 1)"],
          borderColor: ["rgba(154, 106, 255, 1)"],
          borderWidth: 1,
        },
      ],
    };
  
    const config = {
      type: "line",
      data: dati,
      options: {
        scales: {
          x: {
            grid: {
              display: false,
            },
  
            ticks: {
              color: "#a89ebf",
            },
          },
          y: {
            ticks: {
              color: "#a89ebf",
            },
            beginAtZero: true,
            grid: {
              display: false,
            },
          },
        },
        plugins: {
          legend: {
            position: 'top',
            labels: {
              color: "#a89ebf",
            },
          },
        },
      },
    };
  
    const config2 = {
      type: "bar",
      data: dati2,
      options: {
        scales: {
          x: {
            grid: {
              display: false,
            },
  
            ticks: {
              color: "#a89ebf",
            },
          },
          y: {
            ticks: {
              color: "#a89ebf",
            },
            beginAtZero: true,
            grid: {
              display: false,
            },
          },
        },
        plugins: {
          legend: {
            position: 'right',
            labels: {
              color: "#a89ebf",
            },
          },
        },
      },
    };
    let myChart = new Chart(
      document.getElementById("canvas-bar").getContext("2d"),
      config
    );
  
    const select = document.querySelector("#select-coin");
    let coinList = [];
    data.map((el) => {
      if (!coinList.includes(el.name)) {
        coinList.push(el.name);
        const option = document.createElement("option");
        option.innerHTML = el.name;
        option.setAttribute("value", el.name);
        select.append(option);
      }
    });
  
    select.addEventListener("change", selectCoin);
  
    function selectCoin() {
      function chartDestroyer(value) {
        let nome = selectCoin.map((el) => el.symbol);
        let price = selectCoin.map((el) => el.price_change_percentage_24h);
        myChart.data.labels = nome;
        myChart.data.datasets[0].data = price;
        myChart.destroy();
        myChart = new Chart(
          document.getElementById("canvas-bar").getContext("2d"),
          value
        );
        myChart.update();
      }
      let selectCoin = [];
      coin.map((el) => {
        if (el.name === select.value) {
          selectCoin.push(el);
        } else if (select.value !== "all") {
          chartDestroyer(config2);
        } else if (select.value === "all") {
          selectCoin.push(el);
          chartDestroyer(config);
        }
      });
    }
  }
  
  getData();
