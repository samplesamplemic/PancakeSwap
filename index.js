let lotteryValueAmount = 117285;


function displayCardValues(value){
    const lotteryValue = document.getElementById("lotteryValue");
    value = String(value);
    value = value.slice(0,3) + "," + value.slice(3);

    lotteryValue.textContent = value;
}


async function changeCardValues(){
    let amountToChange = Math.round((Math.random() + 1) * 10);

    for(let i = 0; i < amountToChange; i++){
        let numberChanger = await promiseChangeCardValue();
        displayCardValues(numberChanger);
    }
}

function promiseChangeCardValue(){
    return new Promise((resolve) =>{
        setTimeout(() =>{
            lotteryValueAmount += 1;
            resolve(lotteryValueAmount);
        },100);
    })
}

setInterval(changeCardValues,30000);
window.addEventListener("DOMContentLoaded", displayCardValues(lotteryValueAmount));