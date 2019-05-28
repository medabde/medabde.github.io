var element = document.getElementById("animatedModal");
var p1 = document.getElementById("demo1-p");
var p2 = document.getElementById("demo2-p");
var p3 = document.getElementById("demo3-p");
var demo1 = document.getElementById("demo01");
var demo2 = document.getElementById("demo02");
var demo3 = document.getElementById("demo03");

demo1.addEventListener("click", function() {
  element.scrollTop = 0;

  p1.style.display = "inline";
  p2.style.display = "none";
  p3.style.display = "none";
});

demo2.addEventListener("click", function() {
  element.scrollTop = 0;

  p1.style.display = "none";
  p2.style.display = "inline";
  p3.style.display = "none";
});

demo3.addEventListener("click", function() {
  element.scrollTop = 0;

  p1.style.display = "none";
  p2.style.display = "none";
  p3.style.display = "inline";
});
