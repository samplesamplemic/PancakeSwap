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
const eye2 = document.querySelector(".eye2");

occhi.addEventListener("mouseover", (e) => {
  eye.style.animationDelay = "20ms";
  eye.style.animationDuration = "350ms";
  eye.style.animationIterationCount = 1;
  eye.style.animationName = "occhi";
  eye.style.transformOrigin = "center 60% 0px";
  eye2.style.animationDelay = "20ms";
  eye2.style.animationDuration = "350ms";
  eye2.style.animationIterationCount = 1;
  eye2.style.animationName = "occhi";
  eye2.style.transformOrigin = "center 60% 0px";
});

occhi.addEventListener("mouseout", (e) => {
  eye.style = null;
  eye2.style = null;
});

let portafoglio = document.querySelector(".connect-wallet-btn");

function media851(x) {
  if (x.matches) {
    portafoglio.innerHTML = "Connect";
  } else {
    portafoglio.innerHTML = "Connect Wallet";
  }
}

const width851 = window.matchMedia("(max-width: 851px)");
media851(width851);
width851.addEventListener("change", media851);
