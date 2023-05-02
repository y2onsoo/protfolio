document.getElementById("big1").onclick = function () {
  document.querySelector(".big-1").style.display = "block";
  document.getElementById("bg").classList.add("box-bg");
};
document.getElementById("big2").onclick = function () {
  document.querySelector(".big-2").style.display = "block";
  document.getElementById("bg").classList.add("box-bg");
};
document.getElementById("big3").onclick = function () {
  document.querySelector(".big-3").style.display = "block";
  document.getElementById("bg").classList.add("box-bg");
};
document.getElementById("big4").onclick = function () {
  document.querySelector(".big-4").style.display = "block";
  document.getElementById("bg").classList.add("box-bg");
};
document.getElementById("big5").onclick = function () {
  document.querySelector(".big-5").style.display = "block";
  document.getElementById("bg").classList.add("box-bg");
};
document.getElementById("big6").onclick = function () {
  document.querySelector(".big-6").style.display = "block";
  document.getElementById("bg").classList.add("box-bg");
};

function btn() {
  document.querySelector(".big-1").style.display = "none";
  document.querySelector(".big-2").style.display = "none";
  document.querySelector(".big-3").style.display = "none";
  document.querySelector(".big-4").style.display = "none";
  document.querySelector(".big-5").style.display = "none";
  document.querySelector(".big-6").style.display = "none";

  document.getElementById("bg").classList.remove("box-bg");
}


