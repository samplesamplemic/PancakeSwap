function lightMode() {
  let element = document.body;
  element.classList.toggle("light-mode")

  const switchers = document.querySelectorAll(".switcher")

  if (document.body.classList.contains("light-mode")) {
    document.querySelectorAll(".switch").forEach((element) => {
      element.classList.replace("dark", "light")
    for (e of switchers) {
      e.checked = false}
    });
  } else {
    document.querySelectorAll(".switch").forEach((element) => {
      element.classList.replace("light", "dark");
    })
    for (e of switchers) {
      e.checked = true}
  }
}
