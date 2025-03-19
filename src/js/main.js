var resume = document.querySelector(".landing-popup");
var resumeButtom = document.getElementById("#resume");

var openResume = function () {
  resume.classList.toggle("is-open");
};

resumeButtom.addEventListener("click", openResume);
resume.addEventListener("click", openResume);
