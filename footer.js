const statsBtn = document.querySelector(".stats-btn");
const btnText = document.querySelector(".scoreboard-btn_text")
const firstStats = document.querySelectorAll(".heading-stats_container");
const secondaryStats = document.querySelectorAll(".secondary-stats");

statsBtn.addEventListener("click", function changeStats() {
    if (btnText.textContent === 'Syrup Pools') {
        btnText.textContent = 'Farms'
    } else if (btnText.textContent = 'Farms') {
        btnText.textContent = 'Syrup Pools'
    }
    firstStats.forEach(element => {
        if(element.classList.contains("hidden-table")) {
            firstStats.forEach(element => element.classList.remove('hidden-table'))
        } else firstStats.forEach(element => element.classList.add("hidden-table"))
    })

    secondaryStats.forEach(element => {
        if(element.classList.contains("hidden-table_secondary")) {
            secondaryStats.forEach(element => element.classList.remove('hidden-table_secondary'))
        } else secondaryStats.forEach(element => element.classList.add('hidden-table_secondary'))
    })
});