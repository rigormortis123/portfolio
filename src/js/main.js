var resume = document.querySelector(".index-popup");
var resumeButtom = document.getElementById("#resume");
var overlay = document.querySelector(".l-overlay");

var openResume = function () {
  resume.classList.toggle("is-open");
  overlay.classList.toggle("is-active");
};

resumeButtom.addEventListener("click", openResume);
resume.addEventListener("click", openResume);
