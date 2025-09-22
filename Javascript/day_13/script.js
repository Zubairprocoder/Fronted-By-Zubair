console.log("Insertings & Removing Elements in js");
// let a = document.querySelector(".container").innerText;
// let a = document.querySelector(".container").outerHTML;
// let a = document.querySelector(".container").tagName;
// let a = document.querySelector(".container").nodeName;
// let a = (document.querySelector(".container").hidden = true);
// let a = (document.querySelector(".box").innerHTML =
// let a = (document.querySelector(".box").hasAttribute("style"))
// let a = document.querySelector(".box").getAttribute("style");
// let a = document.querySelector(".box").setAttribute("style","text-start");
// let a = document.querySelector(".box").attributes
// let a = document.querySelector(".box").removeAttribute("style");
let a = document.querySelector(".box").dataset;
let div = document.createElement("div");
div.innerHTML = "I have been inserted <b>by Zubaircoder </b>";
div.setAttribute("class", "created");
// document.querySelector(".container").append(div);
// document.querySelector(".container").before(div);
// document.querySelector(".container").after(div);
let cont = document.querySelector(".container");
cont.insertAdjacentHTML(
  "afterend",
  "<b>I am under the water.please help me here too much raining... iuoooo.</b>"
);
// console.log(document.querySelector(".box").remove());
// console.log(document.querySelector(".container").classList.add("zubair"));
// console.log(document.querySelector(".container").classList.remove("zubair"));
console.log(document.querySelector(".container").classList.toggle("zubair"));
console.log(a);
