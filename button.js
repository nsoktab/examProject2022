const btn = document.querySelector(".button");

btn.addEventListener("transitionend", function afterTransition() {
  window.location.replace("index.html");
});

btn.addEventListener("click", function onClick() {
  btn.classList.toggle("active");
});
