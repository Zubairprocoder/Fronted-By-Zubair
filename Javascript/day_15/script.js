console.log("Events Event Bubbling setTimeout and SetInterval");
let button = document.getElementById("btn");
button.addEventListener("dblclick", () => {
  //   alert("I was clicked. yayy!!");
  document.querySelector(".box").innerHTML =
    "<b>Your are clicked was comes bye.</b>";
});
button.addEventListener("contextmenu", () => {
  //   alert("I was clicked. yayy!!");
  alert("Don't right clicked please ");
});
document.addEventListener("keydown", (e) => {
  console.log(e.key);
});
