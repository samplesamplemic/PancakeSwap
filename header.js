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

const close = document
  .querySelector(".close-settings, .overlay-bg")
  .addEventListener("click", (e) => {
    e.stopImmediatePropagation();
    popup.classList.remove("animation-popup-bg");
    popup.classList.add("animation-popup-bg-close");
  });

let occhi = document.querySelector(".logo");
const eye = document.querySelector(".eye");

occhi.addEventListener("mouseover", (e) => {
  eye.style.animationDelay = "20ms";
  eye.style.animationDuration = "350ms";
  eye.style.animationIterationCount = 1;
  eye.style.animationName = "occhi";
  eye.style.transformOrigin = "center 60% 0px";
});

occhi.addEventListener("mouseout", (e) => {
  eye.style = null;
});

let portafoglio = document.querySelector(".connect-wallet-btn");
let logodesktop = document.querySelector(".logo-desktop");
let logo966 = document.querySelector(".logo-966")

function media966(x) {
  if (x.matches) {
    portafoglio.innerHTML = "Connect";
  } else {
    portafoglio.innerHTML = "Connect Wallet";
  }
}

const width966 = window.matchMedia("(max-width: 966px)")
media966(width966)
width966.addEventListener('change', media966)
