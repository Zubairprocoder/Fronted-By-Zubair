console.log("javascript Selectings & ids & classes and more in js");
// let boxes = document.getElementsByClassName("box");
// console.log(boxes);
// console.log((boxes[2].style.backgroundColor = "blue"));
document.getElementById("red").style.backgroundColor = "red";
// document.querySelector(".box").style.backgroundColor = "green";
// document.querySelectorAll(".box").forEach((e) => {
//   //   console.log(e);
//   e.style.backgroundColor = "violet";
// });
// console.log(document.getElementsByTagName("div"));
// console.log(document.getElementsByTagName("p"));
let e = document.getElementsByTagName("div");
console.log(e);
// console.log(e[4].matches("#red"));
// console.log(e[3].matches("#red"));
// console.log(e[3].closest("html"));
// console.log(document.querySelector(".container").contains(e[1]));
console.log(
  document.querySelector(".container").contains(document.querySelector("body"))
);
