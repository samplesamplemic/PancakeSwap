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
    popup.classList.toggle("hidden");
    popup.classList.add("animation-popup-bg");
  });

const close = document
  .querySelector(".close-settings")
  .addEventListener("click", (e) => {
    popup.classList.add("hidden");
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
