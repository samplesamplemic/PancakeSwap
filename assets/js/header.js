const storages = document.querySelector(".storage");

window.addEventListener("load", (event) => {
  if (localStorage.getItem("banner") === "hidden") {
    storages.classList.add("hidden");
  } else {
    storages.classList.remove("hidden");
  }
});

const remover = document
  .querySelector(".close-storage")
  .addEventListener("click", (e) => {
    localStorage.setItem("banner", "hidden");
    storages.classList.add("hidden");
  });

const popup = document.querySelector(".popup-bg");

const ingranaggio = document
  .querySelector(".bottone-ingranaggio")
  .addEventListener("click", (e) => {
    popup.classList.remove("hidden");
    popup.classList.add("animation-popup-bg");
    popup.classList.remove("animation-popup-bg-close");
  });

const close = document.querySelectorAll(".closed");
for (let i = 0; i < close.length; i++) {
  close[i].addEventListener("click", (e) => {
    popup.classList.remove("animation-popup-bg");
    popup.classList.add("animation-popup-bg-close");
  });
}

const occhi = document.querySelector(".logo");
const eye = document.querySelector(".eye");
const eye2 = document.querySelector(".eye2");

function animation(value) {
  occhi.addEventListener("mouseover", (e) => {
    value.style.animationDelay = "20ms";
    value.style.animationDuration = "350ms";
    value.style.animationIterationCount = 1;
    value.style.animationName = "occhi";
    value.style.transformOrigin = "center 60% 0px";
  });
  occhi.addEventListener("mouseout", (e) => {
    value.style = null;
    value.style = null;
  });
}
animation(eye);
animation(eye2);

let portafoglio = document.querySelector(".connect-wallet-btn");

// function media851(x) {
//   if (x) {
//     portafoglio.innerHTML = "Connect";
//   } else {
//     portafoglio.innerHTML = "Connect Wallet";
//   }
// }
function load851() {
  if (window.innerWidth < 851) {
    portafoglio.innerHTML = "Connect";
  } else {
    portafoglio.innerHTML = "Connect Wallet";
  }
}
// const width851 = window
//   .matchMedia("(max-width: 851px)")
//   .addEventListener("change", media851);

load851();
// media851(width851);

let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".nav-container").style.top = "0";
  } else {
    document.querySelector(".nav-container").style.top = "-126px";
  }
  prevScrollpos = currentScrollPos;
};

const patinamobile = document.querySelector(".overlay-mobile");
const tradecontent = document.querySelector(".content-trade");
const btnmobile = document.querySelectorAll(".mobile-btn");

patinamobile.addEventListener("click", () => {
  patinamobile.style.display = "none";
});

for (let i = 0; i < btnmobile.length; i++) {
  btnmobile[i].addEventListener("click", (e) => {
    patinamobile.style.display = "block";
  });
}
