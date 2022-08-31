const storages = document.querySelector(".storage");

const remover = document
  .querySelector(".close-storage")
  .addEventListener("click", (e) => {
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
animation(eye2)

let portafoglio = document.querySelector(".connect-wallet-btn");

function media851(x) {
  if (x.matches) {
    portafoglio.innerHTML = "Connect";
  } else {
    portafoglio.innerHTML = "Connect Wallet";
  }
}

const width851 = window
  .matchMedia("(max-width: 851px)")
  .addEventListener("change", media851);

media851(width851);
